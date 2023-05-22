/* eslint-disable no-console */
function homepage() {
  const contentDiv = document.getElementById("content");
  const title = document.createElement("h2");
  title.textContent = "Yomi's Restaurant Page";

  const descriptionDiv = document.createElement("div");
  descriptionDiv.className = "container";

  const description = document.createElement("p");
  description.textContent =
    "If you were looking for a mockup restaurant page, " +
    "you found it! Here we sell the absolute best mockup meals your mockup pallate " +
    "will ever taste!";

  const hoursDiv = document.createElement("div");
  hoursDiv.className = "container";

  const hoursTitle = document.createElement("h3");
  hoursTitle.textContent = "Hours";

  const hoursList = document.createElement("ul");
  const monSatHours = document.createElement("li");
  monSatHours.textContent = "Monday - Saturday: 8am - 10pm";

  const sunHours = document.createElement("li");
  sunHours.textContent = "Sunday: 8am - 8pm";

  const locationDiv = document.createElement("div");
  locationDiv.className = "container";

  const locationTitle = document.createElement("h3");
  locationTitle.textContent = "Location";

  const location = document.createElement("p");
  location.textContent = "3105 Wescam Court, Reno, NV";

  contentDiv.appendChild(title);
  contentDiv.appendChild(descriptionDiv);
  descriptionDiv.appendChild(description);
  contentDiv.appendChild(hoursDiv);
  hoursDiv.appendChild(hoursTitle);
  hoursDiv.appendChild(hoursList);
  hoursList.appendChild(monSatHours);
  hoursList.appendChild(sunHours);
  contentDiv.appendChild(locationDiv);
  locationDiv.appendChild(locationTitle);
  locationDiv.appendChild(location);
}

export default homepage;
