package com.example.catalogo.repositories;

import com.example.catalogo.entities.ElasticPizza;
import lombok.RequiredArgsConstructor;
import org.elasticsearch.index.query.BoolQueryBuilder;
import org.elasticsearch.index.query.MultiMatchQueryBuilder;
import org.elasticsearch.index.query.QueryBuilders;
import org.springframework.data.elasticsearch.core.ElasticsearchOperations;
import org.springframework.data.elasticsearch.core.SearchHit;
import org.springframework.data.elasticsearch.core.SearchHits;
import org.springframework.data.elasticsearch.core.query.NativeSearchQueryBuilder;
import org.springframework.data.elasticsearch.core.query.Query;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class ElasticsearchPizzaRepository {

    private final ElasticPizzaRepository repository;
    private final String [] nameSearchFields= {"nombre.search", "nombre.search._2gram","nombre.search._3gram"};
    private final ElasticsearchOperations elasticPizza;

    public ElasticPizza createPizza(ElasticPizza pizza){
        return repository.save(pizza);
    }

    public Iterable<ElasticPizza> getAll(){
        return repository.findAll();

    }
    public Optional<ElasticPizza> getById(String id){
        return repository.findById(id);
    }

    public List<ElasticPizza> searchByName(String nombre){
        BoolQueryBuilder boolQuery = QueryBuilders.boolQuery();

        boolQuery.must(QueryBuilders.multiMatchQuery(nombre, nameSearchFields)
                .type(MultiMatchQueryBuilder.Type.BOOL_PREFIX));

        NativeSearchQueryBuilder nativeSearchQueryBuilder =
                new NativeSearchQueryBuilder().withQuery(boolQuery);
        Query query = nativeSearchQueryBuilder.build();

        SearchHits<ElasticPizza> result = elasticPizza.search(query, ElasticPizza.class);

        return result.getSearchHits().stream().map(SearchHit::getContent).collect(Collectors.toList());
    }
}
