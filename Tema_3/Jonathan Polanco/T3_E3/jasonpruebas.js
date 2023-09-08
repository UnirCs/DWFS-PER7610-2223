document.getElementById("btnAceptar").onclick = async function () { 
    fetch('https://api.chucknorris.io/jokes/random')
    .then(res => res.json())
    .then(json => 
        {
            document.getElementById("parrafo").textContent = json.value;
        })
    .catch(err => console.log(err))
};
