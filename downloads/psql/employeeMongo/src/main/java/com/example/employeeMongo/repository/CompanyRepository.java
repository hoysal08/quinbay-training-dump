package com.example.employeeMongo.repository;

import com.example.employeeMongo.entity.Company;
import org.springframework.data.repository.CrudRepository;

public interface CompanyRepository extends CrudRepository<Company, String> {
}
