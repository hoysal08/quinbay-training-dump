package com.example.employeeMongo.dto;

import lombok.Data;

@Data
public class EmployeeResponseDTO {
    private String employeeId;
    private String firstName;
    private String lastName;
    private long dateOfBirth;
    private long dateofJoining;
    private String department;
}