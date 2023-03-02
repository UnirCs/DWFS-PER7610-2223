package com.example.operador.dto;

import lombok.*;

import javax.persistence.Column;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Data
public class PedidoDto {

    private int id;
    private List<PizzaDto> pizzas;
    private boolean entregado;
    private boolean cocinada;
    private String direccion;
    private int precio_total;


}
