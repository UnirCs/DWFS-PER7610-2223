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
const mapfinal = new Map();
var arraySugerencia = [];
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
let reservation2 = order(8);
let reservation3 = order(3);
let reservation4 = order(11);
console.log("RESERVA BUTACAS: => " + reservation1);
console.log("RESERVA BUTACAS: => " + reservation2);
console.log("RESERVA BUTACAS: => " + reservation3);
console.log("RESERVA BUTACAS: => " + reservation4);

//Mostramos el estado de la sala
show();

//-------------------------------------------------------------------------------------------
//Declarar aqui, de la forma adecuada, el estado de la sala

//-------------------------------------------------------------------------------------------
//Metodos a implementar (la declaracion de cada metodo NO se puede modificar)

/**
 * initialize - Crea una nueva sala de cine
 * @param {*} size - Numero de filas y longitud de las filas.
 */
function initialize(size) {
  let filas = new Array(size).fill("-");
  for (var a = 1; a < size + 1; a++) {
    mapfinal.set(a, filas);
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
  let presentacion = "";
  for (let [clave, valor] of mapfinal) {
    for (let f = 0; f < valor.length; f++) {
      presentacion += valor[f] + " ";
    }
    presentacion += "\n";
  }
  console.log(presentacion);
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
  let recomendacion = "";
  let recomendacionDetalle = "";
  let contador = 0;
  let sizeArray = mapfinal.get(1).length;

  if (requestSize > sizeArray) {
    return "No es posible reservar";
  } else {
    for (let [clave, fila] of mapfinal) {
      contador = 0;
      arraySugerencia = [];
      recomendacion = "";

      for (a = 0; a < fila.length; a++) {
        if (fila[a] === "-") {
          contador++;
          recomendacion += "F" + clave + "B" + (a + 1) + ", ";
          recomendacionDetalle += (a + 1) + ", ";
          arraySugerencia.push(clave + "-" + a);
        }
        if (contador == requestSize) {
          break;
        }
      }
      if (contador == requestSize) {
        break;
      }
    }
    if (recomendacion.length > 0) {
      return recomendacion.substring(0, recomendacion.length - 2) + " (Fila [" + arraySugerencia[0].split("-")[0] + "], butacas " + recomendacionDetalle.substring(0, recomendacionDetalle.length - 2) + ")";
    } else {
      return "";
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
  let mensaje = "";

  // Obtengo # filas array dentro de cada fila del map
  mensaje = suggest(requestSize);
  if (mensaje !== "") {
    if (arraySugerencia != null && arraySugerencia !== undefined) {
      if (arraySugerencia.length > 0) {
        // Obtengo fila seleccionada en la sugerencia y asigno al map
        let filaSeleccionada = arraySugerencia[0].split("-");
        let indice = parseInt(filaSeleccionada[0]);
        let filasCine = new Array(mapfinal.get(indice).length);

        // Creo array provisional con las posiciones resevadas en la sugerencia
        for (var a = 0; a < mapfinal.get(indice).length; a++) {
          filasCine[a] = mapfinal.get(indice)[a];
        }

        for (var a = 0; a < mapfinal.get(indice).length; a++) {
          for (var q = 0; q < arraySugerencia.length; q++) {
            let valorSugerencia = arraySugerencia[q].split("-");
            if (parseInt(valorSugerencia[1]) === a) {
              filasCine[a] = "X";
              continue;
            }
          }
        }

        mapfinal.set(indice, filasCine);

      }
    } else {
      mensaje = "No es posible reservar";
    }
  } else {
    mensaje = "No es posible reservar";
  }

  return mensaje;
}
