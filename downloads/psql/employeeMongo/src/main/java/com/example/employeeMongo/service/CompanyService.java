package com.example.employeeMongo.service;


import com.example.employeeMongo.entity.Company;

import java.util.Optional;


public interface CompanyService {

    boolean addCompany(String companyName);

    Iterable<Company> getAll();

    Optional<Company> findOne(String companyId);
}
