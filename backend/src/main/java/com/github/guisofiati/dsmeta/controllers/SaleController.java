package com.github.guisofiati.dsmeta.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.github.guisofiati.dsmeta.entities.Sale;
import com.github.guisofiati.dsmeta.services.SaleService;

@RestController
@RequestMapping(value = "/sales")
public class SaleController {
	
	@Autowired
	private SaleService service;
	
	@GetMapping
	public Page<Sale> findSales(
			@RequestParam(name = "minDate", defaultValue = "")String minDate, 
			@RequestParam(name = "maxDate", defaultValue = "")String maxDate, 
			Pageable pageable) {
		return service.findSales(minDate, maxDate, pageable);
	}
}
