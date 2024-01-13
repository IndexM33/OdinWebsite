import clearMain from "./clearmain";
// import "../call-us.png";

function callInfo() {
  // when function is called it should first clear inner html of main content div.
  const mainContent = clearMain();
  let writeUpText = "call us on : 01823 548 2545";
  const homeContent = document.createElement("div");
  homeContent.setAttribute("id", "infoContent");
  const mainHeading = document.createElement("h1");
  mainHeading.textContent = "info page!";
  const writeUp = document.createElement("h2");
  writeUp.textContent = writeUpText;

  homeContent.appendChild(mainHeading);
  homeContent.appendChild(writeUp);
  mainContent.appendChild(homeContent);

  return mainContent;
}

export default callInfo;
