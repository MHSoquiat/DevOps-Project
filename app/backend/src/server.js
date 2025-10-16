require('dd-trace').init({
  service: 'task-app-backend',
  env: process.env.NODE_ENV || 'production',
  hostname: 'datadog-agent.datadog.svc.cluster.local', // The Kubernetes service name of your Datadog agent
  port: 8126, // Default Datadog APM port
  logInjection: true, // Enables trace logs correlation
  runtimeMetrics: true, // Enables runtime metrics
});

const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const { StatsD } = require('hot-shots');
const statsd = new StatsD({
  host: process.env.DD_AGENT_HOST || 'datadog-agent.datadog.svc.cluster.local',
  port: 8125, // Default DogStatsD UDP port
  globalTags: { service: 'task-app-backend', env: process.env.NODE_ENV || 'production' },
});

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database configuration
const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'taskdb',
  password: process.env.DB_PASSWORD || 'postgres',
  port: process.env.DB_PORT || 5432,
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  statsd.increment('health.checks');
  res.json({ status: 'healthy' });
});

// Get all tasks
app.get('/api/tasks', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM tasks ORDER BY created_at DESC'
    );
    statsd.increment('tasks.fetched');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching tasks:', err);
    statsd.increment('tasks.errors');
    res.status(500).json({ error: 'Failed to fetch jobs' });
  }
});

// Create a task
app.post('/api/tasks', async (req, res) => {
  const { title, description } = req.body;

  if (!title) {
    return res.status(400).json({ error: 'Title is necessary' });
  }

  try {
    const result = await pool.query(
      'INSERT INTO tasks (title, description) VALUES ($1, $2) RETURNING *',
      [title, description]
    );
    statsd.increment('tasks.created');
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error creating task:', err);
    statsd.increment('tasks.errors');
    res.status(500).json({ error: 'Failed to create task' });
  }
});

// Update a task
app.put('/api/tasks/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description, status } = req.body;

  try {
    const result = await pool.query(
      'UPDATE tasks SET title = COALESCE($1, title), description = COALESCE($2, description), status = COALESCE($3, status), updated_at = CURRENT_TIMESTAMP WHERE id = $4 RETURNING *',
      [title, description, status, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Task not found' });
    }

    statsd.increment('tasks.updated');
    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error updating task:', err);
    statsd.increment('tasks.errors');
    res.status(500).json({ error: 'Failed to update task' });
  }
});

// Delete a task
app.delete('/api/tasks/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      'DELETE FROM tasks WHERE id = $1 RETURNING *',
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Task not found' });
    }

    statsd.increment('tasks.deleted');
    res.json({ message: 'Task deleted successfully' });
  } catch (err) {
    console.error('Error deleting task:', err);
    statsd.increment('tasks.errors');
    res.status(500).json({ error: 'Failed to delete task' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  statsd.increment('server.errors');
  res.status(500).json({ error: 'FUCK YOU SOMETHING IS HAPPENING WRONG!' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  statsd.gauge('server.start', 1);
});

module.exports = app;
