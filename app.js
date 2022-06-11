var clickbutton = document.querySelector("button");

var Container = document.querySelector("#container");

var listofItem = document.querySelector(".listOfItem");

console.log(listofItem);

clickbutton.addEventListener("click", function (e) {
  // creating Element
  var createLi = document.createElement("li");

  console.log(createLi);

  // adding class name
  createLi.classList.add("list");
  createLi.textContent = " another language added";

  // append the elements
  listofItem.appendChild(createLi);
  Container.appendChild(listofItem);
});
