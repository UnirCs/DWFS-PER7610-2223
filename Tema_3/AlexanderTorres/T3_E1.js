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
let obtenerLetraDni = numero=>{
if (numero>0 && numero<99999999){
    var rDivE=numero%23;
    console.log (numero + letras[rDivE]);
}else console.log(null);
}
obtenerLetraDni(50487965);
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
let esPar=num=>{
    if(num%2===0){
        return true;
    }else return false;
}
console.log(esPar(5));
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
 var letrasSinV = ['T', 'R', 'W', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'T'];
let formatStr=cadena=>{
    let nuevaCadena;
    for (var i = 0; i < cadena.length; i++) {
        for (var v = 0; v < letrasSinV.length; v++) {
            if(cadena.charAt(i)==letrasSinV[v].toLowerCase()){
                cadena=cadena.split(cadena.charAt(i)).join(letrasSinV[v]);
            }

        }
    }
    cadena=cadena.split(" ").join("");
    console.log(cadena);
}
formatStr("Esto es un Ejemplo");
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
 const esPalindromo= (cadena)=>{
    if (typeof cadena=="string"){
        cadena=cadena.split(' ').join('').toLowerCase();
        let cadenaInv=cadena.split('').reverse().join('');
        return cadenaInv===cadena;
    }else return false;
}
console.log(esPalindromo("Dabale arroz a la zorra el abad"));