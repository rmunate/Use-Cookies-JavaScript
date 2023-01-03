/* Funcion para Crear la Cookie en el Navegador. */
function setCookie(nombre, valor, dias){
    let name = String(nombre).trim(); //Eliminar Espacios Del Nombre
    let days = parseInt(dias); //Convertir en Entero los dias
    let dateNow = new Date(); //Inicialiar Tiempo Actual.
    dateNow.setTime(dateNow.getTime() + ((((days * 24) * 60) * 60) * 1000));
    let cookie = name + "=" + valor + ";expires=" + dateNow.toGMTString();
    return document.cookie = cookie;
}

/* Funcion Para Consultar Cookie */
function getCookie(nombre) {
    let name = nombre + "=";
    let cookiesArray = document.cookie.split(';');
    for (let i = 0; i < cookiesArray.length; i++) {
        let cookie = cookiesArray[i].trim();
        if (cookie.indexOf(name) === 0){
            return {
                exist : true,
                value : cookie.substring(name.length, cookie.length)
            }; 
        } 
    }
    return {
        exist : false,
        value : null
    };
}

/* Funcion para eliminar Cookie */
function deleteCookie(nombre){
    let name = String(nombre).trim(); //Eliminar Espacios Del Nombre
    return document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';   
}
