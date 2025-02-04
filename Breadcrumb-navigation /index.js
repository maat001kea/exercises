const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

("use strict");

document.querySelector("button").addEventListener("click", lavsti);

function lavsti() {
  bc.forEach((vare) => {
    console.log(vare.name);
    console.log(vare.link);
    console.log("**********");
    document.querySelector(
      "ul"
    ).innerHTML += `<li><a href=${vare.link}>${vare.name}</a> /&nbsp</li>`;
  });
}
