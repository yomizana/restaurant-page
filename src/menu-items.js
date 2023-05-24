import { createName, createImage, createDescription } from "./utilities";
import FriedCatfish from "./assets/img/friedcatfish.png";
import PaellaMixta from "./assets/img/paella-mixta.jpg";
import ShrimpAndAvocadoTacoSalad from "./assets/img/shrimp-avocado-taco-salad.jpg";
import ParmesanCrustedTilapia from "./assets/img/parmesan-tilapia.jpg";
import BakedFishSticks from "./assets/img/baked-fish-sticks.jpg";
import SalmonBurger from "./assets/img/salmon-burger.jpg";

function menuItem(name, image, description) {
  return { name, image, description };
}

const friedCatfish = menuItem(
  createName("Fried Catfish"),
  createImage(FriedCatfish),
  createDescription(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet sagittis dui. Duis nec odio eros."
  )
);

const paellaMixta = menuItem(
  createName("Paella Mixta"),
  createImage(PaellaMixta),
  createDescription(
    "Praesent convallis mauris eu mauris vestibulum tincidunt. Integer condimentum, erat et bibendum fermentum."
  )
);

const recipe3 = menuItem(
  createName("Shrimp and Avocado Taco Salad"),
  createImage(ShrimpAndAvocadoTacoSalad),
  createDescription(
    "Cras sit amet nunc sed turpis lacinia pulvinar ut vitae neque. Maecenas fringilla neque ex, feugiat ornare sapien."
  )
);

const recipe4 = menuItem(
  createName("Parmesan Crusted Tilapia"),
  createImage(ParmesanCrustedTilapia),
  createDescription(
    "Morbi rutrum lacinia risus vel lacinia. Nam risus eros, sodales sed odio a, ullamcorper accumsan quam. Nam posuere."
  )
);

const recipe5 = menuItem(
  createName("Baked Fish Sticks"),
  createImage(BakedFishSticks),
  createDescription(
    "Etiam convallis lectus ante, in consequat tortor cursus vel. Pellentesque sollicitudin volutpat leo nec fermentum. Etiam maximus mauris."
  )
);

const recipe6 = menuItem(
  createName("Salmon Burger"),
  createImage(SalmonBurger),
  createDescription(
    "Duis dictum magna sapien, ac consectetur risus pulvinar commodo. Vestibulum sit amet urna sed erat auctor gravida tempus."
  )
);

const menuItems = [
  friedCatfish,
  paellaMixta,
  recipe3,
  recipe4,
  recipe5,
  recipe6,
];

export default menuItems;
