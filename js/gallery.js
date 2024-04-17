const galaryThumbs = document
  .getElementById("gallery-thumbs")
  .getElementsByTagName("img");
const galaryTitle = document.getElementById("gallery-title");
const galaryDescription = document.getElementById("gallery-description");
const galleryPicture = document.getElementById("gallery-picture");

// galaryThumbs.addEventListener("pointerenter", function (event) {
//   console.log(event.target.getElementsByTagName("img"));

// });

// galaryThumbs.addEventListener("pointerout", function (event) {
//   console.log("out");
// });

console.log(galaryThumbs);
for (const child of galaryThumbs) {
  console.log(child);
  child.addEventListener("pointerover", function (event) {
    galleryPicture.src = child.src;
  });
}
