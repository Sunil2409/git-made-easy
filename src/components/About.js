import { renderSectionHeading } from "./utils.js";

export function renderAbout() {
  return `
    <section class="section" id="about">
      ${renderSectionHeading("About Me", "Engineering reliability and automation at scale.")}
      <div class="about-grid">
        <div class="glass-panel content-card" style="padding: 2.2rem; display: flex; flex-direction: column; justify-content: center;">
          <p class="panel-label">Professional Summary</p>
          <p style="line-height: 1.8; color: var(--muted); margin: 0; font-size: 0.95rem;">
            Observability and infrastructure engineer operating a 12-microservice banking platform on AWS at Tata Consultancy Services. I build Python automation, run Kubernetes workloads, and own full-stack monitoring — covering Datadog, Kibana, and CloudWatch across production environments. Outside of work, I build Django projects and expand my DevOps toolkit, shipping containerised applications with CI/CD pipelines.
          </p>
        </div>
        <div class="strengths-grid">
          <div class="glass-panel strength-card">
            <p class="panel-label" style="margin: 0; font-size: 0.72rem;">Experience</p>
            <span class="strength-val">~2 Years</span>
            <p>Active engineering role at TCS since Sep 2024, handling enterprise banking workloads.</p>
          </div>
          <div class="glass-panel strength-card">
            <p class="panel-label" style="margin: 0; font-size: 0.72rem;">Leadership</p>
            <span class="strength-val">Team Lead</span>
            <p>Leading a 12-member team across system reliability, monitoring, and DevOps automation.</p>
          </div>
          <div class="glass-panel strength-card">
            <p class="panel-label" style="margin: 0; font-size: 0.72rem;">Cloud Infrastructure</p>
            <span class="strength-val">AWS</span>
            <p>Lambda, S3, ECS, RDS, SQS/SNS, IAM, CloudWatch — production & staging environments.</p>
          </div>
          <div class="glass-panel strength-card">
            <p class="panel-label" style="margin: 0; font-size: 0.72rem;">Observability</p>
            <span class="strength-val">Full Stack</span>
            <p>Datadog, Kibana (ELK), CloudWatch — dashboards, alerting, and root-cause analysis.</p>
          </div>
          <div class="glass-panel strength-card">
            <p class="panel-label" style="margin: 0; font-size: 0.72rem;">Automation</p>
            <span class="strength-val">Python & Shell</span>
            <p>Eliminated 15+ hours/week of manual ops through scripted automation and API tooling.</p>
          </div>
        </div>
      </div>
    </section>
  `;
}
