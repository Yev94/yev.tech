import {router} from "./modules/router.mjs";
import Calc from './modules/calc.mjs';

document.addEventListener("DOMContentLoaded", () => router());
window.addEventListener("hashchange", () => router());

if (window.location.href.includes('#/calc')){
  let calc = new Calc();
}
