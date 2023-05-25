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

  menuItems.forEach((item) => {
    const card = document.createElement("div");
    card.className = "item-container";

    card.appendChild(item.name);
    card.appendChild(item.image);
    card.appendChild(item.description);

    menuDiv.appendChild(card);
  });
}

export default menu;
