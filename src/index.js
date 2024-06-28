import { ROOT_NAME } from "../env.js";

window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      const href = a.getAttribute("link");
      if (href.startsWith(`/${ROOT_NAME}`)) {
        sessionStorage.setItem("href", link);
      }
      window.location.href = href;
    });
  });
});
