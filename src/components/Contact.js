import { renderSectionHeading } from "./utils.js";

export function renderContact() {
  return `
    <footer class="section footer" id="contact">
      ${renderSectionHeading("Get in Touch", "Let's discuss DevOps, cloud infrastructure, or engineering roles.")}
      <div class="glass-panel contact-panel">
        <div class="contact-card-info">
          <p>
            I am open to collaborations, technical discussions, and Python, DevOps, cloud, or infrastructure engineering roles. Drop me a line!
          </p>
          <div class="contact-stack">
            <a href="mailto:esunilkumar24@gmail.com">
              <span>Email:</span> esunilkumar24@gmail.com
            </a>
            <a href="https://github.com/Sunil2409" target="_blank" rel="noreferrer">
              <span>GitHub:</span> github.com/Sunil2409
            </a>
            <a href="https://www.linkedin.com/in/sunilkumar-e-710080216/" target="_blank" rel="noreferrer">
              <span>LinkedIn:</span> linkedin.com/in/sunilkumar-e
            </a>
            <span>
              <span>Location:</span> Chennai, India
            </span>
          </div>
        </div>
        <form class="contact-form" action="mailto:esunilkumar24@gmail.com" method="post" enctype="text/plain">
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="your@email.com" required />
          </label>
          <label>
            Message
            <textarea name="message" rows="4" placeholder="How can I help you?" required></textarea>
          </label>
          <button class="button-submit" type="submit">Send Message</button>
        </form>
      </div>
      <p class="copyright">&copy; 2026 Sunil Kumar. Built with speed and precision.</p>
    </footer>
  `;
}
