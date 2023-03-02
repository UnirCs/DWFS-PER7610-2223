package com.example.catalogo.services;

import com.example.catalogo.entities.ElasticPizza;
import com.example.catalogo.models.request.CreatePizzaRequest;

import java.util.List;
import java.util.Optional;

public interface ElasticPizzaService {

    List<ElasticPizza> getAll();
    Optional<ElasticPizza> getById(String id);
    List<ElasticPizza> searchByName(String nombre);
    ElasticPizza createPizza(CreatePizzaRequest pizza);
}
