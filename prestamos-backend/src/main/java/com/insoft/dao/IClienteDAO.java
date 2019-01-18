package com.insoft.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.insoft.model.Cliente;

public interface IClienteDAO extends JpaRepository<Cliente, Integer>{

}
