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


// Section Paquetes Glider agregar contenido

// Variables
let gliderPacksSection = document.querySelector('#glidersPacksSection');
let gliderPacksList = []

// Array con contenido
gliderPacksList.push(
    {
        id: 1,
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
    },
    {
        id: 2,
        imgGliderPacks: '/assets/packsVariety/mario-bowser-peach.png',
        characterName_1: 'Mario Tanooki',
        characterName_2: 'Bowser',
        characterName_3: 'Peach',
        kart_1: 'Sports Coupe',
        kart_2: 'Standard Kart',
        kart_3: 'B-Dasher',
        glider_1: 'Super Glider',
        glider_2: 'Bowser Kite',
        glider_3: 'Peach Parasol'
    }
);

// Funcion que agrega el contenido a el navegador 
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
        let textButton = document.createTextNode('Agregar a mi colección')
        buttonAdd.setAttribute('type', 'button');
        buttonAdd.append(textButton);
    

        // Agregando clases y atributos a elementos

        card.classList.add('glidersPacks-kart');
        card.classList.add('general-card');
        card.classList.add('bordersNormal');
        imgContainer.classList.add('glidersPacks-kart__container-img');
        details.classList.add('glidersPacks-kart__details')
        charactersKartsAndGliders.classList.add('characterKartGliderPackGlider')
        characterKartGlider_1.classList.add('kartPackGlider');
        characterKartGlider_2.classList.add('kartPackGlider');
        characterKartGlider_3.classList.add('kartPackGlider');

        buttonAdd.classList.add('glidersPacks-kart__addCollection');
        buttonAdd.classList.add('glidersPacks-kart__noInCollection')
    
        // Agregando nodos a su respectivo padre
        details.append(charactersKartsAndGliders, characterKartGlider_1, characterKartGlider_2, characterKartGlider_3);
        imgContainer.append(img);
        card.append(imgContainer, details, buttonAdd);

        //Funcionalidad del boton agregar a coleccion
        function collection() {

            if(!buttonAdd.classList.contains('glidersPacks-kart__inCollection')) {
                card.classList.remove('bordersNormal')
                card.classList.add('bordersGreen')

                buttonAdd.classList.remove('glidersPacks-kart__noInCollection')
                buttonAdd.classList.add('glidersPacks-kart__inCollection')

                buttonAdd.removeChild(textButton);

                textButton = document.createTextNode('En mi colección')
                buttonAdd.style.color = 'white';
                buttonAdd.append(textButton);

                card.style.borderWidth = '3px';
            } else {
                card.classList.remove('bordersGreen')
                card.classList.add('bordersNormal')

                buttonAdd.classList.remove('glidersPacks-kart__inCollection')
                buttonAdd.classList.add('glidersPacks-kart__noInCollection')
                
                buttonAdd.removeChild(textButton);
                
                textButton = document.createTextNode('Agregar a mi colección')
                buttonAdd.style.color = 'white';
                buttonAdd.append(textButton);
                
                card.style.borderWidth = '1px';
            }
        } 
        buttonAdd.addEventListener('click', collection)
    
        // Agregando a section en HTML
        gliderPacksSection.append(card);
    })
}
addCardsGliderPacks(gliderPacksList);