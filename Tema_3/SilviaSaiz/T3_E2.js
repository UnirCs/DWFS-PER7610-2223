
let array1 = [1, 2, 3, 4];
console.log(duplicador(array1));
//console.log(duplicador2(array1));
//console.log("media: " + media(array1));
console.log("media: " + media(array1));

console.log("eliminar duplicados " + array1 + ": " + eliminarDuplicados(array1));
let array2 = [1, 2, 2, 2, 5, 3, 5, 3, 3, 4, 7];
console.log("eliminar duplicados " + array2 + ": " + eliminarDuplicados(array2));

let cadena1 = "Est* *** es un ejemplo";
let cadena2 = "Est**** es un ejemplo";
let cadena3 = "Est** e* un ej**plo";;
console.log("CharConsecutivos " + cadena1 + ": " + nCharConsec("*", 4, cadena1));
console.log("CharConsecutivos " + cadena2 + ": " + nCharConsec("*", 4, cadena2));
console.log("CharConsecutivos " + cadena3 + ": " + nCharConsec("*", 4, cadena3));
const gen = generador2(6);
console.log("Mapa aleatorio de tamaño 6");
for (let [clave, valor] of gen.entries()) {
    console.log("clave: " + clave + " - valor: " + valor);
}
/**
 * En estos ejercicios es obligatorio uso de funciones de primer orden y callbacks sobre estructuras de datos
 * Sera necesario utilizar estructuras de datos diferentes a arrays (tambien arrays)
 * No se permite el uso de bucles for(;;) ni while, se debe usar funciones de primer orden (forEach, filter, map, reduce...)
 */

/**
 * Funcion 1
 * 
 * Duplicador
 * 
 * Se pide: Mediante funciones de primer orden, crear una funcion duplicador que recibe como argumento un array de numeros y devuelve otro array duplicando aquellos que sean pares
 * El tamaño del array resultado, por tanto, podra ser distinto del tamaño del array original
 * 
 * Ejemplo: duplicador([1,2,3,4]) -> [4,8]
 */

function duplicador(arrayOrigen) {
    let arrayDestino = [];
    arrayOrigen.forEach(element => {
        if (element % 2 == 0) {
            arrayDestino.push(element * 2);
        }
    });
    return arrayDestino;
}
//OTRA OPCIÖN
//function duplicador2(arrayOrigen) //con esta función recorrería 2 veces el array
//{
//     return arrayOrigen.filter(x => x % 2 == 0).map(x => x * 2);
// }


/**
 * Funcion 2
 * 
 * Media
 * 
 * Se pide: Mediante funciones de primer orden, crear una funcion media que recibe como argumento un array de numeros y devuelve la media de sus elementos
 * 
 * Ejemplo: media([1,2,3,4]) -> 2.5
 */
function media(arrayOrigen) {
    if (arrayOrigen.length > 0) {
        return arrayOrigen.reduce((x, y) => x + y) / arrayOrigen.length;
    }
    return 0;
}

/**
 * Funcion 3
 * 
 * Eliminar duplicados
 * 
 * Se pide: Mediante funciones de primer orden, crear una funcion eliminarDuplicados que recibe como argumento un array de numeros con duplicados y devuelve otro cuyos
 *  elementos son unicos Se valoraran especialmente soluciones donde sea necesario recorrer el array pasado como argumento una unica vez (de una pasada)
 * 
 * Ejemplo: eliminarDuplicados([5,1,2,1,3,3,4,5]) -> [2,4];
 */
function eliminarDuplicados(arrayOrigen) {

    // let valoresUnicos = new Set();
    // arrayOrigen.map(element => valoresUnicos.add(element));
    // return Array.from(valoresUnicos);

    let repetidos = new Array();

    arrayOrigen.forEach(function (numero) {
        repetidos[numero] = (repetidos[numero] || 0) + 1;
    });
    let unicos = new Array();
    repetidos.forEach((element,index) => {
        if (element < 2) {
            unicos.push(index);
        } 
    });
    return unicos;
}

