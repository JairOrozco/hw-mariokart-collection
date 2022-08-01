
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


// Section Blister Individual

const individualBlisterSection = document.querySelector('#individualBlisterSection');
let kartsListBlister = []

// Section Blister Individual
kartsListBlister.push(
    {
        imgKart: '/assets/blister/mario-standart.png',
        characterName: 'Mario',
        kart: 'Standard Kart'
    },
    {
        imgKart: '/assets/blister/mario-circuit.png',
        characterName: 'Mario',
        kart: 'Circuit Special'
    },
    {
        imgKart: '/assets/blister/mario-pwing.png',
        characterName: 'Mario',
        kart: 'P-Wing'
    },
    {
        imgKart: '/assets/blister/mario-wildwing.png',
        characterName: 'Mario',
        kart: 'Wild Wing'
    },
    {
        imgKart: '/assets/blister/mario-tanooki.png',
        characterName: 'Mario Tanooki',
        kart: 'Standard Kart'
    },
    {
        imgKart: '/assets/blister/marioTanooki-bumbleV.png',
        characterName: 'Mario Tanooki',
        kart: 'Bumble V'
    },
    {
        imgKart: '/assets/blister/baby-mario-bdasher.png',
        characterName: 'Baby Mario',
        kart: 'B-Dasher'
    },
    {
        imgKart: '/assets/blister/luigi-standart.png',
        characterName: 'Luigi',
        kart: 'Standard Kart' 
    },
    {
        imgKart: '/assets/blister/luigi-match8.png',
        characterName: 'Luigi',
        kart: 'Mach 8'
    },
    {
        imgKart: '/assets/blister/luigi-circuit-pecial.png',
        characterName: 'Luigi',
    kart: 'Circuit Special'
    },
    {
        imgKart: '/assets/blister/luigi-baby-sneeker.png',
        characterName: 'Baby Luigi',
        kart: 'Sneeker'
    },
    {
        imgKart: '/assets/blister/peach-standart.png',
        characterName: 'Peach',
        kart: 'Standard Kart'
    },
    {
        imgKart: '/assets/blister/peach-pwing.png',
        characterName: 'Peach',
        kart: 'P-Wing'
    },
    {
        imgKart: '/assets/blister/peach-cat.png',
        characterName: 'Cat Peach',
        kart: 'Standard'
    },
    {
        imgKart: '/assets/blister/daisy-wildwing.png',
        characterName: 'Princess Daisy',
        kart: 'Wild Wing'
    },
    {
        imgKart: '/assets/blister/rosalina-standard.png',
        characterName: 'Rosalina',
        kart: 'Standard Kart'
    },
    {
        imgKart: '/assets/blister/rosalina-birthdayGirl.png',
        characterName: 'Rosalina',
        kart: 'Birthday Girl'
    },
    {
        imgKart: '/assets/blister/yoshi-standart.png',
        characterName: 'Yoshi',
        kart: 'Standard Kart'
    },
    {
        imgKart: '/assets/blister/yoshi-pipeframe.png',
        characterName: 'Yoshi',
        kart: 'Pipe Frame'
    },
    {
        imgKart: '/assets/blister/yoshi-bdasher.png',
        characterName: 'Yoshi',
        kart: 'B-Dasher'
    },
    {
        imgKart: '/assets/blister/yoshi-match8.png',
        characterName: 'Yoshi',
        kart: 'Mach 8'
    },
    {
        imgKart: '/assets/blister/yoshi-red-standart.png',
        characterName: 'Red Yoshi',
        kart: 'Standard Kart'
    },
    {
        imgKart: '/assets/blister/yoshi-blue-standart.png',
        characterName: 'Blue Yoshi',
        kart: 'Standard Kart'
    },
    {
        imgKart: '/assets/blister/toad-standart.png',
        characterName: 'Toad',
        kart: 'Standard Kart'
    },
    {
        imgKart: '/assets/blister/toad-sneeker.png',
        characterName: 'Toad',
        kart: 'Sneeker'
    },
    {
        imgKart: '/assets/blister/toad-match8.png',
        characterName: 'Toad',
        kart: 'Mach 8'
    },
    {
        imgKart: '/assets/blister/donkeykong-standard.png',
        characterName: 'Donkey Kong',
        kart: 'Standard Kart'
    },
    {
        imgKart: '/assets/blister/donkeykong-sportscoupe.png',
        characterName: 'Donkey Kong',
        kart: 'Sports Coupe'
    },
    {
        imgKart: '/assets/blister/didy-kong-pipeframe.png',
        characterName: 'Didy Kong',
        kart: 'Pipe Frame'
    },
    {
        imgKart: '/assets/blister/bowser-standard.png',
        characterName: 'Bowser',
        kart: 'Standard Kart'
    },
    {
        imgKart: '/assets/blister/bowser-badwagon.png',
        characterName: 'Bowser',
        kart: 'Badwagon'
    },
    {
        imgKart: '/assets/blister/dryBowser-standard.png',
        characterName: 'Dry Bowser',
        kart: 'Standard Kart'
    },
    {
        imgKart: '/assets/blister/bowserJr-flameFlyer.png',
        characterName: 'Bowser Jr.',
        kart: 'Flame Flyer'
    },
    {
        imgKart: '/assets/blister/redshy-standard.png',
        characterName: 'Shy Guy',
        kart: 'Standard Kart'
    },
    {
        imgKart: '/assets/blister/redshy-bdasher.png',
        characterName: 'Shy Guy',
        kart: 'B-Dasher'
    },
    {
        imgKart: '/assets/blister/blueshy-standard.png',
        characterName: 'Blue Shy Guy',
        kart: 'Standard Kart'
    },
    {
        imgKart: '/assets/blister/wario-standard.png',
        characterName: 'Wario',
        kart: 'Standard Kart'
    },
    {
        imgKart: '/assets/blister/wario-badwagon.png',
        characterName: 'Wario',
        kart: 'Badwagon'
    },
    {
        imgKart: '/assets/blister/waluigi-badwagon.png',
        characterName: 'Waluigi',
        kart: 'Badwagon'
    },
    {
        imgKart: '/assets/blister/koopa-circuit.png',
        characterName: 'Koopa Troopa',
        kart: 'Circuit Special'
    },
    {
        imgKart: '/assets/blister/dryBones-standard.png',
        characterName: 'Dry Bones',
        kart: 'Standard Kart'
    },
    {
        imgKart: '/assets/blister/lakitu-sportsCoupe.png',
        characterName: 'Lakitu',
        kart: 'Sports Coupe'
    }
)
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
        let textButton = document.createTextNode('Agregar a colección')
        buttonAdd.setAttribute('type', 'button');
        buttonAdd.append(textButton);
    

        // Agregando clases a elementos
        card.classList.add('blister-kart');
        card.classList.add('general-card');
        imgContainer.classList.add('blister-kart__container-img');
        details.classList.add('blister-kart__details')
        titleCharacter.classList.add('characterBlister')
        titleKart.classList.add('kartBlister');
    
        buttonAdd.classList.add('blister-kart__addCollection');
    
        // Agregando nodos a su respectivo padre
        card.append(imgContainer, details, buttonAdd);
    
        // Agregando a section en HTML
        individualBlisterSection.append(card);
    });
}
addCards(kartsListBlister);