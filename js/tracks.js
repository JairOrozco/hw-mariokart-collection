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


// Section Pistas
let tracksSection = document.querySelector('#tracksSection')
let tracksList_1 = [];
let tracksList_2 = [];
let tracksList_3 = [];


// Section Tracks 1
tracksList_1.push(
    {
        imgTrack: '/assets/tracks/mario-circuit_1.png',
        trackName: 'MarioCircuit',
        characterName_1: 'Mario',
        characterName_2: 'Yoshi',
        characterName_3: 'Peach',
        characterName_4: 'Luigi',
        kart_1: 'Match 8',
        kart_2: 'Standard Kart',
        kart_3: 'Standard Kart',
        kart_4: 'Standard Kart'
    }
);

function addCardsTracks(array){
    array.forEach(item => {
        // Creando elementos

        // Card
        let card = document.createElement('div');

        // Figure e imagen
        let imgContainer = document.createElement('figure')
        let img = document.createElement('img');
        img.setAttribute('src', item.imgTrack);
        imgContainer.append(img);

        //Detalles Nombre y Kart
        let details = document.createElement('div');

        // Nombre pista
        let titleTrack = document.createElement('p');
        let bLabelTrackName = document.createElement('b')
        let textBLabelTrackName = document.createTextNode('Pista: ');
        bLabelTrackName.append(textBLabelTrackName);
        titleTrack.append(bLabelTrackName);

        let nameTrack = document.createTextNode(item.trackName)
        titleTrack.append(nameTrack)

        let titleCharacter = document.createElement('p');
        let bLabelCharacter = document.createElement('b')
        let textBLabelCharacter = document.createTextNode('Personajes:');
        bLabelCharacter.append(textBLabelCharacter);
        titleCharacter.append(bLabelCharacter);


        //Personajes y Vehiculos
        //Personaje 1
        let character_1 = document.createElement('p');
        let contentCharacter_1 = document.createTextNode(`- ${item.characterName_1} en ${item.kart_1},`);
        character_1.append(contentCharacter_1);

        //Personaje 2
        let character_2 = document.createElement('p');
        let contentCharacter_2 = document.createTextNode(`- ${item.characterName_2} en ${item.kart_2},`);
        character_2.append(contentCharacter_2);

        //Personaje 3
        let character_3 = document.createElement('p');
        let contentCharacter_3 = document.createTextNode(`- ${item.characterName_3} en ${item.kart_3},`);
        character_3.append(contentCharacter_3);

        //Personaje 4
        let character_4 = document.createElement('p');
        let contentCharacter_4 = document.createTextNode(`- ${item.characterName_4} en ${item.kart_4}`);
        character_4.append(contentCharacter_4);

        details.append(titleTrack, titleCharacter, character_1, character_2, character_3, character_4);

        //Button Add

        let buttonAdd = document.createElement('button');
        let textButton = document.createTextNode('Agregar a colección')
        buttonAdd.setAttribute('type', 'button');
        buttonAdd.append(textButton);
    

        // Agregando clases a elementos
        card.classList.add('tracks-kart');
        card.classList.add('general-card');
        imgContainer.classList.add('tracks-kart__container-img');

        details.classList.add('tracks-kart__details')
        titleTrack.classList.add('track')
        character_1.classList.add('characterTrack');
        character_2.classList.add('characterTrack');
        character_3.classList.add('characterTrack');
        character_4.classList.add('characterTrack');

        buttonAdd.classList.add('tracks-kart__addCollection');
    
        // Agregando nodos a su respectivo padre
        card.append(imgContainer, details, buttonAdd);
    
        // Agregando a section en HTML
        tracksSection.append(card);
    })
}

addCardsTracks(tracksList_1);

// Section Tracks 2

tracksList_2.push(
    {
        imgTrack: '/assets/tracks/mario-circuit_2.png',
        trackName: 'Mario Circuit',
        characterName_1: 'Mario',
        characterName_2: 'Yoshi',
        kart_1: 'Standard Kart',
        kart_2: 'Standard Kart'
    },
    {
        imgTrack: '/assets/tracks/rainbow-road.png',
        trackName: 'Rainbow Road',
        characterName_1: 'Mario',
        characterName_2: 'King Boo',
        kart_1: 'Standard Kart',
        kart_2: 'Standard Kart'
    },
);

