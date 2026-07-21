import { renderSectionHeading } from "./utils.js";

export function renderCredentials() {
  return `
    <section class="section credentials-grid" id="credentials">
      <div>
        ${renderSectionHeading("Certifications", "Validated expertise in cloud and data analytics.")}
        <div class="stack-list">
          <article class="cert-card">
            <div class="cert-badge">AWS Certified</div>
            <h3>AWS Certified AI Practitioner (Foundational)</h3>
            <p>Earned 2025</p>
          </article>
          <article class="cert-card">
            <div class="cert-badge">Microsoft Certified</div>
            <h3>Microsoft Power BI Data Analyst (PL-300)</h3>
            <p>Earned 2025</p>
          </article>
        </div>
      </div>
      <div id="education">
        ${renderSectionHeading("Education", "Academic foundation in engineering.")}
        <article class="glass-panel education-card">
          <h3>B.E., Electronics &amp; Communication Engineering</h3>
          <p class="institute">Amrita Vishwa Vidyapeetham</p>
          <p class="period">2020 - 2024 | Coimbatore, Tamil Nadu</p>
        </article>
      </div>
    </section>
  `;
}
