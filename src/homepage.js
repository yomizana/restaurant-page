/* eslint-disable no-console */
export default function homepage() {
  const contentDiv = document.getElementById("content");
  const title = document.createElement("h2");
  title.textContent = "Restaurant Page";

  const description = document.createElement("p");
  description.textContent = "Placeholder description text.";

  contentDiv.appendChild(title);
  contentDiv.appendChild(description);
}
