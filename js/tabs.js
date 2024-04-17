/**
 * gets all the data set of ul in Dom and puts in array.
 * @param {string} dataSetToDisactive an id tag
 * @returns {array} array of data set text.
 */
function getDataSetLst(dataSetToDisactive) {
  const datalst = [];
  for (const child of document.getElementById(dataSetToDisactive).children) {
    datalst.push(child.querySelector("a").dataset.tab);
  }
  return datalst;
}

/**
 * gets an articles( or an element) by id tag.
 * @param {string} dataSetTag an id tag.
 * @returns {element} an element of Dom.
 */
function getArticle(dataSetTag) {
  return document.getElementById(dataSetTag);
}

/**
 * gets a link (or an element ) by data set
 * "#tabs-links [data-tab='" + dataSetTag + "']"
 * @param {string} dataSetTag data text set.
 * @returns {element} an element of Dom.
 */
function getLink(dataSetTag) {
  return document.querySelector("#tabs-links [data-tab='" + dataSetTag + "']");
}

/**
 * active tab and show the text of this tab.
 * @param {string} dataSetToDisactive a tag text to disactive.
 * @param {srting} dataSetToActive a tag text to active.
 */
function activeArticle(dataSetToDisactive, dataSetToActive) {
  for (const set of getDataSetLst(dataSetToDisactive)) {
    getArticle(set).classList.add("text-hidden");
    getLink(set).classList.remove("active");
  }
  getArticle(dataSetToActive).classList.remove("text-hidden");
  getLink(dataSetToActive).classList.add("active");
}

/**
 * actives and disactives tab.
 * @param {*} ulId the UL id tag.
 */
function activeTab(ulId) {
  for (const child of document.getElementById(ulId).children) {
    child.addEventListener("click", function (event) {
      activeArticle(ulId, event.target.dataset.tab);
    });
  }
}

activeTab("tabs-links");
