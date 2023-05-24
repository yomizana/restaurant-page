function createName(name) {
  const newName = document.createElement("h4");
  newName.textContent = name;
  newName.className = "card-name";
  return newName;
}

function createImage(src) {
  const newImage = document.createElement("img");
  newImage.src = src;
  newImage.className = "card-image";
  return newImage;
}

function createDescription(description) {
  const newDescription = document.createElement("p");
  newDescription.textContent = description;
  newDescription.className = "card-description";
  return newDescription;
}

function clearContent() {
  const contentContainer = document.getElementById("content");

  while (contentContainer.firstElementChild) {
    contentContainer.firstElementChild.remove();
  }
}

export { createName, createImage, createDescription, clearContent };
