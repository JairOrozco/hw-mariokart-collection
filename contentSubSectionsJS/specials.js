// Funciones importadas
import { kartInCollection } from '../utils/localStorage.js'; //Funcion que agrega o quita contenido al LocalStorage
import { alredyInCollectionList } from '../utils/localStorage.js'; // Funcion que revisa si hay algo en el LOCALSTORAGE 
import { observer } from '../utils/observer.js'  // Observador

// Funcionalidades Generales de la página

// Section Specials agregar contenido

//Nodos
let specialsSection = document.querySelector('#specialsSection')
let specialsList = [];


// Array con contenido
specialsList.push(
    {
        id: 1201,
        imgKart: '/assets/specials/golden-mario.png',
        characterName: 'Golden Mario',
        kart: 'Standard Kart',
        glider: 'Super Glider'
    },
    {
        id: 1202,
        imgKart: '/assets/specials/silver-mario.png',
        characterName: 'Silver Mario',
        kart: 'Standard Kart',
        glider: 'Super Glider'
    },
    {
        id: 1203,
        imgKart: '/assets/specials/pink-gold-peach.png',
        characterName: 'Pink Gold Peach',
        kart: 'Standard Kart',
        glider: ''
    },
    
)

// Lazy loader instancia
let lazyLoader = new IntersectionObserver(observer);

// Funcion que aggrega el contenido al navegador
function addCardsSpecials(array){
    array.forEach(item => {
        // Creando elementos

        // Card
        let card = document.createElement('div');

        // Figure e imagen
        let imgContainer = document.createElement('figure')
        let img = document.createElement('img');
        img.setAttribute('data-img', item.imgKart);
        imgContainer.append(img);

        //Lazy loader
        lazyLoader.observe(img);

        //Detalles Nombre y Kart
        let details = document.createElement('div');

        // Nombre
        let character = document.createElement('p');
        let bLabel = document.createElement('b')
        let characterName = document.createTextNode(`${item.characterName} - ${item.kart} - ${item.glider}`);
        bLabel.append(characterName);
        character.append(bLabel)

        details.append(character);

        //Button Add

        let buttonAdd = document.createElement('button');
        let textButton = document.createTextNode('Agregar a mi colección')
        buttonAdd.setAttribute('type', 'button');
        buttonAdd.append(textButton);
    

        // Agregando clases a elementos
        card.classList.add('general-card');
        card.classList.add('specials-kart');
        card.classList.add('bordersNormal');
        imgContainer.classList.add('container-img');
        details.classList.add('details')
        details.classList.add('specials-kart__details')
        character.classList.add('characterSpecial')
        buttonAdd.classList.add('addCollection');
        buttonAdd.classList.add('noInCollection')
    
        // Agregando nodos a su respectivo padre
        card.append(imgContainer, details, buttonAdd);

        // Revisa si ya está el kart en la coleccion, si si mantiene los estilos en verde
        if (alredyInCollectionList()[item.id]) {
            card.classList.add('bordersGreen');
            buttonAdd.classList.add('inCollection')
            textButton.textContent = 'En mi colección'
            buttonAdd.style.color = 'white';
        }

        //Funcionalidad del boton agregar a coleccion
        function collection() {

            if(!buttonAdd.classList.contains('inCollection')) {
                card.classList.remove('bordersNormal')
                card.classList.add('bordersGreen')

                buttonAdd.classList.remove('noInCollection')
                buttonAdd.classList.add('inCollection')

                textButton.textContent = 'En mi colección';
                buttonAdd.style.color = 'white';

                kartInCollection(item);

            } else {
                card.classList.remove('bordersGreen')
                card.classList.add('bordersNormal')

                buttonAdd.classList.remove('inCollection')
                buttonAdd.classList.add('noInCollection')
                
                textButton.textContent = 'Agregar a mi colección';
                buttonAdd.style.color = 'white';

                kartInCollection(item);
            }
        } 
        buttonAdd.addEventListener('click', collection)
    
        // Agregando a section en HTML
        specialsSection.append(card);
    })
}
addCardsSpecials(specialsList);