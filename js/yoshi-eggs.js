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


// Section Yoshi Eggs agregando contenido

// Variables
let yoshiEggsSection = document.querySelector('#yoshiEggsSection')
let yoshiEggsList = [];


// Array con contenido
yoshiEggsList.push(
    {
        imgKart: '/assets/yoshis/whiteYoshi.png',
        characterName: 'White Yoshi',
        kart: 'Standard Kart'
    },
    {
        imgKart: '/assets/yoshis/blackYoshi.png',
        characterName: 'Black Yoshi',
        kart: 'Standard Kart'
    },
    {
        imgKart: '/assets/yoshis/blueYoshi.png',
        characterName: 'Blue Yoshi',
        kart: 'Standard Kart'
    },
    {
        imgKart: '/assets/yoshis/blueLight-Yoshi.png',
        characterName: 'Light-Blue Yoshi',
        kart: 'Standard Kart'
    },
    {
        imgKart: '/assets/yoshis/orangeYoshi.png',
        characterName: 'Orange Yoshi',
        kart: 'Standard Kart'
    },
    {
        imgKart: '/assets/yoshis/yellowYoshi.png',
        characterName: 'Yellow Yoshi',
        kart: 'Standard Kart'
    },
    {
        imgKart: '/assets/yoshis/pinkYoshi.png',
        characterName: 'Pink Yoshi',
        kart: 'Standard Kart'
    },
    {
        imgKart: '/assets/yoshis/greenYoshi.png',
        characterName: 'Green Yoshi',
        kart: 'Standard Kart'
    },
)

// Funcion que agrega contenido a el navegador
function addCardsYoshiEggs(array) {
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
        buttonAdd.append(textButton);
    

        // Agregando clases a elementos
        card.classList.add('yoshis-eggs-kart');
        card.classList.add('general-card');
        card.classList.add('bordersNormal');
        imgContainer.classList.add('yoshis-eggs-kart__container-img');
        details.classList.add('yoshis-eggs-kart__details')
        titleCharacter.classList.add('characterYoshi')
        titleKart.classList.add('kartYoshi');
    
        buttonAdd.classList.add('yoshis-eggs-kart__addCollection');
        buttonAdd.classList.add('yoshis-eggs-kart__noInCollection')
    
        // Agregando nodos a su respectivo padre
        card.append(imgContainer, details, buttonAdd);

        //Funcionalidad del boton agregar a coleccion
        function collection() {

            if(!buttonAdd.classList.contains('yoshis-eggs-kart__inCollection')) {
                card.classList.remove('bordersNormal')
                card.classList.add('bordersGreen')

                buttonAdd.classList.remove('yoshis-eggs-kart__noInCollection')
                buttonAdd.classList.add('yoshis-eggs-kart__inCollection')

                buttonAdd.removeChild(textButton);

                textButton = document.createTextNode('En mi colección')
                buttonAdd.style.color = 'white';
                buttonAdd.append(textButton);

                card.style.borderWidth = '3px';
            } else {
                card.classList.remove('bordersGreen')
                card.classList.add('bordersNormal')

                buttonAdd.classList.remove('yoshis-eggs-kart__inCollection')
                buttonAdd.classList.add('yoshis-eggs-kart__noInCollection')
                
                buttonAdd.removeChild(textButton);
                
                textButton = document.createTextNode('Agregar a mi colección')
                buttonAdd.style.color = 'white';
                buttonAdd.append(textButton);
                
                card.style.borderWidth = '1px';
            }
        } 
        buttonAdd.addEventListener('click', collection)
    
        // Agregando a section en HTML
        yoshiEggsSection.append(card);
    })
}
addCardsYoshiEggs(yoshiEggsList);