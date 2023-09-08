### Diseño de una API REST 
### Hundir la flota
####A continuación se describe los recursos y API que se puede usar para implementar el juego de "Hunde la flota"
####¿Qué recursos tiene que manejar la API?
- Partidas
- Jugadores
- Barcos
- Disparos
- Tableros
- Usuarios

####¿Cómo se relacionan entre sí?
Las partidasse relacionan entre usuarios registrados o invitados (es decir, sin registro, anónimos).
Cada partida tiene asociadas dos cuadrículas de 10x10 cuadrados.
Un cuadrícula por cada jugador.
Los jugadores deben poner sobre dicha cuadrícula las localizaciones de sus barcos.
Localizaciones de barcos:
 - 1 barco de 4 cuadrados.
 - 2 barcos de 3 cuadrados.
 - 3 barcos de 2 cuadrados.
 - 4 barcos de 1 cuadrado.

####¿Qué información (atributos) guarda cada recurso?
Partidas: Tableros, Jugadores, Barcos, Disparos
Jugadores: Usuario o Jugador temporal.
Barcos: Ubicación de fila y columna, A su vez la localización.
Disparos: Barco, Partidas.
Tableros: Dimensión 10X10, cuadros ocupados, libres, límites.
Usuarios: Nombres, username, password

#API REST
                    
Método HTTP  | URI                                                                  | Body/descripción | Respuesta
------------- |----------------------------------------------------------------------| ------------- | -------------
GET  | /usuarios                                                            | Consulta de todos usuarios| 200, 400,404,500
GET  | /usuarios/{idUsuario}                                                | Consulta de usuario por id| 200, 400,404,500
POST | /usuarios                                                            |{"username":"jplacesc", "password":"123"}  |201, 400,404,500
PUT  | /usuarios/{idUsuario}                                                |{"username":"jplacesc", "password":"123"}  |200, 400,404,500
DELETE  | /usuarios/{idUsuario}                                                | Eliminar usuario juego| 200, 400,404,500
GET  | /jugadores                                                           | Consulta de todos jugadores| 200, 400,404,500
GET  | /jugadores/{idJugador}                                               | Consulta de jugador por id| 200, 400,404,500
POST | /jugadores                                                           |{"Nombres":"Juan", "Apellidos":"Loor"},"email":"ejemplo@gmail.com","idUsuario":None |201, 400,404,500
PUT  | /jugadores                                                           |{"Nombres":"Juan", "Apellidos":"Loor"},"email":"ejemplo@gmail.com","idUsuario":1  |200, 400,404,500
DELETE  | /jugadores/{idJugador}                                               | Eliminar jugador| 200, 400,404,500
GET  | /partidas                                                            | Consulta de todas las partidas| 200, 400,404,500
GET  | /partidas/{idPartida}                                                | Consulta de una partida en específica| 200, 400,404,500
GET  | /partidas/{idPartida}/jugadores/{idJugador1}                         | Consulta de una partida por primer jugador| 200, 400,404,500
GET  | /partidas/{idPartida}/jugadores/{idJugador2}                         | Consulta de una partida por segundo jugador| 200, 400,404,500
POST  | /partidas                                                            |{"jugador1":"jplacesc", "jugador2":"anonimo", "fechaPartida":"2023-01-02", "estado": 1, "tablero1": ["culmna","fila"], "tablero2": ["columna","fila"]}  |201, 400,404,500
PUT  | /partidas/{idPartida}                                                |{"jugador1":"jplacesc", "jugador2":"anonimo", "fechaPartida":"2023-01-02", "estado": 1, "tablero1": ["culmna","fila"], "tablero2": ["columna","fila"]}  |200, 400,404,500
DELETE  | /partidas/{idPartida}                                                | Eliminar partida|200, 400,404,500
GET  | /partidas/{idPartida}/tableros/barcos                                | Consulta de partidas con sus barcos y tableros| 200, 400,404,500
GET  | /partidas/{idPartida}/tableros/{idTablero}/barcos/{idBarco}          | Consulta de posicion de barco en un tablero| 200, 400,404,500
GET  | /partidas/{idPartida}/juagadores/{idJugador}/barcos                  |Consultar todos los barcos de un jugador de una partida.| 200, 400,404,500
GET  | /partidas/{idPartida}/tableros/{idTablero}/barcos/{idBarco}/disparos | Consulta de posicion de barco en un tablero y disparos| 200, 400,404,500
POST | /partidas/{idPartida}/tableros/jugadores/barcos                      |{"idTablero":"1","idJugador":"1", "idBarco":"1","posiciones":[1,4] }|201, 400,404,500
DELETE  | /partidas/{idPartida}/tableros/jugadores/barcos/{idBarco}         | Eliminar un barco de la cuadrícula de un jugador en una partida. {"idPartida":"1", "idTablero":"1","idJugador":"1", "idBarco":"1","posiciones":[1,4] }|200, 400,404,500
POST | /partidas/jugadores/barcos/disparos                                  |{"idJugadorOrigen":"1","idJugadorDestino":2, "idBarco":"1","numDisparos":3 }|201, 400,404,500




# Elaborado por Jussibeth
