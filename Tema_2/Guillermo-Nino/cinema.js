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

//-------------------------------------------------------------------------------------------
//Declarar aqui, de la forma adecuada, el estado de la sala

//-------------------------------------------------------------------------------------------
//Metodos a implementar (la declaracion de cada metodo NO se puede modificar)

/**
 * initialize - Crea una nueva sala de cine
 * @param {*} size - Numero de filas y longitud de las filas.
 */
function initialize(size) {
    // Construimos un array de size x size de forma que cada fila de tamaño size contenga un array de tamaño size con '-'como contenido
    sala = []
    for(let i=0; i<size; i++) {
       sala[i] = [];
       for(let j=0; j<size; j++) {
           sala[i][j] = "-";
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
        //Pintamos la sala y utilizamos join para pintar cada fila como - - - en vez de '-''-''-'
        for (let i = 0; i<sala.length;i++) {
            console.log(sala[i].join(" "));
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
function suggest(requestSize) {
    let fila = 0; //Fila que comprobamos si tiene el numero de asientos vacios pedido
    let count = 0; //Contador para saber cuantos sitios vacios seguidos hay dentro de la fila que estamos mirando
    let butacas = new Set(); //Creamos un set para guardar las butacas dentro de la fila que estamos mirando
    suggestion = [] //Array donde guardamos la sugerencia de las butacas que hemos encontrado donde caben las personas requeridas
    let message = []
    //En el bucle primero miramos para la primera fila 0 cuantos asientos vacios (que contengan -) hay en dicha fila y lo almacenamos en count.
    // Luego miramos si el numero de asientos vacios es igual o mayor al que nos piden. Si lo es, salimos del bucle, si no lo es, pasamos a mirar
    //la siguiente fila. 
    //-------------------------------------------------------------------------------
    //IMPORTANTE: RELLENAMOS LA SALA DE DELANTE A ATRAS Y DE IZQUIERDA A DERECHA!!
    //--------------------------------------------------------------------------
    while (fila<sala.length) {
        for (let j = 0; j < sala.length; j++) {
            if (sala[fila][j] === '-') {
                count ++;
                butacas.add(j+1);
            } else { //Al rellenar la sala de izquierda a derecha y no dejamos huecos en medio nunca pasaremos por aqui, pero lo dejamos como excepcion
                count = 0;
                butacas.clear();
            }
        };

        if (count >= requestSize){
            break
        } else {
            count = 0;
            butacas.clear();
            fila ++;
        }
    }
    //Si el contador esta a 0 porque nos piden mas sitios que sitios vacios hay en una fila del cine devolvemos null
    //Si hay sitos en una fila para acomadar la peticion, devolvemos mensaje en formato 'F'+fila del cine+'B'+numero de butaca
    if (count === 0) {
        return suggestion = null;
    } else {
        for (let j = 0; j < requestSize;j++){
            suggestion.push(Array.from(butacas)[j]);
            message.push('F'+(fila+1).toString()+'B'+Array.from(butacas)[j])
        }
        return message.join(", ");
    }
}


/**
 * order - Dada una cantidad de butacas deseadas, reserva aquellas que 'suggest' indique.
 * Devuelve un String indicando la fila y columna de la butaca
 * Si 'suggest' devuelve 'null' entonces se devuelve un mensaje indicando que no es posible reservar.
 * @param {*} requestSize 
 */
function order(requestSize) {
    //Primero usamos la funcion suggest para obtener las butacas que se sugieren en funcion del numero pedido.
    butacas_reservadas = suggest(requestSize);
    //Si la peticion de suggest da null escribimos que no es posible reservar.
    //Si existe una opcion sugerida valida hacemos dos cosas: primero devolvemos el mensaje de que las butacas reservadas son XXXXXX
    //A continuacion usando un bucle while procedemos a actualizar la sala marcando con una X las butacas que se han reservado
    if (butacas_reservadas === null) {
        respuesta = 'No es posible reservar';
    } else {
        respuesta = 'Sus butacas reservadas son: '+ butacas_reservadas;
        let fila_sala = parseInt(butacas_reservadas[1]); //La Fila de la sala ocupada se coge del mensaje de butacas reservadas FXBY donde cogemos la X
        const columna_sala = []; //Construimos array de las butacas de la fila que seran ocupadas
        //let iter = 3
        //while (iter<butacas_reservadas.length){ //Usamos un bucle while para coger el numero de butaca usando la referencia Y del FXBY del mensaje de butacas reservadas
            //columna_sala.push(butacas_reservadas[iter]);
            //iter = iter +6;
        //}
        //Actualizamos la sala rellenando la fila X y butacas de la columna_sala con una X
        for (let j=0;j<suggestion.length;j++) {
            sala[fila_sala-1][suggestion[j]-1] = 'X';
        }
    }
    return respuesta; //Devolvemos el mensaje de si es posible reservar o no y que butacas.
}
    