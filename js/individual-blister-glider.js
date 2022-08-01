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


// Section Blister Paravela
const individualBlisterGliderSection = document.querySelector('#individualBlisterGliderSection');
let kartsListBlisterGlider = [];

// Section Blister Paravela
kartsListBlisterGlider.push(
    {
        imgKart: '/assets/glider/mario-standard.png',
        characterName: 'Mario',
        kart: 'Standard Kart',
        glider: 'Super Glider'
    },
    {
        imgKart: '/assets/glider/mario-pipeFrame.png',
        characterName: 'Mario',
        kart: 'Pipe Frame',
        glider: 'Parachute'
    },
    {
        imgKart: '/assets/glider/luigi-pWing.png',
        characterName: 'Luigi',
        kart: 'P-Wing',
        glider: 'Cloud Glider'
    },
    {
        imgKart: '/assets/glider/peach-bDasher.png',
        characterName: 'Peach',
        kart: 'B-Dasher',
        glider: 'Peach Parasol'
    },
    {
        imgKart: '/assets/glider/rosalina-pWing.png',
        characterName: 'Rosalina',
        kart: 'P-Wing',
        glider: 'Cloud Glider'
    },
    {
        imgKart: '/assets/glider/mario-standard.png',
        characterName: 'Yoshi',
        kart: 'Sports Coupe',
        glider: 'Parafoil'
    },
    {
        imgKart: '/assets/glider/blueYoshi-pipeFrame.png',
        characterName: 'Blue Yoshi',
        kart: 'Pipe Frame',
        glider: 'Super Glider'
    },
    {
        imgKart: '/assets/glider/toad-pWing.png',
        characterName: 'Toad',
        kart: 'P-Wing',
        glider: 'Plane Glider'
    },
    {
        imgKart: '/assets/glider/donkeyKong-bDasher.png',
        characterName: 'Donkey Kong',
        kart: 'B-Dasher',
        glider: 'Super Glider'
    },
    {
        imgKart: '/assets/glider/bowser-standard.png',
        characterName: 'Bowser',
        kart: 'Standard Kart',
        glider: 'Bowser Kite'
    },
    {
        imgKart: '/assets/glider/bowserJr-sportsCoupe.png',
        characterName: 'Bowser Jr.',
        kart: 'Sports Coupe',
        glider: 'Bowser Kite'
    },
    {
        imgKart: '/assets/glider/wario-sportsCoupe.png',
        characterName: 'Wario',
        kart: 'Sports Coupe',
        glider: 'Waddle Wing'
    },
)
function addCardsGlider(array) {
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
        card.classList.add('blister-glider-kart');
        card.classList.add('general-card');
        imgContainer.classList.add('blister-glider-kart__container-img');
        details.classList.add('blister-glider-kart__details')

        titleCharacter.classList.add('characterBlisterGlider')
        titleKart.classList.add('kartBlisterGlider');
        titleGlider.classList.add('gliderBlisterGlider');
    
        buttonAdd.classList.add('blister-glider-kart__addCollection');
    
        // Agregando nodos a su respectivo padre

        card.append(imgContainer, details, buttonAdd);
    
        // Agregando a section en HTML
        individualBlisterGliderSection.append(card);
    });
}
addCardsGlider(kartsListBlisterGlider);