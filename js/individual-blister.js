
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

// Section Blister Individual agregando contenido

//Variables
const individualBlisterSection = document.querySelector('#individualBlisterSection');
let kartsListBlister = [];

// Array con todo el contenido
kartsListBlister.push(
    {
        id: 1,
        imgKart: '/assets/blister/mario-standart.png',
        characterName: 'Mario Bros',
        kart: 'Standard Kart'
    },
    {
        id: 2,
        imgKart: '/assets/blister/mario-circuit.png',
        characterName: 'Mario Bros',
        kart: 'Circuit Special'
    },
    {
        id: 3,
        imgKart: '/assets/blister/mario-pwing.png',
        characterName: 'Mario Bros',
        kart: 'P-Wing'
    },
    {
        id: 4,
        imgKart: '/assets/blister/mario-wildwing.png',
        characterName: 'Mario Bros',
        kart: 'Wild Wing'
    },
    {
        id: 5,
        imgKart: '/assets/blister/mario-tanooki.png',
        characterName: 'Mario Tanooki',
        kart: 'Standard Kart'
    },
    {
        id: 6,
        imgKart: '/assets/blister/marioTanooki-bumbleV.png',
        characterName: 'Mario Tanooki',
        kart: 'Bumble V'
    },
    {
        id: 7,
        imgKart: '/assets/blister/baby-mario-bdasher.png',
        characterName: 'Baby Mario',
        kart: 'B-Dasher'
    },
    {
        id: 8,
        imgKart: '/assets/blister/luigi-standart.png',
        characterName: 'Luigi',
        kart: 'Standard Kart' 
    },
    {
        id: 9,
        imgKart: '/assets/blister/luigi-match8.png',
        characterName: 'Luigi',
        kart: 'Mach 8'
    },
    {
        id: 10,
        imgKart: '/assets/blister/luigi-circuit-pecial.png',
        characterName: 'Luigi',
    kart: 'Circuit Special'
    },
    {
        id: 11,
        imgKart: '/assets/blister/luigi-baby-sneeker.png',
        characterName: 'Baby Luigi',
        kart: 'Sneeker'
    },
    {
        id: 12,
        imgKart: '/assets/blister/peach-standart.png',
        characterName: 'Peach',
        kart: 'Standard Kart'
    },
    {
        id: 13,
        imgKart: '/assets/blister/peach-pwing.png',
        characterName: 'Peach',
        kart: 'P-Wing'
    },
    {
        id: 14,
        imgKart: '/assets/blister/peach-cat.png',
        characterName: 'Cat Peach',
        kart: 'Standard'
    },
    {
        id: 15,
        imgKart: '/assets/blister/daisy-wildwing.png',
        characterName: 'Princess Daisy',
        kart: 'Wild Wing'
    },
    {
        id: 16,
        imgKart: '/assets/blister/rosalina-standard.png',
        characterName: 'Rosalina',
        kart: 'Standard Kart'
    },
    {
        id: 17,
        imgKart: '/assets/blister/rosalina-birthdayGirl.png',
        characterName: 'Rosalina',
        kart: 'Birthday Girl'
    },
    {
        id: 18,
        imgKart: '/assets/blister/yoshi-standart.png',
        characterName: 'Yoshi',
        kart: 'Standard Kart'
    },
    {
        id: 19,
        imgKart: '/assets/blister/yoshi-pipeframe.png',
        characterName: 'Yoshi',
        kart: 'Pipe Frame'
    },
    {
        id: 20,
        imgKart: '/assets/blister/yoshi-bdasher.png',
        characterName: 'Yoshi',
        kart: 'B-Dasher'
    },
    {
        id: 21,
        imgKart: '/assets/blister/yoshi-match8.png',
        characterName: 'Yoshi',
        kart: 'Mach 8'
    },
    {
        id: 22,
        imgKart: '/assets/blister/yoshi-red-standart.png',
        characterName: 'Red Yoshi',
        kart: 'Standard Kart'
    },
    {
        id: 23,
        imgKart: '/assets/blister/yoshi-blue-standart.png',
        characterName: 'Blue Yoshi',
        kart: 'Standard Kart'
    },
    {
        id: 24,
        imgKart: '/assets/blister/yoshi-light-blue-standart.png',
        characterName: 'Light-Blue Yoshi',
        kart: 'Standard Kart'
    },
    {
        id: 25,
        imgKart: '/assets/blister/toad-standart.png',
        characterName: 'Toad',
        kart: 'Standard Kart'
    },
    {
        id: 26,
        imgKart: '/assets/blister/toad-sneeker.png',
        characterName: 'Toad',
        kart: 'Sneeker'
    },
    {
        id: 27,
        imgKart: '/assets/blister/toad-match8.png',
        characterName: 'Toad',
        kart: 'Mach 8'
    },
    {
        id: 28,
        imgKart: '/assets/blister/toadette-birthdayGirl.png',
        characterName: 'Toadette',
        kart: 'Birthday Girl'
    },
    {
        id: 29,
        imgKart: '/assets/blister/donkeykong-standard.png',
        characterName: 'Donkey Kong',
        kart: 'Standard Kart'
    },
    {
        id: 30,
        imgKart: '/assets/blister/donkeykong-sportscoupe.png',
        characterName: 'Donkey Kong',
        kart: 'Sports Coupe'
    },
    {
        id: 31,
        imgKart: '/assets/blister/didy-kong-pipeframe.png',
        characterName: 'Didy Kong',
        kart: 'Pipe Frame'
    },
    {
        id: 32,
        imgKart: '/assets/blister/bowser-standard.png',
        characterName: 'Bowser',
        kart: 'Standard Kart'
    },
    {
        id: 33,
        imgKart: '/assets/blister/bowser-badwagon.png',
        characterName: 'Bowser',
        kart: 'Badwagon'
    },
    {
        id: 34,
        imgKart: '/assets/blister/dryBowser-standard.png',
        characterName: 'Dry Bowser',
        kart: 'Standard Kart'
    },
    {
        id: 35,
        imgKart: '/assets/blister/bowserJr-flameFlyer.png',
        characterName: 'Bowser Jr.',
        kart: 'Flame Flyer'
    },
    {
        id: 36,
        imgKart: '/assets/blister/redshy-standard.png',
        characterName: 'Shy Guy',
        kart: 'Standard Kart'
    },
    {
        id: 37,
        imgKart: '/assets/blister/redshy-bdasher.png',
        characterName: 'Shy Guy',
        kart: 'B-Dasher'
    },
    {
        id: 38,
        imgKart: '/assets/blister/blueshy-standard.png',
        characterName: 'Blue Shy Guy',
        kart: 'Standard Kart'
    },
    {
        id: 39,
        imgKart: '/assets/blister/wario-standard.png',
        characterName: 'Wario',
        kart: 'Standard Kart'
    },
    {
        id: 40,
        imgKart: '/assets/blister/wario-badwagon.png',
        characterName: 'Wario',
        kart: 'Badwagon'
    },
    {
        id: 41,
        imgKart: '/assets/blister/waluigi-badwagon.png',
        characterName: 'Waluigi',
        kart: 'Badwagon'
    },
    {
        id: 42,
        imgKart: '/assets/blister/koopa-circuit.png',
        characterName: 'Koopa Troopa',
        kart: 'Circuit Special'
    },
    {
        id: 43,
        imgKart: '/assets/blister/dryBones-standard.png',
        characterName: 'Dry Bones',
        kart: 'Standard Kart'
    },
    {
        id: 44,
        imgKart: '/assets/blister/lakitu-sportsCoupe.png',
        characterName: 'Lakitu',
        kart: 'Sports Coupe'
    }
)

// Funcion que revisa si hay algo en el LOCALSTORAGE 
function alredyInCollectionList() {

    const item = JSON.parse(localStorage.getItem('individualBlister'));
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

    localStorage.setItem('individualBlister', JSON.stringify(kartsInCollectionList))
}

//Funcion que agrega el contenido a el navegador y funcionalidades de boton
function addCards(array) {
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
        let bLabelCharacter = document.createElement('b')
        let characterName = document.createTextNode(`${item.characterName} - ${item.kart}`);
        bLabelCharacter.append(characterName);
        character.append(bLabelCharacter);

        details.append(character);

        //Button Add
        let buttonAdd = document.createElement('button');
        let textButton = document.createTextNode('Agregar a mi colección')
        buttonAdd.setAttribute('type', 'button');
        buttonAdd.setAttribute('id', 'addCollectionButton');
        buttonAdd.append(textButton);


        // Agregando clases a elementos
        card.classList.add('general-card');
        card.classList.add('blister-kart');
        card.classList.add('bordersNormal');
        imgContainer.classList.add('container-img');
        details.classList.add('details')
        character.classList.add('characterIndividualBlister')
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
        individualBlisterSection.append(card);

        //----------------------
        
        
    });
}
addCards(kartsListBlister);




