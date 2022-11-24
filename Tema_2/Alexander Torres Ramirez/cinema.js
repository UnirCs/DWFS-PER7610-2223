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
var arraySillas=new Array(2);
initialize(10);
console.log("sillas vacias")
show();




//Obtenemos los valores de algunas sugerencias
console.log("sugerencias con 5 sillas")
let suggestion1 = suggest(5);
console.log(suggestion1);
show();
console.log("sugerencias con 8 sillas")
let suggestion2 = suggest(8);
console.log(suggestion2);
show();
console.log("sugerencias con 11 sillas")
let suggestion3 = suggest(11);
console.log(suggestion3);
console.log("se reinicia las sillas")
initialize(10);
show();
//Reservamos butacas
console.log("reservar 6 sillas")
let reservation1 = order(6);
console.log(reservation1);
show();
console.log("reservar 8 sillas")
let reservation2 = order(8);
console.log(reservation2);
show();
console.log("reservar 3 sillas")
let reservation3 = order(3);
console.log(reservation3);
show();
console.log("reservar 11 sillas")
let reservation4 = order(11);

console.log(reservation4);
console.log("Estado final de la sala")
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
    for (var i=0;i<size;i++){
        arraySillas[i]=new Array(size); 
        for (var a=0;a<size;a++){
            arraySillas[i][a]="-";    
        }   
    }
    
}

/**
 * show - No recibe argumentos
 * Devuelve un String que representa el estado actual de la sala.
 * Formato: X para asientos ocupados, - para asientos libres.
 * Ejemplo (3x3):S
 * - - X
 * - X -
 * X X X
 * 
 */
function show() {
    let salida=""
    for (var i=0;i<arraySillas.length;i++){
        for(var a=0;a<arraySillas.length;a++)
        { 
            salida=salida+arraySillas[i][a]+"  ";
        }
        salida=salida+"\n";
    }
    console.log(salida);
    
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
    let SalidaS=""
    if (requestSize>arraySillas.length){
        return null
    }
    else{
        for (var i=0;i<arraySillas.length;i++){
            for(var a=0;a<requestSize;a++)
            { 
                if(arraySillas[i][a]=="-"){
                    arraySillas[i][a] ="X";
                }
                
            }break;
        }
        for (var i=0;i<arraySillas.length;i++){
            for(var a=0;a<requestSize;a++)
            { 
                if(arraySillas[i][a]=="X"){
                   SalidaS=SalidaS+"F"+(i+1)+"B"+(a+1)+", ";
                }
                
            }
           
        } 
    };
    return SalidaS.substring(0,(SalidaS.length-2));
   
}


/**
 * order - Dada una cantidad de butacas deseadas, reserva aquellas que 'suggest' indique.
 * Devuelve un String indicando la fila y columna de la butaca
 * Si 'suggest' devuelve 'null' entonces se devuelve un mensaje indicando que no es posible reservar.
 * @param {*} requestSize 
 */
function order(requestSize) {
    let SalidaS="";
    let filaV="";
    let cont=requestSize;
    
    if (requestSize>arraySillas.length){
        return null;
    }
    else{
        for (var i=0;i<arraySillas.length;i++){
            var indices = [];
                for(var v = 0; v < arraySillas.length; v++) {

	                filaV=filaV+arraySillas[i][v];
                }
                for(var v = 0; v < filaV.length; v++) {
                    
	                if (filaV[v] == "-") indices.push(v);
                }
            for(var a=0;a<arraySillas.length;a++)
            { 
                
                if((indices.length>=requestSize)&(arraySillas[i][a] =="-")){
                    
                    arraySillas[i][a] ="X";
                    SalidaS=SalidaS+"F"+(i+1)+"B"+(a+1)+", ";
                    cont=cont-1;
                }if (cont==0){
                    break;
                }
                
                
            }if (cont==0){
                break;
            }
           
        }
        
    };
    return SalidaS.substring(0,(SalidaS.length-2));
}