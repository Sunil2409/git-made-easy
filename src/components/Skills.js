import { renderSectionHeading } from "./utils.js";

export function renderSkills() {
  return `
    <section class="section" id="skills">
      ${renderSectionHeading("Skills & Tooling", "Technical competence across languages, cloud, observability, and DevOps.")}
      <div class="skills-grid">

        <div class="glass-panel skill-card">
          <h3>Languages</h3>
          <div class="skills-chips-wrapper">
            <span>Python</span><span>Bash</span><span>PowerShell</span><span>SQL</span><span>JavaScript</span>
          </div>
        </div>

        <div class="glass-panel skill-card">
          <h3>Observability</h3>
          <div class="skills-chips-wrapper">
            <span>Datadog</span><span>Kibana (ELK Stack)</span><span>AWS CloudWatch</span><span>SLI/SLO Alerting</span><span>Distributed Tracing</span>
          </div>
        </div>

        <div class="glass-panel skill-card">
          <h3>Cloud & Infrastructure</h3>
          <div class="skills-chips-wrapper">
            <span>AWS Lambda</span><span>S3</span><span>ECS</span><span>RDS</span><span>SQS/SNS</span><span>DynamoDB</span><span>IAM</span>
          </div>
        </div>

        <div class="glass-panel skill-card">
          <h3>DevOps</h3>
          <div class="skills-chips-wrapper">
            <span>Docker</span><span>Kubernetes</span><span>GitHub Actions</span><span>Jenkins</span><span>CI/CD Pipelines</span><span>Nginx</span>
          </div>
        </div>

        <div class="glass-panel skill-card">
          <h3>Backend</h3>
          <div class="skills-chips-wrapper">
            <span>Django REST Framework</span><span>Flask</span><span>FastAPI</span><span>REST APIs</span><span>Gunicorn</span>
          </div>
        </div>

        <div class="glass-panel skill-card">
          <h3>Databases & Messaging</h3>
          <div class="skills-chips-wrapper">
            <span>PostgreSQL</span><span>Redis</span><span>DynamoDB</span><span>Kafka</span><span>ChromaDB</span>
          </div>
        </div>

        <div class="glass-panel skill-card">
          <h3>Linux</h3>
          <div class="skills-chips-wrapper">
            <span>Ubuntu</span><span>CentOS</span><span>RHEL</span><span>Log Management</span><span>Patching</span><span>CVE Remediation</span>
          </div>
        </div>

      </div>
    </section>
  `;
}
