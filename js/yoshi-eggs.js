// Funcionalidades Generales de la página

// Abrir y cerrar el menu
const menuButton = document.querySelector('#menuButton');
const menu = document.querySelector('#menu');
const moreCategories = document.querySelector('#moreCategories')

function openCloseMenu(){

    menuButton.classList.toggle('hamburguerMenu')
    menuButton.classList.toggle('closeImgMenu')

    menu.classList.toggle('inactive');
};

menuButton.addEventListener('click', openCloseMenu);

moreCategories.style.fontWeight = '400';


// Section Yoshi Eggs agregando contenido

// Variables
let yoshiEggsSection = document.querySelector('#yoshiEggsSection')
let yoshiEggsList = [];

// Array con contenido
yoshiEggsList.push(
    {
        id: 1001,
        imgKart: '/assets/yoshis/whiteYoshi.png',
        characterName: 'White Yoshi',
        kart: 'Standard Kart'
    },
    {
        id: 1002,
        imgKart: '/assets/yoshis/blackYoshi.png',
        characterName: 'Black Yoshi',
        kart: 'Standard Kart'
    },
    {
        id: 1003,
        imgKart: '/assets/yoshis/blueYoshi.png',
        characterName: 'Blue Yoshi',
        kart: 'Standard Kart'
    },
    {
        id: 1004,
        imgKart: '/assets/yoshis/blueLight-Yoshi.png',
        characterName: 'Light-Blue Yoshi',
        kart: 'Standard Kart'
    },
    {
        id: 1005,
        imgKart: '/assets/yoshis/orangeYoshi.png',
        characterName: 'Orange Yoshi',
        kart: 'Standard Kart'
    },
    {
        id: 1006,
        imgKart: '/assets/yoshis/yellowYoshi.png',
        characterName: 'Yellow Yoshi',
        kart: 'Standard Kart'
    },
    {
        id: 1007,
        imgKart: '/assets/yoshis/pinkYoshi.png',
        characterName: 'Pink Yoshi',
        kart: 'Standard Kart'
    },
    {
        id: 1008,
        imgKart: '/assets/yoshis/greenYoshi.png',
        characterName: 'Green Yoshi',
        kart: 'Standard Kart'
    },
)

// Funcion que revisa si hay algo en el LOCALSTORAGE 
function alredyInCollectionList() {

    const item = JSON.parse(localStorage.getItem('yoshiEggs'));
    let karts;

    if(item) {
        karts = item;
    } else {
        karts = {};
    }

    return karts;
}

//Funcion que agrega o quita contenido al LocalStorage
function kartInCollection(kart) {

    let kartsInCollectionList = alredyInCollectionList();
    
    if(kartsInCollectionList[kart.id]) {

        kartsInCollectionList[kart.id] = undefined;

    }else {
        kartsInCollectionList[kart.id] = kart;
    }

    localStorage.setItem('yoshiEggs', JSON.stringify(kartsInCollectionList))
}

// Funcion que agrega contenido a el navegador
function addCardsYoshiEggs(array) {
    array.forEach(item => {
        // Creando elementos

        // Card
        let card = document.createElement('div');

        // Figure e imagen
        let imgContainer = document.createElement('figure')
        let img = document.createElement('img');
        img.setAttribute('src', item.imgKart);
        imgContainer.append(img);

        //Detalles Nombre y Kart
        let details = document.createElement('div');

        // Nombre y Kart
        let character = document.createElement('p');
        let bLabel = document.createElement('b')
        let characterName = document.createTextNode(`${item.characterName} - ${item.kart}`);
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
        card.classList.add('yoshis-eggs-kart');
        card.classList.add('bordersNormal');
        imgContainer.classList.add('container-img');
        imgContainer.classList.add('yoshis-eggs-kart__container-img');
        details.classList.add('details');
        details.classList.add('yoshis-eggs-kart__details');
        character.classList.add('characterYoshi')
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
        yoshiEggsSection.append(card);
    })
}
addCardsYoshiEggs(yoshiEggsList);