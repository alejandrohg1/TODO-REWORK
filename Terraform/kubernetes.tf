terraform {
  required_providers {
    kubernetes = {
      source = "hashicorp/kubernetes"
    }
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 3.0.1"
    }
  }
}


variable "host" {
  type = string
}

variable "client_certificate" {
  type = string
}

variable "client_key" {
  type = string
}

variable "cluster_ca_certificate" {
  type = string
}

provider "kubernetes" {
  host = "https://127.0.0.1:52140"

  client_certificate     = base64decode(var.client_certificate)
  client_key             = base64decode(var.client_key)
  cluster_ca_certificate = base64decode(var.cluster_ca_certificate)
}

provider "docker" {
  host    = "npipe:////.//pipe//docker_engine"
}

resource "docker_image" "server" {
  name         = "alejandrohg1/server-repo:latest" 
  keep_locally = true
}

resource "docker_container" "server" {
  image = docker_image.server.image_id
  name  = "server-container"
  ports {
    internal = 5001
    external = 5001
  }
}

resource "kubernetes_deployment" "server" {
  metadata {
    name = "server"
    labels = {
      App = "server-deploy"
    }
  }

  spec {
    replicas = 2
    selector {
      match_labels = {
        App = "server-deploy"
      }
    }
    template {
      metadata {
        labels = {
          App = "server-deploy"
        }
      }
      spec {
        container {
          image = "alejandrohg1/server-repo:latest"
          name  = "server-deploy"

          port {
            container_port = 5001
          }

          resources {
            limits = {
              cpu    = "800m"
              memory = "512Mi"
            }
            requests = {
              cpu    = "500m"
              memory = "258Mi"
            }
          }
        }
      }
    }
  }
}

resource "kubernetes_service" "server" {
  metadata {
    name = "server-deploy"
  }
  spec {
    selector = {
      App = kubernetes_deployment.server.spec.0.template.0.metadata[0].labels.App
    }
    port {
      node_port   = 30200
      port        = 5001
      target_port = 5001
    }

    type = "NodePort"
  }
}
