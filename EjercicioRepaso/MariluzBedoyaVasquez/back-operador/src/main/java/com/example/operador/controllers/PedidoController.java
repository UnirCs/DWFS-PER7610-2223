package com.example.operador.controllers;


import com.example.operador.dto.PedidoDto;
import com.example.operador.entities.PedidoEntity;
import com.example.operador.services.PedidoServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("pedidos")
@Slf4j
public class PedidoController {

    @Autowired
    private PedidoServiceImpl service;

    @GetMapping
    public ResponseEntity<List<PedidoEntity>> getAll() {
        List<PedidoEntity> pedidos = service.getAllPedidos();
        if (pedidos != null) {
            return ResponseEntity.ok(pedidos);
        } else {
           return ResponseEntity.ok(Collections.emptyList());
        }
    }

    @PostMapping
    public ResponseEntity<PedidoEntity> addPedido(@RequestBody PedidoDto pedido){

        PedidoEntity pedidoCreada=  service.savePedido(pedido);
        if(pedidoCreada != null){
            return ResponseEntity.status(HttpStatus.CREATED).body(pedidoCreada);
        }else{
            return ResponseEntity.badRequest().build();
        }
    }
}
