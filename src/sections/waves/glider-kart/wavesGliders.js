import { kartInCollection } from '../../../utils/localStorage.js'; //Funcion que agrega o quita contenido al LocalStorage
import { alredyInCollectionList } from '../../../utils/localStorage.js'; // Funcion que revisa si hay algo en el LOCALSTORAGE 
import { observer } from '../../../utils/observer.js'  // Observador

let sectionWavesGliders = document.querySelector('#wavesSectionGlider');
let wavesListGliders = [];

// Lazy loader instancia
let lazyLoader = new IntersectionObserver(observer);

wavesListGliders.push( 
    {
        id: 2001,
        waveNumber: 'Oleada 1',
        imgWave: '../../../../assets/wavesGliders/oleada-1.png',
    },
    {
        id: 2002,
        waveNumber: 'Oleada 2',
        imgWave: '../../../../assets/wavesGliders/oleada-2.png',
    },
    {
        id: 2003,
        waveNumber: 'Oleada 3',
        imgWave: '../../../../assets/wavesGliders/oleada-3.png',
    },
    {
        id: 2004,
        waveNumber: 'Oleada 4',
        imgWave: '../../../../assets/wavesGliders/oleada-4.png',
    },
    {
        id: 2005,
        waveNumber: 'Oleada 5',
        imgWave: '../../../../assets/wavesGliders/oleada-5.png',
    },
    {
        id: 2006,
        waveNumber: 'Oleada 6',
        imgWave: '../../../../assets/wavesGliders/oleada-6.png',
    },
    {
        id: 2007,
        waveNumber: 'Oleada 7',
        imgWave: '../../../../assets/wavesGliders/oleada-7.png',
    }
)

function addCards(array) {
    let completeContent = [];
    array.forEach(item => {

        // Creando elementos

        // Card
        let card = document.createElement('div');

        //Numero de oleada
        let waveNumber = document.createElement('h3');
        waveNumber.textContent = item.waveNumber

        // Figure e imagen
        let imgContainer = document.createElement('figure')
        let img = document.createElement('img');
        img.setAttribute('data-img', item.imgWave);
        imgContainer.append(img);

        //Observador lazy load
        lazyLoader.observe(img);


        // Agregando clases a elementos
        card.classList.add('general-card');
        card.classList.add('waves-karts')
        card.classList.add('bordersNormal');
        imgContainer.classList.add('container-img');
        waveNumber.classList.add('wave-number')
    
        // Agregando nodos a su respectivo padre
        card.append(waveNumber, imgContainer);

        //Insertando contenido completo a array
        completeContent.push(card);
    });
    // Agregando a section en HTML
    sectionWavesGliders.append(...completeContent);
}

addCards(wavesListGliders);