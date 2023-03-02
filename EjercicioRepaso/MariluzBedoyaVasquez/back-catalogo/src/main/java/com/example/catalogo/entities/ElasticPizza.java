package com.example.catalogo.entities;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.*;

import java.util.List;

@Document( indexName = "pizzas", createIndex = true)
@Setter
@Getter
@Builder
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class ElasticPizza {

    @Id
    private String id;

    @MultiField( mainField = @Field( type = FieldType.Keyword, name="nombre"),
            otherFields = @InnerField( type = FieldType.Search_As_You_Type, suffix = "search"))
    private String nombre;

    @Field( type = FieldType.Integer, name="precio")
    private int   precio;

    @Field( type = FieldType.Boolean, name="vegana")
    private boolean vegana;

    @Field ( type= FieldType.Text, name="descripcion")
    private String descripcion;

    @Field( type = FieldType.Object, name="ingredientes")
    List<String> ingredientes;
}
