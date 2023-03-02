package com.example.operador.exception;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class ApiException extends RuntimeException{

    public ApiException(String mensaje){
        super(mensaje);
    }
}
