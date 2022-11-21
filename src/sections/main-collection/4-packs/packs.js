// Funciones importadas
import { kartInCollection } from '../../../utils/localStorage.js'; //Funcion que agrega o quita contenido al LocalStorage
import { alredyInCollectionList } from '../../../utils/localStorage.js'; // Funcion que revisa si hay algo en el LOCALSTORAGE 
import { observer } from '../../../utils/observer.js'  // Observador

// Funcionalidades Generales de la página

// Section Paquetes agregar contenido

//Nodos
let packsSection = document.querySelector('#packsSection');
let packsList = []


// Array con contenido
packsList.push(
    {
        id: 401,
        imgPack: '../../../../assets/packs/dryBones-donkeyKong-luig-marioi.png',
        characterName_1: 'Dry Bones',
        characterName_2: 'Donkey Kong',
        characterName_3: 'Luigi',
        characterName_4: 'Mario Bros',
        kart_1: 'Standard Kart',
        kart_2: 'Sports Coupe',
        kart_3: 'Standard Kart',
        kart_4: 'Badwagon',
    },
    {
        id: 402,
        imgPack: '../../../../assets/packs/mario-bowser-luigi-blackYoshi.png',
        characterName_1: 'Mario Bros',
        characterName_2: 'Bowser',
        characterName_3: 'Luigi',
        characterName_4: 'Black Yoshi',
        kart_1: 'Standard Kart',
        kart_2: 'Badwagon',
        kart_3: 'Mach 8',
        kart_4: 'P-Wing',
    },
    {
        id: 403,
        imgPack: '../../../../assets/packs/mario-donkeyKong-diddyKong-yellowYoshi.png',
        characterName_1: 'Mario Bros',
        characterName_2: 'Donkey Kong',
        characterName_3: 'Diddy Kong',
        characterName_4: 'Yellow Yoshi',
        kart_1: 'Sneeker',
        kart_2: 'Standard Kart',
        kart_3: 'Pipe Frame',
        kart_4: 'Pipe Frame',
    },
    {
        id: 404,
        imgPack: '../../../../assets/packs/peach-rosalina-mario-luigi.png',
        characterName_1: 'Peach',
        characterName_2: 'Rosalina',
        characterName_3: 'Mario Bros',
        characterName_4: 'Luigi',
        kart_1: 'Standard Kart',
        kart_2: 'Standard Kart',
        kart_3: 'Wild Wing',
        kart_4: 'P-Wing',
    },
    {
        id: 405,
        imgPack: '../../../../assets/packs/waluigi-toad-blueYoshi-diddyKong.png',
        characterName_1: 'Waluigi',
        characterName_2: 'Toad',
        characterName_3: 'Blue Yoshi',
        characterName_4: 'Diddy Kong',
        kart_1: 'Badwagon',
        kart_2: 'Standard Kart',
        kart_3: 'Standard Kart',
        kart_4: 'Mach 8',
    },
    {
        id: 406,
        imgPack: '../../../../assets/packs/yoshi-peach-mario-yellowShyGuy.png',
        characterName_1: 'Yoshi',
        characterName_2: 'Peach',
        characterName_3: 'Mario Bros',
        characterName_4: 'Orange Shy Guy',
        kart_1: 'Mach 8',
        kart_2: 'P-Wing',
        kart_3: 'Sneeker',
        kart_4: 'Standard Kart',
    },
    {
        id: 407,
        imgPack: '../../../../assets/packs/wario-mario-waluigi-luigi.png',
        characterName_1: 'Wario',
        characterName_2: 'Mario Bros',
        characterName_3: 'Waluigi',
        characterName_4: 'Luigi',
        kart_1: 'Standard Kart',
        kart_2: 'Standard Kart',
        kart_3: 'Badwagon',
        kart_4: 'Pipe Frame',
    },
    {
        id: 408,
        imgPack: '../../../../assets/packs/dryBones-bowser-shyGuy-Koopa.png',
        characterName_1: 'Dry Bones',
        characterName_2: 'Bowser',
        characterName_3: 'Shy Guy',
        characterName_4: 'Koopa Troopa',
        kart_1: 'Standard Kart',
        kart_2: 'Standard Kart',
        kart_3: 'B-Dasher',
        kart_4: 'Mach 8',
    },
    {
        id: 409,
        imgPack: '../../../../assets/packs/babyLuigi-babyPeach-babyBowser-BabyMario.png',
        characterName_1: 'Baby Luigi',
        characterName_2: 'Baby Peach',
        characterName_3: 'Bowser Jr.',
        characterName_4: 'Baby Mario',
        kart_1: 'Sneeker',
        kart_2: 'Pipe Frame',
        kart_3: 'Flame Flyer',
        kart_4: 'Standard Kart',
    },
)

// Lazy loader instancia
let lazyLoader = new IntersectionObserver(observer);

// Funcion que agrega el contenido a el navegador
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

        //Button Add

        let buttonAdd = document.createElement('button');
        let textButton = document.createTextNode('Agregar a mi colección')
        buttonAdd.setAttribute('type', 'button');
        buttonAdd.append(textButton);
    

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
        buttonAdd.classList.add('addCollection');
        buttonAdd.classList.add('noInCollection');

        // Revisa si ya está el pack en la coleccion, si si mantiene los estilos en verde
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


        // Agregando nodos a su respectivo padre
        card.append(imgContainer, details, buttonAdd);
    
        //Insertando contenido completo a array
        completeContent.push(card);
    });
    // Agregando a section en HTML
    packsSection.append(...completeContent);
}
addCards4Packs(packsList);