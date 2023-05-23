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

export { createName, createImage, createDescription };
