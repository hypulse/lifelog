import { ROOT_NAME } from "../../env.js";
import { html } from "../../libs/preact.js";
import ThemeController from "./ThemeController.js";

const Nav = () => {
  return html`
    <nav className="flex items-center mx-auto p-4 gap-6">
      <div className="avatar">
        <div className="w-8 rounded-full">
          <img src="https://avatars.githubusercontent.com/u/90980422?v=4" />
        </div>
      </div>
      <a href="/${ROOT_NAME}" className="link link-primary link-hover">
        Home
      </a>
      <a href="/${ROOT_NAME}/tags" className="link link-primary link-hover">
        Tags
      </a>
      <${ThemeController} />
    </nav>
  `;
};

export default Nav;
