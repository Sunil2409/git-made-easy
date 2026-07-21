import "./styles.css";
import { renderApp } from "./components/App.js";

// Mount App
const app = document.querySelector("#app");
app.innerHTML = renderApp();

// Mobile Navigation Toggle
const toggleButton = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const navAnchors = document.querySelectorAll(".nav-links a");

if (toggleButton && navLinks) {
  toggleButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    toggleButton.setAttribute("aria-expanded", String(isOpen));
  });

  navAnchors.forEach((anchor) => {
    anchor.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      toggleButton.setAttribute("aria-expanded", "false");
    });
  });
}

// Background Canvas Animations (Floating Cyber-Particles)
const canvas = document.createElement("canvas");
canvas.id = "bg-canvas";
document.body.prepend(canvas);

const ctx = canvas.getContext("2d");
let particles = [];
const particleCount = 65;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

class Particle {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 0.3;
    this.vy = (Math.random() - 0.5) * 0.3;
    this.size = Math.random() * 2 + 0.8;
    this.alpha = Math.random() * 0.4 + 0.1;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
      this.reset();
    }
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(168, 85, 247, ${this.alpha})`;
    ctx.fill();
  }
}

// Initialize particles
for (let i = 0; i < particleCount; i++) {
  particles.push(new Particle());
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  
  requestAnimationFrame(animate);
}
animate();

// Mouse Reactive Spotlight Glow Overlay
const mouseGlow = document.createElement("div");
mouseGlow.className = "mouse-glow";
document.body.appendChild(mouseGlow);

window.addEventListener("mousemove", (e) => {
  mouseGlow.style.left = `${e.clientX}px`;
  mouseGlow.style.top = `${e.clientY}px`;
});

// Hero CLI Background Animation
const cliBgLeft = document.getElementById("hero-cli-bg-left");
const cliBgRight = document.getElementById("hero-cli-bg-right");
if (cliBgLeft || cliBgRight) {
  const commands = [
    "python manage.py runserver 0.0.0.0:8000",
    "docker build -t sunil/money-manager:v1.0 .",
    "docker-compose up -d --build",
    "kubectl apply -f k8s/deployment.yaml",
    "kubectl get pods -n production",
    "pip install -r requirements.txt",
    "python -m pytest --cov=. --cov-report=term",
    "git push origin main && gh pr create",
    "aws s3 sync ./static s3://prod-assets/",
    "aws lambda update-function-code --function-name ops-bot",
    "terraform plan -out=infra.tfplan",
    "ansible-playbook deploy.yml -i inventory",
    "Starting Django server on port 8000...",
    "System check passed. 0 issues found.",
    "Connected to PostgreSQL on port 5432.",
    "Redis cache synchronized.",
    "Datadog agent reporting OK.",
    "Kibana dashboard refreshed.",
    "CloudWatch alarm configured.",
    "GitHub Actions workflow passed ✓",
    "flake8 lint check passed.",
    "Coverage: 99% (38 tests passed)",
    "Docker image pushed to registry.",
    "Nginx reverse proxy configured.",
    "Gunicorn workers: 4 active.",
    "Done in 2.34s."
  ];

  const maxLines = 25;

  function addCliLine() {
    const targetBg = Math.random() > 0.5 ? cliBgLeft : cliBgRight;
    if (!targetBg) {
      setTimeout(addCliLine, 500);
      return;
    }
    
    const line = document.createElement("div");
    line.className = "cli-line";
    
    const randomCmd = commands[Math.floor(Math.random() * commands.length)];
    const isCommand = randomCmd.startsWith("python") || randomCmd.startsWith("docker") || randomCmd.startsWith("kubectl") || randomCmd.startsWith("pip") || randomCmd.startsWith("git") || randomCmd.startsWith("aws") || randomCmd.startsWith("terraform") || randomCmd.startsWith("ansible") || randomCmd.startsWith("flake8");
    
    line.textContent = (isCommand ? "sunil@dev-sys:~$ " : "> ") + randomCmd;
    targetBg.appendChild(line);
    
    if (targetBg.childElementCount > maxLines) {
      targetBg.removeChild(targetBg.firstChild);
    }
    
    const nextTimeout = Math.random() * 1300 + 200;
    setTimeout(addCliLine, nextTimeout);
  }

  // Start adding lines
  setTimeout(addCliLine, 500);
  setTimeout(addCliLine, 800);
}
