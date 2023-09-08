- Nombre y descripción de los recursos identificados.
- API REST donde se indiquen las diferentes operaciones que ofrece la interfaz. Para cada operación será necesario indicar su método HTTP, endpoint, cuerpo (en caso de necesitarlo, con ejemplo) y códigos de respuesta HTTP posibles. Puedes servirte de la siguiente tabla:


| Método HTTP  | URI                            | Body                     | Respuesta     |
| -------------| -------------                  | -------------            | ------------- |
| POST         | /calculadora/sumas             | numeros=[2,3,4]          | 201 OK, 400 Bad Request, 500 Error del servidor|
| POST         | /calculadora/restas            | numero=[5,2,3]           | 201 OK, 400 Bad Request, 500 Error del servidor |
| POST         | /calculadora/multiplicaciones  | numero1 = 4, numero2 = 4     | 201 OK, 400 Bad Request, 500 Error del servidor  |
| POST         | /calculadora/divisiones        | numero1 = 3 , numero2= 4     | 201 OK, 400 Bad Request, 500 Error del servidor |
| POST         | /calculadora/raiz              | numero= 4                | 201 OK, 400 Bad Request, 500 Error del servidor |
| POST         | /calculadora/potencias         | numero= 4      | 201 OK, 400 Bad Request, 500 Error del servidor | 
| GET          | /calculadora/operaciones/{id}  | N/A         | 200 OK, 404 Not Found 
