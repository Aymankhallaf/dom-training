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

/**
 * adds this html tags to an ul tag.
 *     "<li class=" +
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
 * @param {string} item an item from a list.
 * @param {sting} targetUlId the id tag of the target ul tag.
 * @returns {string} Html String.
 */
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

/**
 * create and display an array in traget ul tag.
 * more details see createLiBtnTemplate  function.
 * @param {array} array an array of elements
 * @param {string} targetUlId the id tag of the target ul tag.
 */
function displayHtmlArray(array, targetUlId) {
  for (const item of array) {
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
}

function relocatedItem(item, targetArrayTag) {
  createLiBtnTemplate(item.innerHTML, targetArrayTag);
  item.parentNode.remove();
}

/**
 * relocates a clicked item from ul tag to another ul tag by adding and removing the clicked item.
 * @param {string} ulClickedTag the ul clicked tag.
 * @param {string} ulTargetTag the ul target tag.
 * @param {number} maxUlTargetLength the maximum elements shown in the target ul list.
 */
function relocatedClicked(ulClickedTag, ulTargetTag, maxUlTargetLength) {
  document
    .getElementById(ulClickedTag)
    .addEventListener("click", function (event) {
      const isButton = event.target.nodeName === "BUTTON";
      if (!isButton) {
        return;
      }
      if (
        document.getElementById(ulTargetTag).children.length >=
        maxUlTargetLength
      )
        return;

      relocatedItem(event.target, ulTargetTag);
      updateCounter();
    });
}

/**
 * count and update the counter
 */
function updateCounter() {
  document.getElementById("salad-count").innerText =
    document.getElementById("salad-final").children.length;
}

displayHtmlArray(ingredients, "salad-ingredients");
relocatedClicked("salad-ingredients", "salad-final",5);
relocatedClicked("salad-final", "salad-ingredients",14);
