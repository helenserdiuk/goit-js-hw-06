// Посчитает и выведет в консоль количество категорий в ul#categories, то есть
// элементов li.item. Для каждого элемента li.item в списке ul#categories,
// найдет и выведет в консоль текст заголовка элемента(тега < h2 >) и количество
// элементов в категории(всех вложенных в него < li >).
// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const listCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${listCategories.length}`);

// const categoriTitel1 = listCategories[0].firstElementChild.textContent;
// console.log(`Category: ${categoriTitel1}`);

// const listItemOfTitle = listCategories[0].lastElementChild.children.length;
// console.log(`Elements: ${listItemOfTitle}`);

// const categoriTitel2 = listCategories[1].firstElementChild.textContent;
// console.log(`Category: ${categoriTitel2}`);

// const listItemOfTitle2 = listCategories[1].lastElementChild.children.length;
// console.log(`Elements: ${listItemOfTitle2}`);

// const categoriTitel3 = listCategories[2].firstElementChild.textContent;
// console.log(`Category: ${categoriTitel3}`);

// const listItemOfTitle3 = listCategories[2].lastElementChild.children.length;
// console.log(`Elements: ${listItemOfTitle3}`);

const shortList = listCategories.forEach((el) => {
  const title = el.firstElementChild.textContent;
  const listItem = el.lastElementChild.children.length;
  console.log(`Category: ${title}\nElements: ${listItem}`);
});
