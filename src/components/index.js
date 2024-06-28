import App from "./App.js";

const components = [App];

components.forEach((Component) => {
  customElements.define(`my-${Component.name.toLowerCase()}`, Component);
});
