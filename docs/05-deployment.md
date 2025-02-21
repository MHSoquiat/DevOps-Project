# Putting It All Together

This guide will help you deploy the complete task management application using everything we've learned.

## Overview

We'll combine all the pieces:
1. Kubernetes cluster running
2. Helm charts ready
3. GitLab CI pipeline set up
4. ArgoCD watching our repo

## Step-by-Step Deployment

### 1. Verify Prerequisites

```bash
# Check cluster
kubectl cluster-info

# Check Helm
helm list

# Check ArgoCD
argocd app list
```

### 2. Prepare Repository

Your repo should look like:
```
.
├── .gitlab-ci.yml          # CI/CD pipeline
├── helm/                   # Helm charts
│   └── task-app/
├── kubernetes/            # Raw K8s manifests
└── argocd/               # ArgoCD config
```

### 3. Deploy Application

```bash
# Create namespace
kubectl create namespace task-app

# Deploy with ArgoCD
kubectl apply -f argocd/application.yaml
```

## Testing Everything

### 1. Check Components

```bash
# Check pods
kubectl get pods -n task-app

# Check services
kubectl get svc -n task-app

# Check ingress
kubectl get ingress -n task-app
```

### 2. Test Frontend
```bash
# Port forward frontend service
kubectl port-forward svc/frontend -n task-app 8080:80
```
Visit http://localhost:8080

### 3. Test Backend
```bash
# Port forward backend service
kubectl port-forward svc/backend -n task-app 3000:3000

# Test API
curl http://localhost:3000/health
```

## Making Changes

### 1. Update Frontend

1. Edit frontend code
2. Commit and push
3. Watch GitLab pipeline
4. Check ArgoCD sync

### 2. Update Backend

1. Edit backend code
2. Commit and push
3. Watch GitLab pipeline
4. Check ArgoCD sync

### 3. Update Configuration

1. Edit Helm values
2. Commit and push
3. Watch ArgoCD sync

## Verification Checklist

### 1. Infrastructure
- [ ] Kubernetes cluster running
- [ ] Ingress controller active
- [ ] Persistent volumes available

### 2. Applications
- [ ] Frontend pods running
- [ ] Backend pods running
- [ ] Database running

### 3. Networking
- [ ] Services created
- [ ] Ingress working
- [ ] Internal DNS working

### 4. GitOps
- [ ] GitLab pipeline passing
- [ ] ArgoCD connected
- [ ] Auto-sync working

## Troubleshooting Guide

### 1. Pod Issues
```bash
# Check pod status
kubectl get pods -n task-app

# Check pod logs
kubectl logs <pod-name> -n task-app

# Describe pod
kubectl describe pod <pod-name> -n task-app
```

### 2. Service Issues
```bash
# Check endpoints
kubectl get endpoints -n task-app

# Test service DNS
kubectl run curl --image=curlimages/curl -i --rm --restart=Never -- \
  curl frontend:80
```

### 3. Pipeline Issues
```bash
# Check GitLab pipeline
gitlab-ci-local .gitlab-ci.yml

# Verify variables
gitlab variables list
```

### 4. ArgoCD Issues
```bash
# Check app status
argocd app get task-app

# Check sync
argocd app sync task-app

# Check logs
kubectl logs deployment/argocd-application-controller -n argocd
```

## Common Issues

### 1. Application Not Accessible
- Check ingress configuration
- Verify service endpoints
- Check pod health

### 2. Database Connection
- Verify credentials
- Check network policies
- Test connection string

### 3. Changes Not Deploying
- Check GitLab pipeline
- Verify ArgoCD status
- Review Git repository

## Quick Commands

```bash
# Health Checks
kubectl get pods -n task-app     # Check pods
kubectl top pods -n task-app     # Resource usage
kubectl logs -f <pod> -n task-app # Live logs

# Debugging
kubectl exec -it <pod> -n task-app -- sh  # Shell into pod
kubectl describe pod <pod> -n task-app    # Pod details
kubectl get events -n task-app            # Cluster events

# Cleanup
kubectl delete namespace task-app         # Remove everything
helm uninstall task-app                  # Remove Helm release
argocd app delete task-app               # Remove from ArgoCD
```

## Next Steps

1. Add monitoring
2. Set up logging
3. Configure backups
4. Implement scaling

## Getting Help

If you get stuck:
1. Check component logs
2. Review configurations

Remember:
- Test one component at a time
- Check logs for errors
- Verify configurations
- Keep it simple!
