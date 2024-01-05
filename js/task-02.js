const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ul = document.querySelector("#ingredients");
console.dir(ul);

const liArray = [];

ingredients.forEach((ingredient) => {
  const liEl = document.createElement("li");
  console.log(liEl);

  liEl.textContent = ingredient;

  liEl.classList.add("item");

  liArray.push(liEl);
});

ul.append(...liArray);
