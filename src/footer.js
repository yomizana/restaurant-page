function footer() {
  const contentDiv = document.getElementById("content");
  const footerContainer = document.createElement("div");
  footerContainer.className = "footer-container";

  const footerText = document.createElement("p");
  footerText.textContent = "@yomizana";

  const credits = document.createElement("p");
  credits.textContent = "Background image by ";

  const creditsLink = document.createElement("a");
  creditsLink.target = "_blank";
  creditsLink.textContent = "Vino Li";
  creditsLink.href = "https://unsplash.com/photos/gGX1fJkmw3k";
  creditsLink.title = "Unsplash";

  document.body.appendChild(footerContainer);
  footerContainer.appendChild(footerText);
  footerContainer.appendChild(credits);
  credits.appendChild(creditsLink);
}

export default footer;