function addCardsTracks_2(array){
    array.forEach(item => {
        // Creando elementos

        // Card
        let card = document.createElement('div');

        // Figure e imagen
        let imgContainer = document.createElement('figure')
        let img = document.createElement('img');
        img.setAttribute('src', item.imgTrack);
        imgContainer.append(img);

        //Detalles Nombre y Kart
        let details = document.createElement('div');

        // Nombre pista
        let titleTrack = document.createElement('p');
        let bLabelTrackName = document.createElement('b')
        let textBLabelTrackName = document.createTextNode('Pista: ');
        bLabelTrackName.append(textBLabelTrackName);
        titleTrack.append(bLabelTrackName);
        let nameTrack = document.createTextNode(item.trackName)
        titleTrack.append(nameTrack)

        let titleCharacter = document.createElement('p');
        let bLabelCharacter = document.createElement('b')
        let textBLabelCharacter = document.createTextNode('Personajes:');
        bLabelCharacter.append(textBLabelCharacter);
        titleCharacter.append(bLabelCharacter);


        //Personajes y Vehiculos
        //Personaje 1
        let character_1 = document.createElement('p');
        let contentCharacter_1 = document.createTextNode(`- ${item.characterName_1} en ${item.kart_1},`);
        character_1.append(contentCharacter_1);

        //Personaje 2
        let character_2 = document.createElement('p');
        let contentCharacter_2 = document.createTextNode(`- ${item.characterName_2} en ${item.kart_2}`);
        character_2.append(contentCharacter_2);

        details.append(titleTrack, titleCharacter, character_1, character_2);

        //Button Add

        let buttonAdd = document.createElement('button');
        let textButton = document.createTextNode('Agregar a colección')
        buttonAdd.setAttribute('type', 'button');
        buttonAdd.append(textButton);
    

        // Agregando clases a elementos
        card.classList.add('tracks-kart');
        card.classList.add('general-card');
        imgContainer.classList.add('tracks-kart__container-img');

        details.classList.add('tracks-kart__details')
        titleTrack.classList.add('track')
        character_1.classList.add('characterTrack');
        character_2.classList.add('characterTrack');

        buttonAdd.classList.add('tracks-kart__addCollection');
    
        // Agregando nodos a su respectivo padre
        card.append(imgContainer, details, buttonAdd);
    
        // Agregando a section en HTML
        tracksSection.append(card);
    })
}

addCardsTracks_2(tracksList_2);

// Section Tracks 3

tracksList_3.push(
    {
        imgTrack: '/assets/tracks/mario-circuit-lite.png',
        trackName: 'Mario Circuit Lite',
        characterName: 'Mario',
        kart: 'Standard Kart',
    },
    {
        imgTrack: '/assets/tracks/piranha-plant.png',
        trackName: 'Piranha Plant Slide',
        characterName: 'Yoshi',
        kart: 'Match 8',
    },
    {
        imgTrack: '/assets/tracks/thow-ruins.png',
        trackName: 'Thwomp Ruins',
        characterName: 'Luigi',
        kart: 'Standard Kart',
    },
    {
        imgTrack: '/assets/tracks/chain-chomp.png',
        trackName: 'Chain Chomp',
        characterName: 'Donkey Kong',
        kart: 'Standard Kart',
    },
    {
        imgTrack: '/assets/tracks/bullet-bill.png',
        trackName: 'Bullet Bill',
        characterName: 'Mario',
        kart: 'Sneeker',
    },
    {
        imgTrack: '/assets/tracks/bowsers-castle.png',
        trackName: 'Bowser´s Castle Chaos',
        characterName: 'Blue Yoshi',
        kart: 'Standard Kart',
    },
    {
        imgTrack: '/assets/tracks/boos-spooky.png',
        trackName: 'Boo´s Spooky Sprint',
        characterName: 'Shy Guy',
        kart: 'Standard Kart',
    },
);

function addCardsTracks_3(array){
    array.forEach(item => {
         // Creando elementos

        // Card
        let card = document.createElement('div');

        // Figure e imagen
        let imgContainer = document.createElement('figure')
        let img = document.createElement('img');
        img.setAttribute('src', item.imgTrack);
        imgContainer.append(img);

        //Detalles Nombre y Kart
        let details = document.createElement('div');

        // Nombre pista
        let titleTrack = document.createElement('p');
        let bLabelTrackName = document.createElement('b')
        let textBLabelTrackName = document.createTextNode('Pista: ');
        bLabelTrackName.append(textBLabelTrackName);
        titleTrack.append(bLabelTrackName);
        let nameTrack = document.createTextNode(item.trackName)
        titleTrack.append(nameTrack)

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

        

        details.append(titleTrack, titleCharacter, titleKart);

        //Button Add

        let buttonAdd = document.createElement('button');
        let textButton = document.createTextNode('Agregar a colección')
        buttonAdd.setAttribute('type', 'button');
        buttonAdd.append(textButton);
    

        // Agregando clases a elementos
        card.classList.add('tracks-kart');
        card.classList.add('general-card');
        imgContainer.classList.add('tracks-kart__container-img');
        details.classList.add('tracks-kart__details')

        titleTrack.classList.add('track')
        titleCharacter.classList.add('characterTracks')
        titleKart.classList.add('kartTracks');
    
        buttonAdd.classList.add('tracks-kart__addCollection');
    
        // Agregando nodos a su respectivo padre

        card.append(imgContainer, details, buttonAdd);
    
        // Agregando a section en HTML
        tracksSection.append(card);
    })
}

addCardsTracks_3(tracksList_3);