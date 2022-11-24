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
console.log(obtenerLetraDni(50487965));
function obtenerLetraDni(dni) {

    if (!(dni > 0  && dni < 99999999)){
        return null
    }
    const modulo = (a) => a % 23
    return dni+letras[modulo(dni)]
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
 console.log(esPar(4));
 function esPar(dni) {

    const par = (x) => {
        if (x % 2 == 0){
            return true
        }
        return false
    }
    return par(dni)
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
 console.log(formatStr("Esto es un Ejemplo"));
 function formatStr(palabra) {

    const upperConsonate = (letra) => {
        if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u'){
            return letra
        }
        return letra.toUpperCase()
    }
    palabra = palabra.replace(/ /g, "")
    let palabraFmt = ''
    for (var i = 0; i< palabra.length; i++) {
       palabraFmt+=upperConsonate(palabra.charAt(i));
    }
    return palabraFmt
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
 console.log(esPalindromo("Dabale arroz a la zorra el abad"));
 function esPalindromo(palabra) {
    palabra = palabra.replace(/ /g, "").toLowerCase()
    const reverse = (palabra) => {
        var splitString = palabra.split(""); 
        var reverseArray = splitString.reverse();
        var joinArray = reverseArray.join("")
        return joinArray;
    }
    return palabra == reverse(palabra) ? true : false
}
