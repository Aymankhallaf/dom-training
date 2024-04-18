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
  return (document.getElementById(targetUlId).innerHTML +=
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
    "</button></li>");
}

function displayArrayInliAndButton(array, targetUlId) {
  for (const item of array) {
    createLiBtnTemplate(item, targetUlId);
  }
}

displayArrayInliAndButton(ingredients, "salad-ingredients");

console.log(document.getElementById("salad-ingredients").children);

function addLiToUl() {
  document
    .getElementById("salad-ingredients")
    .addEventListener("click", function (event) {
      if (document.getElementById("salad-final").children.length >= 5) return;

      switchItemBetweenTwoArraies(
        event.target,
        "salad-final"
      );
      document.getElementById("salad-count").innerText =
        document.getElementById("salad-final").children.length;
    });
}

addLiToUl();

function switchItemBetweenTwoArraies(item, targetArrayTag) {
  createLiBtnTemplate(item.innerHTML, targetArrayTag);
  item.remove();
}
