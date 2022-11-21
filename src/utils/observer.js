// Observador
export let observer = (entradas) => {
    entradas.forEach(entry => {
        if(entry.isIntersecting) {
            let url = entry.target.getAttribute('data-img');
            entry.target.setAttribute('src', url);
        }
    })
}