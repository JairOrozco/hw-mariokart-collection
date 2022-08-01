// Funcionalidades Generales de la página

// Abrir y cerrar el menu
const menuButton = document.querySelector('#menuButton');
const menu = document.querySelector('#menu');

function openCloseMenu(){

    menuButton.classList.toggle('hamburguerMenu')
    menuButton.classList.toggle('xMenu')

    menu.classList.toggle('inactive');
};

menuButton.addEventListener('click', openCloseMenu);


// Section Yoshi Eggs

let yoshiEggsSection = document.querySelector('#yoshiEggsSection')
let yoshiEggsList = [];


// Section Yoshi Eggs
yoshiEggsList.push(
    {
        imgKart: '/assets/yoshis/whiteYoshi.png',
        characterName: 'White Yoshi',
        kart: 'Standard Kart'
    },
    {
        imgKart: '/assets/yoshis/blackYoshi.png',
        characterName: 'Black Yoshi',
        kart: 'Standard Kart'
    },
    {
        imgKart: '/assets/yoshis/blueYoshi.png',
        characterName: 'Blue Yoshi',
        kart: 'Standard Kart'
    },
    {
        imgKart: '/assets/yoshis/blueLight-Yoshi.png',
        characterName: 'Light-Blue Yoshi',
        kart: 'Standard Kart'
    },
    {
        imgKart: '/assets/yoshis/orangeYoshi.png',
        characterName: 'Orange Yoshi',
        kart: 'Standard Kart'
    },
    {
        imgKart: '/assets/yoshis/yellowYoshi.png',
        characterName: 'Yellow Yoshi',
        kart: 'Standard Kart'
    },
    {
        imgKart: '/assets/yoshis/pinkYoshi.png',
        characterName: 'Pink Yoshi',
        kart: 'Standard Kart'
    },
    {
        imgKart: '/assets/yoshis/greenYoshi.png',
        characterName: 'Green Yoshi',
        kart: 'Standard Kart'
    },
)

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

        // Nombre
        let titleCharacter = document.createElement('p');
        let bLabelCharacter = document.createElement('b')
        let textBLabelCharacter = document.createTextNode('Personaje: ');
        bLabelCharacter.append(textBLabelCharacter);
        titleCharacter.append(bLabelCharacter)
        let characterName = document.createTextNode(item.characterName);
        titleCharacter.append(characterName);

        //Kart
        let titleKart = document.createElement('p');
        let bLabelKart = document.createElement('b')
        let textBLabelKart = document.createTextNode('Kart: ');
        bLabelKart.append(textBLabelKart);
        titleKart.append(bLabelKart);
        let kartName = document.createTextNode(item.kart);
        titleKart.append(kartName);

        details.append(titleCharacter, titleKart);

        //Button Add

        let buttonAdd = document.createElement('button');
        let textButton = document.createTextNode('Agregar a colección')
        buttonAdd.setAttribute('type', 'button');
        buttonAdd.append(textButton);
    

        // Agregando clases a elementos
        card.classList.add('yoshis-eggs-kart');
        card.classList.add('general-card');
        imgContainer.classList.add('yoshis-eggs-kart__container-img');
        details.classList.add('yoshis-eggs-kart__details')
        titleCharacter.classList.add('characterYoshi')
        titleKart.classList.add('kartYoshi');
    
        buttonAdd.classList.add('yoshis-eggs-kart__addCollection');
    
        // Agregando nodos a su respectivo padre
        card.append(imgContainer, details, buttonAdd);
    
        // Agregando a section en HTML
        yoshiEggsSection.append(card);
    })
}
addCardsYoshiEggs(yoshiEggsList);