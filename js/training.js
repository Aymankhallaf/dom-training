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

const ulEx5 = document.getElementById("js-random-hovercolor");
for (const child of ulEx5.children) {
  child
    .querySelector(".button--js-hover")
    .addEventListener("mouseover", function (event) {
      this.style.background =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
    });

  child
    .querySelector(".button--js-hover")
    .addEventListener("mouseout", function (event) {
      this.style.background = "";
    });
}

/* ------------------------------------ */
/* --- Exercice 6 --- */

let textEx6 = document.getElementById("ex6-paragraph").innerText.split("");
document.getElementById("ex6-paragraph").textContent = "";
let i = 0;

/**
 * showing 20 letters by seconds
 */
function showLettres() {
  document.getElementById("ex6-paragraph").textContent += textEx6[i];
  i++;
  if (i < textEx6.length) {
    setTimeout(showLettres, 1000 / 20);
  }
}

showLettres();

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

/**
 * get the task from a task list and put it in the end.
 * @param {array} taskList a list of elements.
 * @returns {*} first emeent in the list.
 */
function getTask(taskList) {
  let firstElement = taskList.shift();
  taskList.push(firstElement);
  return firstElement;
}

btnEx7.addEventListener("click", function () {
  ulEx7.innerHTML +=
    "<li class='task-list-task'>" + getTask(taskList) + "</li>";
});

ulEx7.addEventListener("click", function (event) {
  this.removeChild(event.target);
});

/* ------------------------------------ */
/* --- Exercice 8 --- */

/**
 * When the button is clicked, the bar update starts at zero score.
 * @param {string} btnId the button Html id.
 * @param {string} barId the bar Html id.
 * @param {string} points the increment value.
 * @param {string} maxScore the maximum Score.
 */
function updateBar(btnId, barId, points, maxScore) {
  let levelValue = 0;
  document.getElementById(btnId).addEventListener("click", function (event) {
    if (levelValue < maxScore) {
      levelValue += points;
      document.getElementById(barId).style.width = `${levelValue}` + "%";
    }
  });
}

updateBar("ex8-button-level", "ex8-level", 5, 100);
updateBar("ex8-button-strength", "ex8-strength", 5, 100);
updateBar("ex8-button-shield", "ex8-shield", 5, 100);
