import { renderSectionHeading, renderTagRow } from "./utils.js";

export function renderProjects() {
  return `
    <section class="section" id="projects">
      ${renderSectionHeading("Featured Projects", "Production-grade Django applications with CI/CD, containers, and real-world utility.")}
      <div class="projects-grid">

        <article class="glass-panel project-card">
          <div class="project-image-wrapper">
            <img src="/Assets/proj_money_manager.png" alt="Money Manager REST API" class="project-image" />
          </div>
          <div class="project-info">
            <h3>Money Manager</h3>
            <p>Multi-user personal finance REST API with httpOnly JWT auth (XSS-proof), user-scoped ORM isolation, rate limiting, and OpenAPI 3.0 spec. Containerised with multi-stage Docker, Nginx reverse proxy, and Docker Compose orchestration.</p>
            <div style="margin-bottom: 1.5rem;">
              ${renderTagRow(["Django DRF", "JWT", "PostgreSQL", "Redis", "Docker", "Nginx", "GitHub Actions"])}
            </div>
            <div class="project-links">
              <a href="https://github.com/Sunil2409/money-management-system" target="_blank" rel="noreferrer" class="project-link-btn">GitHub</a>
            </div>
          </div>
        </article>

        <article class="glass-panel project-card">
          <div class="project-image-wrapper">
            <img src="/Assets/proj_calculator.png" alt="Django Calculator" class="project-image" />
          </div>
          <div class="project-info">
            <h3>Django Calculator</h3>
            <p>Full-featured calculator with user authentication, per-user history (PostgreSQL-backed), health check API, structured logging, and 99% test coverage. Deployed with Gunicorn, Docker, Kubernetes, and GitHub Actions CI/CD.</p>
            <div style="margin-bottom: 1.5rem;">
              ${renderTagRow(["Django", "Gunicorn", "PostgreSQL", "Redis", "Docker", "Kubernetes", "GitHub Actions"])}
            </div>
            <div class="project-links">
              <a href="https://github.com/Sunil2409/Django_Calculator" target="_blank" rel="noreferrer" class="project-link-btn">GitHub</a>
            </div>
          </div>
        </article>

        <article class="glass-panel project-card">
          <div class="project-image-wrapper">
            <img src="/Assets/proj_weather.png" alt="Weather Dashboard" class="project-image" />
          </div>
          <div class="project-info">
            <h3>Weather Dashboard</h3>
            <p>Real-time weather and AQI dashboard using OpenWeatherMap API. Features Redis caching for performance, PostgreSQL for storage, Docker Compose deployment, and GitHub Actions CI/CD pipeline.</p>
            <div style="margin-bottom: 1.5rem;">
              ${renderTagRow(["Django", "PostgreSQL", "Redis", "Docker", "OpenWeatherMap API", "GitHub Actions"])}
            </div>
            <div class="project-links">
              <a href="https://github.com/Sunil2409/weather-dashboard" target="_blank" rel="noreferrer" class="project-link-btn">GitHub</a>
            </div>
          </div>
        </article>

      </div>
    </section>
  `;
}
