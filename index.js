// Funciones importadas
import { openCloseMenu } from './src/utils/mobile-menu.js'; // Funcion para abrir y cerrar el menu mobile


// Nodos del menu
const menuButton = document.querySelector('#menuButton');
const menu = document.querySelector('#menu');
const moreCategories = document.querySelector('#moreCategories');


// Abrir y cerrar el menu
menuButton.addEventListener('click', openCloseMenu);

// Quitar negritas a extra renglon en el menu mobile
moreCategories.style.fontWeight = '400';
