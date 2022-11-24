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
let numeroDNI1 = obtenerLetraDni(11111111);
let numeroDNI2= obtenerLetraDni(22222222);
console.log(numeroDNI1);
console.log(numeroDNI2);

let sentencia = "Prueba dE formateO Un string"
console.log("Formateando la cadena: "+ sentencia + ": " + formatStr(sentencia));

sentencia = "Dabale arroz a la zorra el abad";
console.log("Es palíndromo la cadena: " +  sentencia +  ": " + esPalindromo(sentencia));
sentencia = "¿es esto un palíndromo?";
console.log("Es palíndromo la cadena: " +  sentencia +  ": " + esPalindromo(sentencia));

function obtenerLetraDni(numDocumento) {
    if (numDocumento <= 0 || Number >= 99999999) { return null; }

    let resto = numDocumento % 23;
    if (0 <= resto && resto <= letras.length) {
        return numDocumento + letras[resto];
    }

    return null;
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

const esPar = a => a % 2 == 0;
console.log("es par 2: "+ esPar(2));
console.log("es par 15: "+ esPar(15));
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

function formatStr(cadena)
{
    let vocales = "aeiouAEIOU"; //no sé si existe alguna función que te diga si es vocal o consonante...así que he creado esta cadena para poder comprobarlo
    let cadenaResultado = "";
    cadena = cadena.split(" ").join(""); 
    
    Array.from(cadena).forEach(cadaCaracter =>
         {
        if (vocales.includes(cadaCaracter) == -false) //es una consonante
        {
            cadenaResultado += cadaCaracter.toUpperCase();
        }
        else 
        {
            cadenaResultado += cadaCaracter
        }

    });
    return cadenaResultado;
}
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

function esPalindromo(cadena)
{
    let cadenaLimpia = cadena.split(" ").join("").toUpperCase();
    let cadenaInvertida = cadenaLimpia.split("").reverse().join("");
    return cadenaLimpia ==cadenaInvertida;
}