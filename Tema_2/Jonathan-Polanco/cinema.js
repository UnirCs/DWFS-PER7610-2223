/*** Autor Jonathan Polanco
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
console.log(suggestion1);
console.log(suggestion2);
console.log(suggestion3);

//Reservamos butacas
let reservation1 = order(6);
let reservation2 = order(8);
let reservation3 = order(3);
let reservation4 = order(11);
console.log(reservation1);
console.log(reservation2);
console.log(reservation3);
console.log(reservation4);

//Mostramos el estado de la sala
show();
console.log(show());
//-------------------------------------------------------------------------------------------
//Declarar aqui, de la forma adecuada, el estado de la sala

//-------------------------------------------------------------------------------------------
//Metodos a implementar (la declaracion de cada metodo NO se puede modificar)

/**
 * initialize - Crea una nueva sala de cine
 * @param {*} size - Numero de filas y longitud de las filas.
 */
var matrix = [];
var reservaSugerida = [];

//var reservaSugerida = new Array();

function initialize(size) {
  matrix = new Array();
  for (var fila = 0; fila < size; fila++) {
    let asiento = new Array();
    for (var butaca = 0; butaca < size; butaca++) {
      asiento.push("-");
    }
    matrix[fila] = asiento;
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
  let resultado = "";
  for (var fila = 0; fila < matrix.length; fila++) {
    for (var butaca = 0; butaca < matrix.length; butaca++) {
      resultado += " " + matrix[fila][butaca];
    }
    resultado += "\n";
  }
  return resultado;
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
function suggest(requestSize) {
  reservaSugerida = new Array();
  let sugerencia = "";
  let filaSugerida = "";
  let butacaSugeridas = "";
  let numbutacaSugeridas = "";
  var contadorDisponibles = 0;
  var encontro = 0;

  for (var fila = 0; fila < matrix.length; fila++) {
    contadorDisponibles = 0;
    butacaSugeridas = "";
    numbutacaSugeridas = "";
    reservaSugerida = [];
    for (var butaca = 0; butaca < matrix.length; butaca++) {
      if (matrix[fila][butaca] == "-") {
        //si existe y el contador es igual a la sugerencia
        contadorDisponibles += 1;
        if (contadorDisponibles <= requestSize) {
          filaSugerida = fila + 1;
          numbutacaSugeridas += butaca + 1 + ", ";
          butacaSugeridas += "F" + (fila + 1) + "B" + (butaca + 1) + ", ";
          reservaSugerida.push([fila, butaca]);
          if (contadorDisponibles == requestSize) {
            encontro = 1;
            break;
          }
        }
      } else {
        contadorDisponibles = 0;
        butacaSugeridas = "";
        filaSugerida = "";
      }
    }

    if (encontro == 1) {
      break;
    }
  }
  if (encontro == 0) {
    reservaSugerida = [];
    sugerencia = null;
  } else {
    sugerencia =
      butacaSugeridas.substring(0, butacaSugeridas.length - 2) +
      " (fila " +
      filaSugerida +
      ", butacas " +
      numbutacaSugeridas.substring(0, numbutacaSugeridas.length - 2) +
      ")";
  }
  return sugerencia;
}

/**
 * order - Dada una cantidad de butacas deseadas, reserva aquellas que 'suggest' indique.
 * Devuelve un String indicando la fila y columna de la butaca
 * Si 'suggest' devuelve 'null' entonces se devuelve un mensaje indicando que no es posible reservar.
 * @param {*} requestSize
 */
function order(requestSize) {
  let resultado = suggest(requestSize);
  
  if (resultado == null) {
    resultado = "No es posible reservar";
  } else {
    //reserva    
    for (var fila = 0; fila < reservaSugerida.length; fila++) {
      for (var butaca = 0; butaca < 2; butaca++) {
        let butacaReserva=reservaSugerida[fila];
        
        matrix[butacaReserva[0]][butacaReserva[1]] = "X";
      }
    }
  }
 
  return resultado;
}
