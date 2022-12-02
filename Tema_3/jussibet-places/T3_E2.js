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
array2 = [1, 2, 3, 4];
const duplicador = (array) => array.filter((z) => z % 2 == 0);
console.log("Ejercicio 1: ");
console.log(duplicador(array2).map((val) => val * 2));

/**
 * Funcion 2
 *
 * Media
 *
 * Se pide: Mediante funciones de primer orden, crear una funcion media que recibe como argumento un array de numeros y devuelve la media de sus elementos
 *
 * Ejemplo: media([1,2,3,4]) -> 2.5
 */

array2 = [1, 2, 3, 4];
const media = (array) => array.reduce((a, b) => (b += a)) / array.length;
console.log("Ejercicio 2: ");
console.log(media(array2));

/**
 * Funcion 3
 *
 * Eliminar duplicados
 *
 * Se pide: Mediante funciones de primer orden, crear una funcion eliminarDuplicados que recibe como argumento un array de numeros con duplicados y devuelve otro cuyos elementos son unicos
 * Se valoraran especialmente soluciones donde sea necesario recorrer el array pasado como argumento una unica vez (de una pasada)
 *
 * Ejemplo: eliminarDuplicados([5,1,2,1,3,3,4,5]) -> [2,4]
 */

const eliminarDuplicados = (array) => {
  let lisfinal = [];
  array = array.reduce((a, b) => ((a[b] = a[b] + 1 || 1), a), []);
  array.forEach((valor, clave) => {
    if (valor == 1) {
      lisfinal.push(clave);
    }
  });
  return lisfinal;
};
console.log("Ejercicio 3: ");
console.log(eliminarDuplicados([5, 1, 2, 1, 3, 3, 4, 5]));

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
const nCharConsec = (caracter, numero, cadena) => {
  let cadena1 = cadena.substring(
    cadena.indexOf(caracter),
    cadena.lastIndexOf(caracter) + 1
  );
  return cadena1.length == numero;
};
console.log("Ejercicio 4: ");
console.log(nCharConsec("*", 4, "Est**** es un ejemplo"));

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
 * [2, 2] (2 / 1 = 2)
 * [6, 4] (2+6 /2 = 4)
 * [7, 5] (2+6+7 /3 = 5)
 * [1, 4] (2+6+7+1 /4 = 4)
 */
const generador = (numero) => {
  let acum = 0;
  let map = new Map();
  let array = Array.from({ length: numero }, () =>
    Math.floor(Math.random() * 11)
  );
  console.table(array);
  let arrayFinal = array.filter((item, index) =>
    array.indexOf(item) === index && item > 0 ? true : false
  );
  console.table(arrayFinal);
  arrayFinal.forEach(function (valor, indice) {
    acum += valor;
    map.set(valor, acum / (indice + 1));
  });
  return map;
  //console.table(map);
};
console.log("Ejercicio 5: ");
console.table(generador(6));
