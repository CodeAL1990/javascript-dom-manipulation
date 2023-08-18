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

/* Part 5: Event listeners */

// example syntax --> element.addEventListener("click", function);

// const buttonTwo = document.querySelector("#btn-2");

// function alertBtn() {
//   alert("I also love JavaScript");
// }

// buttonTwo.addEventListener("click", alertBtn);

// // Mouseover

// const newBackgroundColor = document.querySelector(".box-3");

// function changeBgColor() {
//   newBackgroundColor.style.backgroundColor = "blue";
// }

// newBackgroundColor.addEventListener("mouseover", changeBgColor);

/* Part 6: Reveal/hide using event listeners */

// Reveal Event

// const revealBtn = document.querySelector(".reveal-btn");

// const hiddenContent = document.querySelector(".hidden-content");

// function revealContent() {
//   if (hiddenContent.classList.contains("reveal-btn")) {
//     hiddenContent.classList.remove("reveal-btn");
//   } else {
//     hiddenContent.classList.add("reveal-btn");
//   }
// }

// revealBtn.addEventListener("click", revealContent);

/* Part 7: Event propagatio --> Event Capturing, Target, Event bubbling */

// false is the default which will cause bubbling while true will capture
// Calling stopPropagation on event(or e) will stop the bubbling or capturing at the event it is called
// If you change the button to an anchor tag, clicking it will fire off all the event listeners and refresh them immediately because an anchor tag's purpose is to re-direct. To prevent the re-direct, you can call preventDefault on the event
// window.addEventListener(
//   "click",
//   function () {
//     console.log("Window");
//   },
//   false
// );

// document.addEventListener(
//   "click",
//   function () {
//     console.log("Document");
//   },
//   false
// );

// document.querySelector(".div2").addEventListener(
//   "click",
//   function () {
//     // e.stopPropagation();
//     console.log("Div 2");
//   },
//   { once: true }
// );

// document.querySelector(".div1").addEventListener(
//   "click",
//   function () {
//     console.log("Div 1");
//   },
//   false
// );

// document.querySelector("button").addEventListener(
//   "click",
//   function (e) {
//     console.log((e.target.innerText = "Clicked"));
//   },
//   false
// );

/* Part 8: Event delegation */

// Event delegation allows users to append a SINGLE event listener to a parent element that add it to all of its present AND future descendants that match a selector.

// Instead of doing event listeners for every li, you do it on the parent and it will bubble up
document.querySelector("#sports").addEventListener("click", function (e) {
  console.log(e.target.getAttribute("id") + " is clicked");

  const target = e.target;

  if (target.matches("li")) {
    target.style.backgroundColor = "lightgrey";
  }
});

const sports = document.querySelector("#sports");
const newSport = document.createElement("li");

newSport.innerText = "rugby";
newSport.setAttribute("id", "rugby");

sports.appendChild(newSport);
