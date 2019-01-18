package com.insoft.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.insoft.model.Prestamo;
import com.insoft.service.IPrestamoService;


@RestController
@RequestMapping("/prestamos")
public class PrestamoController {

	@Autowired
	private IPrestamoService service;
	
	@GetMapping
	public List<Prestamo> listar(){
		return service.listar();
	}
	
	@GetMapping(value = "/{id}", produces = "application/json")
	public Prestamo listarPorId(@PathVariable("id") Integer id) {
		return service.listarPorId(id);
	}
	
	@PostMapping(produces = "application/json", consumes = "application/json")
	public Prestamo registrarTransaccional(@RequestBody Prestamo PrestamoListaExamenDTO) {
		return service.registrar(PrestamoListaExamenDTO);
	}
	
	@PutMapping(produces = "application/json", consumes = "application/json")
	public Prestamo modificar(@RequestBody Prestamo Prestamo) {
		return service.modificar(Prestamo);
	}
	
	@DeleteMapping(value = "/{id}", produces = "application/json")
	public void eliminar(@PathVariable("id") Integer id) {
		service.eliminar(id);
	}
	
}
