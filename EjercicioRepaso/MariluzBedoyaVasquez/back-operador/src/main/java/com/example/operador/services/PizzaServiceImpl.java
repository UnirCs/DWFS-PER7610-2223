package com.example.operador.services;


import com.example.operador.dto.PizzaDto;
import com.example.operador.entities.PizzaEntity;
import com.example.operador.repositories.PizzaRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PizzaServiceImpl implements PizzaService {

    @Autowired
    private PizzaRepository repository;

    @Override
    public List<PizzaEntity> getAllPizzas() {
      return  repository.findAll();
    }

    @Override
    public PizzaEntity savePizza(PizzaDto pizza) {
        try {
            System.out.println(" --- " + pizza.getNombre());
            PizzaEntity entitypizza = new PizzaEntity();
            BeanUtils.copyProperties(pizza, entitypizza);
            System.out.println(entitypizza.getNombre());
            return repository.save(entitypizza);
        }catch(Exception e){
            e.printStackTrace();
            return null;
        }
    }
}
