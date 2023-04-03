/* eslint-disable no-console */
function homepage() {
  const contentDiv = document.getElementById("content");
  const title = document.createElement("h2");
  title.textContent = "Yomi's Restaurant Page";

  const description = document.createElement("p");
  description.textContent =
    "If you were looking for a mockup restaurant page, " +
    "you found it! Here we sell the absolute best mockup meals your mockup pallate " +
    "will ever taste!";

  contentDiv.appendChild(title);
  contentDiv.appendChild(description);
}

export default homepage;
