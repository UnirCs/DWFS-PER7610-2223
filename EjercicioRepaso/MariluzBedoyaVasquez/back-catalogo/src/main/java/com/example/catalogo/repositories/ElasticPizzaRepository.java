package com.example.catalogo.repositories;

import com.example.catalogo.entities.ElasticPizza;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

public interface ElasticPizzaRepository extends ElasticsearchRepository<ElasticPizza, String> {
}
