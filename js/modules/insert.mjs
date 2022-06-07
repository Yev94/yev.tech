import { connectHTML } from './connect.mjs';

export let append = async (directory, htmlChained) => {
    await connectHTML(directory, htmlChained).then(html => {
        htmlChained.innerHTML = null;
        htmlChained.insertAdjacentHTML('beforeend', html);
    });
}

export let appendTitle = (titleHTML, titulo) => {
    titleHTML.innerHTML = titulo; //Ponemos el nuevo con el nuevo titulo
}

export let appendAttributeContentValue = (element, value) => {
    element.content = value; //Insertamos el nuevo valor del atributo
}