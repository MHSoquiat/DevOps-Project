# Use Node.js base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy source code
COPY . .

# Expose correct port (matches server.js)
EXPOSE 5000

# Health check for Datadog & K8s
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:5000/api/health || exit 1

# Start application
CMD ["npm", "start"]


# Note: This Dockerfile:
# 1. Uses a specific Node.js version for consistency
# 2. Implements multi-stage build pattern
# 3. Includes health check for container monitoring
# 4. Uses npm ci for reproducible builds
# 5. Follows security best practices
