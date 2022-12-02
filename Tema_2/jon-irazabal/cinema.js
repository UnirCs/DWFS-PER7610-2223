/**
 Archivo con todo el codigo JS necesario para implementar la funcionalidad de reserva de sitios

 Queremos crear un sencillo sistema de gestion de entradas de una sala de cine. Para ello nos serviremos de los metodos:
 - initialize: Inicializa la sala, representada por una matriz NxN (siempre cuadrada)
 - show: Muestra el estado de la sala (butacas libres y ocupadas)
 - suggest: Sugiere una opcion de reserva en base al numero de butacas que se quieren
 - order: Reserva aquellas butacas que suggest haya indicado.

 Las declaraciones de las cabeceras de los metodos NO DEBEN MODIFICARSE.
 Deberás:
 - Crear una variable que almacene el estado de la sala (pon especial atención al tipo de esta variable y su ámbito)
 - Implementar todos los métodos indicados anteriormente.

 Puedes usar el siguiente programa principal para probar
*/
//-------------------------------------------------------------------------------------------
//Programa principal (para comprobar el correcto funcionamiento - puede ser modificado)

//Creamos la sala y la mostramos (deberia estar toda vacia)
var cine;
var row_lenght;
var orderActive;
var butacasSugeridas = "";
var suggestionInitialSize = null;
var filaActual = null;
var butacaActual = null;
var butacaDerecha = null;

initialize(10);
show();

//Obtenemos los valores de algunas sugerencias

let reservation1 = order(1);
show();

let reservation2 = order(4);
show();

let reservation3 = order(3);
show();

let reservation4 = order(5);
show();

let reservation5 = order(3);
show();

let reservation6 = order(3);
show();

let reservation7 = order(3);
show();

let reservation8 = order(1);
show();

let reservation9 = order(4);
show();

let reservation10 = order(3);
show();

let reservation11 = order(5);
show();

let reservation12 = order(2);
show();

let reservation13 = order(3);
show();

let reservation14 = order(1);
show();

//Reservamos butacas

//Mostramos el estado de la sala

//-------------------------------------------------------------------------------------------
//Declarar aqui, de la forma adecuada, el estado de la sala


//-------------------------------------------------------------------------------------------
//Metodos a implementar (la declaracion de cada metodo NO se puede modificar)

/**
 * initialize - Crea una nueva sala de cine
 * @param {*} size - Numero de filas y longitud de las filas.
 */
function initialize(size) {
    row_lenght = size;
    cine = new Array();
    for(let fila = 0; fila < row_lenght; fila++) {
        cine[fila] = new Array();
        for(let butaca = 0; butaca < row_lenght; butaca++) {
            cine[fila][butaca] = "-";
        }
    }
}

/**
 * show - No recibe argumentos
 * Devuelve un String que representa el estado actual de la sala.
 * Formato: X para asientos ocupados, - para asientos libres.
 * Ejemplo (3x3):
 * - - X
 * - X -
 * X X X
 * 
 */
function show() {
    let row = "";
    console.log("Muestra el cine: \n");
    for(let fila = 0; fila < row_lenght; fila++) {
        for(let butaca = 0; butaca < row_lenght; butaca++) {
            row += cine[fila][butaca];
        }
        console.log(row);
        row = "";
    }
}


/**
 * suggest - Dada una cantidad de butacas deseadas, devuelve una posible acomodacion
 * Devuelve un String indicando la fila y columna de la butaca
 * La sugerencia debe contener butacas que esten siempre en la misma fila. Si no es posible, se devolvera 'null'
 * Ejemplo: suggest(3)
 * Resultado: F6B6, F6B7, F6B8 (fila 6, butacas 6, 7 y 8)
 * 
 * Esta operacion NO RESERVA ninguna butaca, solo ofrece una sugerencia. El criterio para ofrecer la sugerencia es de libre eleccion.
 * @param {*} requestSize 
 */
function suggest(requestSize, order) {
    if (order) {
        console.log("Order: " + requestSize);
    } else {
        console.log("Suggest: " + requestSize);
    }

    if (requestSize > 0 && requestSize > row_lenght) {
        return null;
    }

    butacasSugeridas = "";
    let asignacionesRestantes = requestSize;
    orderActive = order;
    suggestionInitialSize = requestSize;
    
    filaActual = 0;

    butacaDerecha = Math.round(row_lenght / 2) - Math.round(requestSize / 2);
    butacaIzquierda = butacaDerecha;

    buscarDerecha(0, butacaDerecha, asignacionesRestantes);
    return butacasSugeridas;
}

