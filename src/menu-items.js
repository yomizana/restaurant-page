import { createName, createImage, createDescription } from "./utilities";
import FriedCatfish from "./assets/img/friedcatfish.png";
import PaellaMixta from "./assets/img/paella-mixta.jpg";

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

const recipe3 = menuItem(
  createName("Paella Mixta"),
  createImage(PaellaMixta),
  createDescription(
    "Succulent seafood and savory meats harmoniously united in a vibrant rice symphony."
  )
);

const recipe4 = menuItem(
  createName("Paella Mixta"),
  createImage(PaellaMixta),
  createDescription(
    "Succulent seafood and savory meats harmoniously united in a vibrant rice symphony."
  )
);

const recipe5 = menuItem(
  createName("Paella Mixta"),
  createImage(PaellaMixta),
  createDescription(
    "Succulent seafood and savory meats harmoniously united in a vibrant rice symphony."
  )
);

const recipe6 = menuItem(
  createName("Paella Mixta"),
  createImage(PaellaMixta),
  createDescription(
    "Succulent seafood and savory meats harmoniously united in a vibrant rice symphony."
  )
);

const recipe7 = menuItem(
  createName("Paella Mixta"),
  createImage(PaellaMixta),
  createDescription(
    "Succulent seafood and savory meats harmoniously united in a vibrant rice symphony."
  )
);

const recipe8 = menuItem(
  createName("Paella Mixta"),
  createImage(PaellaMixta),
  createDescription(
    "Succulent seafood and savory meats harmoniously united in a vibrant rice symphony."
  )
);

const recipe9 = menuItem(
  createName("Paella Mixta"),
  createImage(PaellaMixta),
  createDescription(
    "Succulent seafood and savory meats harmoniously united in a vibrant rice symphony."
  )
);

const menuItems = [
  friedCatfish,
  paellaMixta,
  recipe3,
  recipe4,
  recipe5,
  recipe6,
  recipe7,
  recipe8,
  recipe9,
];

export default menuItems;
