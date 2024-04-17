const tabHistory = document.querySelector('a[href="#histoiry"]');
const tabValues = document.querySelector('a[href="#values"]');
const tabServices = document.querySelector('a[href="#services"]');
const tabContact = document.querySelector('a[href="#contact"]');
const article1 = document.getElementById("tabs-tab1");
const article2 = document.getElementById("tabs-tab2");

console.log(article2);

tabHistory.addEventListener("click", function (event) {
  console.log(tabHistory.dataset.tab);
  
  article1.classList.toggle("text-hidden");
  article2.classList.toggle("text-hidden");
  
  if (tabHistory.dataset.tab === "tabs-tab1") {
    tabHistory.classList.toggle("main-nav-link.active");
    
  }
});



const tabLinks = document.getElementById('tabs-links')
console.log(tabLinks.dataset)
function getTabsName () {

}

