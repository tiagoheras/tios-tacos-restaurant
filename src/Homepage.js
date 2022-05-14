import loadHeading from "./Heading";
import loadFooter from "./Footer";


export default function loadHomepage() {
    loadHeading('About Us');
// Chef Image 

    const chefImgContainer = document.createElement('div');
    chefImgContainer.id = "chef-img-container";

    const chefTitle = document.createElement('h2');
    chefTitle.style.marginBottom = 0;
    chefTitle.style.textDecoration = "underline"
    chefTitle.innerText = "Welcome to Tio's Tacos"

    chefImgContainer.appendChild(chefTitle)

    const chefImg = document.createElement('img');
    chefImg.src = "./images/milanesas.JPG";
    chefImg.style.height = "350px";
    chefImg.style.borderRadius = "50%";

    chefImgContainer.appendChild(chefImg);

    const chefHeader = document.createElement('h3');
    chefHeader.innerText = "We are a Family Business"

    chefImgContainer.appendChild(chefHeader)

    const paragraph = document.createElement('p');
    paragraph.innerHTML = "Come eat the best tacos of your entire life in Tio's tacos restaurant. We offer a great variety of typical mexican tacos for you to enjoy and have a perfect culinary experience!";

    chefImgContainer.appendChild(paragraph);

    content.appendChild(chefImgContainer);

    const speciality = document.createElement('div');
    speciality.id = "speciality";

    const specialityContent = document.createElement('div');
    specialityContent.id = 'speciality-content';

    const heading = document.createElement('h2');
    heading.innerHTML = 'Our Speciality: <span>Tacos</span>'
    speciality.appendChild(heading);
    const specialParagraph = document.createElement('p');
    specialParagraph.innerText = "A taco is a traditional Mexican dish consisting of a small hand-sized corn or wheat tortilla topped with a filling. The tortilla is then folded around the filling and eaten by hand. A taco can be made with a variety of fillings, including beef, pork, chicken, seafood, beans, vegetables, and cheese, allowing for great versatility and variety. They are often garnished with various condiments, such as salsa, guacamole, or sour cream, and vegetables, such as lettuce, onion, tomatoes, and chiles."
    specialityContent.appendChild(specialParagraph);

    // Taco Image

    const hoverMe = document.createElement('img');
    hoverMe.src = "./images/hover_me.png";
    hoverMe.id = "hover-me"
    hoverMe.style.height = "80px";

    specialityContent.appendChild(hoverMe)

    const tacoImgContainer = document.createElement('div');
    tacoImgContainer.id = "taco-img-container";

    const tacoImg = document.createElement('img');
    tacoImg.id = "taco-img";
    tacoImg.src = "./images/taco.png";
    tacoImg.style.height = "270px"

    tacoImgContainer.appendChild(tacoImg);
    specialityContent.appendChild(tacoImgContainer);

    speciality.appendChild(specialityContent)

    content.appendChild(speciality);

    const menuButton = document

    loadFooter();
}

