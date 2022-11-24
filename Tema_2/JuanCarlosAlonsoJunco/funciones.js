let cine = [];
var sugerencia = [];
var reserva = [];
var vacio = '-';
var ocupado = 'X';


function initialize(size) {
 for (let i = 0; i < size ; i++) {
   // get the size of the inner array
   let aux = [];
   // loop the inner array
   for (let j = 0; j < size; j++) {
       aux.push('-');
   }
   cine.push(aux);
 }
}
function show(){
let resultado = "";
  for (let i = 0; i < cine.length; i++) {
    for (let j = 0; j < cine.length; j++) {
      resultado += " " + cine[i][j];
    }
    resultado += "\n";
  }
  console.log(resultado);
}
initialize(10);
show();


function suggest(requestSize) {
    let aux = [];
    reserva = [];
    var encontrado = 0;
    if(requestSize > cine.length){
        sugerencia = null;
    }
    else{
        for(let i = 0 ; i<cine.length ;i++){    
                if(aux.length < requestSize){
                    for(let j = 0; j<cine.length;j++){
                        if(encontrado == 0 && aux.length > 0 && i > 0 && j == 0){
                            aux = [];
                            reserva = [];
                        }
                        else{
                            if(aux.length < requestSize){
                                if(cine[i][j] == vacio ){
                                    aux.push('F'+ i + 'B' + j);
                                    reserva.push([i,j]);
                                }
                                else{
                                    aux = [];
                                    reserva = [];
                                }
                            }
                        }
                    }
                }
                else{
                    sugerencia = aux;
                    encontrado = 1;
                }
        }
        if(encontrado = 0){
           sugerencia = null;
           reserva = [];
        }
    }
   return sugerencia;
}
let suggestion1 = suggest(6);
console.log(reserva);
let suggestion2 = suggest(8);
console.log(reserva);
let suggestion3 = suggest(11);
console.log(reserva);

console.log(suggestion1);
console.log(suggestion2);
console.log(suggestion3);


function order(requestSize) {
  let orden_asientos = "";  
  let resultado = "";
  orden_asientos = suggest(requestSize);

  if (orden_asientos == null){
    resultado = "No se puede hacer la reserva para los " + requestSize + " asientos";
  }
  else{
    for(let i = 0 ; i<reserva.length ; i++){
        let reservarButaca=reserva[i];
        cine[reservarButaca[0]][reservarButaca[1]] = "X";
    }
    resultado = "Asientos "+ orden_asientos +" reservados."
  }
  return resultado;
}

let pedido = order(9);
console.log(pedido);
let pedido1 = order(8);
console.log(pedido1);
show();
