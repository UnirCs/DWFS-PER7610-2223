package com.example.catalogo.controllers;

import com.example.catalogo.entities.ElasticPizza;
import com.example.catalogo.services.ElasticPizzaService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@CrossOrigin
public class ElasticPizzaController {

    private final ElasticPizzaService service;

    @GetMapping("/pizzas")
    public ResponseEntity<List<ElasticPizza>> getAll(){
        List<ElasticPizza> pizzas= service.getAll();
        if(pizzas != null){
            return ResponseEntity.ok(pizzas);
        }else{
            return ResponseEntity.notFound().build();
        }
    }



    @GetMapping("/pizzas/search/as-you-type/{value}")
    public ResponseEntity<List<ElasticPizza>> searchByName(@PathVariable String nombre){
        List<ElasticPizza> pizzas = service.searchByName(nombre);
        if(pizzas != null){
            return ResponseEntity.ok(pizzas);
        }else{
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/pizzas/{id}")
    public ResponseEntity<ElasticPizza> getById(@PathVariable String id){
        Optional<ElasticPizza> pizzas= service.getById(id);
        if(pizzas != null){
            return ResponseEntity.ok(pizzas.get());
        }else{
            return ResponseEntity.notFound().build();
        }
    }


}
