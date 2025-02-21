# DevOps Capstone Project: 3-Tier Task Management Application

This repository contains a task management application and its complete DevOps implementation. The project demonstrates modern DevOps practices including containerization, Kubernetes orchestration, CI/CD pipelines, and GitOps workflows.

## Project Overview

### Application Architecture
- **Frontend**: React-based UI for task management
- **Backend**: Node.js/Express REST API
- **Database**: PostgreSQL for data persistence

### DevOps Implementation
- Local Kubernetes deployment
- Helm chart packaging
- GitLab CI/CD pipeline
- GitOps with ArgoCD

## Quick Start

1. **Local Development**
```bash
cd app
docker-compose up
```
Access the application at http://localhost:80

2. **Kubernetes Deployment**
- Follow the guides in the [docs](./docs) directory for:
  - Local Kubernetes setup
  - Helm chart deployment
  - CI/CD pipeline configuration
  - ArgoCD implementation

## Project Structure

```
.
├── app/                    # Application source code
│   ├── frontend/          # React frontend
│   ├── backend/           # Node.js API
│   └── database/          # PostgreSQL setup
│
└── docs/                  # Implementation guides
    ├── 01-local-setup.md    # Kubernetes setup
    ├── 02-helm-charts.md    # Helm configuration
    ├── 03-gitlab-ci.md      # CI/CD pipeline
    ├── 04-argocd-setup.md   # ArgoCD setup
    └── 05-deployment.md     # Deployment guide
```

## Implementation Requirements

### 1. Local Kubernetes Environment (25%)
- Local cluster setup (Minikube/kind/k3d)
- Namespace configuration
- Ingress setup

### 2. Helm Chart Development (25%)
- Application Helm charts
- Configuration management
- Secret handling

### 3. GitLab CI Pipeline (25%)
- Automated build pipeline
- Container image management
- Deployment automation

### 4. ArgoCD Implementation (25%)
- GitOps workflow
- Application synchronization
- Deployment management

## Documentation

- [Application Guide](./app/README.md) - Application setup and development
- [Quick Start Guide](./app/QUICKSTART.md) - Getting started quickly
- [Implementation Guide](./docs/README.md) - DevOps implementation steps

## Timeline

### Week 1: Foundation
- Days 1-2: Local Kubernetes setup
- Days 3-4: Helm chart creation
- Day 5: Review and documentation

### Week 2: Implementation
- Days 1-2: GitLab CI setup
- Days 3-4: ArgoCD configuration
- Day 5: Final testing

## Evaluation Criteria

### Basic Implementation (70-79%)
- Working local cluster
- Basic Helm deployment
- Simple CI pipeline
- ArgoCD connection

### Proficient Implementation (80-89%)
- Well-organized resources
- Environment separation
- Working CI/CD pipeline
- Basic monitoring

### Advanced Implementation (90-100%)
- Multiple environments
- Automated testing
- Automated sync policies
- Comprehensive documentation

## Optional Features

1. **Security** (+5%)
   - Secret management
   - RBAC configuration

2. **Advanced Features** (+5%)
   - Health monitoring
   - Rollback strategies

3. **Monitoring** (+5%)
   - Health checks
   - Logging setup

## Support

Need assistance?
1. Review the detailed documentation in the [docs](./docs) directory
2. Check error messages and logs
3. Participate in lab sessions
4. Refer to official documentation:
   - [Kubernetes](https://kubernetes.io/docs/)
   - [Helm](https://helm.sh/docs/)
   - [GitLab CI](https://docs.gitlab.com/ee/ci/)
   - [ArgoCD](https://argo-cd.readthedocs.io/)
