// Funcion que revisa si hay algo en el LOCALSTORAGE 
export function alredyInCollectionList() {

    const item = JSON.parse(localStorage.getItem('item'));
    let karts;

    if(item) {
        karts = item;
    } else {
        karts = {};
    }

    return karts;
}

//Funcion que agrega o quita contenido al LocalStorage
export function kartInCollection(kart) {

    let kartsInCollectionList = alredyInCollectionList();
    
    if(kartsInCollectionList[kart.id]) {

        kartsInCollectionList[kart.id] = undefined;

    }else {
        kartsInCollectionList[kart.id] = kart;
    }

    localStorage.setItem('item', JSON.stringify(kartsInCollectionList))
}