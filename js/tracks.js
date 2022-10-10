// Funcionalidades Generales de la página

// Abrir y cerrar el menu
const menuButton = document.querySelector('#menuButton');
const menu = document.querySelector('#menu');

function openCloseMenu(){

    menuButton.classList.toggle('hamburguerMenu')
    menuButton.classList.toggle('closeImgMenu')

    menu.classList.toggle('inactive');
};

menuButton.addEventListener('click', openCloseMenu);


// Section Pistas agregando contenido

//Variables
let tracksSection = document.querySelector('#tracksSection')
let tracksSection_4karts = document.querySelector('#tracksSection_4karts')
let tracksSection_2karts = document.querySelector('#tracksSection_2karts')

let tracksList_1 = [];
let tracksList_2 = [];
let tracksList_3 = [];


// Funcion que revisa si hay algo en el LOCALSTORAGE 
function alredyInCollectionList() {

    const item = JSON.parse(localStorage.getItem('track'));
    let tracks;

    if(item) {
        tracks = item;
    } else {
        tracks = {};
    }

    return tracks;
}

//Funcion que agrega o quita contenido al LocalStorage
function trackInCollection(track) {

    let tracksInCollectionList = alredyInCollectionList();
    
    if(tracksInCollectionList[track.id]) {

        tracksInCollectionList[track.id] = undefined;

    }else {
        tracksInCollectionList[track.id] = track;
    }

    localStorage.setItem('track', JSON.stringify(tracksInCollectionList))
}

// Array con contenido
tracksList_1.push(
    {
        id: 1401,
        imgTrack: '/assets/tracks/mario-circuit_1.png',
        trackName: 'Mario Circuit',
        characterName_1: 'Mario Bros',
        characterName_2: 'Yoshi',
        characterName_3: 'Peach',
        characterName_4: 'Luigi',
        kart_1: 'Match 8',
        kart_2: 'Standard Kart',
        kart_3: 'Standard Kart',
        kart_4: 'Standard Kart'
    }
);

//Funcion que agrega contenido al navegador
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
        let track = document.createElement('p');
        let bLabel = document.createElement('b')
        let trackName = document.createTextNode(item.trackName);
        bLabel.append(trackName);
        track.append(bLabel);


        let includes = document.createElement('p');
        let includesText = document.createTextNode('Incluye:');
        includes.append(includesText);


        //Personajes y Vehiculos
        //Personaje 1
        let character_1 = document.createElement('p');
        let blabelCharacter_1 = document.createElement('b');
        let contentCharacter_1 = document.createTextNode(`${item.characterName_1} - ${item.kart_1}`);
        blabelCharacter_1.append(contentCharacter_1);
        character_1.append(blabelCharacter_1);

        //Personaje 2
        let character_2 = document.createElement('p');
        let blabelCharacter_2 = document.createElement('b');
        let contentCharacter_2 = document.createTextNode(`${item.characterName_2} - ${item.kart_2}`);
        blabelCharacter_2.append(contentCharacter_2);
        character_2.append(blabelCharacter_2);

        //Personaje 3
        let character_3 = document.createElement('p');
        let blabelCharacter_3 = document.createElement('b');
        let contentCharacter_3 = document.createTextNode(`${item.characterName_3} - ${item.kart_3}`);
        blabelCharacter_3.append(contentCharacter_3);
        character_3.append(blabelCharacter_3);

        //Personaje 4
        let character_4 = document.createElement('p');
        let blabelCharacter_4 = document.createElement('b');
        let contentCharacter_4 = document.createTextNode(`${item.characterName_4} - ${item.kart_4}`);
        blabelCharacter_4.append(contentCharacter_4);
        character_4.append(blabelCharacter_4);

        details.append(track, includes, character_1, character_2, character_3, character_4);

        //Button Add

        let buttonAdd = document.createElement('button');
        let textButton = document.createTextNode('Agregar a mi colección')
        buttonAdd.setAttribute('type', 'button');
        buttonAdd.append(textButton);
    

        // Agregando clases a elementos
        card.classList.add('general-card');
        card.classList.add('tracks-kart-4karts');
        card.classList.add('bordersNormal');
        imgContainer.classList.add('container-img');
        imgContainer.classList.add('tracks-kart-4karts__container-img');
        details.classList.add('details')
        details.classList.add('tracks-kart-4karts__details')
        track.classList.add('track')
        includes.classList.add('includeTrack')
        character_1.classList.add('characterTrack');
        character_2.classList.add('characterTrack');
        character_3.classList.add('characterTrack');
        character_4.classList.add('characterTrack');
        buttonAdd.classList.add('addCollection');
        buttonAdd.classList.add('tracks-kart-4karts__addCollection');
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

                trackInCollection(item);

            } else {
                card.classList.remove('bordersGreen')
                card.classList.add('bordersNormal')

                buttonAdd.classList.remove('inCollection')
                buttonAdd.classList.add('noInCollection')
                
                textButton.textContent = 'Agregar a mi colección';
                buttonAdd.style.color = 'white';

                trackInCollection(item);
            }
        } 
        buttonAdd.addEventListener('click', collection)
    
        // Agregando a section en HTML
        tracksSection.append(card);
    })
}

