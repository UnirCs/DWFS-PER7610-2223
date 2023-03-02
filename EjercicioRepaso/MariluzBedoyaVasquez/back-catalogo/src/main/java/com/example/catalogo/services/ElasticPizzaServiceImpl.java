package com.example.catalogo.services;

import com.example.catalogo.entities.ElasticPizza;
import com.example.catalogo.models.request.CreatePizzaRequest;
import com.example.catalogo.repositories.ElasticsearchPizzaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ElasticPizzaServiceImpl implements  ElasticPizzaService {


    private final ElasticsearchPizzaRepository repository;

    @Override
    public List<ElasticPizza> getAll() {
        Iterable<ElasticPizza> pizzas= repository.getAll();
        List<ElasticPizza> p = new ArrayList<>();
        for(ElasticPizza pizza: pizzas){
            p.add(pizza);
        }
        return p;
    }

    @Override
    public Optional<ElasticPizza> getById(String id) {
        return repository.getById(id);
    }

    @Override
    public List<ElasticPizza> searchByName(String nombre) {
        return repository.searchByName(nombre);
    }

    @Override
    public ElasticPizza createPizza(CreatePizzaRequest pizza) {
        if (pizza != null && StringUtils.hasLength(pizza.getNombre())
                && StringUtils.hasLength(pizza.getDescripcion())
        ) {

            ElasticPizza pizzas =
                    ElasticPizza.builder().id(pizza.getId())
                            .nombre(pizza.getNombre())
                            .descripcion(pizza.getDescripcion())
                            .precio(pizza.getPrecio())
                            .vegana(pizza.isVegana())
                            .ingredientes((pizza.getIngredientes()))
                            .build();

            return repository.createPizza(pizzas);
        } else {
            return null;
        }
    }

}
