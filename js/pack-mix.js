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



// Section Paquete Mix Glider
let mixPackSection = document.querySelector('#mixPackSection')
let mixPacklist = [];


// Section Paquete Mix Glider agregar contenido

//Variables
mixPacklist.push(
    {
        id: 801,
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

// Funcion que revisa si hay algo en el LOCALSTORAGE 
function alredyInCollectionList() {

    const item = JSON.parse(localStorage.getItem('packMix'));
    let packs;

    if(item) {
        packs = item;
    } else {
        packs = {};
    }

    return packs;
}

//Funcion que agrega o quita contenido al LocalStorage
function packsInCollection(pack) {

    let packsInCollectionList = alredyInCollectionList();
    
    if(packsInCollectionList[pack.id]) {

        packsInCollectionList[pack.id] = undefined;

    }else {
        packsInCollectionList[pack.id] = pack;
    }

    localStorage.setItem('packMix', JSON.stringify(packsInCollectionList))
}

//Funcion que agrega contenido a el navegador
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
        

        //Button Add

        let buttonAdd = document.createElement('button');
        let textButton = document.createTextNode('Agregar a mi colección')
        buttonAdd.setAttribute('type', 'button');
        buttonAdd.append(textButton);
    

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
        buttonAdd.classList.add('addCollection');
        buttonAdd.classList.add('noInCollection')
    
        // Agregando nodos a su respectivo padre
        details.append(character_1, character_2, character_3, character_4, character_5, character_6, character_7, character_8);
        imgContainer.append(img);
        card.append(imgContainer, details, buttonAdd);

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

                packsInCollection(item);

            } else {
                card.classList.remove('bordersGreen')
                card.classList.add('bordersNormal')

                buttonAdd.classList.remove('inCollection')
                buttonAdd.classList.add('noInCollection')
                
                textButton.textContent = 'Agregar a mi colección';
                buttonAdd.style.color = 'white';

                packsInCollection(item);

            }
        } 
        buttonAdd.addEventListener('click', collection)

        // Agregando a section en HTML
        mixPackSection.append(card);
    });
}
addCardsMixPack(mixPacklist);