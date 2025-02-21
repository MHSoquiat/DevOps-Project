# Setting Up GitLab CI/CD

This guide will help you create a CI/CD pipeline for the task management application.

## What is CI/CD?

CI/CD helps automate your development workflow:
- CI (Continuous Integration): Build and test code automatically
- CD (Continuous Delivery): Deploy code automatically
- Triggered by git pushes

## Prerequisites

1. GitLab account (free tier is fine)
2. Git installed locally
3. Docker registry access (GitLab provides one)

## Basic Pipeline

### 1. Create .gitlab-ci.yml
```yaml
# Basic pipeline structure
stages:
  - test
  - build
  - deploy

variables:
  DOCKER_REGISTRY: ${CI_REGISTRY}
```

### 2. Add Test Stage
```yaml
frontend-test:
  stage: test
  image: node:16-alpine
  script:
    - cd frontend
    - npm install
    - npm test
  only:
    changes:
      - frontend/**/*

backend-test:
  stage: test
  image: node:16-alpine
  script:
    - cd backend
    - npm install
    - npm test
  only:
    changes:
      - backend/**/*
```

### 3. Add Build Stage
```yaml
build-frontend:
  stage: build
  image: docker:20.10.16
  services:
    - docker:20.10.16-dind
  script:
    - docker login -u $CI_REGISTRY_USER -p $CI_REGISTRY_PASSWORD $CI_REGISTRY
    - docker build -t $CI_REGISTRY_IMAGE/frontend:$CI_COMMIT_SHA frontend/
    - docker push $CI_REGISTRY_IMAGE/frontend:$CI_COMMIT_SHA
  only:
    changes:
      - frontend/**/*
```

### 4. Add Deploy Stage
```yaml
deploy-dev:
  stage: deploy
  script:
    - kubectl apply -f kubernetes/
  environment:
    name: development
  only:
    - develop
```

## Setting Up GitLab

### 1. Create Repository
1. Go to GitLab
2. Create New Project
3. Push your code:
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

## Pipeline Examples

### Basic Pipeline
```yaml
stages:
  - test
  - build

test-app:
  stage: test
  script:
    - npm install
    - npm test

build-app:
  stage: build
  script:
    - docker build -t myapp .
```

### Multi-Stage Pipeline
```yaml
stages:
  - test
  - build
  - deploy

include:
  - template: Security/SAST.gitlab-ci.yml

variables:
  DOCKER_REGISTRY: ${CI_REGISTRY}
  DOCKER_IMAGE: ${CI_REGISTRY_IMAGE}:${CI_COMMIT_SHA}

test:
  stage: test
  script:
    - npm install
    - npm test

build:
  stage: build
  script:
    - docker build -t $DOCKER_IMAGE .
    - docker push $DOCKER_IMAGE

deploy:
  stage: deploy
  script:
    - kubectl apply -f k8s/
```

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

## Commands Cheat Sheet

```bash
# GitLab CI
gitlab-runner exec docker job-name  # Test job locally
gitlab-runner list                  # List runners
gitlab-runner verify                # Check runner status

# Docker
docker build -t name .              # Build image
docker push name                    # Push image
docker run name                     # Run container

# Kubernetes
kubectl apply -f file.yaml          # Apply manifest
kubectl get pods                    # Check pods
kubectl logs pod-name              # View logs
```

## Next Steps

1. Add more stages
2. Implement testing
3. Add security scanning
4. Configure environments

## Getting Help

If you get stuck:
1. Check job logs
2. Review pipeline syntax
3. Ask during lab sessions

Remember:
- Start with basic pipeline
- Test locally first
- Add features gradually
- Keep it simple!
