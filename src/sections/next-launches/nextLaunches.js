import { kartInCollection } from '../../utils/localStorage.js'; //Funcion que agrega o quita contenido al LocalStorage
import { alredyInCollectionList } from '../../utils/localStorage.js'; // Funcion que revisa si hay algo en el LOCALSTORAGE 
import { observer } from '../../utils/observer.js'  // Observador

let sectionNextLaunches = document.querySelector('#nextLaunches');
let nextLaunchesListIndividual = [];
let nextLaunchesListIndividualGlider = [];
let nextLaunchesListPacks = [];
let nextLaunchesListPacksGlider = [];
let nextLaunchesListMixPack = [];


nextLaunchesListIndividual.push(
    {
        characterName: 'Baby Peach',
        kart: 'Pipe Frame',
        imgKart: '../../../assets/blister/baby-peach-pipeFrame.png'
    },
    {
        characterName: 'Mario Bros',
        kart: 'Pipe Frame',
        imgKart: '../../../assets/blister/mario-pipeFrame.png'
    },
);

nextLaunchesListIndividualGlider.push(
    {
        characterName: 'Princess Daisy',
        kart: 'Standard Kart',
        glider: 'Flower Glider',
        imgKart: '../../../assets/glider/daisy-standard.png'
    },
    {
        characterName: 'Shy Guy',
        kart: 'B-Dasher',
        glider: 'Plane Glider',
        imgKart: '../../../assets/glider/shyGuy-bDasher.png'
    }
)

nextLaunchesListPacks.push(
    {
        imgPack: '',
        characterName_1: '',
        characterName_2: '',
        characterName_3: '.',
        characterName_4: '',
        kart_1: '',
        kart_2: '',
        kart_3: '',
        kart_4: '',
    }
);

nextLaunchesListPacksGlider.push(
    {
        imgGliderPacks: '',
        characterName_1: '',
        characterName_2: '',
        characterName_3: '',
        kart_1: '',
        kart_2: '',
        kart_3: '',
        glider_1: '',
        glider_2: '',
        glider_3: ''
    }
);

nextLaunchesListMixPack.push(
    {
        imgMixPack: '../../../assets/packsVariety/8-pack-2.png',
        characterName_1: 'Mario',
        characterName_2: 'Red Yoshi',
        characterName_3: 'Bowser',
        characterName_4: 'Princess Daisy',
        characterName_5: 'Toad',
        characterName_6: 'Peach',
        characterName_7: 'Shy Guy',
        characterName_8: 'Luigi',
        kart_1: 'Pipe Frame',
        kart_2: 'Standard Kart',
        kart_3: 'Standard Kart',
        kart_4: 'Wild Wing',
        kart_5: 'Sneeker',
        kart_6: 'P-Wing',
        kart_7: 'B-Dasher',
        kart_8: 'Circuit Special',
        glider_1: 'Parachute',
        glider_2: 'Parafoil',
        glider_3: 'Bowser Kite'
    }
);

// Lazy loader instancia
let lazyLoader = new IntersectionObserver(observer);

// 1.- Blister Individual
function addCards(array) {
    let completeContent = [];
    array.forEach(item => {

        // Creando elementos

        // Card
        let card = document.createElement('div');

        // Figure e imagen
        let imgContainer = document.createElement('figure')
        let img = document.createElement('img');
        img.setAttribute('data-img', item.imgKart);
        imgContainer.append(img);

        //Observador lazy load
        lazyLoader.observe(img);

        //Detalles Nombre y Kart
        let details = document.createElement('div');

        // Nombre y Kart
        let character = document.createElement('p');
        let bLabelCharacter = document.createElement('b')
        let characterName = document.createTextNode(`${item.characterName} - ${item.kart}`);
        bLabelCharacter.append(characterName);
        character.append(bLabelCharacter);

        details.append(character);


        // Agregando clases a elementos
        card.classList.add('general-card');
        card.classList.add('blister-kart');
        card.classList.add('bordersNormal');
        imgContainer.classList.add('container-img');
        details.classList.add('details')
        character.classList.add('characterIndividualBlister')
    
        // Agregando nodos a su respectivo padre
        card.append(imgContainer, details);

        // Agregando contenido completo a un array
        completeContent.push(card)
        
        
    });

    // Agregando a section en HTML
    sectionNextLaunches.append(...completeContent);
}
addCards(nextLaunchesListIndividual);

// 2.- Blister Individual Glider
function addCardsGlider(array) {
    let completeContent = [];
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
    

        // Agregando clases a elementos
        card.classList.add('general-card');
        card.classList.add('blister-glider-kart');
        card.classList.add('bordersNormal');
        imgContainer.classList.add('container-img');
        details.classList.add('details')
        character.classList.add('characterBlisterGlider')
        glider.classList.add('characterBlisterGlider');

        // Agregando nodos a su respectivo padre
        card.append(imgContainer, details);

        // Agregando contenido completo a array 
        completeContent.push(card);
        
    });

    //Insertando contenido en el document
    sectionNextLaunches.append(...completeContent);
}
addCardsGlider(nextLaunchesListIndividualGlider);

