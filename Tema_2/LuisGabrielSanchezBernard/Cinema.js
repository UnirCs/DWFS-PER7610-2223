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
let matrix = new Array(10);
let lstseats =""

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
    for (e = 1; e <=10; e++)
    {
        matrix[e]=new Array(10);
    }
    for (a = 1; a <= 10; a++)
    {
        for (i = 1; i <= 10; i++)
        {
          matrix[a][i]='-';
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
    console.table(matrix);
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
    let found;
    let seats = [];
    lstseats ="";
    for (a = 1 ; a<=10;a++){
        found=0;
        seats=[];
        for (c = 1; c <=10; c++){            
                if (matrix[a][c] == '-'){
                    found += 1;
                    seats.push(a + "" + c);
                }
                else{
                    found = 0;
                    seats = [];
                }
                if (found==requestSize){
                    seats.forEach(slcSeats);                    
                    return lstseats;
                }                               
           }
        }
        if (found!=requestSize){
            return "null";        
        }
}

function slcSeats(value, index, array){    
    let txt = " "
    txt = value;
    txt = ('F'+ txt.slice(0,1) + 'B'+ txt.slice(1,2));   
    lstseats +=  txt  + " "
}

/**
 * order - Dada una cantidad de butacas deseadas, reserva aquellas que 'suggest' indique.
 * Devuelve un String indicando la fila y columna de la butaca
 * Si 'suggest' devuelve 'null' entonces se devuelve un mensaje indicando que no es posible reservar.
 * @param {*} requestSize 
 */
function order(requestSize) {
    const sugArray = suggest(requestSize).split(' ');
    sugArray.pop();
    sugArray.forEach(creaOrden);      
    if (sugArray.length == 0){
        return null;}
    else{
       return sugArray;
        }
}

function creaOrden(value,index,array){   
    let z = value
    z = z.trim();
    const x = parseInt(z.slice(1,2));   
    const y = parseInt(z.slice(3,4));
    matrix[x][y]='X'
 }
