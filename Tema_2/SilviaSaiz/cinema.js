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
var sala = new Map();

//Creamos la sala y la mostramos (deberia estar toda vacia)
initialize(10);
console.log("Inicializo la sala a 10");
show();

//Obtenemos los valores de algunas sugerencias
let suggestion1 = suggest(5);
let suggestion2 = suggest(8);
let suggestion3 = suggest(11);
console.log("sugerencia de 5 butacas: " + suggestion1);
console.log("sugerencia de 8 butacas: " +suggestion2);
console.log("sugerencia de 11 butacas: " +suggestion3);

//Reservamos butacas
let reservation1 = order(6);
let reservation2 = order(8);
let reservation3 = order(3);
let reservation4 = order(11);
console.log("reserva de 6 butacas: " + reservation1);
console.log("reserva de 8 butacas: " + reservation2);
console.log("reserva de 3 butacas: " + reservation3);
console.log("reserva de 11 butacas: " + reservation4);

console.log("estado de la sala")
//Mostramos el estado de la sala
show();

//-------------------------------------------------------------------------------------------
//Declarar aqui, de la forma adecuada, el estado de la sala
 

//-------------------------------------------------------------------------------------------
//Metodos a implementar (la declaracion de cada metodo NO se puede modificar)

/**
 * initialize - Crea una nueva sala de cine
 * @param {*} size - Numero de filas y longitud de las filas.
 * 
 * la sala tendrá la siguiente forma:
 * ----------Pantalla-----------
 * F1  b1 b2 b3...bn
 * F2  b1 b2 b3...bn
 * .
 * .
 * .
 * Fn b1 b2 b3...bn
 */
function initialize(size)
 {
    sala.clear();

    for (indice = 1; indice <= size; indice++) 
    {
        sala.set(indice, new Array(size).fill(null));
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
function show() 
{
    let estadoSala = '';
    for(filaButacas of sala.values())
    {
        if(Array.isArray(filaButacas))
        {
             for(indice = 0; indice<filaButacas.length; indice++) 
            {   
                estadoSala += (filaButacas[indice]===null)?"- ":"X ";               
            }
            estadoSala += "\n";          
        }
    }
    console.log(estadoSala);
    return estadoSala;
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
 * el criterio no es muy beneficioso para las personas que reservan...pero es fácil de implementar. Empezaremos por la fila 1 butaca1 y así asignando hasta la fila n, butaca n
 */
function suggest(requestSize) 
{
    for (let [fila, butacasFila] of sala.entries()) 
    {
        if(requestSize>butacasFila.length){ return null;}// se solicitan más butacas que el tamaño de la fila. Como no puede haber reservas en distintas filas, no devolvemos opciones

        let primeraLibre = butacasFila.indexOf(null);
        
        if(primeraLibre>=0)
        {
            let libres = butacasFila.length - primeraLibre;
            if(libres>=requestSize)//si hay suficientes libres 
            {
                let sugerencia = '';
                for(indiceButaca = primeraLibre; indiceButaca < primeraLibre + requestSize; indiceButaca++)
                {
                    sugerencia += "F" + fila + "B" + (indiceButaca+1)+ ", ";          
                }
                return sugerencia.substring(0,sugerencia.length-2);
            }          
        }       
    }
    return null;
}

/**
 * order - Dada una cantidad de butacas deseadas, reserva aquellas que 'suggest' indique.
 * Devuelve un String indicando la fila y columna de la butaca
 * Si 'suggest' devuelve 'null' entonces se devuelve un mensaje indicando que no es posible reservar.
 * @param {*} requestSize
 */
function order(requestSize) 
{
    let butacasPosibles = suggest(requestSize);
    if(butacasPosibles==null)
    {
        return "No ha sido posible realizar la reserva, no hay butacas libres";
    }
    arrayButacasPosibles = butacasPosibles.split(',');
    for(indice=0; indice<arrayButacasPosibles.length; indice++)
    {
            let arrayFilaButaca = arrayButacasPosibles[indice].split('B');//tenemos un array de tipo [Fx, NumeroButaca]
            let arrayFilaSala = sala.get(Number(arrayFilaButaca[0].trim().substring(1)))//obtenemos las butacas de la fila de la propuesta
            arrayFilaSala[arrayFilaButaca[1]-1]= 'X';
    }
    return butacasPosibles;
}