addCardsTracks(tracksList_1);


// Section Tracks 2
// Array con contenido
tracksList_2.push(
    {
        id: 1402,
        imgTrack: '/assets/tracks/mario-circuit_2.png',
        trackName: 'Mario Circuit',
        characterName_1: 'Mario Bros',
        characterName_2: 'Yoshi',
        kart_1: 'Standard Kart',
        kart_2: 'Standard Kart'
    },
    {
        id: 1403,
        imgTrack: '/assets/tracks/rainbow-road.png',
        trackName: 'Rainbow Road',
        characterName_1: 'Mario Bros',
        characterName_2: 'King Boo',
        kart_1: 'Standard Kart',
        kart_2: 'Standard Kart'
    },
);

//Funcion que agrega contenido al navegador
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
        let track = document.createElement('p');
        let bLabel = document.createElement('b')
        let trackName = document.createTextNode(item.trackName);
        bLabel.append(trackName);
        track.append(bLabel);

        let includes = document.createElement('p');
        let includesText = document.createTextNode('Incluye:');
        includes.append(includesText);


        //Personajes y Vehiculos
        //Personaje 1
        let character_1 = document.createElement('p');
        let blabelCharacter_1 = document.createElement('b');
        let contentCharacter_1 = document.createTextNode(`${item.characterName_1} - ${item.kart_1}`);
        blabelCharacter_1.append(contentCharacter_1);
        character_1.append(blabelCharacter_1);

        //Personaje 2
        let character_2 = document.createElement('p');
        let blabelCharacter_2 = document.createElement('b');
        let contentCharacter_2 = document.createTextNode(`${item.characterName_2} - ${item.kart_2}`);
        blabelCharacter_2.append(contentCharacter_2);
        character_2.append(blabelCharacter_2);

        details.append(track, includes, character_1, character_2);

        //Button Add

        let buttonAdd = document.createElement('button');
        let textButton = document.createTextNode('Agregar a mi colección')
        buttonAdd.setAttribute('type', 'button');
        buttonAdd.append(textButton);
    

        // Agregando clases a elementos
        card.classList.add('general-card');
        card.classList.add('tracks-kart-2karts');
        card.classList.add('bordersNormal');
        imgContainer.classList.add('container-img');
        imgContainer.classList.add('tracks-kart-2karts__container-img');
        details.classList.add('details')
        details.classList.add('tracks-kart-2karts__details')
        track.classList.add('track')
        includes.classList.add('includeTrack')
        character_1.classList.add('characterTrack');
        character_2.classList.add('characterTrack');
        buttonAdd.classList.add('addCollection');
        buttonAdd.classList.add('tracks-kart-2karts__addCollection');
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

                trackInCollection(item);

            } else {
                card.classList.remove('bordersGreen')
                card.classList.add('bordersNormal')

                buttonAdd.classList.remove('inCollection')
                buttonAdd.classList.add('noInCollection')
                
                textButton.textContent = 'Agregar a mi colección';
                buttonAdd.style.color = 'white';

                trackInCollection(item);

            }
        } 
        buttonAdd.addEventListener('click', collection)
    
        // Agregando a section en HTML
        tracksSection.append(card);
    })
}

