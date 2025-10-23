# Setting Up GitLab CI/CD

This guide will help you execute the automated pipeline that builds and deploys our application. 

## Prerequisites

1. GitLab.com Account
   - Sign up at https://gitlab.com
   - Free tier has everything we need
   - No credit card required

2. Git on Your Computer
   - Check with: `git --version`
   - Install from: git-scm.com

3. Container Registry Access
   - GitLab.com provides this free
   - We'll use it to store our containers

## Setting Up GitLab

### 1. Create Repository
1. Go to GitLab.com and sign in
2. Click "New project" > "Create blank project"
3. Fill in:
   - Project name
   - Set visibility to Public or Private
   - Initialize with README (optional)
4. Push your code:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

### 2. Configure Variables
In GitLab > Settings > CI/CD > Variables:
```
CI_REGISTRY_USER: Your registry username
CI_REGISTRY_PASSWORD: Your registry password
KUBE_CONFIG: Your base64 encoded kubeconfig
```

### 3. Enable GitLab Secrets
In your command prompt, run the following command:
```bash
kubectl create secret docker-registry gitlab-registry-secret --docker-server=registry.gitlab.com --docker-username=<YOUR-GIT-USERNAME> --docker-password=<YOUR-GITLAB-PAT> --docker-email=<YOUR-GITLAB-EMAIL> -n task-app
```

## Testing the Pipeline

### 1. Make a Change
```bash
# Edit a file
echo "// test change" >> frontend/src/App.js

# Commit and push
git add .
git commit -m "Test CI pipeline"
git push
```

### 2. Watch Pipeline Run
1. Go to GitLab > CI/CD > Pipelines
2. Click on the latest pipeline
3. Watch stages execute

## Common Issues

### 1. Pipeline Failures
- Check job logs
- Verify variables
- Test scripts locally

### 2. Docker Build Issues
- Check Dockerfile
- Verify registry access
- Check image names

### 3. Deploy Issues
- Verify KUBE_CONFIG
- Check manifest files
- Test kubectl locally

## GitLab CI Features

### 1. Caching
```yaml
cache:
  paths:
    - node_modules/
```

### 2. Artifacts
```yaml
test:
  artifacts:
    paths:
      - coverage/
```

### 3. Dependencies
```yaml
deploy:
  dependencies:
    - build
```

## Useful Commands

```bash
# Docker (for local testing)
docker build -t name .              # Build image
docker push name                    # Push image
docker run name                     # Run container

# Kubernetes
kubectl apply -f file.yaml          # Apply manifest
kubectl get pods                    # Check pods
kubectl logs pod-name              # View logs
```

Note: You don't need to worry about GitLab runners! GitLab.com provides shared runners that will automatically run your pipeline. This is one of the benefits of using GitLab.com - the infrastructure is managed for you.

## Next Steps

1. Deploy using ArgoCD
2. Implement Observability
