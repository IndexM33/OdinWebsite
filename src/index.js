import "./main.css";
import callHome from "./components/home";
import callMenu from "./components/menu";
import callInfo from "./components/info";

document.addEventListener("DOMContentLoaded", (event) => {
  const homeButton = document.querySelector("#home");
  const menuButton = document.querySelector("#menu");
  const infoButton = document.querySelector("#info");
  homeButton.addEventListener("click", callHome);
  menuButton.addEventListener("click", callMenu);
  infoButton.addEventListener("click", callInfo);
});
