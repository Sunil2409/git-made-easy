export function renderHero() {
  return `
    <section class="hero section" id="hero">
      <div id="hero-cli-bg-left" class="cli-background cli-left"></div>
      <div id="hero-cli-bg-right" class="cli-background cli-right"></div>
      <div class="hero-copy">
        <p class="eyebrow">Developer Command Center</p>
        <h1>SUNIL KUMAR</h1>
        <p class="hero-title">Python Developer | DevOps Engineer | Cloud & Observability</p>
        <p class="hero-tagline">
          Observability and infrastructure engineer operating a 12-microservice banking platform on AWS at TCS. Building Python automation, running Kubernetes workloads, and owning full-stack monitoring.
        </p>
        <div class="contact-chips">
          <span>Chennai, India</span>
          <a href="mailto:esunilkumar24@gmail.com">esunilkumar24@gmail.com</a>
          <a href="tel:+919087350567">+91 9087350567</a>
          <a href="https://www.linkedin.com/in/sunilkumar-e-710080216/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
        <div class="cta-row">
          <a class="button button-primary" href="#projects">Explore Projects</a>
          <a class="button button-secondary" href="#contact">
            Get in Touch
          </a>
        </div>
      </div>
      <aside class="hero-panel">
        <div class="hero-portrait-card">
          <img
            src="/Assets/sunil_kumar.jpeg"
            alt="Portrait of Sunil Kumar"
            class="hero-portrait"
          />
        </div>
        <div class="portrait-badge">Engineer. Automator. Builder.</div>
        <div class="glass-panel panel-card">
          <p class="panel-label">Current Focus</p>
          <ul>
            <li>Observability & infrastructure for 12-microservice banking platform</li>
            <li>Python automation eliminating 15+ hours/week of manual ops</li>
            <li>Building production-grade Django applications with CI/CD</li>
          </ul>
        </div>
      </aside>
    </section>
  `;
}
