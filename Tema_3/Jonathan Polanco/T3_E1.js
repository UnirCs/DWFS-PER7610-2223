/**
 * Funcion 1
 * 
 * Calculo de la letra del DNI (documento de identidad) español
 * 
 * La letra del DNI se obtiene mediante la siguiente funcion matematica
 * - Obtener el resto de la division entera del numero de DNI y el numero 23. 
 * - El resto de esa division se asocia con una letra concreta, segun un array de letras.
 * 
 * Se pide:
 * Crear una funcion obtenerLetraDni que reciba como argumento el numero del DNI y devuelva el numero con su letra asociada.
 * Debe comprobar que el numero recibido sea mayor que 0 y menor y menor que 99999999. Si no es asi, se devuelve 'null'
 * Puedes usar el siguiente array de letras
 * 
 * Ejemplo: obtenerLetraDni(50487965) -> 50487965K
 */
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
function obtenerLetraDni(numero){
    if(numero>0 && numero<99999999){
        resto=numero%23;
        inicial=letras[resto];
        return numero+inicial
    }else{
        return null;
    }
    
}
console.log(obtenerLetraDni(50487965));

/**
 * Funcion 2
 * 
 * Numeros pares e impares
 * 
 * Se pide:
 * Crear una funcion esPar que devuelva 'true' si el numero recibido es par o 'false' en caso contrario.
 * El argumento es un numero entero
 * 
 * Ejemplo: esPar(4) -> true
 */
const esPar = (numero) => numero % 2 == 0

console.log("Es par 5: "+esPar(5));
console.log("Es par 40: " +esPar(40));

/**
 * Funcion 3
 * 
 * Cadenas de texto
 * 
 * Se pide:
 * Crear una funcion formatStr que elimine todos los espacios de una cadena recibida como argumento y que muestre en mayuscula las consonantes de la cadena (cualquier otro caracter se queda como esta)
 * El argumento es una cadena (String)
 * 
 * Ejemplo: formatStr("Esto es un Ejemplo") -> "ESToeSuNEJeMPLo"
 */
var consonantes="BCDFGHJKLMNÑPQRSTVWXYZ"
function formatStr(cadena){
    cadena = cadena.replaceAll(" ","");
    var arrayCadena = cadena.split('');
    var nuevaCadena ="";
    for(var indice=0;arrayCadena.length>indice;indice++){
        var esConsonante = consonantes.indexOf(arrayCadena[indice].toUpperCase());
        if(esConsonante>=0){
            nuevaCadena = nuevaCadena + arrayCadena[indice].toUpperCase();
        }else{
            nuevaCadena = nuevaCadena + arrayCadena[indice];
        }
    }
    return nuevaCadena;
}
console.log(formatStr("Jonathan Polanco"));
/**
 * Funcion 3
 * 
 * Palindromos
 * 
 * Se pide:
 * Crear una funcion esPalindromo que devuelva 'true' si la cadena pasada como argumento es palindroma, 'false' en caso contrario
 * Una cadena es palindroma si se lee igual de derecha a izquierda y de izquierda a derecha, sin tener en cuenta los espacios.
 * El argumento es una cadena (String)
 * 
 * Ejemplo: esPalindromo("Dabale arroz a la zorra el abad") -> true
 */

const esPalindromo = (texto) =>
    texto.replaceAll(' ', '').toLowerCase().split('').join('') === texto.replaceAll(' ', '').toLowerCase().split('').reverse().join('');

console.log(esPalindromo("Somos o no somos"));