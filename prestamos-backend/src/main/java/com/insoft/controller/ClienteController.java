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

import com.insoft.model.Cliente;
import com.insoft.service.IClienteService;


@RestController
@RequestMapping("/clientes")
public class ClienteController {

	@Autowired
	private IClienteService service;
	
	@GetMapping
	public List<Cliente> listar(){
		return service.listar();
	}
	
	@GetMapping(value = "/{id}", produces = "application/json")
	public Cliente listarPorId(@PathVariable("id") Integer id) {
		return service.listarPorId(id);
	}
	
	@PostMapping(produces = "application/json", consumes = "application/json")
	public Cliente registrarTransaccional(@RequestBody Cliente ClienteListaExamenDTO) {
		return service.registrar(ClienteListaExamenDTO);
	}
	
	@PutMapping(produces = "application/json", consumes = "application/json")
	public Cliente modificar(@RequestBody Cliente Cliente) {
		return service.modificar(Cliente);
	}
	
	@DeleteMapping(value = "/{id}", produces = "application/json")
	public void eliminar(@PathVariable("id") Integer id) {
		service.eliminar(id);
	}
	
}
