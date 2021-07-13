export default function loadHeading(text) {
    const content = document.getElementById("content");

    const homeHeader = document.createElement('div');
    homeHeader.id = "home-header";

    const heading = document.createElement('h1');
    heading.innerText = text;

    homeHeader.appendChild(heading);

    content.appendChild(homeHeader);
}