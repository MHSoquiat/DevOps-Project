# DevOps Implementation Guide

Welcome! This guide will help you deploy the task management application using DevOps practices.

## Before You Start

1. Make sure you can run the application locally:
   ```bash
   cd app
   docker compose up
   ```

2. Test that it works:
   - Open http://localhost:80
   - Create a task
   - Update its status
   - Delete the task

## What You'll Be Doing

You'll implement DevOps practices for the application:

1. **Local Kubernetes Setup**
   - Choose a local Kubernetes solution
   - Set up your cluster
   - Learn basic Kubernetes concepts

2. **Helm Chart Creation**
   - Package the application
   - Configure deployments
   - Manage different environments

3. **CI/CD Pipeline**
   - Set up GitLab CI
   - Build containers
   - Automate deployments

4. **GitOps with ArgoCD**
   - Install ArgoCD
   - Configure applications
   - Implement GitOps workflow

## Step-by-Step Guides

1. [Local Development Setup](./01-local-setup.md)
   - Setting up your Kubernetes cluster
   - Basic concepts and commands
   - First deployment

2. [Helm Chart Creation](./02-helm-charts.md)
   - Creating your first chart
   - Converting our app
   - Testing deployments

3. [GitLab CI Setup](./03-gitlab-ci.md)
   - Pipeline configuration
   - Building images
   - Automated deployment

4. [ArgoCD Setup](./04-argocd-setup.md)
   - Installing ArgoCD
   - Application setup
   - GitOps workflow

5. [Deployment Guide](./05-deployment.md)
   - Putting it all together
   - Testing everything
   - Troubleshooting

## Getting Help

If you get stuck:
1. Check the app's documentation
2. Review error messages
3. Ask during lab sessions

## Timeline

### Week 1: Foundation
- Days 1-2: Local Kubernetes
- Days 3-4: Helm Charts
- Day 5: Review and fixes

### Week 2: Implementation
- Days 1-2: GitLab CI
- Days 3-4: ArgoCD
- Day 5: Final testing

Remember:
- Take it step by step
- Test each part
- Ask questions when needed
- Keep it simple!
