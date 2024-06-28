import { html, render } from "../../libs/preact.js";
import App from "../components/App.js";
import Nav from "../components/Nav.js";

render(
  html`
    <${Nav} />
    <${App} />
  `,
  document.getElementById("app")
);
