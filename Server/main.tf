terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 3.0.1"
    }
  }
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
  name  = "tutorial"
  ports {
    internal = 5001
    external = 5001
  }
}
