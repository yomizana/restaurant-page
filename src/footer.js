function footer() {
  const footerContainer = document.createElement("div");
  footerContainer.className = "footer-container";

  const footerText = document.createElement("p");
  footerText.textContent = "@yomizana";

  document.body.appendChild(footerContainer);
  footerContainer.appendChild(footerText);
}

export default footer;
