function footer() {
  const footerContainer = document.createElement("div");
  footerContainer.className = "footer-container";

  const footerText = document.createElement("p");
  footerText.textContent = "Tomás Caraballo ";

  const githubLink = document.createElement("a");
  githubLink.target = "_blank";
  githubLink.textContent = "@yomizana";
  githubLink.href = "https://github.com/yomizana";
  githubLink.title = "Github";

  const credits = document.createElement("p");
  credits.className = "credits";
  credits.textContent = "Background image by ";

  const creditsLink = document.createElement("a");
  creditsLink.target = "_blank";
  creditsLink.textContent = "Vino Li";
  creditsLink.href = "https://unsplash.com/photos/gGX1fJkmw3k";
  creditsLink.title = "Unsplash";

  document.body.appendChild(footerContainer);
  footerContainer.appendChild(footerText);
  footerText.appendChild(githubLink);
  footerContainer.appendChild(credits);
  credits.appendChild(creditsLink);
}

export default footer;
