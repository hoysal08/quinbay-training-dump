package com.example.employeeMongo.controller;

import com.example.employeeMongo.dto.EmployeeDto;
import com.example.employeeMongo.entity.Company;
import com.example.employeeMongo.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/company")
public class CompanyController {

    @Autowired
    CompanyService companyService;

    @PostMapping("/add")
    public ResponseEntity<Boolean> addCompany(@RequestBody String companyName) {
        Boolean inserted = companyService.addCompany(companyName);
        if (inserted) {
            return new ResponseEntity<>(Boolean.TRUE, HttpStatus.CREATED);
        }
        return new ResponseEntity<>(Boolean.FALSE, HttpStatus.BAD_REQUEST);
    }

    @PostMapping()
    public Iterable<Company> getCompany() {
        return companyService.getAll();
    }
}
