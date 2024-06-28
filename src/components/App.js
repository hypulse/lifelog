import { html } from "../../libs/preact.js";

const App = ({ children }) => {
  return html`
    <main className="mx-auto px-6 max-w-screen-lg flex flex-col gap-12">
      ${children}
    </main>
  `;
};

export default App;
