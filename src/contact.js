/* eslint-disable no-console */
import Facebook from "./assets/icon/facebook.svg";
import Instagram from "./assets/icon/instagram.png";
import Twitter from "./assets/icon/twitter.png";

function contact() {
  const contentDiv = document.getElementById("content");
  const title = document.createElement("h2");
  title.textContent = "Contact us";

  const descriptionDiv = document.createElement("div");
  descriptionDiv.className = "container";

  const description = document.createElement("p");
  description.textContent = `You can reach us in the following ways`;
  description.className = "contact-info";

  const contactDiv = document.createElement("div");
  contactDiv.className = "container";

  const emailTitle = document.createElement("h3");
  emailTitle.textContent = "Email";

  const emailList = document.createElement("ul");
  const firstEmail = document.createElement("li");
  firstEmail.textContent = "inquiries@notarealrestaurant.com";

  const secondEmail = document.createElement("li");
  secondEmail.textContent = "business@notarealrestaurant.com";

  const phoneTitle = document.createElement("h3");
  phoneTitle.textContent = "Phone Number";

  const phoneList = document.createElement("ul");

  const phoneNumber = document.createElement("li");
  phoneNumber.textContent = "+1-202-555-0181";

  const locationDiv = document.createElement("div");
  locationDiv.className = "container";

  const locationTitle = document.createElement("h3");
  locationTitle.textContent = "Location";

  const location = document.createElement("p");
  location.textContent = "3105 Wescam Court, Reno, NV";

  const socialMediaDiv = document.createElement("div");
  socialMediaDiv.className = "social-media-container";

  const socialMediaTitle = document.createElement("h3");
  socialMediaTitle.textContent = "Social Media";

  const socialMediaIconsContainer = document.createElement("div");
  socialMediaIconsContainer.className = "social-media-icons-container";

  const facebookIcon = document.createElement("img");
  facebookIcon.className = "icon";
  facebookIcon.src = Facebook;

  const instagramIcon = document.createElement("img");
  instagramIcon.className = "icon";
  instagramIcon.src = Instagram;

  const twitterIcon = document.createElement("img");
  twitterIcon.className = "icon";
  twitterIcon.src = Twitter;

  contentDiv.appendChild(title);
  contentDiv.appendChild(descriptionDiv);
  descriptionDiv.appendChild(description);
  contentDiv.appendChild(contactDiv);
  contactDiv.appendChild(emailTitle);
  contactDiv.appendChild(emailList);
  emailList.appendChild(firstEmail);
  emailList.appendChild(secondEmail);
  contactDiv.appendChild(phoneTitle);
  contactDiv.appendChild(phoneList);
  phoneList.appendChild(phoneNumber);
  contentDiv.appendChild(socialMediaDiv);
  socialMediaDiv.appendChild(socialMediaTitle);
  socialMediaDiv.appendChild(socialMediaIconsContainer);
  socialMediaIconsContainer.appendChild(facebookIcon);
  socialMediaIconsContainer.appendChild(instagramIcon);
  socialMediaIconsContainer.appendChild(twitterIcon);
}

export default contact;
