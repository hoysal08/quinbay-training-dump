package com.example.employeeMongo.service.impl;


import com.example.employeeMongo.dto.EmployeeDto;
import com.example.employeeMongo.entity.BankAccount;
import com.example.employeeMongo.entity.Company;
import com.example.employeeMongo.entity.Employee;
import com.example.employeeMongo.repository.EmployeeRepository;
import com.example.employeeMongo.service.BankService;
import com.example.employeeMongo.service.CompanyService;
import com.example.employeeMongo.service.EmployeeService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.*;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private BankService bankService;

    @Autowired
    private CompanyService companyService;

    @Override
    public boolean addEmployee(EmployeeDto employeeDto) {
        Employee employee = new Employee();
        BeanUtils.copyProperties(employeeDto, employee);
        employee.setDob(employeeDto.getDateOfBirth());
        employee.setDoj(employeeDto.getDateofJoining());
        employee.setEmployeeId(UUID.randomUUID().toString());
        Employee savedEmployee = employeeRepository.save(employee);
        return Objects.nonNull(savedEmployee);
    }

    @Override
    public Iterable<Employee> getAll() {
        return employeeRepository.findAll();
    }

    @Override
    public Boolean deleteAll() {
        employeeRepository.deleteAll();
        return Boolean.TRUE;
    }

    public Employee getEmployeeById(String employeeId) {
        Optional<Employee> employeeOptional = employeeRepository.findById(employeeId);
        if (employeeOptional.isPresent()) {
            return employeeOptional.get();
        }
        return null;
    }

    @Override
    public Employee editEmployee(EmployeeDto employeeDto, String employeeId) {
        Optional<Employee> employeeOptional = employeeRepository.findById(employeeId);
        if (employeeOptional.isPresent()) {
            Employee employee = employeeOptional.get();
            BeanUtils.copyProperties(employeeDto, employee);
            employee.setDob(employeeDto.getDateOfBirth());
            employee.setDoj(employeeDto.getDateofJoining());
            employee.setEmployeeId(employee.getEmployeeId());
            employeeRepository.save(employee);
        }
        return null;
    }


    @Override
    public Boolean deleteById(String employeeId) {
        Optional<Employee> employee = employeeRepository.findById(employeeId);
        if (employee.isPresent()) {
            employeeRepository.deleteById(employeeId);
            return Boolean.TRUE;
        }
        return Boolean.FALSE;
    }

    @Override
    public Boolean employeeExists(String employeeId) {
        return employeeRepository.existsById(employeeId);
    }

    @Transactional
    public Employee save(Employee employee, String companyId, String bankId) {
        Optional<BankAccount> bankAccount = bankService.findOne(bankId);
        Optional<Company> company = companyService.findOne(companyId);
        if (!company.isPresent() || !bankAccount.isPresent()) {
            return null;
        }
        employee.setBankAccount(bankAccount.get());
        employee.setCompany(company.get());
        Employee employee1 = employeeRepository.save(employee);
//        if (employee1 != null) {
//            throw new RuntimeException();
//        }
        return employee1;
    }

    @Override
    public List<Employee> getAllEmployeeJPA() {
        return employeeRepository.getAllEmployeeJPA();
    }

}

