import { constructor } from './constructor.mjs';
import { pages } from './routes.mjs';

// TODO: Pasar a un JSON el objeto cuando aprenda a usar la API rest para hacer las conexiones usando: var arrDatos = JSON.parse(element.responseText); Para convertir el JSON a un objeto

export let router = () => {
    let { hash } = window.location;
    constructor(pages[hash]);
}