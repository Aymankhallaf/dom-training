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

function displayHtmlArray(array, targetUlId) {
  for (const item of array) {
    createLiBtnTemplate(item, targetUlId);
  }
}

displayHtmlArray(ingredients, "salad-ingredients");

function relocatedItem(item, targetArrayTag) {
  createLiBtnTemplate(item.innerHTML, targetArrayTag);
  item.parentNode.remove();
}



function relocatedClicked(
  ulClickedTag,
  ulTargetTag,
  maxUlTargetLength,
  DoCountTarget,
  counterShowTag
) {
  document
    .getElementById(ulClickedTag)
    .addEventListener("click", function (event) {
        const isButton = event.target.nodeName === 'BUTTON';
        if (!isButton) {
            return;
        }
      if (
        document.getElementById(ulTargetTag).children.length >=
        maxUlTargetLength
      )
        return;

      relocatedItem(event.target, ulTargetTag);
      if (DoCountTarget) {
        document.getElementById(counterShowTag).innerText =
          document.getElementById(ulTargetTag).children.length;
      }
    });
}

relocatedClicked("salad-ingredients", "salad-final", 5, true, "salad-count");
relocatedClicked("salad-final", "salad-ingredients", 14, false, "salad-count");