package com.example.operador.entities;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity( name = "pizza")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PizzaEntity implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    //@Column(name = "id", nullable = false)
    private int id;

    @Column( name="nombre", nullable = false)
    private String nombre;

    @Column( name="precio", nullable = false)
    private int precio;


}