addCardsTracks_2(tracksList_2);


// Section Tracks 3
// Array con contenido
tracksList_3.push(
    {
        id: 1404,
        imgTrack: '/assets/tracks/mario-circuit-lite.png',
        trackName: 'Mario Circuit Lite',
        characterName: 'Mario Bros',
        kart: 'Standard Kart',
    },
    {
        id: 1405,
        imgTrack: '/assets/tracks/piranha-plant.png',
        trackName: 'Piranha Plant Slide',
        characterName: 'Yoshi',
        kart: 'Match 8',
    },
    {
        id: 1406,
        imgTrack: '/assets/tracks/thow-ruins.png',
        trackName: 'Thwomp Ruins',
        characterName: 'Luigi',
        kart: 'Standard Kart',
    },
    {
        id: 1407,
        imgTrack: '/assets/tracks/chain-chomp.png',
        trackName: 'Chain Chomp',
        characterName: 'Donkey Kong',
        kart: 'Standard Kart',
    },
    {
        id: 1408,
        imgTrack: '/assets/tracks/bullet-bill.png',
        trackName: 'Bullet Bill',
        characterName: 'Mario Bros',
        kart: 'Sneeker',
    },
    {
        id: 1409,
        imgTrack: '/assets/tracks/bowsers-castle.png',
        trackName: 'Bowser´s Castle Chaos',
        characterName: 'Blue Yoshi',
        kart: 'Standard Kart',
    },
    {
        id: 1410,
        imgTrack: '/assets/tracks/boos-spooky.png',
        trackName: 'Boo´s Spooky Sprint',
        characterName: 'Shy Guy',
        kart: 'Standard Kart',
    },
);

//Funcion que agrega contenido al navegador
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
        let track = document.createElement('p');
        let bLabel = document.createElement('b')
        let trackName = document.createTextNode(item.trackName);
        bLabel.append(trackName);
        track.append(bLabel);


        let includes = document.createElement('p');
        let includesText = document.createTextNode('Incluye:');
        includes.append(includesText);


        //Personajes y Vehiculos
        //Personaje 1
        let character = document.createElement('p');
        let blabelCharacter = document.createElement('b');
        let characterName = document.createTextNode(`${item.characterName} - ${item.kart}`);
        blabelCharacter.append(characterName);
        character.append(blabelCharacter);

        

        details.append(track, includes, character);

        //Button Add

        let buttonAdd = document.createElement('button');
        let textButton = document.createTextNode('Agregar a mi colección')
        buttonAdd.setAttribute('type', 'button');
        buttonAdd.append(textButton);
    

        // Agregando clases a elementos
        card.classList.add('general-card');
        card.classList.add('tracks-kart');
        card.classList.add('bordersNormal');
        imgContainer.classList.add('container-img');
        imgContainer.classList.add('tracks-kart__container-img');
        details.classList.add('details')
        details.classList.add('tracks-kart__details')
        track.classList.add('track')
        includes.classList.add('includeTrack')
        character.classList.add('characterTrack')
        buttonAdd.classList.add('addCollection');
        buttonAdd.classList.add('tracks-kart__addCollection');
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

                trackInCollection(item);

            } else {
                card.classList.remove('bordersGreen')
                card.classList.add('bordersNormal')

                buttonAdd.classList.remove('inCollection')
                buttonAdd.classList.add('noInCollection')
                
                textButton.textContent = 'Agregar a mi colección';
                buttonAdd.style.color = 'white';

                trackInCollection(item);

            }
        } 
        buttonAdd.addEventListener('click', collection)
    
        // Agregando a section en HTML
        tracksSection.append(card);
    })
}

addCardsTracks_3(tracksList_3);