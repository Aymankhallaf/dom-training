/* ------------------------------------ */
/* --- Exercice 1 --- */

document
  .querySelector("#ex1 button")
  .addEventListener("click", function (event) {
    document.querySelector("#ex1 .text").classList.toggle("text-hidden");
  });

/* ------------------------------------ */
/* --- Exercice 2 --- */
// window.addEventListener("scroll", function(event){
// console.log(event)
// })

window.addEventListener("scroll", function (event) {
  document.querySelector("#ex2-scroll-value").innerText = Math.round(
    window.scrollY
  );
});

/* ------------------------------------ */
/* --- Exercice 3 --- */
let animalLst = document.querySelector("#ex3-animals");
let btnAnimal = document.querySelector(
  "#ex3 .exercice-sandbox button[type=button]"
);
btnAnimal.addEventListener("click", function (event) {
  animalLst.append(document.querySelector("#ex3-animals li:first-child"));
});

/* ------------------------------------ */
/* --- Exercice 4 --- */
let btnEx4 = document.querySelector(
  "#ex4 .exercice-sandbox button[type=button]"
);
let nextColor = "blue";
btnEx4.addEventListener("click", function (event) {
  if (nextColor === "blue") {
    btnEx4.classList.add("button--blue");
    btnEx4.classList.remove("button--green", "button--red");
    nextColor = "red";
    console.log("blue");
  } else if (nextColor === "red") {
    btnEx4.classList.remove("button--blue", "button--green");
    btnEx4.classList.add("button--red");
    nextColor = "green";
  } else if (nextColor === "green") {
    btnEx4.classList.remove("button--blue", "button--red");
    btnEx4.classList.add("button--green");

    nextColor = "blue";
  }
});

/* ------------------------------------ */
/* --- Exercice 5 --- */

// const colors = [];

// for (let i = 0; i < 10; i++) {
//   const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
//   colors.push(randomColor);
// }

const ulEx5 = document.getElementById("js-random-hovercolor");
for (const child of ulEx5.children) {
  child
    .querySelector(".button--js-hover")
    .addEventListener("mouseover", function (event) {
      // this.classList.add("js-random-hovercolor");
      this.style.background =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
    });

  child
    .querySelector(".button--js-hover")
    .addEventListener("mouseout", function (event) {
      // this.classList.add("js-random-hovercolor");
      this.style.background = "";
    });
}

/* ------------------------------------ */
/* --- Exercice 6 --- */

let textEx6 = document.getElementById("ex6-paragraph");

// setInterval(function() {element.innerHTML += "Hello"}, 1000);

// console.log(textEx6.innerText);
// console.log(textEx6.innerText.charAt(0))

// function showLettre() {
//   for (let l of textEx6.innerText) {
//     setInterval(() => {
//       console.log(l);
//       textEx6.trum();
//     }, 1000 / 20);
//   }

// }
// showLettre();

// setInterval(function () {
//   for (const l of textEx6.textContent) {
//     textEx6.textContent += l;
//   }
// }, 1000);

/* ------------------------------------ */
/* --- Exercice 7 --- */

const taskList = [
  "🥖 Acheter du pain",
  "🗑️ Descendre la poubelle",
  "🐶 Sortir le chien",
  "🍽️ Faire la vaisselle",
  "🧹 Passer l'aspirateur",
  "🌳 Tondre la pelouse",
];

const btnEx7 = document.getElementById("ex7-button");
const ulEx7 = document.querySelector("#ex7-list");
console.log((ulEx7.innerHTML += "<p class='task-list-task'>hello</p>"));

function getTask(taskList, i) {
  return taskList[i];
}

let i;
btnEx7.addEventListener("click", function () {
  if (i === undefined || i > taskList.length) {
    i = 0;
  }
  ulEx7.innerHTML += "<li class='task-list-task'>" + taskList[i] + "</li>";
  i++;
});

ulEx7.addEventListener("click", function (event) {
  console.log(event.target);
  this.removeChild(event.targetgit)
});
// ulEx7.addEventListener("click", function (event) {
//   console.log(event);
//   event
// });

/* ------------------------------------ */
/* --- Exercice 8 --- */
