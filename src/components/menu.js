import clearMain from "./clearmain";

function callMenu() {
  const mainContent = clearMain();
  let writeUpText = "todays specials are xyz.";
  const homeContent = document.createElement("div");
  homeContent.setAttribute("id", "menuContent");
  const mainHeading = document.createElement("h1");
  mainHeading.textContent = "Menu";
  const writeUp = document.createElement("h2");
  writeUp.textContent = writeUpText;

  homeContent.appendChild(mainHeading);
  homeContent.appendChild(writeUp);
  mainContent.appendChild(homeContent);

  return mainContent;
}
export default callMenu;
