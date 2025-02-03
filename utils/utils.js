export function getRandomNumber(max) {
  return Math.floor(Math.random() * (max + 1));
}

function $(sel) {
  return document.querySelector(sel);
}

export function $$(sel) {
  return document.querySelector(sel);
}
