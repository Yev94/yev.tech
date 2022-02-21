import { controller } from './controller.mjs';

// TODO: Pasar a un JSON el objeto cuando aprenda a usar la API rest para hacer las conexiones usando: var arrDatos = JSON.parse(element.responseText); Para convertir el JSON a un objeto
let pages = {
    '#/': "./html/home.html",
    '': "./html/home.html",
    '#/descripcion-codigos/encontrar-suma-num-array':
        './html/descripcion-codigos/encontrar-suma-num-array.html',

    '#/descripcion-codigos/encriptacion':
        './html/descripcion-codigos/encriptacion.html',

    '#/descripcion-codigos/expresiones-regulares':
        './html/descripcion-codigos/expresiones-regulares.html',

    '#/descripcion-codigos/numeros-aleatorios-entre-rangos':
        './html/descripcion-codigos/numeros-aleatorios-entre-rangos.html',

    '#/descripcion-codigos/ordenar-array':
        './html/descripcion-codigos/ordenar-array-1D.html',

    '#/descripcion-codigos/programando-en-batch':
        './html/descripcion-codigos/programando-en-batch.html',

    '#/descripcion-codigos/recursividad':
        './html/descripcion-codigos/recursividad.html',

    '#/estudio-anki': './html/estudio-anki',
    '#/frameworks': './html/frameworks',
    '#/frameworks/laravel': './html/frameworks/laravel.html',
    '#/herramientas': './html/herramientas',
    
    '#/linux/dns': './html/linux/dns.html',
    '#/linux/mime': './html/linux/mime.html',
    '#/linux/vsftp': './html/linux/vsftp.html',
    
    '#/vs-code/configuracion': './html/vs-code/configuracion.html',
    '#/vs-code/extensiones': './html/vs-code/extensiones.html',
    '#/vs-code/snippets': './html/vs-code/snippets.html',
    '#/vs-code/testing': './html/vs-code/testing.html',

    '#/wordpress': './html/wordpress',
    '#/wordpress/configuracion-avanzada': './html/wordpress/configuracion-avanzada.html',
    '#/wordpress/instalar-wordpress-local': './html/wordpress/instalar-wordpress-local.html',
    '#/wordpress/primeros-pasos-en-wordpress': './html/wordpress/primeros-pasos-en-wordpress.html',
    '#/wordpress/temas/avada': './html/wordpress/temas/avada.html',
}

export let router = () => {
    let { hash } = window.location;
    controller(pages[hash]);
}