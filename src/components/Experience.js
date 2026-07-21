import { renderSectionHeading, renderTagRow } from "./utils.js";

export function renderExperience() {
  return `
    <section class="section" id="experience">
      ${renderSectionHeading("Experience", "Leading observability, automation, and infrastructure in live banking environments.")}
      
      <div class="timeline">
        <article class="glass-panel timeline-card">
          <div class="timeline-meta">
            <p>Tata Consultancy Services</p>
            <span>September 2024 - Present</span>
          </div>
          <div class="timeline-body">
            <h3>Assistant System Engineer &amp; Team Lead</h3>
            <p class="timeline-domain">BFSI Domain (12-Microservice Banking Platform)</p>
            
            <p class="exp-category">Observability & Monitoring</p>
            <ul>
              <li>Operated the full observability stack — Datadog, Kibana (Elastic Stack), and AWS CloudWatch — across 11-12 production microservices.</li>
              <li>Built and maintained dashboards, saved searches, and SLI/SLO-aligned alerting configurations for real-time system health visibility.</li>
              <li>Performed root-cause analysis by correlating distributed logs, metrics, and traces across application, database, and network tiers.</li>
              <li>Participated in post-incident reviews and implemented monitoring enhancements to prevent recurrence.</li>
            </ul>

            <p class="exp-category">Python & Automation</p>
            <ul>
              <li>Developed Python and Shell automation scripts to eliminate 15+ hours/week of manual operational reporting.</li>
              <li>Built modular, reusable tooling with structured logging, error handling, and cron-scheduled execution.</li>
              <li>Engineered API-driven automation tools integrating LLM APIs with Playwright to automate 3 critical browser-based operational workflows.</li>
            </ul>

            <p class="exp-category">AWS Cloud Infrastructure</p>
            <ul>
              <li>Administered Lambda, S3, ECS, SQS/SNS, DynamoDB, RDS, IAM, and CloudWatch across production and staging.</li>
              <li>Performed configuration management, capacity tuning, and alerting optimisation to maintain SLA compliance.</li>
            </ul>

            <p class="exp-category">Kubernetes, Databases & Messaging</p>
            <ul>
              <li>Delivered Kubernetes-based production operations — troubleshooting, log review, metric investigations.</li>
              <li>Working knowledge of Kafka messaging architecture: topic config, consumer groups, partition layout.</li>
              <li>SQL query troubleshooting and performance diagnostics on PostgreSQL and AWS RDS.</li>
            </ul>

            <p class="exp-category">Linux & Scripting</p>
            <ul>
              <li>Administered Ubuntu, CentOS, RHEL systems for configuration, diagnostics, and task automation.</li>
              <li>Developed Shell and PowerShell scripts for provisioning, patching, and configuration management.</li>
            </ul>

            ${renderTagRow(["Python", "Bash", "PowerShell", "SQL", "Datadog", "Kibana", "CloudWatch", "AWS", "Kafka", "Kubernetes", "Docker", "GitHub Actions", "Jenkins", "Django REST Framework", "PostgreSQL", "Redis"])}
          </div>
        </article>
      </div>
    </section>
  `;
}
