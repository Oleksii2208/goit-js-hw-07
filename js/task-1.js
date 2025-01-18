const totalCategories = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${totalCategories.length}`);

totalCategories.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  console.log(`Category: ${title}`);
  const totalItems = item.querySelectorAll("ul li").length;
  console.log(`Elements: ${totalItems}`);
});
