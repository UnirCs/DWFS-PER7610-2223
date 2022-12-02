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

initialize(10);
show();
//Obtenemos los valores de algunas sugerencias
let suggestion1 = suggest(5);
let suggestion2 = suggest(8);
let suggestion3 = suggest(11);
console.log("SUGERENCIA: => " + suggestion1);
console.log("SUGERENCIA: => " + suggestion2);
console.log("SUGERENCIA: => " + suggestion3);

//Reservamos butacas
let reservation1 = order(6);
show();
let reservation2 = order(8);
show();
let reservation3 = order(3);
let reservation4 = order(11);
console.log("RESERVA BUTACAS: => " + reservation1);
console.log("RESERVA BUTACAS: => " + reservation2);
console.log("RESERVA BUTACAS: => " + reservation3);
console.log("RESERVA BUTACAS: => " + reservation4);

//Mostramos el estado de la sala
show();

//-------------------------------------------------------------------------------------------
//Metodos a implementar (la declaracion de cada metodo NO se puede modificar)

/**
 * initialize - Crea una nueva sala de cine
 * @param {*} size - Numero de filas y longitud de las filas.
 */
function initialize(size) {}

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
function show() {}

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
function suggest(requestSize) {}

/**
 * order - Dada una cantidad de butacas deseadas, reserva aquellas que 'suggest' indique.
 * Devuelve un String indicando la fila y columna de la butaca
 * Si 'suggest' devuelve 'null' entonces se devuelve un mensaje indicando que no es posible reservar.
 * @param {*} requestSize
 */
function order(requestSize) {}