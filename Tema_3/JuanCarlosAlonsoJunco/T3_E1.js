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
var numero = "";

function obtenerLetraDni(numero){
    let resultado = "";
    let letra = "";
    let dni = "";
    if (numero > 0 && numero < 99999999){

         resultado = numero % 23;
         letra = letras[resultado];
         dni = numero + letra;

    }

    else{
        dni = "El numero introducido no es valido"
    }

    return console.log(dni);
}

obtenerLetraDni(12345678);
obtenerLetraDni();
obtenerLetraDni(99999999999);

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

function esPar(numero){
    if(Number.isInteger(numero)){
       let resultado = numero % 2;
       if (resultado == 0){
        return console.log(true);
       }
       else{
        return console.log(false);
       }
    }
    else{
        return console.log("El numero "+numero+" no es un numero entero");
    }
}
esPar(2);
esPar(5);

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
var cadena = "";
var cadenaNueva = "";
function formatStr(cadena){
    cadenaNueva="";
    for(let i = 0 ; i<cadena.length ; i++){
        if(cadena[i] === " "){
            cadenaNueva += "";
        }
        else if(cadena[i].match(/[aeiou]/) || cadena[i].match(/[AEIOU]/)){
            cadenaNueva += cadena[i];
        }
        else{
            cadenaNueva += cadena[i].toUpperCase();
        }
    }
    return console.log(cadenaNueva);
}
formatStr("Esto es un ejemplo");

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
    formatStr(cadena);
    let reves = cadenaNueva.length-1;
    let resultado = "";
    for (let i = 0; i < cadenaNueva.length ; i++){
        if(cadenaNueva[i] == cadenaNueva[reves]){
            reves --;
        }
        else{
            resultado = false;
        }
    }
    resultado = true;

    return console.log(resultado);
}

esPalindromo("Dabale arroz a la zorra el abad");
esPalindromo("Somos o no somos");
esPalindromo("Isaac no ronca así");