function buscarDerecha(fila, butaca, asignacionesRestantes) {
    //
    if (fila >= 0 & fila <= row_lenght - 1) {
        if (butaca <= row_lenght - 1) {
            if (cine[fila][butaca] == "-") {
                //La butaca está libre

                if (butacasSugeridas != "") {
                    butacasSugeridas += ",";
                }
                butacasSugeridas += "F" + fila + "B" + butaca;
                asignacionesRestantes--;
                //console.log("Butaca sugerida [" + fila + "][" + butaca + "] " + asignacionesRestantes + " restantes");

                if (asignacionesRestantes == 0) {
                    return true;
                }
                return buscarDerecha(fila, ++butacaDerecha, asignacionesRestantes);
            } else {
                //La butaca está ocupada
                butacaDerecha = butaca;
                //console.log("Butaca ocupada derecha [" + fila + "][" + butaca + "] ");
                if (butacaIzquierda > 0) {
                    butacasSugeridas = "";
                    return buscarIzquierda(fila, butacaIzquierda, suggestionInitialSize);
                } else if (butacaDerecha < row_lenght - 1) {
                    return buscarDerecha(fila, ++butacaDerecha, suggestionInitialSize);
                } else {
                    butacaIzquierda = Math.round(row_lenght / 2) - Math.round(suggestionInitialSize / 2);
                    butacaDerecha = butacaIzquierda;
                    return buscarDerecha(fila + 1, butacaDerecha, suggestionInitialSize);
                }
            }
        } else {
            //La butaca seleccionada no existe
            butacasSugeridas = "";
            asignacionesRestantes = suggestionInitialSize;
            //console.log("Butaca fuera derecha [" + fila + "][" + butaca + "] ");

            if (butacaIzquierda <= 0) {
                butacaDerecha = Math.round(row_lenght / 2) - Math.round(suggestionInitialSize / 2);
                butacaIzquierda = Math.round(row_lenght / 2) - Math.round(suggestionInitialSize / 2);
                return buscarDerecha(fila + 1, butacaDerecha, suggestionInitialSize)
            } else {
                return buscarIzquierda(fila, butacaIzquierda, suggestionInitialSize);
            }
        }
    }
    return null;
}

function buscarIzquierda(fila, butaca, asignacionesRestantes) {
    
    butacaIzquierda = butaca
    if (butaca >= 0) {
        if (cine[fila][butaca] == "-") {
            //La butaca está libre

            if (butacasSugeridas != "") {
                butacasSugeridas += ",";
            }
            butacasSugeridas += "F" + fila + "B" + butaca;
            asignacionesRestantes--;
            //console.log("Butaca sugerida [" + fila + "][" + butaca + "] " + asignacionesRestantes + " restantes");

            if (asignacionesRestantes == 0) {
                return true;
            }
            return buscarIzquierda(fila, --butacaIzquierda, asignacionesRestantes);
        } else {
            //La butaca está ocupada
            butacaIzquierda = butaca;
            asignacionesRestantes = suggestionInitialSize;
            butacasSugeridas = "";
            //console.log("Butaca ocupada izquierda [" + fila + "][" + butaca + "] ");
            if (butacaIzquierda <= 0 && butacaDerecha >= row_lenght - 1) {
                butacaDerecha = Math.round(row_lenght / 2) - Math.round(suggestionInitialSize / 2);
                butacaIzquierda = butacaDerecha;
                return buscarDerecha(fila + 1, butacaDerecha, suggestionInitialSize);
            } else if (butacaDerecha < row_lenght - 1) {
                return buscarDerecha(fila, ++butacaDerecha, suggestionInitialSize);
            } else if (butacaIzquierda > 0) {
                return buscarIzquierda(fila, --butacaIzquierda, suggestionInitialSize);
            }
        }
    } else {
        //Saltar a proxima fila
        butacasSugeridas = "";
        asignacionesRestantes = suggestionInitialSize;
        //console.log("Butaca fuera izquierda [" + fila + "][" + butaca + "] ");
        if (butacaDerecha > row_lenght - 1) {
            butacaDerecha = Math.round(row_lenght / 2) - Math.round(suggestionInitialSize / 2);
            butacaIzquierda = butacaDerecha;
            return buscarDerecha(fila + 1, butacaDerecha, suggestionInitialSize);
        } else {
            return buscarDerecha(fila, ++butacaDerecha, suggestionInitialSize);
        }
    }
}


/**
 * order - Dada una cantidad de butacas deseadas, reserva aquellas que 'suggest' indique.
 * Devuelve un String indicando la fila y columna de la butaca
 * Si 'suggest' devuelve 'null' entonces se devuelve un mensaje indicando que no es posible reservar.
 * @param {*} requestSize 
 */
function order(requestSize) {
    let suggestion;
    if ((suggestion = suggest(requestSize, true)) != null) {
        console.log("Order: "+suggestion)
        let suggestionArray = suggestion.split(",");
        for (let i = 0; i < suggestionArray.length; i++) {
            let fila = suggestionArray[i].charAt(1);
            let butaca = suggestionArray[i].charAt(3);
            cine[fila][butaca] = "X";
        }
        return suggestion;
    }
    else {
        console.log("No es posible reservar");
        return "No es posible reservar";
    }
}