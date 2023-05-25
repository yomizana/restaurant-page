/* eslint-disable no-console */
import "./styles.css";
import navbar from "./navbar";
import homepage from "./homepage";
import menu from "./menu";
import contact from "./contact";
import footer from "./footer";
import { clearContent } from "./utilities";

navbar();
homepage();
footer();

const buttons = Array.from(document.getElementsByClassName("navbar-button"));

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (buttons.indexOf(button) === 0) {
      clearContent();
      homepage();
    }
    if (buttons.indexOf(button) === 1) {
      clearContent();
      menu();
    }
    if (buttons.indexOf(button) === 2) {
      clearContent();
      contact();
    }
  });
});
