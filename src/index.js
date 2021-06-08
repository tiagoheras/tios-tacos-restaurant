import loadHomepage from './Homepage';
import loadContactpage from './Contact';
import loadMenu from './Menu';

const content = document.getElementById('content');

const header = document.createElement('header');

const title = document.createElement('h1');
title.innerHTML = "Tio's Tacos";

const tabsContainer = document.createElement('div');
tabsContainer.id = "tabs-container";

const homeTab = document.createElement('div');
homeTab.className = "tab";
homeTab.innerHTML = "<h2>Home</h2>";

const menuTab = document.createElement('div');
menuTab.className = "tab";
menuTab.innerHTML = "<h2>Menu</h2>";

const contactTab = document.createElement('div');
contactTab.className = "tab";
contactTab.innerHTML = "<h2>Contact</h2>";

header.appendChild(title)

tabsContainer.appendChild(homeTab);
tabsContainer.appendChild(menuTab);
tabsContainer.appendChild(contactTab);

header.appendChild(tabsContainer);
document.body.insertBefore(header, content);

homeTab.addEventListener('click', () => {
    content.innerHTML = "";
    loadHomepage();
})

menuTab.addEventListener('click', () => {
    content.innerHTML = "";
    loadMenu();
})

contactTab.addEventListener('click', () => {
    content.innerHTML = "";
    loadContactpage();
})

loadHomepage()