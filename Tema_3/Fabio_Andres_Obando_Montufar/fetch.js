function consultarApi(){
	fetch('https://api.chucknorris.io/jokes/random')
	.then(response => response.json()) 
	.then(json => {
		console.log(json.value)
		var elem=document.getElementById('msg');
		elem.innerHTML=json.value;
	})
	.catch(e => {
		elem.innerHTML='Problemas consultando el API' + e.message;
	});
}

function changeColor(newColor) {
   var elem = document.getElementById('paraa');
   elem.innerHTML = 'jojojo';
   elem.style.color = newColor;
}
