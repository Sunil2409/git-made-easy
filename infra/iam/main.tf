terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "ap-south-1"
}

resource "aws_iam_user" "admin" {
  name = "admin"
  path = "/"
}

resource "aws_iam_user_policy_attachment" "attach" {
  user       = aws_iam_user.admin.name
  policy_arn = "arn:aws:iam::aws:policy/AdministratorAccess"
}

resource "aws_iam_access_key" "admin_access_key" {
  user = aws_iam_user.admin.name
}

output "new_access_key_id" {
  value = aws_iam_access_key.admin_access_key.id
}

output "new_secret_access_key" {
  value     = aws_iam_access_key.admin_access_key.secret
  sensitive = true
}


