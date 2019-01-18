package com.insoft.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.insoft.dao.IPrestamoDAO;
import com.insoft.model.Prestamo;
import com.insoft.service.IPrestamoService;

@Service
public class PrestamoServiceImpl implements IPrestamoService {

	@Autowired
	private IPrestamoDAO dao;

	@Override
	public Prestamo registrar(Prestamo t) {
		return dao.save(t);
	}
	
	@Override
	public Prestamo modificar(Prestamo t) {
		return dao.save(t);
	}

	@Override
	public void eliminar(int id) {
		dao.deleteById(id);
	}

	@Override
	public Prestamo listarPorId(int id) {
		return dao.findById(id).get();
	}

	@Override
	public List<Prestamo> listar() {
		return dao.findAll();
	}

}
