terraform {
  required_version = ">= 1.0"
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "~> 5.0"
    }
  }
}

provider "google" {
  project = var.project_id
  region  = var.region
}

# Cloud Run Service
resource "google_cloud_run_v2_service" "app" {
  name     = "mi-app-node"
  location = "us-central1"

  template {
    scaling {
      min_instance_count = 0
      max_instance_count = 1
    }

    containers {
      image = "us-central1-docker.pkg.dev/${var.project_id}/docker-repo/mi-app-node:latest"

      env {
        name  = "FIREBASE_PROJECT_ID"
        value = var.project_id
      }
    }
  }
}

# Permitir acceso público
resource "google_cloud_run_v2_service_iam_member" "public" {
  name     = google_cloud_run_v2_service.app.name
  location = google_cloud_run_v2_service.app.location
  role     = "roles/run.invoker"
  member   = "allUsers"
}

# Firestore Database
resource "google_firestore_database" "database" {
  project     = var.project_id
  name        = "(default)"
  location_id = "us-central"
  type        = "FIRESTORE_NATIVE"
}