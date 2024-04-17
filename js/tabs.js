const tabHistory = document.querySelector('a[href="#histoiry"]');
const tabValues = document.querySelector('a[href="#values"]');
const tabServices = document.querySelector('a[href="#services"]');
const tabContact = document.querySelector('a[href="#contact"]');

// console.log(article2);

tabHistory.addEventListener("click", function (event) {
  //   console.log(tabHistory.dataset.tab);

  article1.classList.toggle("text-hidden");
  article2.classList.toggle("text-hidden");

  if (tabHistory.dataset.tab === "tabs-tab1") {
    tabHistory.classList.toggle("main-nav-link.active");
  }
});

// tabLinks.addEventListener("click", function (event) {
//   console.log(event.target);
//   for (const child of this.children) {
//     console.log(child.querySelector("a").dataset);
//   }
// });

function getDataSetLst(tagtext) {
  const datalst = [];
  for (const child of document.getElementById(tagtext).children) {
    datalst.push(child.querySelector("a").dataset.tab);
  }
  return datalst;
}


function getArticls(idTag) {
  return document.getElementById(idTag);
}

// console.log(getArticls(getDataSetLst("tabs-links")[0]));
// console.log(getArticls("tabs-tab1"));