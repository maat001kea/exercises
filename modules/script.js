// console.log("Hej fra script");
import { sayHi } from "./utils.js";

import { getRandomNumber } from "./utils.js";

import $ from "./utils.js";
sayHi("Jonny");
console.log(getRandomNumber(1));

import $$ from "./utils.js";
sayHi("Jonny");
console.log(getRandomNumber(1));

$("h1").textContent = "Dette gøre1";

$$("h1").textContent = "Dette gøre2";
