package com.example.employeeMongo.service;

import com.example.employeeMongo.dto.EmployeeDto;
import com.example.employeeMongo.entity.Employee;

import java.util.List;

public interface EmployeeService {

    boolean addEmployee(EmployeeDto employeeDto);

    Iterable<Employee> getAll();

    Boolean deleteAll();

    Employee getEmployeeById(String employeeId);

    Employee editEmployee(EmployeeDto employeeDto, String employeeId);

    Boolean deleteById(String employeeId);

    Boolean employeeExists(String employeeId);

}
