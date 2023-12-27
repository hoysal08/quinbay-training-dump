package com.example.employeeMongo.controller;


import com.example.employeeMongo.dto.EmployeeDto;
import com.example.employeeMongo.entity.Employee;
import com.example.employeeMongo.service.EmployeeService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/employee")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;


    @PostMapping
    public ResponseEntity<Boolean> addEmployee(@RequestBody EmployeeDto employeeDto) {
        Boolean inserted = employeeService.addEmployee(employeeDto);
        if (inserted) {
            return new ResponseEntity<>(Boolean.TRUE, HttpStatus.CREATED);
        }
        return new ResponseEntity<>(Boolean.FALSE, HttpStatus.BAD_REQUEST);

    }

    @GetMapping
    public List<EmployeeResponseDTO> getAllEmployees() {
        Iterable<Employee> data = employeeService.getAll();
        List<EmployeeResponseDTO> responseDtos = new ArrayList<>();
        for (Employee employee : data) {
            EmployeeResponseDTO employeeDTO = new EmployeeResponseDTO();
            BeanUtils.copyProperties(employee, employeeDTO);
            employeeDTO.setDateOfBirth(employee.getDob().getTime());
            employeeDTO.setDateofJoining(employee.getDoj().getTime());
            responseDtos.add(employeeDTO);
        }
        return responseDtos;
    }

    @DeleteMapping
    public Boolean deleteAll() {
        employeeService.deleteAll();
        return Boolean.TRUE;
    }

    @GetMapping("/id/{employeeId}")
    public EmployeeResponseDTO employeeGetById(@PathVariable String employeeId) {
        Employee employee = employeeService.getEmployeeById(employeeId);
        EmployeeResponseDTO employeeDTO = new EmployeeResponseDTO();
        BeanUtils.copyProperties(employee, employeeDTO);
        employeeDTO.setDateOfBirth(employee.getDob().getTime());
        employeeDTO.setDateofJoining(employee.getDoj().getTime());
        return employeeDTO;
    }

    @PutMapping()
    public Employee editEmployee(@RequestBody EmployeeDto employeeDto, @RequestParam("employeeId") String employeeId) {
        Employee employee = employeeService.editEmployee(employeeDto, employeeId);
        return employee;
    }

    @DeleteMapping("/id/{employeeId}")
    public Boolean deleteEmployeeById(@PathVariable String employeeId) {
        Boolean deleted = employeeService.deleteById(employeeId);
        return deleted;
    }

    @GetMapping("/exists/{employeeId}")
    public Boolean employeeExists(@PathVariable String employeeId) {
        return employeeService.employeeExists(employeeId);
    }


}


