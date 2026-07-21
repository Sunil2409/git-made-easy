import { renderHeader } from "./Header.js";
import { renderHero } from "./Hero.js";
import { renderAbout } from "./About.js";
import { renderJourney } from "./Journey.js";
import { renderExperience } from "./Experience.js";
import { renderProjects } from "./Projects.js";
import { renderSkills } from "./Skills.js";
import { renderCredentials } from "./Credentials.js";
import { renderContact } from "./Contact.js";

export function renderApp() {
  return `
    <div class="page-shell">
      ${renderHeader()}
      <main>
        ${renderHero()}
        ${renderAbout()}
        ${renderJourney()}
        ${renderExperience()}
        ${renderProjects()}
        ${renderSkills()}
        ${renderCredentials()}
      </main>
      ${renderContact()}
    </div>
  `;
}
