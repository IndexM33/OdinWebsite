import clearMain from "./clearmain";
import mainimage from "../assets/callus.png";

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
  const image = document.createElement("img");
  image.src = mainimage;
  homeContent.appendChild(mainHeading);
  homeContent.appendChild(writeUp);
  homeContent.appendChild(image);
  mainContent.appendChild(homeContent);

  return mainContent;
}

export default callInfo;
