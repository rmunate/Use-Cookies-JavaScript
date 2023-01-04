# Funciones Manejo Cookies Desde JavaScript
## _Funciones para manejo de cookies desde JavaScript_


## Función Para Crear Cookie Con JavaScript
```sh
function setCookie(nombre, valor, dias){
    let name = String(nombre).trim(); //Eliminar Espacios Del Nombre
    let days = parseInt(dias); //Convertir en Entero los dias
    let dateNow = new Date(); //Inicialiar Tiempo Actual.
    dateNow.setTime(dateNow.getTime() + ((((days * 24) * 60) * 60) * 1000));
    let cookie = name + "=" + valor + ";expires=" + dateNow.toGMTString();
    return document.cookie = cookie;
}
```

## Función para consultar si la cookie existe y su valor
```sh
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
```

## Funcion para eliminar Cookie
```sh
function deleteCookie(nombre){
    let name = String(nombre).trim(); //Eliminar Espacios Del Nombre
    return document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';   
}
```

## Ejecutar Codigo Si Existe Una Cookie
```sh
// La propiedad [.exist] retorna true si existe o false en caso de no existir la cookie. 
if (getCookie("nombreCookie").exist) {
    // Si la cookie existe, podemos extraer su valor a traves de la propiedad [.value]
    let valueCookie = getCookie("RefreshDataTable").value;
}
```



