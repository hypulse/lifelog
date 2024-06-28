import { html, render } from "../../libs/preact.js";
import App from "../components/App.js";
import Card from "../components/Card.js";
import Footer from "../components/Footer.js";
import Nav from "../components/Nav.js";
import Search from "../components/Search.js";

render(
  html`<${App}
    children=${html`<${Nav} /><${Search} /><${Card} /><${Footer} />`}
  />`,
  document.getElementById("app")
);
