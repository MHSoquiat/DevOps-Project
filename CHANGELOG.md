# Changelog

All notable changes and updates to this repository will be documented in this file.

## [1.4.0] - 2025-10-7

### Added
- **application.yaml**: Configuration for ArgoCD

## [1.3.0] - 2025-10-5

### Configured
- **.gitlab-ci.yml**: Added configuration regarding updating tag values in helm charts. 

## [1.2.0] - 2025-10-1

### Added 
- **Docker Images**: Moved the frontend and backend images from docker registry to gitlab registry

### Fixed
- **frontend/src/App.js**: Fixed fetch task logic for app rendering

## [1.1.0] - 2025-09-24

### Added
- **task-app**: Started with the project by creating a helm chart in this folder
- **values.yaml**: Contains the values used by the helm charts, this is not changed and is only derived from the original repository
- **Chart.yaml**: Contains the original values defined by the documentation from the project
- **templates**: Containes the helm templates for frontend, backend, and database. All of the configurations here are either made or configured by Marc Hendri Soquiat. However, despite successful deployment in helm, I was unable to access the frontend and backend on my local device.
- **CHANGELOG.md**: To keep track of the changes on this project. 
- **.gitlab-ci.yml**: GitLab CI/CD Pipeline as defined in the original project repository

## [1.0.0] - 2025-09-18

### Started
- **dev**: This repository is cloned as a project for my DevOps Training. 
