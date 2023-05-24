function navbar() {
  const contentContainer = document.getElementById("content");
  const navbarContainer = document.createElement("div");
  navbarContainer.className = "navbar-container";

  const pageList = document.createElement("ul");
  const homeItem = document.createElement("li");
  const homeButton = document.createElement("button");
  homeButton.textContent = "Home";

  const menuItem = document.createElement("li");
  const menuButton = document.createElement("button");
  menuButton.textContent = "Menu";

  const contactItem = document.createElement("li");
  const contactButton = document.createElement("button");
  contactButton.textContent = "Contact";

  document.body.insertBefore(navbarContainer, contentContainer);
  navbarContainer.appendChild(pageList);

  pageList.appendChild(homeItem);
  homeItem.appendChild(homeButton);

  pageList.appendChild(menuItem);
  menuItem.appendChild(menuButton);

  pageList.appendChild(contactItem);
  contactItem.appendChild(contactButton);
}

export default navbar;
