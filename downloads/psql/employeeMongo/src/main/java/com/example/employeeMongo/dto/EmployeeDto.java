package com.example.employeeMongo.dto;

import lombok.Data;

import java.util.Date;

@Data
public class EmployeeDto {
    public static final String COLLECTION_NAME = "employee";

    private String employeeId;
    private String firstName;
    private String lastName;
    private Date dateOfBirth;
    private Date dateofJoining;
    private boolean isActive;
    private String department;
}

