# Portfolio — Sunil Kumar Elumalai

A personal developer portfolio deployed on **AWS EC2** with **Nginx**, provisioned via **Terraform**, and continuously delivered through **GitHub Actions**.

---

## 🛠 Tech Stack

| Layer          | Technology                          |
|----------------|-------------------------------------|
| Frontend       | HTML, CSS (vanilla)                 |
| Web Server     | Nginx on Amazon Linux 2023          |
| Infrastructure | Terraform (AWS EC2, IAM, SG)        |
| CI/CD          | GitHub Actions → SSH deploy to EC2  |
| Cloud          | AWS (EC2, IAM)                      |

---

## 📁 Project Structure

```
.
├── .github/workflows/
│   └── deploy.yml            # CI/CD — auto-deploys on push to main
├── infra/
│   ├── ec2/
│   │   └── main.tf           # EC2 instance, security group, Nginx setup
│   └── iam/
│       └── main.tf           # IAM user and access key provisioning
├── src/
│   └── index.html            # Portfolio website
├── .gitignore
├── LICENSE
└── README.md
```

---

## 🚀 How It Works

1. **Infrastructure** is provisioned with Terraform (`infra/ec2/main.tf`):
   - Spins up an EC2 instance with a security group allowing HTTP (80) and SSH (22).
   - Installs Nginx and clones this repo into the web root via `user_data`.

2. **CI/CD** is handled by GitHub Actions (`.github/workflows/deploy.yml`):
   - On every push to `main`, the workflow SSHs into the EC2 instance and runs `git pull` to deploy the latest code.

3. **The site** is a static HTML portfolio served by Nginx.

---

## 🏗 Setup

### Prerequisites

- AWS CLI configured with appropriate credentials
- Terraform installed (`>= 1.0`)
- An SSH key pair for EC2 access

### Deploy Infrastructure

```bash
cd infra/ec2
terraform init
terraform apply
```

### Configure GitHub Secrets

Add the following secrets to your GitHub repository for CI/CD:

| Secret             | Description                    |
|--------------------|--------------------------------|
| `HOST`             | EC2 instance public IP         |
| `USERNAME`         | SSH username (e.g., `ec2-user`)|
| `SSH_PRIVATE_KEY`  | Private key for EC2 access     |

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
