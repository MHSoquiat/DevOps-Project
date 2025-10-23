# Installing using Helm

This guide will help you execute the Helm chart for the task management application. We'll break it down into simple steps.

## What is Helm and Why Do We Need It?

Helm helps us manage Kubernetes applications by:
1. Templating repetitive YAML files
2. Packaging everything together
3. Making updates easier
4. Managing different environments

## Before We Start

1. Working Kubernetes cluster (from previous guide)
2. Helm installed on your computer:
```bash
# macOS
brew install helm

# Windows
choco install kubernetes-helm
```
3. Clone the Manifest repository
```bash
git clone https://github.com/MHSoquiat/Manifest-Repo.git
```
4. Create a new GitLab Repository
5. Update the remote origin:
```bash
git remote set-url origin <YOUR-GITLAB-REPO-URL>
```
6. Push to GitLab:
```bash
git push -u origin main
```

## Testing Your Chart

> We will first test the task-app Helm Chart

### 1. Check Syntax
```bash
# Change Directory
cd task-app

# Validate chart
helm lint .

# See what will be created
helm template .
```

### 2. Install Chart
```bash
# Create namespace
kubectl create namespace task-app

# Install chart
helm install my-release . -n task-app

# Check status
helm list -n task-app
```

### 3. Verify Deployment
```bash
# Check pods
kubectl get pods -n task-app

# Check services
kubectl get svc -n task-app

# Access the application
kubectl port-forward svc/frontend 3000:3000 -n task-app  # Frontend
kubectl port-forward svc/backend 3001:3000 -n task-app   # Backend

# Visit in your browser:
# Frontend: http://localhost:3000
# Backend API: http://localhost:3001
```

## Helm Commands Cheat Sheet

```bash
# Chart Management
helm create chart-name    # Create new chart
helm package .           # Package chart
helm lint .             # Check syntax

# Installation
helm install name .     # Install chart
helm upgrade name .     # Update release
helm rollback name 1    # Rollback release

# Information
helm list              # List releases
helm status name       # Release status
helm history name      # Release history

# Debugging
helm template .        # Validate templates
helm get manifest name # See what's installed
helm get values name   # See configs
```

## Next Steps

1. Configure GitLab CI
2. Deploy using ArgoCD
3. Set up Datadog Observability
4. Test full application