/**
 * Funcion 4
 * 
 * Caracteres consecutivos
 * 
 * Se pide: Mediante funciones de primer orden, crear una funcion nCharConsec que recibe 3 argumentos:
 * - El caracter por el que se quiere buscar
 * - El numero de repeticiones consecutivas que se desea buscar
 * - La cadena (string) donde buscar
 * Devuelve 'true' si hay N repeticiones del caracter especificado en la cadena, 'false' en caso contrario.
 * Se valoraran especialmente soluciones donde sea necesario recorrer la cadena pasada como argumento una unica vez (de una pasada) sin bucles anidados
 * 
 * Ejemplo: nCharConsec(*, 4, "Est* *** es un ejemplo") -> false (tenemos en cuenta los espacios)
 * Ejemplo: nCharConsec(*, 4, "Est**** es un ejemplo") -> true 
 * Ejemplo: nCharConsec(*, 4, "Est** e* un ej**plo") -> false
 * 
 */

function nCharConsec(caracter, repeticiones, cadenaOrigen) {
    let cadenaBuscar = caracter.repeat(repeticiones);
    return cadenaOrigen.includes(cadenaBuscar);
}
//OTRA OPCIÓN recorrería todo el array aunque tuviese el resultado antes de llegar al final
// function nCharConsec2(caracter, repeticiones, cadenaOrigen) {
//     let contador = 0;
//     let ultimaPosicion = -1;
//     let arrayCaracteres = cadenaOrigen.split("");
//     let encontrado = false;
//     arrayCaracteres.forEach((element, indice) => {
//         if (element == caracter) {
//             if (ultimaPosicion == -1 || ultimaPosicion == indice - 1) {
//                 contador++;
//                 ultimaPosicion = indice;
//             }
//             if (contador == repeticiones) {
//                 encontrado = true;//No puedo hacer return o parar el foreach... se sigue recorriendo el array y ya tengo el resultado
//             }
//         }
//         else {
//             ultimaPosicion = -1;
//             contador = 0;
//         }

//     });
//     return encontrado;
// }

/**
 * Funcion 5
 * 
 * Generador de numeros aleatorios
 * 
 * Se pide: Mediante funciones de primer orden, crear una funcion generador que recibe 1 argumento:
 * - N: El tamaño del mapa a devolver
 * 
 * Este metodo creara en primer lugar un array de numeros aleatorios no repetidos, de tamaño N.
 * Despues filtrara el array para eliminar los 0 y los duplicados, si hay alguno.
 * Despues, creara un mapa donde: 
 * - Las claves seran los valores de cada una de las coordenadas del array creado
 * - Los valores seran la media de todos los elementos del array filtrado previos anteriores a cada componente del array filtrado, 
 * incluyendo el valor del componente actual del array filtrado que se esta utilizando
 * 
 * Ejemplo: generador(6) -> Map()
 * Genera un array aleatorio de numeros, supongamos [2,2,6,7,1,0]
 * Se filtra el array -> [2,6,7,1]
 * Genera y devuelve un mapa conforme a la especificacion, con las siguientes entradas:
 * [2, 2] (2 /2 = 1)
 * [6, 4] (2+6 /2 = 4)
 * [7, 5] (2+6+7 /3 = 5)
 * [1, 4] (2+6+7+1 /4 = 4)
 */

function generador2(longitud) {
    let arrayOrigen = Array.from({ length: longitud }, () => Math.floor(Math.random() * 10));
    //let arrayOrigen = [2,2,6,7,1,0].filter(x=>x!=0);
    let setFiltrado = new Set(arrayOrigen);
    let mapa = new Map();
    let suma = 0;
    setFiltrado.forEach(element => {
        suma += element;
        mapa.set(element, suma / (mapa.size + 1));
    }
    );
    return mapa;
}
//OTRA OPCION. Utilizo un callback llamando a la función media creada anteriormente pero recorro 1 vez el array filtrado de este método
//y el arrayMedia en la otra función una vez por cada elemento del actual.
// function generador(longitud) {
//     let arrayOrigen = Array.from({ length: longitud }, () => Math.floor(Math.random() * 10));
//     let setFiltrado = new Set(arrayOrigen);
//     let mapa = new Map();
//     let arrayMedia = new Array();
//     setFiltrado.forEach(element => {
//         arrayMedia.push(element);
//         mapa.set(element, media(arrayMedia));
//     }
//     );
//     return mapa;
// }
