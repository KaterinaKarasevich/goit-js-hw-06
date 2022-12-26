const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsContainer = document.querySelector("#ingredients")
  
    const elements = ingredients.map(ingredient => {

    const createElement = document.createElement("li");
    createElement.classList.add("item");
    createElement.textContent = ingredient;
    return createElement;
})
console.log(elements)
ingredientsContainer.append(...elements);
console.log(ingredientsContainer)
