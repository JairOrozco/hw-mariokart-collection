const individualBlisterSection = document.querySelector('#individualBlisterSection');

let kartsListBlister = []

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
        characterName: 'Red Shy Guy',
        kart: 'Standard Kart'
    },
    {
        imgKart: '/assets/blister/redshy-bdasher.png',
        characterName: 'Red Shy Guy',
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
        let blisterKartCard = document.createElement('div');

        // Figure e imagen
        let blisterKartImgContainer = document.createElement('figure')
        let blisterKartImg = document.createElement('img');
        blisterKartImg.setAttribute('src', item.imgKart);

        //Detalles Nombre y Kart
        let blisterKartDetails = document.createElement('div');

        // Nombre
        let blisterKartCharacterName = document.createElement('p');
        let blisterKartLettersBoldName = document.createElement('b')
        let blisterKartNameBold = document.createTextNode('Personaje: ');
        blisterKartLettersBoldName.append(blisterKartNameBold);
        blisterKartCharacterName.append(blisterKartLettersBoldName)
        let characterName = document.createTextNode(item.characterName);
        blisterKartCharacterName.append(characterName);

        //Kart
        let blisterKartTypeKart = document.createElement('p');
        let blisterKartLettersBoldKart = document.createElement('b')
        let blisterKartBoldKart = document.createTextNode('Kart: ');
        blisterKartLettersBoldKart.append(blisterKartBoldKart);
        blisterKartTypeKart.append(blisterKartLettersBoldKart);
        let kartType = document.createTextNode(item.kart);
        blisterKartTypeKart.append(kartType);

        //Button Add

        let blisterKartButtonAdd = document.createElement('button');
        let blisterKartTextButton = document.createTextNode('Agregar a colección')
        blisterKartButtonAdd.setAttribute('type', 'button');
        blisterKartButtonAdd.append(blisterKartTextButton);
    
        
        // Agregando clases y atributos a elementos
        blisterKartCard.classList.add('blister-kart');
        blisterKartCard.classList.add('general-card');
        blisterKartImgContainer.classList.add('blister-kart__container-img');
        blisterKartImg.setAttribute('src', item.imgKart);
        blisterKartDetails.classList.add('blister-kart__details')
        blisterKartCharacterName.classList.add('character')
        blisterKartTypeKart.classList.add('kart');
    
        blisterKartCharacterName.append(characterName);
        blisterKartTypeKart.append(kartType);
        blisterKartButtonAdd.setAttribute('type', 'button');
        blisterKartButtonAdd.classList.add('blister-kart__addCollection');
    
        // Agregando nodos a su respectivo padre
        blisterKartDetails.append(blisterKartCharacterName, blisterKartTypeKart);
        blisterKartImgContainer.append(blisterKartImg);
        blisterKartCard.append(blisterKartImgContainer, blisterKartDetails, blisterKartButtonAdd);
    
        // Agregando a section en HTML
        individualBlisterSection.append(blisterKartCard);
    });
}

addCards(kartsListBlister);