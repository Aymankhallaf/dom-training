const ingredients = [
  "🍅",
  "🥑",
  "🥕",
  "🌽",
  "🌶️",
  "🥦",
  "🥒",
  "🍄",
  "🧄",
  "🧅",
  "🧀",
  "🍠",
  "🥚",
  "🥬",
];

function createLiBtnTemplate(item, targetUlId) {
  document.getElementById(targetUlId).innerHTML +=
    "<li class=" +
    '"' +
    "js-li-" +
    targetUlId +
    '"' +
    ">" +
    "<button class=" +
    '".button ' +
    "js-btn-" +
    targetUlId +
    '"' +
    ">" +
    item +
    "</button></li>";
}

function displayArrayInliAndButton(array, targetUlId) {
  for (const item of array) {
    createLiBtnTemplate(item, targetUlId);
  }
}

const allIngredients = displayArrayInliAndButton(
  ingredients,
  "salad-ingredients"
);

function getClickedHtmlTag() {}

function addLiToUl() {
  document
    .getElementById("salad-ingredients")
    .addEventListener("click", function (event) {
      if (document.getElementById("salad-final").children.length >= 5) return;
      createLiBtnTemplate(event.target.innerHTML, "salad-final");
      document.getElementById("salad-count").innerText = document.getElementById("salad-final").children.length
    });
}

addLiToUl();

// for (const item of allIngredients) {
//   item.addEventListener("click", function (event) {
//     console.log(event);
//   });
// }
