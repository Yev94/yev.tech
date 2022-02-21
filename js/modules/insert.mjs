import { connectHTML } from './connect.mjs';

export let append = async (directory, htmlChained) => {
    await connectHTML(directory, htmlChained);
}

export let appendTitle = (titulo, headHTML) => {
    headHTML.insertAdjacentHTML('beforeend', `<title>${titulo}</title>`);
}

export let appendScriptHighlight = async (headHTML) => {
    let script = document.createElement('script');
    script.setAttribute('src', './highlight/highlight.min.js');
    headHTML.appendChild(script);
}

export let appendActivateHighlight = async (headHTML) => {
    let script = document.createElement('script');
    let text = document.createTextNode('hljs.highlightAll()');
    script.setAttribute('defer', '');
    script.appendChild(text);
    headHTML.appendChild(script);
}