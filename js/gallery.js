const galaryThumbs = document
  .getElementById("gallery-thumbs")
  .getElementsByTagName("img");

for (const child of galaryThumbs) {
  child.addEventListener("pointerover", function (event) {
    document.getElementById("gallery-picture").src = child.src;
    document.getElementById("gallery-title").innerText = child.dataset.title;
    document.getElementById("gallery-description").innerText =
      child.dataset.description;
    child.dataset.title;
  });

}
