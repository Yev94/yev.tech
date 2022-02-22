import { connectHTML } from './connect.mjs';

export let append = async (directory, htmlChained) => {
    await connectHTML(directory, htmlChained).then(html => {
        htmlChained.innerHTML = null;
        htmlChained.insertAdjacentHTML('beforeend', html);
    });
}

export let appendTitle = (titulo, titleHTML) => {
    titleHTML.innerHTML = titulo; //Ponemos el nuevo con el nuevo titulo
}

export let appendActivateHighlight = async (headHTML) => {
    let script = document.getElementById('highlight');//Busca script
    if(script) script.remove(); // Si existe, elimina
    //Creamos nuevo script
    script = document.createElement('script');
    let text = document.createTextNode('hljs.highlightAll()');
    script.setAttribute('defer', '');
    script.setAttribute('id', 'highlight');
    script.appendChild(text);
    headHTML.appendChild(script);
}