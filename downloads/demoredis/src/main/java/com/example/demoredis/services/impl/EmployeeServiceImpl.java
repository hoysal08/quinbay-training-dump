package com.example.demoredis.services.impl;

import com.example.demoredis.entity.Employee;
import com.example.demoredis.feignclient.StringFeign;
import com.example.demoredis.repository.EmployeeRepository;
import com.example.demoredis.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by ppatchava on 11/28/19.
 */
@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    EmployeeRepository employeeRepository;


    @Autowired
    StringFeign stringFeign;

    @Override
    public List<Employee> findAll() {
        return employeeRepository.findAll();
    }

    @Override
    public Employee findOne(String employeeId) {
        return employeeRepository.findOne(employeeId);
    }

    @Override
    public Employee insertOrUpdate(Employee employee) {
        return employeeRepository.save(employee);
    }

    @Override
    public void delete(String employeeId) {
        employeeRepository.delete(employeeId);
    }

    @Override
    public void deleteAll() {
        employeeRepository.deleteAll();
    }

    @Override
    public boolean exists(String employeeId) {
        return employeeRepository.exists(employeeId);
    }

    @Override
    public Long count() {
        return employeeRepository.count();
    }


    @Override
    public String getString(){
        return stringFeign.checkFeign();
    }
}
