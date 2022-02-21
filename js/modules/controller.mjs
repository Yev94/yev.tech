import { append, appendTitle, appendScriptHighlight, appendActivateHighlight } from './insert.mjs'

export let controller = (directory) => {
    let headHTML = document.getElementsByTagName('head')[0];
    let headerHTML = document.getElementsByTagName('header')[0];
    let mainHTML = document.getElementsByTagName('main')[0];
    let footerHTML = document.getElementsByTagName('footer')[0];

    //Creamos una función que se auto-ejecuta para que sea asíncrona y espere a que termine de ejecutarse las funciones a las que llama
    ; (async () => {
        appendScriptHighlight(headHTML);
        await append('./html/head.html', headHTML);
        await append('./html/menu.html', headerHTML);
        await append(directory, mainHTML);
        await appendActivateHighlight(headHTML);
        let h1 = document.getElementsByTagName('h1')[0];
        appendTitle(h1.innerHTML, headHTML);
    })();
}