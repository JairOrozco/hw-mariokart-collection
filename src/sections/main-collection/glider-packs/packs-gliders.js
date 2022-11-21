// Funciones importadas
import { kartInCollection } from '../../../utils/localStorage.js'; //Funcion que agrega o quita contenido al LocalStorage
import { alredyInCollectionList } from '../../../utils/localStorage.js'; // Funcion que revisa si hay algo en el LOCALSTORAGE 
import { observer } from '../../../utils/observer.js'  // Observador

// Funcionalidades Generales de la página

// Section Paquetes Glider agregar contenido

// Nodos
let gliderPacksSection = document.querySelector('#glidersPacksSection');
let gliderPacksList = []

// Array con contenido
gliderPacksList.push(
    {
        id: 601,
        imgGliderPacks: '../../../../assets/packsVariety/yoshi-waluigi-mario.png',
        characterName_1: 'Yoshi',
        characterName_2: 'Waluigi',
        characterName_3: 'Mario Bros',
        kart_1: 'Sports Coupe',
        kart_2: 'B-Dasher',
        kart_3: 'Pipe Frame',
        glider_1: 'Parafoil',
        glider_2: 'Super Glider',
        glider_3: 'Parachute'
    },
    {
        id: 602,
        imgGliderPacks: '../../../../assets/packsVariety/mario-bowser-peach.png',
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

// Lazy loader instancia
let lazyLoader = new IntersectionObserver(observer);


// Funcion que agrega el contenido a el navegador 
function addCardsGliderPacks(array) {
    let completeContent = [];
    array.forEach(item => {
        // Creando elementos

        // Card
        let card = document.createElement('div');

        // Figure e imagen
        let imgContainer = document.createElement('figure')
        let img = document.createElement('img');
        img.setAttribute('data-img', item.imgGliderPacks);
        imgContainer.append(img);

        //Lazy loader
        lazyLoader.observe(img);

        //Detalles Nombre y Kart
        let details = document.createElement('div');

        //Personajes y Vehiculos
        //Personaje 1
        let characterKartGlider_1 = document.createElement('p');
        let boldLetter_1 = document.createElement('b');
        let contentCharacterKartGlider_1 = document.createTextNode(`${item.characterName_1} - ${item.kart_1} - ${item.glider_1}`);
        boldLetter_1.append(contentCharacterKartGlider_1);
        characterKartGlider_1.append(boldLetter_1);

        //Personaje 2
        let characterKartGlider_2 = document.createElement('p');
        let boldLetter_2 = document.createElement('b');
        let contentCharacterKartGlider_2 = document.createTextNode(`${item.characterName_2} - ${item.kart_2} - ${item.glider_2}`);
        boldLetter_2.append(contentCharacterKartGlider_2);
        characterKartGlider_2.append(boldLetter_2);

        //Personaje 3
        let characterKartGlider_3 = document.createElement('p');
        let boldLetter_3 = document.createElement('b');
        let contentCharacterKartGlider_3 = document.createTextNode(`${item.characterName_3} - ${item.kart_3} - ${item.glider_3}`);
        boldLetter_3.append(contentCharacterKartGlider_3);
        characterKartGlider_3.append(boldLetter_3);

        

        //Button Add

        let buttonAdd = document.createElement('button');
        let textButton = document.createTextNode('Agregar a mi colección')
        buttonAdd.setAttribute('type', 'button');
        buttonAdd.append(textButton);
    

        // Agregando clases y atributos a elementos

        card.classList.add('general-card');
        card.classList.add('glidersPacks-kart');
        card.classList.add('bordersNormal');
        imgContainer.classList.add('container-img');
        imgContainer.classList.add('glidersPacks-kart__container-img');
        details.classList.add('details')
        details.classList.add('glidersPacks-kart__details')
        characterKartGlider_1.classList.add('characterPackGlider');
        characterKartGlider_2.classList.add('characterPackGlider');
        characterKartGlider_3.classList.add('characterPackGlider');
        buttonAdd.classList.add('addCollection');
        buttonAdd.classList.add('noInCollection')
    
        // Agregando nodos a su respectivo padre
        details.append(characterKartGlider_1, characterKartGlider_2, characterKartGlider_3);
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
    
        //Insertando contenido completo a array
        completeContent.push(card)
    })
    // Agregando a section en HTML
    gliderPacksSection.append(...completeContent);
}
addCardsGliderPacks(gliderPacksList);