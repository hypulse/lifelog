import { html } from "../../libs/preact.js";

export default function Card() {
  return html`
    <div>
      <h2 className="text-2xl text-primary inline-block mr-2">Title</h2>
      <time className="opacity-70">${new Date().toLocaleDateString()}</time>
      <p>summary</p>
    </div>
  `;
}
