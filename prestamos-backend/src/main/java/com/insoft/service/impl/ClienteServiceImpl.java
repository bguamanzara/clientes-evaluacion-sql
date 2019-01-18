package com.insoft.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.insoft.dao.IClienteDAO;
import com.insoft.model.Cliente;
import com.insoft.service.IClienteService;

@Service
public class ClienteServiceImpl implements IClienteService {

	@Autowired
	private IClienteDAO dao;

	@Override
	public Cliente registrar(Cliente t) {
		return dao.save(t);
	}
	
	@Override
	public Cliente modificar(Cliente t) {
		return dao.save(t);
	}

	@Override
	public void eliminar(int id) {
		dao.deleteById(id);
	}

	@Override
	public Cliente listarPorId(int id) {
		return dao.findById(id).get();
	}

	@Override
	public List<Cliente> listar() {
		return dao.findAll();
	}

}
