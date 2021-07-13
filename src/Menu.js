import loadFooter from "./Footer";
import loadHeading from "./Heading";

export default function loadMenu() {
    const content = document.getElementById('content');
    loadHeading('Menu');

    const menuGrid = document.createElement('div');
    menuGrid.id = 'menu-grid';

    content.appendChild(menuGrid);

    const srcList = ["https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/types-of-tacos-carne-asada-1617315824.jpeg?crop=1.00xw:0.669xh;0,0.186xh&resize=768:*", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/types-of-tacos-shrimp-tacos-1617367356.jpeg?crop=1.00xw:0.667xh;0,0.117xh&resize=768:*", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/types-of-tacos-barbacoa-1617313855.jpeg?crop=1.00xw:0.667xh;0,0.111xh&resize=768:*", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/types-of-tacos-birria-tacos-1617314172.jpeg?crop=1.00xw:0.801xh;0,0.0830xh&resize=768:*", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/types-of-tacos-al-pastor-1617313189.jpg?crop=0.541xw:0.811xh;0.250xw,0.163xh&resize=768:*", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/types-of-tacos-tacos-de-pescado-1617315044.jpeg?crop=0.781xw:0.585xh;0.0459xw,0.166xh&resize=768:*", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/types-of-tacos-tinga-tacos-1617376804.jpg?crop=1.00xw:0.707xh;0,0.0721xh&resize=768:*", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/types-of-tacos-campechanos-1617316010.jpeg?crop=0.714xw:1.00xh;0,0&resize=768:*", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/types-of-tacos-carnitas-1617369854.jpeg?crop=1xw:0.8670520231213873xh;center,top&resize=768:*", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/types-of-tacos-chorizo-tacos-1617370270.jpeg?crop=1.00xw:0.667xh;0,0.183xh&resize=768:*"];
    const namesList = ["Carne Asada", "Shrimp Tacos", "Barbacoa", "Tacos de Birria", "Tacos Al Pastor", "Tacos de Pescado", "Tinga Tacos", "Campechanos", "Carnitas", "Chorizo Tacos"];

    for (let tacoIndex = 0; tacoIndex < namesList.length; tacoIndex++) {
        const tacoContainer = document.createElement('div');
        tacoContainer.className = "taco-container";
        tacoContainer.style.backgroundColor = "#CF0921"

        const tacoImg = document.createElement('img');
        tacoImg.style.borderRadius = "5px 5px 0 0 "
        tacoImg.height = 300;
        tacoImg.src = srcList[tacoIndex];

        const tacoName = document.createElement('h3');
        tacoName.innerText = namesList[tacoIndex];
        tacoName.style.margin = "10px 0"

        tacoContainer.appendChild(tacoImg);
        tacoContainer.appendChild(tacoName);
        menuGrid.appendChild(tacoContainer);
    }
    loadFooter();
}