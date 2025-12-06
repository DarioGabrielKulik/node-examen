output "url" {
  description = "URL de la aplicación"
  value       = google_cloud_run_v2_service.app.uri
}