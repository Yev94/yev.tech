import {router} from "./modules/router.mjs";
import Calc from './modules/calc.mjs';

document.addEventListener("DOMContentLoaded", () => router());
window.addEventListener("hashchange", () => router());

if (window.location.href == "http://127.0.0.1:5501/index.html#/calc"){
  let calc = new Calc();
}
