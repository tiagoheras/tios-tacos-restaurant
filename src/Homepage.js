export default function loadHomepage() {
    const content = document.getElementById("content");

    const homeHeader = document.createElement('div');
    homeHeader.id = "home-header";

    const heading = document.createElement('h1');
    heading.innerText = "About Us";

    homeHeader.appendChild(heading);

    content.appendChild(homeHeader);

    const tacoImgContainer = document.createElement('div');
    tacoImgContainer.id = "taco-img-container";

    const img = document.createElement('img');
    img.id = "taco-img"
    img.src = "https://www.pngfind.com/pngs/b/263-2631637_taco-clipart-png.png";
    // img.src = "https://www.pequerecetas.com/wp-content/uploads/2020/10/tacos-mexicanos.jpg";
    img.style.height = "450px"

    const paragraph = document.createElement('p');
    paragraph.innerHTML = "Come eat the best tacos of your entire life in Tio's tacos restaurant. We offer a great variety of typical mexican tacos for you to enjoy and have a perfect culinary experience!";

    tacoImgContainer.appendChild(img);
    content.appendChild(tacoImgContainer);
    content.appendChild(paragraph);
}

