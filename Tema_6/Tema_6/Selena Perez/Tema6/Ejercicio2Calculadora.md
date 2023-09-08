**Ejercicio 2: Calculadora-Selena Pérez**

**Recursos**

- Operaciones: Recurso creado, eliminado y modificado.

**Operaciones**

| Método HTTP | URI | Body | Respuesta | Explicación |
| ----------- | --- | ---- | --------- | ----------- |
| GET | /operaciones/{idOperacion}/resultado | N/A | 200 OK, 404 NF | Obtener resultado |
| GET | /operaciones/{idOperacion}/detalle | N/A | 200 OK, 404 NF | Obtener cadena de operación |
| POST | /operaciones/suma/ | {numeros: [n1, n2, ...]} | 201 CREATED, 400 BR | Sumar array de valores |
| POST | /operaciones/resta/ | {numeros: [n1, n2, ...]} | 201 CREATED, 400 BR | Restar array de valores |
| POST | /operaciones/multiplicacion/ | {numeros: [n1, n2]} | 201 CREATED, 400 BR | Multiplicación de n1 y n2 |
| POST | /operaciones/division/ | {numeros: [n1, n2]} | 201 CREATED, 400 BR | División de n1 entre n2 |
| POST | /operaciones/raiz/ | {numeros: [n1, n2]} | 201 CREATED, 400 BR | Raiz n2 de n1 |
| POST | /operaciones/potencia/ | {numeros: [n1, n2]} | 201 CREATED, 400 BR | Potencia n1 elevado a n2 |
| DELETE | /operaciones/{idOperacion} | N/A | 200 OK, 404 NF | Eliminar una operación creada |
| PATCH | /operaciones/{idOperacion} | {numeros: [n1, n2]} | 200 OK, 400 BR, 404 NF | Modificar los números de una operación existente |

**Respuestas**
- 404 => Not Found: Cuando se ha tratado de hacer una operacion sobre un id no existente
- 400 => Bad Request: Cuando ha ocurrido un error en los datos enviados
- 200 => OK: petición exitosa
- 201 => CREATED: Una operación añadida