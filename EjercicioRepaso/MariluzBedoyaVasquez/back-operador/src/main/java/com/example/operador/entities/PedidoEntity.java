package com.example.operador.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


import javax.persistence.*;
import java.io.Serializable;
import java.util.List;


@Entity( name = "pedido")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PedidoEntity implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    //@Column(name = "id", nullable = false)
    private int id;

    @Column( name="pizzas", nullable = false)
    private List<PizzaEntity> pizzas;

    @Column( name="entregado", nullable = false)
    private boolean entregado;

    @Column( name="cocinada", nullable = false)
    private boolean cocinada;

    @Column( name="direccion", nullable = false)
    private String direccion;

    @Column( name="precio_total", nullable = false)
    private int precio_total;


}
