package com.insoft.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.insoft.model.Prestamo;

public interface IPrestamoDAO extends JpaRepository<Prestamo, Integer>{

}
