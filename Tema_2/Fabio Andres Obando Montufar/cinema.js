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

 Modificado por Fabio Andres Obando Montufar
 Fecha 17/11/2022
*/
//-------------------------------------------------------------------------------------------
//Programa principal (para comprobar el correcto funcionamiento - puede ser modificado)

let salaCinema=[];

let filas;
let butacas;

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
console.log(reservation1);
show();
let reservation2 = order(8);
console.log(reservation2);
show();
let reservation3 = order(3);
console.log(reservation3);
let reservation4 = order(11);
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
    filas=size;
    butacas=size;
    for(var i=0; i<filas; i++) {
        salaCinema[i] = new Array(filas);
    }
    for(var i=0; i<filas; i++) {
        for(var j=0; j<butacas; j++){
            salaCinema[i][j] = '- ';
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
    //console.log("Estado Actual Cinema de.."+salaCinema.length**2+" Bucatas");
    let dibujar;
    for(var i=0; i<butacas; i++) {
        dibujar="";
        for(var j=0; j<filas; j++){
            dibujar+= salaCinema[i][j];
          }
          console.log(dibujar);
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
    //console.log("Sugiere.."+requestSize);
    let validaFila=0;
    let respuesta="";
    const fila=0;
    const columna=0;
    
    console.log("Sugerencia para "+requestSize);
    if(requestSize>salaCinema.length)
    {
        respuesta=null;        
    }
    else
    {
        for(let i=0; i<salaCinema.length;i++)
        {
            //En el siguiente bucle realizamos la validacion de disponibles por FILA
            let validacionDisponibles=salaCinema[i];
            let validaCantidad=0;
            for(let k=0;k<validacionDisponibles.length;k++)
            {
                if(salaCinema[i][k]=="X ")
                {
                    validaCantidad+=1;
                    //console.log("OCUPADS  "); //Mostrar FILA
                }                               
            }
            
            if(salaCinema.length-validaCantidad<requestSize)
            {
                i++;
            }
            
            var contador=0;
            for(let j=0; j<salaCinema.length;j++)
            {
                var tempButaca=salaCinema[i][j];
                if(tempButaca=="X ")
                {
                    //console.log("OCUPADO");
                    contador=0;
                }
                else if(tempButaca=="- ")
                {
                    contador+=1;
                    var temporal_1=i+1;
                    var temporal_2=j+1;
                    if(contador==requestSize)
                    {   
                        respuesta+="F"+temporal_1+"B"+temporal_2;
                        validaFila=1;
                        break;
                    }
                    else{
                        respuesta+="F"+temporal_1+"B"+temporal_2+","
                    }
                }
            }
            /*
            *La siguiente validacion sirve para romper el ciclo en caso de que ya haya encontrado una primer sugerencia
            */
            if(validaFila==1)
            {
                break;
            }      
        }
    }
    return respuesta;
}


/**
 * order - Dada una cantidad de butacas deseadas, reserva aquellas que 'suggest' indique.
 * Devuelve un String indicando la fila y columna de la butaca
 * Si 'suggest' devuelve 'null' entonces se devuelve un mensaje indicando que no es posible reservar.
 * @param {*} requestSize 
 */
function order(requestSize) {
    let sugerencia = suggest(requestSize);    
    console.log("Disponibles para "+sugerencia);
    if(sugerencia==null)
    {
        return "No es posible reservar";    
    }
    else
    {
        let reserva=sugerencia.split(',');
        reserva.forEach(function(numero) {
            var result = numero.replace("B", ",").replace("F","");
            var fila = result.split(',');
            console.log("Reservando: ....FILA: "+fila[0]+" BUTACA: "+fila[1]); //Ciclo para mostrar FIlas y Butacas a reservar
            salaCinema[fila[0]-1][fila[1]-1]="X ";
               
        }); 
        return " ";
    }
}