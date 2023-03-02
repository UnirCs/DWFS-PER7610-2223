package com.example.operador.services;


import com.example.operador.dto.PedidoDto;
import com.example.operador.entities.PedidoEntity;
import com.example.operador.entities.PizzaEntity;
import com.example.operador.exception.ApiException;
import com.example.operador.repositories.PedidoRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.http.HttpResponse;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.util.EntityUtils;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;

@Service
public class PedidoServiceImpl implements PedidoService {

    @Autowired
    private PedidoRepository repository;

    @Override
    public List<PedidoEntity> getAllPedidos() {
        return repository.findAll();
    }

    @Value("${url.zuul.busquedas}")
    private String url_zuul;

    @Override
    public PedidoEntity savePedido(PedidoDto Pedido) {
        try {
            PedidoEntity entityPedido = new PedidoEntity();
            List<PizzaEntity> pizzas = entityPedido.getPizzas();
            boolean pizzas_completas = true;
            for (int i = 0; i < pizzas.size(); i++) {
                PizzaEntity pizza = consultarPizza(String.valueOf(pizzas.get(i).getId()));
                if (pizza == null) {
                    pizzas_completas = false;
                }
            }
            if (pizzas_completas) {
                BeanUtils.copyProperties(Pedido, entityPedido);
                return repository.save(entityPedido);
            } else {
                throw new ApiException("No se pudo crear el pedido.");
            }
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public PizzaEntity consultarPizza(String id) {
        try {
            HttpGet httpGet = new HttpGet(url_zuul + "/pizzas/" + id);
            HttpClient client = new DefaultHttpClient();
            HttpResponse respuesta = client.execute(httpGet);
            String result = EntityUtils.toString(respuesta.getEntity());
            ObjectMapper objectMapper = new ObjectMapper();
            PizzaEntity pizza = objectMapper.readValue(result, PizzaEntity.class);
            return pizza;
        } catch (ClientProtocolException e) {
            e.printStackTrace();
            return null;
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }
}
