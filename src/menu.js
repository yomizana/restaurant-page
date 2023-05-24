/* eslint-disable no-console */
import menuItems from "./menu-items";

function menu() {
  const contentDiv = document.getElementById("content");
  const title = document.createElement("h2");
  title.textContent = "Menu";

  const menuDiv = document.createElement("div");
  menuDiv.className = "menu-container";

  contentDiv.appendChild(title);
  contentDiv.appendChild(menuDiv);

  for (let i = 0; i < 9; i += 1) {
    const card = document.createElement("div");
    card.className = "item-container";

    card.appendChild(menuItems[i].name);
    card.appendChild(menuItems[i].image);
    card.appendChild(menuItems[i].description);

    menuDiv.appendChild(card);
  }
}

export default menu;
