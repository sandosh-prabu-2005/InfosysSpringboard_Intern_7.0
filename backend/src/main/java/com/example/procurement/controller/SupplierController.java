package com.example.procurement.controller;

import com.example.procurement.model.Supplier;
import com.example.procurement.repository.SupplierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/suppliers")
public class SupplierController {

    @Autowired
    private SupplierRepository repo;

    @GetMapping
    public List<Supplier> getAllSuppliers() {
        return repo.findAll();
    }

    @PostMapping
    public Supplier createSupplier(@RequestBody Supplier supplier) {
        return repo.save(supplier);
    }
}
