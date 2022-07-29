// Section Blister Individual

const individualBlisterSection = document.querySelector('#individualBlisterSection');
let kartsListBlister = []

// Section Blister Paravela
const individualBlisterGliderSection = document.querySelector('#individualBlisterGliderSection');
let kartsListBlisterGlider = [];

// Section Paquetes

let packsSection = document.querySelector('#packsSection');
let packsList = []

// Section Paquetes Glider
let gliderPacksSection = document.querySelector('#glidersPacksSection');
let gliderPacksList = []

// Section Paquetes Glider
let mixPackSection = document.querySelector('#mixPackSection')
let mixPacklist = [];










// ----------------------------------------------------------

// Push y Funciones

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
        let textBLabelGlider = document.createTextNode('Glider: ')
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


// Section Paquetes Glider

gliderPacksList.push(
    {
        imgGliderPacks: '/assets/packsVariety/yoshi-waluigi-mario.png',
        characterName_1: 'Yoshi',
        characterName_2: 'Waluigi',
        characterName_3: 'Mario',
        kart_1: 'Sports Coupe',
        kart_2: 'B-Dasher',
        kart_3: 'Pipe Frame',
        glider_1: 'Parafoil',
        glider_2: 'Super Glider',
        glider_3: 'Parachute'
    }
);

function addCardsGliderPacks(array) {
    array.forEach(item => {
        // Creando elementos

        // Card
        let card = document.createElement('div');

        // Figure e imagen
        let imgContainer = document.createElement('figure')
        let img = document.createElement('img');
        img.setAttribute('src', item.imgGliderPacks);

        //Detalles Nombre y Kart
        let details = document.createElement('div');

        // Nombre y Vehiculo encabezado
        let charactersKartsAndGliders = document.createElement('p');
        let lettersBoldCharactersKartsAndGliders = document.createElement('b')
        let charactersKartsAndGlidersBold = document.createTextNode('Personajes, karts, planeadores:');
        lettersBoldCharactersKartsAndGliders.append(charactersKartsAndGlidersBold);
        charactersKartsAndGliders.append(lettersBoldCharactersKartsAndGliders);

        //Personajes y Vehiculos
        //Personaje 1
        let characterKartGlider_1 = document.createElement('p');
        let contentCharacterKartGlider_1 = document.createTextNode(`- ${item.characterName_1}, ${item.kart_1}, ${item.glider_1}`);
        characterKartGlider_1.append(contentCharacterKartGlider_1);

        //Personaje 2
        let characterKartGlider_2 = document.createElement('p');
        let contentCharacterKartGlider_2 = document.createTextNode(`- ${item.characterName_2}, ${item.kart_2}, ${item.glider_2}`);
        characterKartGlider_2.append(contentCharacterKartGlider_2);

        //Personaje 3
        let characterKartGlider_3 = document.createElement('p');
        let contentCharacterKartGlider_3 = document.createTextNode(`- ${item.characterName_3}, ${item.kart_3}, ${item.glider_3}`);
        characterKartGlider_3.append(contentCharacterKartGlider_3);

        

        //Button Add

        let buttonAdd = document.createElement('button');
        let textButton = document.createTextNode('Agregar a colección')
        buttonAdd.setAttribute('type', 'button');
        buttonAdd.append(textButton);
    

        // Agregando clases y atributos a elementos


        

        card.classList.add('glidersPacks-kart');
        card.classList.add('general-card');
        imgContainer.classList.add('glidersPacks-kart__container-img');

        details.classList.add('glidersPacks-kart__details')
        charactersKartsAndGliders.classList.add('characterKartGliderPackGlider')
        characterKartGlider_1.classList.add('kartPackGlider');
        characterKartGlider_2.classList.add('kartPackGlider');
        characterKartGlider_3.classList.add('kartPackGlider');

        buttonAdd.setAttribute('type', 'button');
        buttonAdd.classList.add('glidersPacks-kart__addCollection');
    
        // Agregando nodos a su respectivo padre
        details.append(charactersKartsAndGliders, characterKartGlider_1, characterKartGlider_2, characterKartGlider_3);
        imgContainer.append(img);
        card.append(imgContainer, details, buttonAdd);
    
        // Agregando a section en HTML
        gliderPacksSection.append(card);
    })
}
addCardsGliderPacks(gliderPacksList);



