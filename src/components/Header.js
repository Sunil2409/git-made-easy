export function renderHeader() {
  return `
    <header class="site-header">
      <nav class="navbar">
        <a class="brand" href="#hero">
          <img src="/Assets/sunil_kumar.jpeg" alt="Logo" class="brand-logo" />
          <span>SUNIL KUMAR</span>
        </a>
        <button class="nav-toggle" type="button" aria-label="Toggle navigation" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div class="nav-links">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#credentials">Certifications</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </header>
  `;
}
