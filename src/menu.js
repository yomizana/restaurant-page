/* eslint-disable no-console */
import { createName, createImage, createDescription } from "./utilities";
import FriedCatfish from "./assets/img/friedcatfish.png";
import PaellaMixta from "./assets/img/paella-mixta.jpg";

function menu() {
  const contentDiv = document.getElementById("content");
  const title = document.createElement("h2");
  title.textContent = "Menu";

  const menuDiv = document.createElement("div");
  menuDiv.className = "menu-container";

  contentDiv.appendChild(title);
  contentDiv.appendChild(menuDiv);

  function menuItem(name, image, description) {
    return { name, image, description };
  }

  const friedCatfish = menuItem(
    createName("Fried Catfish"),
    createImage(FriedCatfish),
    createDescription(
      "Savor the crispy delight of fried catfish, featuring a golden-brown crust and moist, flaky flesh."
    )
  );

  const paellaMixta = menuItem(
    createName("Paella Mixta"),
    createImage(PaellaMixta),
    createDescription(
      "Succulent seafood and savory meats harmoniously united in a vibrant rice symphony."
    )
  );

  const menuItems = [friedCatfish, paellaMixta];

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
