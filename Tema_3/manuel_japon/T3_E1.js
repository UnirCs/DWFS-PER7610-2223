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
const DIVISOR_DNI = 23;

function obtenerLetraDni(dni) {
    let letraDni = null;
    if (dni > 0 && dni < 99999999) {
        let restoDiv = dni % DIVISOR_DNI;
        letraDni = letras[restoDiv];
    }
    else {
        throw new RangeError('Rango de DNI incorrecto, favor verificar');
    }

    if (letraDni) {
        return `${dni}${letraDni}`;
    }
    else {
        throw new Error('No pude obtener la letra del DNI');
    }
}

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

function esPar(n) {
    let resto = n % 2;
    return resto === 0;    
}

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

function isVowel(letter){
    const vowels = ["a","e","i","o","u"];
    return vowels.indexOf(letter.toLowerCase()) >= 0;
}

function cleanSpaces(cadena){
    return cadena.split(' ').map(part=>part.trim()).join('');
}

function formatStr(cadena){
    let cleanString = cleanSpaces(cadena);
    let resultString = cleanString.split('')
        .map(it=>{
            if (!isVowel(it)){
                return it.toUpperCase();
            }
            else{
                return it;
            }
        })
        .join('');
    return resultString;    
}


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

function esPalindromo(cadena){
    let cleanString = cleanSpaces(cadena);
    let reversedString = cleanString.split('').map(lt=>lt.toLowerCase()).reverse().join('');    
    return cleanString==reversedString;
}

console.log("Test T3_E1:");
console.log("obtenerLetraDni(50487965):",obtenerLetraDni(50487965));
console.log("esPar(4):",esPar(4));
console.log("formatStr('Esto es un Ejemplo'):", formatStr("Esto es un Ejemplo"));
console.log("esPalindromo('Dabale arroz a la zorra el abad'):",esPalindromo("dabale arroz a la zorra el abad"));