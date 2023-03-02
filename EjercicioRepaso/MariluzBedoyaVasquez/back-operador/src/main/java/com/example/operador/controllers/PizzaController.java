package com.example.operador.controllers;

import com.example.operador.dto.PizzaDto;
import com.example.operador.entities.PizzaEntity;


import com.example.operador.services.PizzaServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("pizzas")
@Slf4j
public class PizzaController {

    @Autowired
    private PizzaServiceImpl service;

    @GetMapping
    public ResponseEntity<List<PizzaEntity>> getAll() {
        List<PizzaEntity> pizzas = service.getAllPizzas();
        if (pizzas != null) {
            return ResponseEntity.ok(pizzas);
        } else {
           return ResponseEntity.ok(Collections.emptyList());
        }
    }

    @PostMapping
    public ResponseEntity<PizzaEntity> addPizza(@RequestBody PizzaDto pizza){
        System.out.println("***" + pizza.getNombre());
        PizzaEntity pizzaCreada=  service.savePizza(pizza);
        if(pizzaCreada != null){
            return ResponseEntity.status(HttpStatus.CREATED).body(pizzaCreada);
        }else{
            return ResponseEntity.badRequest().build();
        }
    }
}
