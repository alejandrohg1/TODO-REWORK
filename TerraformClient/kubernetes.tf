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

resource "docker_image" "myapp" {
  name         = "alejandrohg1/client-repo:latest" 
  keep_locally = true
}

resource "docker_container" "myapp" {
  image = docker_image.myapp.image_id
  name  = "tutorial"
  ports {
    internal = 5173
    external = 5173
  }
}

resource "kubernetes_deployment" "myapp" {
  metadata {
    name = "myapp"
    labels = {
      App = "myapp-deploy"
    }
  }

  spec {
    replicas = 2
    selector {
      match_labels = {
        App = "myapp-deploy"
      }
    }
    template {
      metadata {
        labels = {
          App = "myapp-deploy"
        }
      }
      spec {
        container {
          image = "alejandrohg1/client-repo:latest"
          name  = "myapp-deploy"

          port {
            container_port = 5173
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

resource "kubernetes_service" "myapp" {
  metadata {
    name = "myapp-deploy"
  }
  spec {
    selector = {
      App = kubernetes_deployment.myapp.spec.0.template.0.metadata[0].labels.App
    }
    port {
      node_port   = 30201
      port        = 5173
      target_port = 5173
    }

    type = "NodePort"
  }
}


