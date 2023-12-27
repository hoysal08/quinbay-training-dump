package com.example.employeeMongo.controller;

import com.example.employeeMongo.entity.BankAccount;
import com.example.employeeMongo.entity.Company;
import com.example.employeeMongo.service.BankService;
import com.example.employeeMongo.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/bank")
public class BankController {

    @Autowired
    BankService bankService;

    @PostMapping("/add")
    public ResponseEntity<Boolean> addCompany(@RequestBody String bankAccountName) {
        Boolean inserted = bankService.addBank(bankAccountName);
        if (inserted) {
            return new ResponseEntity<>(Boolean.TRUE, HttpStatus.CREATED);
        }
        return new ResponseEntity<>(Boolean.FALSE, HttpStatus.BAD_REQUEST);
    }

    @PostMapping()
    public Iterable<BankAccount> getCompany() {
        return bankService.getAll();
    }
}