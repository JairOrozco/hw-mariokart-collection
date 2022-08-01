
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


// Section Specials
let specialsSection = document.querySelector('#specialsSection')
let specialsList = [];


// Section Specials
specialsList.push(
    {
        imgKart: '/assets/specials/golden-mario.png',
        characterName: 'Mario',
        kart: 'Standard Kart',
        glider: 'Super Glider'
    },
    {
        imgKart: '/assets/specials/silver-mario.png',
        characterName: 'Mario',
        kart: 'Standard Kart',
        glider: 'Super Glider'
    },
    {
        imgKart: '/assets/specials/pink-gold-peach.png',
        characterName: 'Peach',
        kart: 'Standard Kart',
        glider: ' --- '
    },
    
)

function addCardsSpecials(array){
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

        //Paravela
        let titleGlider = document.createElement('p');
        let bLabelGlider = document.createElement('b')
        let textBLabelGlider = document.createTextNode('Planeador: ')
        bLabelGlider.append(textBLabelGlider);
        titleGlider.append(bLabelGlider);
        let gliderName = document.createTextNode(item.glider);
        titleGlider.append(gliderName);

        details.append(titleCharacter, titleKart, titleGlider);

        //Button Add

        let buttonAdd = document.createElement('button');
        let textButton = document.createTextNode('Agregar a colección')
        buttonAdd.setAttribute('type', 'button');
        buttonAdd.append(textButton);
    

        // Agregando clases a elementos
        card.classList.add('specials-kart');
        card.classList.add('general-card');
        imgContainer.classList.add('specials-kart__container-img');
        details.classList.add('specials-kart__details')

        titleCharacter.classList.add('characterSpecial')
        titleKart.classList.add('kartSpecial');
        titleGlider.classList.add('GliderSpecial');
    
        buttonAdd.classList.add('specials-kart__addCollection');
    
        // Agregando nodos a su respectivo padre

        card.append(imgContainer, details, buttonAdd);
    
        // Agregando a section en HTML
        specialsSection.append(card);
    })
}
addCardsSpecials(specialsList);