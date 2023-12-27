package com.example.employeeMongo.service.impl;


import com.example.employeeMongo.entity.Company;
import com.example.employeeMongo.repository.CompanyRepository;
import com.example.employeeMongo.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CompanyServiceImpl implements CompanyService {

    @Autowired
    CompanyRepository companyRepository;

    @Override
    public boolean addCompany(String  companyName) {
        Company company = new Company();
        company.setCompanyName(companyName);
        companyRepository.save(company);
        return true;
    }

    @Override
    public Iterable<Company> getAll() {
        return companyRepository.findAll();
    }

    @Override
    public Optional<Company> findOne(String companyId) {
        return companyRepository.findById(companyId);

    }
}
