# 3-Tier Application Deployment Capstone Project

## Project Overview

This capstone project focuses on implementing a complete CI/CD pipeline and GitOps workflow for a provided three-tier application. You will demonstrate your understanding of containerization, Kubernetes, GitOps, and continuous deployment methodologies.

## Provided Application

You will be working with a pre-built task management application that includes:
- React frontend
- Node.js/Express backend
- PostgreSQL database

The source code and basic Docker configurations are provided, allowing you to focus on the DevOps implementation aspects.

## Learning Objectives

By completing this project, you will:
1. Gain hands-on experience with Kubernetes cluster management
2. Implement GitOps practices using ArgoCD
3. Create and manage Helm charts for application deployment
4. Set up automated CI/CD pipelines with GitLab
5. Apply best practices in container orchestration and deployment

## Project Requirements

### 1. Local Kubernetes Environment (25%)
- Set up a local Kubernetes cluster using your choice of:
  * Minikube
  * kind (Kubernetes in Docker)
  * k3d
- Create necessary namespaces
- Configure basic ingress

### 2. Helm Chart Development (25%)
- Create basic Helm charts for the application
- Set up values for configuration
- Handle basic secrets

### 3. GitLab CI Pipeline (25%)
- Set up a basic CI/CD pipeline
- Configure container image building
- Implement deployment stages

### 4. ArgoCD Implementation (25%)
- Install ArgoCD
- Configure basic GitOps workflow
- Set up application synchronization

## Getting Started

1. Clone the provided application repository
2. Test the application locally using docker-compose:
```bash
docker-compose up
```
3. Review the application architecture and components
4. Begin implementing the DevOps requirements

## Two-Week Timeline

### Week 1: Foundation
- Days 1-2: Set up local Kubernetes cluster
  * Choose and install your preferred local Kubernetes solution
  * Verify cluster functionality
  * Set up basic networking

- Days 3-4: Container and Helm Setup
  * Test provided Dockerfiles
  * Create initial Helm charts
  * Test basic deployments

- Day 5: Documentation and Review
  * Document progress
  * Review and troubleshoot issues
  * Plan next week's tasks

### Week 2: Implementation
- Days 1-2: GitLab CI Setup
  * Configure GitLab repository
  * Set up CI/CD pipeline
  * Test build and push stages

- Days 3-4: ArgoCD and GitOps
  * Install and configure ArgoCD
  * Set up GitOps workflow
  * Test automatic deployments

- Day 5: Final Testing and Documentation
  * End-to-end testing
  * Complete documentation
  * Prepare presentation

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

## Optional Bonus Points

1. **Security** (+5%)
   - Basic secret management
   - Simple RBAC setup

2. **Advanced Features** (+5%)
   - Health checks
   - Basic rollback strategy

3. **Monitoring** (+5%)
   - Basic health monitoring
   - Simple logging setup

## Deliverables

1. **GitLab Repository**
   - Application code
   - Helm charts
   - CI/CD configuration
   - Documentation

2. **Documentation**
   - Setup instructions
   - Architecture diagram
   - Deployment process

3. **Presentation**
   - Live demonstration
   - Implementation overview
   - Lessons learned

## Support Resources

### Training Materials
Refer to our classroom training sessions and materials on:
1. Container fundamentals and Docker
2. Kubernetes cluster management
3. Helm chart development
4. GitLab CI/CD pipelines
5. GitOps with ArgoCD

### Documentation
- Project documentation:
  * Application architecture
  * API documentation
  * Configuration guides

- Official documentation (for additional reference):
  * [Kubernetes](https://kubernetes.io/docs/)
  * [Helm](https://helm.sh/docs/)
  * [GitLab CI](https://docs.gitlab.com/ee/ci/)
  * [ArgoCD](https://argo-cd.readthedocs.io/)

Remember:
- Focus on implementing DevOps practices and tools
- The application code is provided and working
- Your task is to create a robust deployment pipeline and GitOps workflow
- Review the classroom materials and ask questions during lab sessions
