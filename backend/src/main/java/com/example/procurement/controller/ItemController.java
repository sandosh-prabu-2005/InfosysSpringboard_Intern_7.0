package com.example.procurement.controller;

import com.example.procurement.model.Item;
import com.example.procurement.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/items")
public class ItemController {

    @Autowired
    private ItemRepository repo;

    @GetMapping
    public List<Item> getAllItems() {
        return repo.findAll();
    }

    @PostMapping
    public Item createItem(@RequestBody Item item) {
        return repo.save(item);
    }
}
