import clearMain from "./clearmain";

function callHome() {
  // when function is called it should first clear inner html of main content div.
  const mainContent = clearMain();
  let writeUpText =
    "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.";
  const homeContent = document.createElement("div");
  homeContent.setAttribute("id", "homeContent");
  const mainHeading = document.createElement("h1");
  mainHeading.textContent = "Barry's Burgers!";
  const writeUp = document.createElement("h2");
  writeUp.textContent = writeUpText;

  homeContent.appendChild(mainHeading);
  homeContent.appendChild(writeUp);
  mainContent.appendChild(homeContent);

  return mainContent;
}

export default callHome;
