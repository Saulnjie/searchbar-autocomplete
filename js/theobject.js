import { filteringAnArray } from "./libs/filteringArray.js";
// import { renderHTMLToTheDom } from "./libs/oneDisplayHTML.js";

const rickAndMorty = [
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    gender: "Male",
  },
  {
    id: 2,
    name: "Morty Smith",
    status: "Alive",
    species: "Human",
    gender: "Male",
  },
  {
    id: 3,
    name: "Summer Smith",
    status: "Alive",
    species: "Human",
    gender: "Female",
  },
  {
    id: 4,
    name: "Beth Smith",
    status: "Alive",
    species: "Human",
    gender: "Female",
  },
];

console.log();

let search = document.querySelector(".search");
let domstuff = document.querySelector(".autocompleter");

search.onkeyup = function () {
  let saul = filteringAnArray(rickAndMorty, search.value);
  domstuff.innerHTML = ``;

  if (search.value === ``) {
    domstuff.innerHTML = ``;
    return;
  }

  saul.forEach((element) => {
    document.querySelector(
      ".autocompleter"
    ).innerHTML += `<p>${element.name}<p>`;
  });

  console.log(domstuff);
};
