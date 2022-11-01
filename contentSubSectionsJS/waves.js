import { kartInCollection } from '../utils/localStorage.js'; //Funcion que agrega o quita contenido al LocalStorage
import { alredyInCollectionList } from '../utils/localStorage.js'; // Funcion que revisa si hay algo en el LOCALSTORAGE 
import { observer } from '../utils/observer.js'  // Observador

let sectionWaves = document.querySelector('#wavesSection');
let wavesList = [];

// Lazy loader instancia
let lazyLoader = new IntersectionObserver(observer);

wavesList.push( 
    {
        id: 1801,
        waveNumber: 'Oleada 1',
        imgWave: '../assets/waves/oleada-1.png',
    },
    {
        id: 1802,
        waveNumber: 'Oleada 2',
        imgWave: '../assets/waves/oleada-2.png',
    },
    {
        id: 1803,
        waveNumber: 'Oleada 3',
        imgWave: '../assets/waves/oleada-3.png',
    },
    {
        id: 1804,
        waveNumber: 'Oleada 4',
        imgWave: '../assets/waves/oleada-4.png',
    },
    {
        id: 1805,
        waveNumber: 'Oleada 5',
        imgWave: '../assets/waves/oleada-5.png',
    },
    {
        id: 1806,
        waveNumber: 'Oleada 6',
        imgWave: '../assets/waves/oleada-6.png',
    },
    {
        id: 1807,
        waveNumber: 'Oleada 7',
        imgWave: '../assets/waves/oleada-7.png',
    },
    {
        id: 1808,
        waveNumber: 'Oleada 8',
        imgWave: '../assets/waves/oleada-8.png',
    },
    {
        id: 1809,
        waveNumber: 'Oleada 9',
        imgWave: '../assets/waves/oleada-9.png',
    },
    {
        id: 1810,
        waveNumber: 'Oleada 10',
        imgWave: '../assets/waves/oleada-10.png',
    },
    {
        id: 1811,
        waveNumber: 'Oleada 11',
        imgWave: '../assets/waves/oleada-11.png',
    },
    {
        id: 1812,
        waveNumber: 'Oleada 12',
        imgWave: '../assets/waves/oleada-12.png',
    },
    {
        id: 1813,
        waveNumber: 'Oleada 13',
        imgWave: '../assets/waves/oleada-13.png',
    },
    {
        id: 1814,
        waveNumber: 'Oleada 14',
        imgWave: '../assets/waves/oleada-14.png',
    },
    {
        id: 1815,
        waveNumber: 'Oleada 15',
        imgWave: '../assets/waves/oleada-15.png',
    },
    {
        id: 1816,
        waveNumber: 'Oleada 16',
        imgWave: '../assets/waves/oleada-16.png',
    },
    {
        id: 1817,
        waveNumber: 'Oleada 17',
        imgWave: '../assets/waves/oleada-17.png',
    },
    {
        id: 1818,
        waveNumber: 'Oleada 18',
        imgWave: '../assets/waves/oleada-18.png',
    },
    {
        id: 1819,
        waveNumber: 'Oleada 19',
        imgWave: '../assets/waves/oleada-19.png',
    },
    {
        id: 1820,
        waveNumber: 'Oleada 20',
        imgWave: '../assets/waves/oleada-20.png',
    },
    {
        id: 1821,
        waveNumber: 'Oleada 21',
        imgWave: '../assets/waves/oleada-21.png',
    },
    {
        id: 1822,
        waveNumber: 'Oleada 22',
        imgWave: '../assets/waves/oleada-22.png',
    },
    {
        id: 1823,
        waveNumber: 'Oleada 23',
        imgWave: '../assets/waves/oleada-23.png',
    },
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
    sectionWaves.append(...completeContent);
}

addCards(wavesList);