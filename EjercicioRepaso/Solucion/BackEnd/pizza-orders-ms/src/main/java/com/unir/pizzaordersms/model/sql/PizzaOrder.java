package com.unir.pizzaordersms.model.sql;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "orders")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class PizzaOrder {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@Column(name = "concept")
	private String concept;
	
	@Column(name = "price")
	private Double price;
	
	@Column(name = "address")
	private String address;
	
	//True si el pedido ha sido entregado, false e.o.c
	@Column(name = "delivered")
	private Boolean delivered;
	
	//True si las pizzas del pedido ya se han hecho, false e.o.c
	@Column(name = "processed")
	private Boolean processed;
}
