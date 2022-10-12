// Funciones importadas
import { kartInCollection } from '../utils/localStorage.js'; //Funcion que agrega o quita contenido al LocalStorage
import { alredyInCollectionList } from '../utils/localStorage.js'; // Funcion que revisa si hay algo en el LOCALSTORAGE 
import { observer } from '../utils/observer.js'  // Observador

// Funcionalidades Generales de la página

// Section Blister Paravela agregando contenido

// Nodos
const individualBlisterGliderSection = document.querySelector('#individualBlisterGliderSection');
let kartsListBlisterGlider = [];


// Array con contenido
kartsListBlisterGlider.push(
    {
        id: 201,
        imgKart: '/assets/glider/mario-standard.png',
        characterName: 'Mario Bros',
        kart: 'Standard Kart',
        glider: 'Super Glider'
    },
    {
        id: 202,
        imgKart: '/assets/glider/mario-pipeFrame.png',
        characterName: 'Mario Bros',
        kart: 'Pipe Frame',
        glider: 'Parachute'
    },
    {
        id: 203,
        imgKart: '/assets/glider/luigi-pWing.png',
        characterName: 'Luigi',
        kart: 'P-Wing',
        glider: 'Cloud Glider'
    },
    {
        id: 204,
        imgKart: '/assets/glider/peach-bDasher.png',
        characterName: 'Peach',
        kart: 'B-Dasher',
        glider: 'Peach Parasol'
    },
    {
        id: 205,
        imgKart: '/assets/glider/daisy-standard.png',
        characterName: 'Princess Daisy',
        kart: 'Standard Kart',
        glider: 'Flower Glider'
    },
    {
        id: 206,
        imgKart: '/assets/glider/rosalina-pWing.png',
        characterName: 'Rosalina',
        kart: 'P-Wing',
        glider: 'Cloud Glider'
    },
    {
        id: 207,
        imgKart: '/assets/glider/mario-standard.png',
        characterName: 'Yoshi',
        kart: 'Sports Coupe',
        glider: 'Parafoil'
    },
    {
        id: 208,
        imgKart: '/assets/glider/blueYoshi-pipeFrame.png',
        characterName: 'Blue Yoshi',
        kart: 'Pipe Frame',
        glider: 'Super Glider'
    },
    {
        id: 209,
        imgKart: '/assets/glider/toad-pWing.png',
        characterName: 'Toad',
        kart: 'P-Wing',
        glider: 'Plane Glider'
    },
    {
        id: 210,
        imgKart: '/assets/glider/donkeyKong-bDasher.png',
        characterName: 'Donkey Kong',
        kart: 'B-Dasher',
        glider: 'Super Glider'
    },
    {
        id: 211,
        imgKart: '/assets/glider/bowser-standard.png',
        characterName: 'Bowser',
        kart: 'Standard Kart',
        glider: 'Bowser Kite'
    },
    {
        id: 212,
        imgKart: '/assets/glider/bowserJr-sportsCoupe.png',
        characterName: 'Bowser Jr.',
        kart: 'Sports Coupe',
        glider: 'Bowser Kite'
    },
    {
        id: 213,
        imgKart: '/assets/glider/shyGuy-bDasher.png',
        characterName: 'Shy Guy',
        kart: 'B-Dasher',
        glider: 'Plane Glider'
    },
    {
        id: 214,
        imgKart: '/assets/glider/wario-sportsCoupe.png',
        characterName: 'Wario',
        kart: 'Sports Coupe',
        glider: 'Waddle Wing'
    },
    {
        id: 215,
        imgKart: '/assets/glider/wario-bDasher.png',
        characterName: 'Wario',
        kart: 'B-Dasher',
        glider: 'Wario Wing'
    },
    {
        id: 216,
        imgKart: '/assets/glider/lakitu-standard.png',
        characterName: 'Lakitu',
        kart: 'Standard Kart',
        glider: 'Parafoil'
    },
)

// Lazy loader instancia
let lazyLoader = new IntersectionObserver(observer);


// Funcion para agregar contenido al navegador
function addCardsGlider(array) {
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

        // Nombre y Kart
        let character = document.createElement('p');
        let bLabelCharacter = document.createElement('b')
        let characterName = document.createTextNode(`${item.characterName} - ${item.kart}`);
        bLabelCharacter.append(characterName)
        character.append(bLabelCharacter);

        //Paravela
        let glider = document.createElement('p');
        let bLabelGlider = document.createElement('b')
        let textBLabelGlider = document.createTextNode('Planeador: ')
        bLabelGlider.append(textBLabelGlider);
        glider.append(bLabelGlider);
        let gliderName = document.createTextNode(item.glider);
        glider.append(gliderName);

        details.append(character, glider);

        //Button Add
        let buttonAdd = document.createElement('button');
        let textButton = document.createTextNode('Agregar a mi colección')
        buttonAdd.setAttribute('type', 'button');
        buttonAdd.append(textButton);
    

        // Agregando clases a elementos
        card.classList.add('general-card');
        card.classList.add('blister-glider-kart');
        card.classList.add('bordersNormal');
        imgContainer.classList.add('container-img');
        details.classList.add('details')
        character.classList.add('characterBlisterGlider')
        glider.classList.add('characterBlisterGlider');
        buttonAdd.classList.add('addCollection');
        buttonAdd.classList.add('noInCollection');

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
            
                textButton.textContent = 'En mi colección'

                buttonAdd.style.color = 'white';
            
                kartInCollection(item);
            
            } else {
                card.classList.remove('bordersGreen')
                card.classList.add('bordersNormal')
            
                buttonAdd.classList.remove('inCollection')
                buttonAdd.classList.add('noInCollection')


                textButton.textContent = 'Agregar a mi colección'

                buttonAdd.style.color = 'white';

                kartInCollection(item);
            }
        }

        buttonAdd.addEventListener('click', collection)

    
        // Agregando a section en HTML
        individualBlisterGliderSection.append(card);
    });
}
addCardsGlider(kartsListBlisterGlider);












