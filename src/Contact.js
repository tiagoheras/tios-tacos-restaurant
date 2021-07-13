import loadFooter from "./Footer";
import loadHeading from "./Heading";

export default function loadContactpage() {
    const content = document.getElementById("content");

    loadHeading('Contact Us');

    const contactContent = document.createElement('div');
    contactContent.id = "contact-content";

    const emailContainer = document.createElement('div');

    const emailTitle = document.createElement('h3');
    emailTitle.innerText = "Email";

    const email = document.createElement('p');
    email.innerText = "support@tiostacos.com";

    emailContainer.appendChild(emailTitle);
    emailContainer.appendChild(email);

    const phoneContainer = document.createElement('div');

    const phoneTitle = document.createElement('h3');
    phoneTitle.innerText = "Phone";

    const phone = document.createElement('p');
    phone.innerText = "(1) 111-1111";

    phoneContainer.appendChild(phoneTitle);
    phoneContainer.appendChild(phone);

    const mapContainer = document.createElement('div');
    mapContainer.id = 'map-container'

    const mapTitle = document.createElement('h3');
    mapTitle.innerText = "Location";

    const mapAnchor = document.createElement('a');
    mapAnchor.href = "https://goo.gl/maps/Zg1p2soVf89xdnjh6";

    const map = document.createElement('img');
    map.src = "./images/map.png";

    contactContent.appendChild(emailContainer)
    contactContent.appendChild(phoneContainer)

    mapAnchor.appendChild(map)
    mapContainer.appendChild(mapTitle);
    mapContainer.appendChild(mapAnchor);
    contactContent.appendChild(mapContainer);
    content.appendChild(contactContent);

    loadFooter();
}