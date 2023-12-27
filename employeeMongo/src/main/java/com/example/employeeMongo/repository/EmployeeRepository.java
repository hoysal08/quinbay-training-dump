package com.example.employeeMongo.repository;

import com.example.employeeMongo.entity.Employee;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface EmployeeRepository extends CrudRepository<Employee, String> {


}
