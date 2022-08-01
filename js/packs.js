
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


// Section Paquetes

let packsSection = document.querySelector('#packsSection');
let packsList = []


// Section Paquetes
packsList.push(
    {
        imgPack: '/assets/packs/dryBones-donkeyKong-luig-marioi.png',
        characterName_1: 'Dry Bones',
        characterName_2: 'Donkey Kong',
        characterName_3: 'Luigi',
        characterName_4: 'Mario',
        kart_1: 'Standard Kart',
        kart_2: 'Sports Coupe',
        kart_3: 'Standard Kart',
        kart_4: 'Badwagon',
    },
    {
        imgPack: '/assets/packs/mario-bowser-luigi-blackYoshi.png',
        characterName_1: 'Mario',
        characterName_2: 'Bowser',
        characterName_3: 'Luigi',
        characterName_4: 'Black Yoshi',
        kart_1: 'Standard Kart',
        kart_2: 'Badwagon',
        kart_3: 'Mach 8',
        kart_4: 'P-Wing',
    },
    {
        imgPack: '/assets/packs/mario-donkeyKong-diddyKong-yellowYoshi.png',
        characterName_1: 'Mario',
        characterName_2: 'Donkey Kong',
        characterName_3: 'Diddy Kong',
        characterName_4: 'Yellow Yoshi',
        kart_1: 'Sneeker',
        kart_2: 'Standard Kart',
        kart_3: 'Pipe Frame',
        kart_4: 'Pipe Frame',
    },
    {
        imgPack: '/assets/packs/peach-rosalina-mario-luigi.png',
        characterName_1: 'Peach',
        characterName_2: 'Rosalina',
        characterName_3: 'Mario',
        characterName_4: 'Luigi',
        kart_1: 'Standard Kart',
        kart_2: 'Standard Kart',
        kart_3: 'Wild Wing',
        kart_4: 'P-Wing',
    },
    {
        imgPack: '/assets/packs/waluigi-toad-blueYoshi-diddyKong.png',
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
        imgPack: '/assets/packs/yoshi-peach-mario-yellowShyGuy.png',
        characterName_1: 'Yoshi',
        characterName_2: 'Peach',
        characterName_3: 'Mario',
        characterName_4: 'Orange Shy Guy',
        kart_1: 'Mach 8',
        kart_2: 'P-Wing',
        kart_3: 'Sneeker',
        kart_4: 'Standard Kart',
    },
)
function addCards4Packs(array) {
    array.forEach(item => {

        // Creando elementos

        // Card
        let card = document.createElement('div');

        // Figure e imagen
        let imgContainer = document.createElement('figure')
        let img = document.createElement('img');
        img.setAttribute('src', item.imgPack);
        imgContainer.append(img);

        //Detalles Nombre y Kart
        let details = document.createElement('div');

        // Nombre y Vehiculo encabezado
        let titleCharactersKarts = document.createElement('p');
        let bLabelCharactersKarts = document.createElement('b')
        let textBLabelCharactersKarts = document.createTextNode('Personajes y vehículos:');
        bLabelCharactersKarts.append(textBLabelCharactersKarts);
        titleCharactersKarts.append(bLabelCharactersKarts);

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

        details.append(titleCharactersKarts, character_1, character_2, character_3, character_4);

        //Button Add

        let buttonAdd = document.createElement('button');
        let textButton = document.createTextNode('Agregar a colección')
        buttonAdd.setAttribute('type', 'button');
        buttonAdd.append(textButton);
    

        // Agregando clases a elementos
        card.classList.add('packs-kart');
        card.classList.add('general-card');
        imgContainer.classList.add('packs-kart__container-img');

        details.classList.add('packs-kart__details')
        titleCharactersKarts.classList.add('characterAndKartsPacks')
        character_1.classList.add('characterPacks');
        character_2.classList.add('characterPacks');
        character_3.classList.add('characterPacks');
        character_4.classList.add('characterPacks');

        buttonAdd.classList.add('packs-kart__addCollection');
    
        // Agregando nodos a su respectivo padre
        card.append(imgContainer, details, buttonAdd);
    
        // Agregando a section en HTML
        packsSection.append(card);
    });
}
addCards4Packs(packsList);