// 3.- 4-Packs
function addCards4Packs(array) {
    let completeContent = [];
    array.forEach(item => {

        // Creando elementos

        // Card
        let card = document.createElement('div');

        // Figure e imagen
        let imgContainer = document.createElement('figure')
        let img = document.createElement('img');
        img.setAttribute('data-img', item.imgPack);
        imgContainer.append(img);

        //Lazy loader
        lazyLoader.observe(img);

        //Detalles Nombre y Kart
        let details = document.createElement('div');

        //Personajes y Vehiculos
        //Personaje 1
        let character_1 = document.createElement('p');
        let bLabelCharacter_1 = document.createElement('b');
        let contentCharacter_1 = document.createTextNode(`${item.characterName_1} - ${item.kart_1}`);
        bLabelCharacter_1.append(contentCharacter_1)
        character_1.append(bLabelCharacter_1);

        //Personaje 2
        let character_2 = document.createElement('p');
        let bLabelCharacter_2 = document.createElement('b');
        let contentCharacter_2 = document.createTextNode(`${item.characterName_2} - ${item.kart_2}`);
        bLabelCharacter_2.append(contentCharacter_2)
        character_2.append(bLabelCharacter_2);

        //Personaje 3
        let character_3 = document.createElement('p');
        let bLabelCharacter_3 = document.createElement('b');
        let contentCharacter_3 = document.createTextNode(`${item.characterName_3} - ${item.kart_3}`);
        bLabelCharacter_3.append(contentCharacter_3)
        character_3.append(bLabelCharacter_3);

        //Personaje 4
        let character_4 = document.createElement('p');
        let bLabelCharacter_4 = document.createElement('b');
        let contentCharacter_4 = document.createTextNode(`${item.characterName_4} - ${item.kart_4}`);
        bLabelCharacter_4.append(contentCharacter_4)
        character_4.append(bLabelCharacter_4);

        details.append(character_1, character_2, character_3, character_4);
    

        // Agregando clases a elementos
        card.classList.add('general-card');
        card.classList.add('packs-kart');
        card.classList.add('bordersNormal');
        imgContainer.classList.add('container-img');
        imgContainer.classList.add('packs-kart__container-img');
        details.classList.add('details')
        details.classList.add('packs-kart__details')
        character_1.classList.add('characterPack');
        character_2.classList.add('characterPack');
        character_3.classList.add('characterPack');
        character_4.classList.add('characterPack');

        // Agregando nodos a su respectivo padre
        card.append(imgContainer, details);
    
        //Insertando contenido completo a array
        completeContent.push(card);
    });
    // Agregando a section en HTML
    sectionNextLaunches.append(...completeContent);
}
// addCards4Packs(nextLaunchesListPacks);

// 4.- Glider Packs
function addCardsGliderPacks(array) {
    let completeContent = [];
    array.forEach(item => {
        // Creando elementos

        // Card
        let card = document.createElement('div');

        // Figure e imagen
        let imgContainer = document.createElement('figure')
        let img = document.createElement('img');
        img.setAttribute('data-img', item.imgGliderPacks);
        imgContainer.append(img);

        //Lazy loader
        lazyLoader.observe(img);

        //Detalles Nombre y Kart
        let details = document.createElement('div');

        //Personajes y Vehiculos
        //Personaje 1
        let characterKartGlider_1 = document.createElement('p');
        let boldLetter_1 = document.createElement('b');
        let contentCharacterKartGlider_1 = document.createTextNode(`${item.characterName_1} - ${item.kart_1} - ${item.glider_1}`);
        boldLetter_1.append(contentCharacterKartGlider_1);
        characterKartGlider_1.append(boldLetter_1);

        //Personaje 2
        let characterKartGlider_2 = document.createElement('p');
        let boldLetter_2 = document.createElement('b');
        let contentCharacterKartGlider_2 = document.createTextNode(`${item.characterName_2} - ${item.kart_2} - ${item.glider_2}`);
        boldLetter_2.append(contentCharacterKartGlider_2);
        characterKartGlider_2.append(boldLetter_2);

        //Personaje 3
        let characterKartGlider_3 = document.createElement('p');
        let boldLetter_3 = document.createElement('b');
        let contentCharacterKartGlider_3 = document.createTextNode(`${item.characterName_3} - ${item.kart_3} - ${item.glider_3}`);
        boldLetter_3.append(contentCharacterKartGlider_3);
        characterKartGlider_3.append(boldLetter_3);
    
        // Agregando clases y atributos a elementos

        card.classList.add('general-card');
        card.classList.add('glidersPacks-kart');
        card.classList.add('bordersNormal');
        imgContainer.classList.add('container-img');
        imgContainer.classList.add('glidersPacks-kart__container-img');
        details.classList.add('details')
        details.classList.add('glidersPacks-kart__details')
        characterKartGlider_1.classList.add('characterPackGlider');
        characterKartGlider_2.classList.add('characterPackGlider');
        characterKartGlider_3.classList.add('characterPackGlider');
    
        // Agregando nodos a su respectivo padre
        details.append(characterKartGlider_1, characterKartGlider_2, characterKartGlider_3);

        card.append(imgContainer, details);
    
        //Insertando contenido completo a array
        completeContent.push(card)
    })
    // Agregando a section en HTML
    sectionNextLaunches.append(...completeContent);
}
//addCardsGliderPacks(nextLaunchesListPacksGlider);

