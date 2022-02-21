// TODO: Cuando haga la conexión con la API rest será el controlador el que se encargue de hacer las insercciones del HTML, en la conexión solo pasará el resultado.
export let connectHTML = (url, html) => {
    //Creamos una promesa para que tenga que resolver algo, y así al terminar de resolver sea cuando se ejecute el código que lo llama
    return new Promise((resolve, reject) => {
        if (url === undefined) return;
        let xhr = new XMLHttpRequest();
        xhr.addEventListener('readystatechange', function () {
            if (this.readyState !== 4) return;
            if (this.status >= 200 && this.status < 300) {
                html.innerHTML = null;
                resolve(html.insertAdjacentHTML('beforeend', this.responseText));
            }
        });
        xhr.open('GET', url, true);
        xhr.send();
    })

}