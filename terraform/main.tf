terraform {
  required_providers {
    vercel = {
      source  = "vercel/vercel"
      version = "~> 0.3"
    }
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "us-east-1"
}

resource "vercel_project" "website" {
  name      = "website"
  framework = "nuxtjs"
  git_repository = {
    production_branch = "main"
    type              = "github"
    repo              = "m-mcardle/website"
  }
}

resource "vercel_project_domain" "vercel_domain" {
  project_id = vercel_project.website.id
  domain     = "mmcardle.vercel.app"
}

resource "vercel_project_domain" "mmcardle_domain" {
  project_id = vercel_project.website.id
  domain     = "v3.mmcardle.ca"
}

resource "aws_route53_record" "cname" {
  zone_id = "Z0142990DSVQRE1X2RN4"
  name    = "v3.mmcardle.ca"
  type    = "CNAME"
  ttl     = "300"
  records = ["cname.vercel-dns.com."]
}
