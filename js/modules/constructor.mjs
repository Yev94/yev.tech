import { append, appendTitle, appendAttributeContentValue } from './insert.mjs'
import Calc from './calc.mjs';
import CountDownTimer from './count-down-timer.mjs';
import Modal from './modal.mjs';

export let constructor = (directory) => {
    let mainHTML = document.getElementsByTagName('main')[0];
    let titleHTML = document.getElementsByTagName('title')[0];
    let menuToggle = document.getElementById('drop');
    let metaTitle = document.querySelector('meta[property="og:title"]');


    //Creamos una función que se auto-ejecuta para que sea asíncrona y espere a que termine de ejecutarse las funciones a las que llama
    ; (async () => {
        await append(directory, mainHTML);
        hljs.highlightAll();
        let h1 = document.getElementsByTagName('h1')[0].textContent.replace(/\s*\n/g, '');
        appendTitle(titleHTML, h1);
        appendAttributeContentValue(metaTitle, h1);
        menuToggle.checked = false;

        let modal = new Modal();

        //Para rescatar el código necesario para el juego de calculadora
        if (window.location.href.includes('#/calc')) {
            let calc = new Calc();
        }
        //Para rescatar el código necesario para el Count Down Timer
        if (window.location.href.includes('#/cdt')) {
            let countDown = new CountDownTimer();
        }
    })();
}