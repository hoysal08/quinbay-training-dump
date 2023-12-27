package com.example.employeeMongo.repository;

import com.example.employeeMongo.entity.Employee;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface EmployeeRepository extends CrudRepository<Employee, String> {

    @Query("SELECT e FROM Employee e")
    List<Employee> getAllEmployeeJPA();


}
