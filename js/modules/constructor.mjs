import { append, appendTitle } from './insert.mjs'

export let constructor = (directory) => {
    let mainHTML = document.getElementsByTagName('main')[0];
    let titleHTML = document.getElementsByTagName('title')[0];
    let menuToggle = document.getElementById('drop');


    //Creamos una función que se auto-ejecuta para que sea asíncrona y espere a que termine de ejecutarse las funciones a las que llama
    ; (async () => {
        await append(directory, mainHTML);
        hljs.highlightAll();
        let h1 = document.getElementsByTagName('h1')[0];
        appendTitle(h1.innerHTML, titleHTML);
        menuToggle.checked = false;
    })();
}