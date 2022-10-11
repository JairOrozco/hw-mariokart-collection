
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

// Section Serie 1 agregando contenido
const serie2Section = document.querySelector('#serie2Section');
let kartsSerie2List = [];

// Array con todo el contenido
kartsSerie2List.push(
    {
        id: 1608,
        imgKart: '/assets/series/serie1/imagen.jpg',
        characterName: 'Red Shell'
    },
    {
        id: 1609,
        imgKart: '/assets/series/serie1/imagen.jpg',
        characterName: 'Bullet Bill'
    },
    {
        id: 1610,
        imgKart: '/assets/series/serie1/imagen.jpg',
        characterName: 'Monthy Mole'
    },
    {
        id: 1611,
        imgKart: '/assets/series/serie1/imagen.jpg',
        characterName: 'Boo'
    },
    {
        id: 1612,
        imgKart: '/assets/series/serie1/imagen.jpg',
        characterName: 'Cow'
    },
    {
        id: 1613,
        imgKart: '/assets/series/serie1/imagen.jpg',
        characterName: 'Bob-Omb'
    },
    {
        id: 1614,
        imgKart: '/assets/series/serie1/imagen.jpg',
        characterName: 'Mushroom Cup Trophy'
    }
);

// Funcion que revisa si hay algo en el LOCALSTORAGE 
function alredyInCollectionList() {

    const item = JSON.parse(localStorage.getItem('serie2'));
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

    localStorage.setItem('serie2', JSON.stringify(kartsInCollectionList))
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
        let characterName = document.createTextNode(`${item.characterName}`);
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
        card.classList.add('bordersNormal');
        imgContainer.classList.add('container-img');
        details.classList.add('details')
        character.classList.add('details__characterSerie')
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
        serie2Section.append(card);

        //----------------------
        
        
    });
}
addCards(kartsSerie2List);