package com.example.operador.services;


import com.example.operador.dto.PedidoDto;
import com.example.operador.entities.PedidoEntity;

import java.util.List;

public interface PedidoService {

    public List<PedidoEntity> getAllPedidos();
    public PedidoEntity savePedido(PedidoDto pedido);
}
