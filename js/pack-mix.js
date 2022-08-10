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


// Section Paquete Mix Glider
let mixPackSection = document.querySelector('#mixPackSection')
let mixPacklist = [];


// Section Paquete Mix Glider agregar contenido

//Variables
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
        let textButton = document.createTextNode('Agregar a mi colección')
        buttonAdd.setAttribute('type', 'button');
        buttonAdd.append(textButton);
    

        // Agregando clases y atributos a elementos


        

        card.classList.add('mixPack-kart');
        card.classList.add('general-card');
        card.classList.add('bordersNormal');
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
        buttonAdd.classList.add('mixPack-kart__noInCollection')
    
        // Agregando nodos a su respectivo padre
        details.append(containerCharactersInfo, character_1, character_2, character_3, character_4, character_5, character_6, character_7, character_8);
        imgContainer.append(img);
        card.append(imgContainer, details, buttonAdd);
    
        //Funcionalidad del boton agregar a coleccion
        function collection() {

            if(!buttonAdd.classList.contains('mixPack-kart__inCollection')) {
                card.classList.remove('bordersNormal')
                card.classList.add('bordersGreen')

                buttonAdd.classList.remove('mixPack-kart__noInCollection')
                buttonAdd.classList.add('mixPack-kart__inCollection')

                buttonAdd.removeChild(textButton);

                textButton = document.createTextNode('En mi colección')
                buttonAdd.style.color = 'white';
                buttonAdd.append(textButton);

                card.style.borderWidth = '3px';
            } else {
                card.classList.remove('bordersGreen')
                card.classList.add('bordersNormal')

                buttonAdd.classList.remove('mixPack-kart__inCollection')
                buttonAdd.classList.add('mixPack-kart__noInCollection')
                
                buttonAdd.removeChild(textButton);
                
                textButton = document.createTextNode('Agregar a mi colección')
                buttonAdd.style.color = 'white';
                buttonAdd.append(textButton);
                
                card.style.borderWidth = '1px';
            }
        } 
        buttonAdd.addEventListener('click', collection)

        // Agregando a section en HTML
        mixPackSection.append(card);
    });
}
addCardsMixPack(mixPacklist);