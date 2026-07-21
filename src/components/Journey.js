import { renderSectionHeading } from "./utils.js";

const journeyTimeline = [
  { date: "2020", title: "The Foundation", description: "Began studying Electronics & Communication Engineering at Amrita Vishwa Vidyapeetham, building a strong foundation in computing and systems." },
  { date: "2023", title: "First Lines of Code", description: "Discovered Python and fell in love with automation. Started building small scripts and learning web development with Django." },
  { date: "2024", title: "The Breakthrough", description: "Secured an offer from Tata Consultancy Services during final year. Graduated with a BE in ECE and prepared for the enterprise world." },
  { date: "Sep 2024", title: "Day One at TCS", description: "Joined TCS as an Assistant System Engineer. Stepped into the world of enterprise banking systems and production operations." },
  { date: "Early 2025", title: "Taking the Lead", description: "Promoted to Team Lead — took ownership of a 12-member team handling monitoring, DevOps automation, and production support." },
  { date: "2025", title: "AWS Certified", description: "Earned AWS Certified AI Practitioner (Foundational) credential, strengthening cloud and applied AI expertise." },
  { date: "2026", title: "Power BI Certified", description: "Completed Microsoft Power BI Data Analyst (PL-300) certification, adding data analytics and visualisation to the toolkit." }
];

const journeyQuote = "\"I don't just monitor systems — I engineer the observability that makes them reliable. Every alert tuned, every script automated, every incident prevented is infrastructure done right.\"";

export function renderJourney() {
  const rows = [];
  for (let i = 0; i < journeyTimeline.length; i += 3) {
    rows.push(journeyTimeline.slice(i, i + 3));
  }

  return `
    <section class="section" id="journey">
      ${renderSectionHeading("My Timeline", "From college to leading production systems")}
      
      <div class="s-curve-container">
        ${rows.map((rowItems, rowIndex) => {
          const isEvenRow = rowIndex % 2 === 1;
          const rowClass = isEvenRow ? "s-curve-row row-reverse" : "s-curve-row";
          return `
            <div class="${rowClass} row-${rowIndex + 1}">
              ${rowItems.map((item, index) => {
                const globalIndex = rowIndex * 3 + index;
                return `
                  <div class="s-curve-node" data-index="${globalIndex + 1}">
                    <div class="node-dot-wrapper">
                      <div class="node-dot"></div>
                    </div>
                    <div class="node-card">
                      <span class="node-date">${item.date}</span>
                      <h4 class="node-title">${item.title}</h4>
                      <p class="node-desc">${item.description}</p>
                    </div>
                  </div>
                `;
              }).join("")}
              ${!isEvenRow && rowItems.length < 3 ? `<div class="s-curve-spacer"></div>`.repeat(3 - rowItems.length) : ""}
              ${isEvenRow && rowItems.length < 3 ? `<div class="s-curve-spacer"></div>`.repeat(3 - rowItems.length) : ""}
            </div>
          `;
        }).join("")}
      </div>
      
      <blockquote style="margin: 3rem auto 1rem; max-width: 900px; padding: 1.8rem; border-left: 4px solid var(--accent); background: rgba(54, 194, 255, 0.05); border-radius: 0 12px 12px 0;">
        <p style="margin: 0; font-family: 'Space Grotesk', sans-serif; font-style: italic; color: #dce8f8; font-size: 1.05rem; line-height: 1.7; letter-spacing: 0.02em;">
          ${journeyQuote}
        </p>
      </blockquote>
    </section>
  `;
}
