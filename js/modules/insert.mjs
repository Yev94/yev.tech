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