/* Part 1: Selecting elements in a DOM */

// DOM Manipulation

// GetElementById()

// const title = document.getElementById("main-heading");

// console.log(title);

// GetElementByClassName()

// const listItems = document.getElementsByClassName("list-items");

// console.log(listItem);

// getElementsByTagName()

// const listItems = document.getElementsByTagName("li");

// console.log(listItems);

// querySelector()

// const container = document.querySelector("div");

// console.log(container);

// querySelectorAll()

// const containers = document.querySelectorAll("div");

// console.log(containers);

/* Part 2: Styling elements */

// const title = document.querySelector("#main-heading");

// title.style.color = "red"; /* inline styling only works for 1 element and not multiple such as li*/

// console.log(title);

// const listItems = document.querySelectorAll(".list-items");

// /* You will need a loop to select all items to do inline styling */
// for (let i = 0; i < listItems.length; i++) {
//   listItems[i].style.fontSize = "3rem";
// }

// console.log(listItems);

/* Part 3: Creating, modifying, and removing elements */

// Create elements

// const ul = document.querySelector("ul");
// const li = document.createElement("li");

// Adding Elements

// ul.append(li);

// Modifying the text

// li.innerText = "X-men";

// Modifying attributes

// li.setAttribute("id", "main-heading");
// li.removeAttribute("id");

// const title = document.querySelector("#main-heading");

// console.log(title.getAttribute("id"));

// Modifying classes

// li.classList.add("list-items");

// console.log(li.classList.contains("list-items"));

// Remove elements

// li.remove();

/* Part 4: Traversing the DOM */

// Parent Node Traversal

// let ul = document.querySelector("ul");

/* Each parentNode/parentElement moves up a level */
// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentElement);

// const html = document.documentElement;

/* parentNodes will retrieve any node while parentElement retrieves any element but returns null because document node is not an element node */
// console.log(html.parentNode);
// console.log(html.parentElement);

// Child Node Traversal

// let ul = document.querySelector("ul");

/* Text nodes are child noes as well, and indentations count as text nodes */
// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);

// ul.childNodes[1].style.backgroundColor = "blue";

/* These only select the list-items and not the text nodes */
// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);

// Sibling Node Traversal

// let ul = document.querySelector("ul");
// const div = document.querySelector("div");

// console.log(div.childNodes);

/* Again, text nodes */
// console.log(ul.previousSibling);
// console.log(ul.nextSibling);

/* If you only want the elements inside */
// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);
