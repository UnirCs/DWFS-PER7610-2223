/**
 Archivo con todo el codigo JS necesario para implementar la funcionalidad de reserva de sitios
 Queremos crear un sencillo sistema de gestion de entradas de una sala de cine. 
 Para ello nos serviremos de los metodos:
 - initialize: Inicializa la sala, representada por una matriz NxN (siempre cuadrada)
 - show: Muestra el estado de la sala (butacas libres y ocupadas)
 - suggest: Sugiere una opcion de reserva en base al numero de butacas que se quieren
 - order: Reserva aquellas butacas que suggest haya indicado.
 Las declaraciones de las cabeceras de los metodos NO DEBEN MODIFICARSE.
 Deberás:
 - Crear una variable que almacene el estado de la sala
  (pon especial atención al tipo de esta variable y su ámbito)
 - Implementar todos los métodos indicados anteriormente.
 Puedes usar el siguiente programa principal para probar
*/
//-------------------------------------------------------------------------------------------
//Programa principal (para comprobar el correcto funcionamiento - puede ser modificado)
const cineroom = [];//define la variable que almacena la sala de cine

var show_out="\n";

var columnas;
var filas;
//Creamos la sala y la mostramos (deberia estar toda vacia)
initialize(10);
show();
suggest(10);
show();
//Obtenemos los valores de algunas sugerencias
let suggestion1 = suggest(5);
let suggestion2 = suggest(8);
let suggestion3 = suggest(11);
console.log(suggestion1);
console.log(suggestion2);
console.log(suggestion3);
show();
//Reservamos butacas
let reservation1 = order(6);
show();
let reservation2 = order(8);
show();
let reservation3 = order(3);
show();
let reservation4 = order(11);
show();
let reservation5 = order(8);
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
   columnas=size;
   filas=size;
   console.log("Array tamaño: " + size);
 for(var i=0; i<columnas; i++) {
    cineroom[i] = new Array(filas);
   }
   console.log("Array creado : " + size);
 for(var i=0; i<columnas; i++) {
    for(var j=0; j<filas; j++){
    cineroom[i][j] = '-';
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
  for(var i=0; i<columnas; i++) {
    for(var j=0; j<filas; j++){
      show_out = show_out + cineroom[i][j]+" ";
      }
      show_out = show_out + "\n";
   }
   console.log(show_out);
   return show_out;
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
  //************************************************************* */
 let cantsillas=requestSize;
 let suggest_out="\n";
 let vectorsillas = [];//almacena sugerencia de sillas
 /*
   for(var j=0; j<5; j++){//para probar el indice de salida
    cineroom[0][j] = 'X';
    }
    for(var j=8; j<15; j++){//para probar el indice de salida
      cineroom[0][j] = 'X';
      }
      for(var j=7; j<14; j++){//para probar el indice de salida
        cineroom[1][j] = 'X';
        }
        for(var j=3; j<13; j++){//para probar el indice de salida
          cineroom[2][j] = 'X';
          }

*/
 //************************************************************* */
/*   let found = cineroom[0].findIndex(element => element==='-');
   if(found==-1)
      {console.log("No encontro nada en la fila: 0");}   
   console.log("que encontro?",+found);*/
 
  let contador=0;
  let filax=0;
  
  //*************************************************************************************** */
 for(var cols=0;cols<columnas;cols++)
    { found = cineroom[cols].findIndex(element => element==='-');
      console.log("col:",+cols," ",+found);
      contador=0;
      for(var indice=found;indice<(found+cantsillas);indice++)//busca las sillas adyacentes
      { 
        if(cineroom[cols][indice] ==='-')
          {contador++;
           console.log(indice);
          }//contador de sillas adyacentes
      }
      if(contador==cantsillas) 
      { console.log("Sillas encontradas");
        console.log("en: F ",+cols," ->");
        vectorsillas.push("Fila: ");
        vectorsillas.push(cols);
        vectorsillas.push("Sillas: ");
        //F6B6, F6B7, F6B8 (fila 6, butacas 6, 7 y 8)
        for( var indice=found;indice<(found+cantsillas);indice++)//busca las sillas adyacentes
        {
          if(cineroom[cols][indice] =='-')
            { console.log("sillas:",+indice);
              vectorsillas.push(indice);
              suggest_out=suggest_out+"F"+cols+"B"+indice+" ,";
            }//contador de sillas adyacentes
        }
        suggest_out=suggest_out+" ("+vectorsillas+") ";
        return suggest_out;
        break;
      }
      if(contador<cantsillas) 
      {
        suggest_out=null;
        }
      

    } 
    
    if(suggest_out==null) 
    {
      
      return null;

    }
  
}


/**
 * order - Dada una cantidad de butacas deseadas, reserva aquellas que 'suggest' indique.
 * Devuelve un String indicando la fila y columna de la butaca
 * Si 'suggest' devuelve 'null' entonces se devuelve un mensaje indicando que no es posible reservar.
 * @param {*} requestSize 
 */
function order(requestSize) {
  let suggest_out=suggest(requestSize);//crea la cadena de sugerencia
  //suggest_out="F3B0 ,F3B1 ,F3B2 ,F3B3 ,F3B4 ,F3B5 ,F3B6 ,F3B7 ,F3B8 ,F3B9 , (Fila: ,23,Sillas: ,0,1,2,3,4,5,6,7,8,9)";
  console.log(suggest_out);
  if(suggest_out==null){
    console.log("No es posible realizar la reserva");
    return;
  }
  if(suggest_out!=null);
    {
      let indiceini=suggest_out.indexOf("F",0);//busca una caden al interior de otra cadena obtiene el primer indice
      let indicefin=suggest_out.indexOf("B",0);
      let filaorden=indicefin-(indiceini);
      let filasalida=suggest_out.substring(indiceini+1, indicefin);
      let filaorder=filasalida;
      indiceini=suggest_out.indexOf("B");//Busca una caden al interior de otra cadena obtiene el primer indice
      indicefin=suggest_out.indexOf(",",indiceini+1);
      filaorden=indicefin-(indiceini);
      filasalida=suggest_out.substring(indiceini+1, indicefin);
      let colorder=filasalida;
      console.log(filaorder);
      console.log(colorder);
        for(let j=Number(colorder); j<(Number(colorder)+requestSize); j++){
                cineroom[filaorder][j]='X';
          }
      return "\nReserva:"+suggest_out;
    }

 

}
