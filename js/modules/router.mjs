import { constructor } from './constructor.mjs';

// TODO: Pasar a un JSON el objeto cuando aprenda a usar la API rest para hacer las conexiones usando: var arrDatos = JSON.parse(element.responseText); Para convertir el JSON a un objeto
let pages = {
    
    '#/': "./html/home.html",
    '': "./html/home.html",

    '#/admin/solicitud-prestacion-desempleo': './html/admin/solicitud-prestacion-desempleo.html',


    '#/descripcion-codigos/bbdd/conexion-bbdd':
    './html/descripcion-codigos/bbdd/conexion-bbdd.html',

    '#/descripcion-codigos/bbdd/evitar-inyeccion-sql':
    './html/descripcion-codigos/bbdd/evitar-inyeccion-sql.html',

    '#/descripcion-codigos/encontrar-suma-num-array':
    './html/descripcion-codigos/encontrar-suma-num-array.html',


    '#/descripcion-codigos/encriptacion':
        './html/descripcion-codigos/encriptacion.html',

    '#/descripcion-codigos/expresiones-regulares':
        './html/descripcion-codigos/expresiones-regulares.html',

    '#/descripcion-codigos/extensiones-chrome':
        './html/descripcion-codigos/extensiones-chrome.html',

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
    '#/herramientas/tracking/gtm': './html/herramientas/tracking/gtm',
    '#/herramientas/tracking/gtm/cliente': './html/herramientas/tracking/gtm/cliente.html',

    '#/os/linux/dns': './html/os/linux/dns.html',
    '#/os/linux/mime': './html/os/linux/mime.html',
    '#/os/linux/vsftp': './html/os/linux/vsftp.html',

    '#/os/macos': './html/os/macos',
    
    '#/vs-code/configuracion': './html/vs-code/configuracion.html',
    '#/vs-code/extensiones': './html/vs-code/extensiones.html',
    '#/vs-code/snippets': './html/vs-code/snippets.html',
    '#/vs-code/testing': './html/vs-code/testing.html',

    '#/cms/prestashop': './html/cms/prestashop',
    '#/cms/prestashop/configuracion-avanzada': './html/cms/prestashop/configuracion-avanzada.html',
    '#/cms/prestashop/instalar-prestashop-local': './html/cms/prestashop/instalar-prestashop-local.html',
    '#/cms/prestashop/primeros-pasos-en-prestashop': './html/cms/prestashop/primeros-pasos-en-prestashop.html',

    '#/cms/wordpress': './html/cms/wordpress',
    '#/cms/wordpress/configuracion-avanzada': './html/cms/wordpress/configuracion-avanzada.html',
    '#/cms/wordpress/instalar-wordpress-local': './html/cms/wordpress/instalar-wordpress-local.html',
    '#/cms/wordpress/primeros-pasos-en-wordpress': './html/cms/wordpress/primeros-pasos-en-wordpress.html',
    '#/cms/wordpress/temas/avada': './html/cms/wordpress/temas/avada.html',
    '#/cms/wordpress/temas/divi': './html/cms/wordpress/temas/divi.html',
}

export let router = () => {
    let { hash } = window.location;
    constructor(pages[hash]);
}