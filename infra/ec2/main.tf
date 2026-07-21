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

# Dynamically fetch the latest Amazon Linux 2023 AMI for this region
data "aws_ami" "amazon_linux_2023" {
  most_recent = true
  owners      = ["amazon"]

  filter {
    name   = "name"
    values = ["al2023-ami-2023.*-x86_64"]
  }
}

# Create the Security Group (Firewall)
resource "aws_security_group" "portfolio_sg" {
  name        = "portfolio_web_sg"
  description = "Allow HTTP and SSH inbound traffic"

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# Create the EC2 Web Server
resource "aws_instance" "portfolio_server" {
  ami           = data.aws_ami.amazon_linux_2023.id
  instance_type = "t3.micro"

  vpc_security_group_ids = [aws_security_group.portfolio_sg.id]

  key_name = aws_key_pair.deployer-key.key_name

  # The automation script to install Nginx and fetch your code
  user_data = <<-EOF
              #!/bin/bash
              yum update -y
              yum install nginx git -y
              systemctl start nginx
              systemctl enable nginx
              
              rm -rf /usr/share/nginx/html/*
              
              # REPLACE THIS URL WITH YOUR ACTUAL GITHUB REPO URL!
              git clone https://github.com/Sunil2409/git-made-easy.git /usr/share/nginx/html/
              EOF

  tags = {
    Name = "MyPortfolioServer"
  }
}

# Output the final clickable URL
output "website_url" {
  description = "The public URL of your new portfolio"
  value       = "http://${aws_instance.portfolio_server.public_ip}"
}

resource "aws_key_pair" "deployer-key" {
  key_name   = "portfolio-key-name"
  public_key = file("portfolio_key.pub")

}
