function getDataSetLst(tagtext) {
  const datalst = [];
  for (const child of document.getElementById(tagtext).children) {
    datalst.push(child.querySelector("a").dataset.tab);
  }
  return datalst;
}

function getArticls(dataSetTag) {
  return document.getElementById(dataSetTag);
}
function getLink(dataSetTag) {
  return document.querySelector("#tabs-links [data-tab='" + dataSetTag + "']");
}

function hideArticlesExcepetOne(tagtext, showSet) {
  for (const set of getDataSetLst(tagtext)) {
    getArticls(set).classList.add("text-hidden");
    getLink(set).classList.remove("active");
  }
  getArticls(showSet).classList.remove("text-hidden");
  getLink(showSet).classList.add("active");
}


const tabsLinks = document.getElementById("tabs-links").children;

function activeTab() {
  for (const child of tabsLinks) {
    child.classList.remove("active");
    child.addEventListener("click", function (event) {
      event.target.classList.add("active");
      hideArticlesExcepetOne("tabs-links", event.target.dataset.tab);
    });
  }
}

activeTab();