// Section Paquetes Glider
mixPacklist.push(
    {
        imgMixPack: '/assets/packsVariety/8-pack.png',
        characterName_1: 'Mario',
        characterName_2: 'Red Yoshi',
        characterName_3: 'Bowser',
        characterName_4: 'Waluigi',
        characterName_5: 'Toad',
        characterName_6: 'Peach',
        characterName_7: 'Shy Guy',
        characterName_8: 'Luigi',
        kart_1: 'Standard Kart',
        kart_2: 'P-Wing',
        kart_3: 'Standard Kart',
        kart_4: 'Badwagon',
        kart_5: 'Sneeker',
        kart_6: 'Standard Kart',
        kart_7: 'B-Dasher',
        kart_8: 'Circuit Special',
        glider_1: 'Parafoil',
        glider_2: 'Super Glider',
        glider_3: 'Bowser Kite'
    }
);

function addCardsMixPack(array){
    array.forEach(item => {
        // Creando elementos

        // Card
        let card = document.createElement('div');

        // Figure e imagen
        let imgContainer = document.createElement('figure')
        let img = document.createElement('img');
        img.setAttribute('src', item.imgMixPack);

        //Detalles Nombre y Kart
        let details = document.createElement('div');

        // Nombre y Vehiculo encabezado
        let containerCharactersInfo = document.createElement('p');
        let bLabel = document.createElement('b')
        let textbLabel = document.createTextNode('Personajes, karts, planeadores:');
        bLabel.append(textbLabel);
        containerCharactersInfo.append(bLabel);

        //Personajes y Vehiculos
        //Personaje 1
        let character_1 = document.createElement('p');
        let textCharacter_1 = document.createTextNode(`- ${item.characterName_1}, ${item.kart_1}, ${item.glider_1}`);
        character_1.append(textCharacter_1);

        //Personaje 2
        let character_2 = document.createElement('p');
        let textCharacter_2 = document.createTextNode(`- ${item.characterName_2}, ${item.kart_2}, ${item.glider_2}`);
        character_2.append(textCharacter_2);

        //Personaje 3
        let character_3 = document.createElement('p');
        let textCharacter_3 = document.createTextNode(`- ${item.characterName_3}, ${item.kart_3}, ${item.glider_3}`);
        character_3.append(textCharacter_3);

        //Personaje 4
        let character_4 = document.createElement('p')
        let textCharacter_4 = document.createTextNode(`- ${item.characterName_4} en ${item.kart_4}`)
        character_4.append(textCharacter_4);

        //Personaje 5
        let character_5 = document.createElement('p')
        let textCharacter_5 = document.createTextNode(`- ${item.characterName_5} en ${item.kart_5}`)
        character_5.append(textCharacter_5);

        //Personaje 6
        let character_6 = document.createElement('p')
        let textCharacter_6 = document.createTextNode(`- ${item.characterName_6} en ${item.kart_6}`)
        character_6.append(textCharacter_6);

        //Personaje 7
        let character_7 = document.createElement('p')
        let textCharacter_7 = document.createTextNode(`- ${item.characterName_7} en ${item.kart_7}`)
        character_7.append(textCharacter_7);

        //Personaje 8
        let character_8 = document.createElement('p')
        let textCharacter_8 = document.createTextNode(`- ${item.characterName_8} en ${item.kart_8}`)
        character_8.append(textCharacter_8);
        

        //Button Add

        let buttonAdd = document.createElement('button');
        let textButton = document.createTextNode('Agregar a colección')
        buttonAdd.setAttribute('type', 'button');
        buttonAdd.append(textButton);
    

        // Agregando clases y atributos a elementos


        

        card.classList.add('mixPack-kart');
        card.classList.add('general-card');
        imgContainer.classList.add('mixPack-kart__container-img');

        details.classList.add('mixPack-kart__details')
        containerCharactersInfo.classList.add('characterKartGliderMixPack')
        character_1.classList.add('kartMixPack');
        character_2.classList.add('kartMixPack');
        character_3.classList.add('kartMixPack');
        character_4.classList.add('kartMixPack');
        character_5.classList.add('kartMixPack');
        character_6.classList.add('kartMixPack');
        character_7.classList.add('kartMixPack');
        character_8.classList.add('kartMixPack');

        buttonAdd.classList.add('mixPack-kart__addCollection');
    
        // Agregando nodos a su respectivo padre
        details.append(containerCharactersInfo, character_1, character_2, character_3, character_4, character_5, character_6, character_7, character_8);
        imgContainer.append(img);
        card.append(imgContainer, details, buttonAdd);
    
        // Agregando a section en HTML
        mixPackSection.append(card);
    });
}
addCardsMixPack(mixPacklist);