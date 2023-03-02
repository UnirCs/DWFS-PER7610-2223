package com.example.catalogo.models.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CreatePizzaRequest {

    private String id;
    private String nombre;
    private int  precio;
    private boolean vegana;
    private String descripcion;
    List<String> ingredientes;
}
