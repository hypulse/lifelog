import { ROOT_NAME } from "../env.js";

(() => {
  const link = sessionStorage.getItem("link");
  sessionStorage.removeItem("link");
  if (!link) {
    window.location.href = `/${ROOT_NAME}`;
    return;
  }
  if (link.startsWith(`/${ROOT_NAME}/post/`)) {
    const id = link.split("/").pop();
    window.location.href = `/${ROOT_NAME}/post?id=${id}`;
    return;
  }
  window.location.href = `/${ROOT_NAME}`;
})();
