package com.example.operador.services;

import com.example.operador.dto.PizzaDto;
import com.example.operador.entities.PizzaEntity;

import java.util.List;

public interface PizzaService {

    public List<PizzaEntity> getAllPizzas();
    public PizzaEntity savePizza(PizzaDto pizza);
}
