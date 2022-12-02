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
const obtenerLetraDni = (numeroDNI) => numeroDNI>0 && numeroDNI<99999999 ? numeroDNI.toString()+letras[numeroDNI % 23]:null;
console.log(obtenerLetraDni(99999998));

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

const esPar=(numero)=> numero%2 === 0?true:false;
console.log(esPar(50));

/**
 * Funcion 3
 * 
 * Cadenas de texto
 * 
 * Se pide:
 * Crear una funcion formatStr que elimine todos los espacios de una cadena recibida como argumento y que muestre 
 * en mayuscula las consonantes de la cadena (cualquier otro caracter se queda como esta)
 * El argumento es una cadena (String)
 * 
 * Ejemplo: formatStr("Esto es un Ejemplo") -> "ESToeSuNEJeMPLo"
 */

const formatStr = (mensaje)=>
{
    let temporal="";
    mensaje=mensaje.replace(/\s+/g, '');
    
    for (i = 0; i < mensaje.length; i++) {
        mensaje.charAt(i); 
        var vocales = 'aeiou';
        if(vocales.indexOf(mensaje.charAt(i))>-1)
            temporal+=mensaje.charAt(i);
        else 
            temporal+=mensaje.charAt(i).toUpperCase();
    } 
    return temporal;//mensaje.toUpperCase().replace(/\s+/g, '');
}

console.log(formatStr("Esto es un Ejemplo"));

/**
 * Funcion 4
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

const esPalindromo = (cadena)=>cadena.replace(/\s+/g, '').toUpperCase()===cadena.replace(/\s+/g, '').toUpperCase().split("").reverse().join("") ?true:false;
console.log(esPalindromo("Dabale arroz a la zorra el abad"));