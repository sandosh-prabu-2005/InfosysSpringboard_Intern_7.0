package com.example.procurement.controller;

import com.example.procurement.model.PurchaseRequest;
import com.example.procurement.repository.PurchaseRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/requests")
public class PurchaseRequestController {

    @Autowired
    private PurchaseRequestRepository repo;

    @GetMapping
    public List<PurchaseRequest> getAllRequests() {
        return repo.findAll();
    }

    @PostMapping
    public PurchaseRequest createRequest(@RequestBody PurchaseRequest request) {
        return repo.save(request);
    }
}
