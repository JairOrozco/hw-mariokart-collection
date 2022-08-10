
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


// Section Blister Individual agregando contenido

//Variables
const individualBlisterSection = document.querySelector('#individualBlisterSection');
let kartsListBlister = [];

const myCollection_individualBlisterSection = document.querySelector('#myCollection_individualBlisterSection');

// Array con todo el contenido
kartsListBlister.push(
    {
        id: 1,
        imgKart: '/assets/blister/mario-standart.png',
        characterName: 'Mario',
        kart: 'Standard Kart'
    },
    {
        id: 2,
        imgKart: '/assets/blister/mario-circuit.png',
        characterName: 'Mario',
        kart: 'Circuit Special'
    },
    {
        id: 3,
        imgKart: '/assets/blister/mario-pwing.png',
        characterName: 'Mario',
        kart: 'P-Wing'
    },
    {
        id: 4,
        imgKart: '/assets/blister/mario-wildwing.png',
        characterName: 'Mario',
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
        let textButton = document.createTextNode('Agregar a mi colección')
        buttonAdd.setAttribute('type', 'button');
        buttonAdd.setAttribute('id', 'addCollectionButton');
        buttonAdd.append(textButton);


        // Agregando clases a elementos
        card.classList.add('blister-kart');
        card.classList.add('general-card');
        card.classList.add('bordersNormal');
        imgContainer.classList.add('blister-kart__container-img');
        details.classList.add('blister-kart__details')
        titleCharacter.classList.add('characterBlister')
        titleKart.classList.add('kartBlister');
    
        buttonAdd.classList.add('blister-kart__addCollection');
        buttonAdd.classList.add('blister-kart__noInCollection')
    
        // Agregando nodos a su respectivo padre
        card.append(imgContainer, details, buttonAdd);


        //Funcionalidad del boton agregar a coleccion
        function collection() {

            if(!buttonAdd.classList.contains('blister-kart__inCollection')) {
                card.classList.remove('bordersNormal')
                card.classList.add('bordersGreen')

                buttonAdd.classList.remove('blister-kart__noInCollection')
                buttonAdd.classList.add('blister-kart__inCollection')

                buttonAdd.removeChild(textButton);

                textButton = document.createTextNode('En mi colección')
                buttonAdd.style.color = 'white';
                buttonAdd.append(textButton);

                card.style.borderWidth = '3px';
            } else {
                card.classList.remove('bordersGreen')
                card.classList.add('bordersNormal')

                buttonAdd.classList.remove('blister-kart__inCollection')
                buttonAdd.classList.add('blister-kart__noInCollection')
                
                buttonAdd.removeChild(textButton);
                
                textButton = document.createTextNode('Agregar a mi colección')
                buttonAdd.style.color = 'white';
                buttonAdd.append(textButton);
                
                card.style.borderWidth = '1px';
            }
        } 
        buttonAdd.addEventListener('click', collection)

    
        // Agregando a section en HTML
        individualBlisterSection.append(card);

        //----------------------
        
        
    });
}
addCards(kartsListBlister);




