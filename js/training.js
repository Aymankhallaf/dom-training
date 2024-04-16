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
console.log(animalLst);
btnAnimal.addEventListener("click", function (event) {
  animalLst.append(document.querySelector("#ex3-animals li:first-child"));
});

/* ------------------------------------ */
/* --- Exercice 4 --- */
let btnEx4 = document.querySelector(
  "#ex4 .exercice-sandbox button[type=button]"
);
console.log(btnEx4);
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

/* ------------------------------------ */
/* --- Exercice 6 --- */

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

/* ------------------------------------ */
/* --- Exercice 8 --- */
