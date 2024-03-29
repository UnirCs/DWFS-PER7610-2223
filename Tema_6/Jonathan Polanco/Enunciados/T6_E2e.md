# Diseño de una API REST (2)
En este ejercicio vamos a diseñar la API REST de una calculadora.

Las operaciones que la API debe soportar son las siguientes:
- Sumar N elementos (2+2, 2+2+2).
- Restar N elementos (2-2, 2-2-2).
- Multiplicar 2 elementos (2x2).
- Dividir 2 elementos (2/2).
- Raiz N-ésima de un número (Raíz cuadrada de 4, Raíz cúbica de 8).
- Potencia N-ésima de un número (2^2, 3^3, 4^4).
- Detalle de operacion

Nuestra calculadora tendrá memoria y siempre se podrán consultar los datos de operaciones realizadas, a través de un ID de operación.

La entrega del ejercicio consiste en un archivo **API.md** que contenga la siguiente información:
- Nombre y descripción de los recursos identificados.
- API REST donde se indiquen las diferentes operaciones que ofrece la interfaz. Para cada operación será necesario indicar su método HTTP, endpoint, cuerpo (en caso de necesitarlo, con ejemplo) y códigos de respuesta HTTP posibles. Puedes servirte de la siguiente tabla:

| Método HTTP  | URI | Body | Respuesta |
| ------------- | ------------- | ------------- | ------------- |
| GET  | /algo  | N/A | 200 OK, 404 NF

Si lo necesitas, puedes obtener más información sobre la sintaxis de Markdown [aquí](https://pandao.github.io/editor.md/en.html), para formatear tu archivo .md
