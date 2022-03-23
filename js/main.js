import {router} from "./modules/router.mjs";

document.addEventListener("DOMContentLoaded", () => router());
window.addEventListener("hashchange", () => router());
