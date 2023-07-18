function changeBgColor() {
if (document.body.style.backgroundColor == "red") {
    document.body.style.backgroundColor = "yellow";
  } else {
    document.body.style.backgroundColor = "red";
  }


}

chrome.action.onClicked.addListener((tab) => {
  if (!tab.url.includes('chrome://')) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: changeBgColor
    });
  }
});
