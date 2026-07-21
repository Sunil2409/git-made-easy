export function renderTagRow(tags) {
  return `
    <div class="tag-row">
      ${tags.map((tag) => `<span>${tag}</span>`).join("")}
    </div>
  `;
}

export function renderSectionHeading(eyebrow, title) {
  return `
    <div class="section-heading">
      <p class="eyebrow">${eyebrow}</p>
      <h2>${title}</h2>
    </div>
  `;
}
