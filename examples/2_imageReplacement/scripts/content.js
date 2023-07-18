let changeColor = document.getElementById("change-button");

// Creates the event when the button is clicked to call the color changing
changeColor.addEventListener("click", async () => {
  //take the image of the input
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: changeImages,
  });
});

// The actual function that will be executed to change the page color
function changeImages() {
  let images = document.querySelectorAll("img");
  images.forEach((img) => {
    img.setAttribute(
      "src",
      "https://i2-prod.mirror.co.uk/incoming/article26254876.ece/ALTERNATES/s615b/2_Beijing-2022-Winter-Olympic-Games-Day-Thirteen.jpg"
    );
    img.setAttribute(
      "data-src",
      "https://i2-prod.mirror.co.uk/incoming/article26254876.ece/ALTERNATES/s615b/2_Beijing-2022-Winter-Olympic-Games-Day-Thirteen.jpg"
    );
    img.setAttribute(
      "srcset",
      "https://i2-prod.mirror.co.uk/incoming/article26254876.ece/ALTERNATES/s615b/2_Beijing-2022-Winter-Olympic-Games-Day-Thirteen.jpg"
    );
    img.setAttribute(
      "data-srcset",
      "https://i2-prod.mirror.co.uk/incoming/article26254876.ece/ALTERNATES/s615b/2_Beijing-2022-Winter-Olympic-Games-Day-Thirteen.jpg"
    );
  });

  let sources = document.querySelectorAll("source");
  sources.forEach((source) => {
    source.setAttribute(
      "src",
      "https://i2-prod.mirror.co.uk/incoming/article26254876.ece/ALTERNATES/s615b/2_Beijing-2022-Winter-Olympic-Games-Day-Thirteen.jpg"
    );
    source.setAttribute(
      "data-src",
      "https://i2-prod.mirror.co.uk/incoming/article26254876.ece/ALTERNATES/s615b/2_Beijing-2022-Winter-Olympic-Games-Day-Thirteen.jpg"
    );
    source.setAttribute(
      "srcset",
      "https://i2-prod.mirror.co.uk/incoming/article26254876.ece/ALTERNATES/s615b/2_Beijing-2022-Winter-Olympic-Games-Day-Thirteen.jpg"
    );
    source.setAttribute(
      "data-srcset",
      "https://i2-prod.mirror.co.uk/incoming/article26254876.ece/ALTERNATES/s615b/2_Beijing-2022-Winter-Olympic-Games-Day-Thirteen.jpg"
    );
  });
}
