package com.example.employeeMongo.dto;

import com.example.employeeMongo.entity.BankAccount;
import com.example.employeeMongo.entity.Company;
import lombok.Data;

@Data
public class EmployeeResponseDTO {
    private String employeeId;
    private String firstName;
    private String lastName;
    private long dateOfBirth;
    private long dateofJoining;
    private String department;

    private Company companyDto;
    private BankAccount bankAccountDto;
}