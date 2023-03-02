import React, { useEffect, useState } from "react";

export default function Home() {

    const [datos_pizzas, setDatosPizzas] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/pizzas")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setDatosPizzas(data);
            });
    }, []);

    return (
        <div>
            <h1> Pizzas </h1>
            <ul>
                {datos_pizzas.map(dato => <li key={dato.id}>{dato.nombre}</li>)}
            </ul>

        </div>
    );
}