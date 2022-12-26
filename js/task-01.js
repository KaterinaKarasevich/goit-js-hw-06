const items = document.querySelectorAll(".item");
const quantityItems = items.length;
console.log(`Number of categories: ${quantityItems}`);

items.forEach((el) => {
    console.log(`Category: ${el.firstElementChild.textContent}`);
    const liItems = el.querySelectorAll("li");
    const quantityLiItems = liItems.length;
    console.log(`Elements: ${quantityLiItems}`);
})