// 5.- Mix Pack
function addCardsMixPack(array){
    let completeContent = [];
    array.forEach(item => {
        // Creando elementos

        // Card
        let card = document.createElement('div');

        // Figure e imagen
        let imgContainer = document.createElement('figure')
        let img = document.createElement('img');
        img.setAttribute('data-img', item.imgMixPack);
        imgContainer.append(img);

        //Lazy loader
        lazyLoader.observe(img);

        //Detalles Nombre y Kart
        let details = document.createElement('div');

        //Personajes y Vehiculos
        //Personaje 1
        let character_1 = document.createElement('p');
        let bLabel_1 = document.createElement('b')
        let textCharacter_1 = document.createTextNode(`${item.characterName_1} - ${item.kart_1} - ${item.glider_1}`);
        bLabel_1.append(textCharacter_1);
        character_1.append(bLabel_1);

        //Personaje 2
        let character_2 = document.createElement('p');
        let bLabel_2 = document.createElement('b')
        let textCharacter_2 = document.createTextNode(`${item.characterName_2} - ${item.kart_2} - ${item.glider_2}`);
        bLabel_2.append(textCharacter_2);
        character_2.append(bLabel_2);

        //Personaje 3
        let character_3 = document.createElement('p')
        let bLabel_3 = document.createElement('b')
        let textCharacter_3 = document.createTextNode(`${item.characterName_3} - ${item.kart_3} - ${item.glider_3}`);
        bLabel_3.append(textCharacter_3);
        character_3.append(bLabel_3);
        
        //Personaje 4
        let character_4 = document.createElement('p');
        let bLabel_4 = document.createElement('b')
        let textCharacter_4 = document.createTextNode(`${item.characterName_4} - ${item.kart_4}`);
        bLabel_4.append(textCharacter_4);
        character_4.append(bLabel_4);
        

        //Personaje 5
        let character_5 = document.createElement('p')
        let bLabel_5 = document.createElement('b')
        let textCharacter_5 = document.createTextNode(`${item.characterName_5} - ${item.kart_5}`);
        bLabel_5.append(textCharacter_5);
        character_5.append(bLabel_5);

        //Personaje 6
        let character_6 = document.createElement('p')
        let bLabel_6 = document.createElement('b')
        let textCharacter_6 = document.createTextNode(`${item.characterName_6} - ${item.kart_6}`);
        bLabel_6.append(textCharacter_6);
        character_6.append(bLabel_6);

        //Personaje 7
        let character_7 = document.createElement('p')
        let bLabel_7 = document.createElement('b')
        let textCharacter_7 = document.createTextNode(`${item.characterName_7} - ${item.kart_7}`);
        bLabel_7.append(textCharacter_7);
        character_7.append(bLabel_7);

        //Personaje 8
        let character_8 = document.createElement('p')
        let bLabel_8 = document.createElement('b')
        let textCharacter_8 = document.createTextNode(`${item.characterName_8} - ${item.kart_8}`);
        bLabel_8.append(textCharacter_8);
        character_8.append(bLabel_8);

        // Agregando clases y atributos a elementos

        card.classList.add('general-card');
        card.classList.add('mixPack-kart');
        card.classList.add('bordersNormal');
        imgContainer.classList.add('container-img');
        imgContainer.classList.add('mixPack-kart__container-img');
        details.classList.add('details')
        details.classList.add('mixPack-kart__details')
        character_1.classList.add('characterMixPack');
        character_2.classList.add('characterMixPack');
        character_3.classList.add('characterMixPack');
        character_4.classList.add('characterMixPack');
        character_5.classList.add('characterMixPack');
        character_6.classList.add('characterMixPack');
        character_7.classList.add('characterMixPack');
        character_8.classList.add('characterMixPack');
    
        // Agregando nodos a su respectivo padre
        details.append(character_1, character_2, character_3, character_4, character_5, character_6, character_7, character_8);
        card.append(imgContainer, details);

        //Agregando contenido completo a array
        completeContent.push(card)
    });

    // Agregando a section en HTML
    sectionNextLaunches.append(...completeContent);
}
addCardsMixPack(nextLaunchesListMixPack);