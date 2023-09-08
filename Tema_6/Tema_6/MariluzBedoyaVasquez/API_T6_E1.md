- Nombre y descripción de los recursos identificados.
- API REST donde se indiquen las diferentes operaciones que ofrece la interfaz. Para cada operación será necesario indicar su método HTTP, endpoint, cuerpo (en caso de necesitarlo, con ejemplo) y códigos de respuesta HTTP posibles. Puedes servirte de la siguiente tabla:

- Recursos Identificados:
    usuario
    partidas
    barcos
    disparos
    tablero
    jugadores 
 
| Método HTTP  | URI                                    | Body            | Respuesta                |
| -------------| -------------------------------------- | -------------   | -------------------------|
| POST         | /usuarios/                     | { nombre="Mari", email="prueba@gmail.com, password="1234" }   |  201 OK, 400 Bad Request, 500 Error del servidor |
| GET          | /usuarios/{id}                          | N/A             | 200 OK, 404 Not Found |
| GET          | /usuarios    | ?nombre?email     |    N/A body            | 200 OK, 404 Not Found |
| DELETE       | /usuarios/{id}                          |                 | 200 OK, 404 Not Found |
| POST         | /partidas                      | { jugador1="", jugador2="", fecha="", tablero="", duracion="" } | 201 OK, 400 Bad Request , 500 Error del servidor|
| DELETE       | /partidas/partida/{id}                 | N/A | 200 OK, 404 Not Found |
| PUT          | /partidas/partida/{id}                 | { jugador1="",jugador2="", fecha="", tablero="", duracion="" }  | 201 OK, 400 Bad Request |
| GET          | /partidas/partida/{id}                 | N/A  | 200 OK, 404 Not Found |
| PATCH        | /partidas/partida/{id}/barco  - Agregar un barco a una partida       | { coordenadas=[x,y], cantidad_cuadrados=2, tablero=1} | 201 OK, 400 Bad Request, 500 Error del servidor |
| PATCH        | /partidas/partida/{id}/barco/{id}  - Eliminar un barco de una partida    | N/A | 200 OK, 404 Not Found |
| GET          | /partidas/partida/{id}/barco           | N/A  | 200 OK, 404 Not Found |
| PATCH        | /partidas/partida/{id}/disparo     - Registrar un disparo en una partida    | { jugador="", coordenadas=[x,y], tablero=""} |  201 OK, 400 Bad Request, 500 Error del servidor |

