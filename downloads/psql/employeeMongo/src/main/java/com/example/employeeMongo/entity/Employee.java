package com.example.employeeMongo.entity;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;


import javax.persistence.*;
import java.util.Date;
import java.util.Set;


@Entity
@Table(name = Employee.TABLE_NAME)
@Getter
@Setter
public class Employee {
    public static final String TABLE_NAME = "employee";
    public static final String ID_COLUMN_NAME = "ID";
    public static final String FIRST_NAME_COLUMN = "FIRST_NAME";
    public static final String SEQ_GEN_ALIAS = "seq_gen_alias";
    public static final String SEQ_GEN_STRATEGY = "uuid2";

    @Id
    @Column(name = Employee.ID_COLUMN_NAME)
    @GeneratedValue(generator = Employee.SEQ_GEN_ALIAS)
    @GenericGenerator(name = Employee.SEQ_GEN_ALIAS, strategy = Employee.SEQ_GEN_STRATEGY)
    private String employeeId;

    @Column(name = Employee.FIRST_NAME_COLUMN)
    private String firstName;

    private String lastName;
    private Date dob;
    private Date doj;
    private boolean isActive;
    private String department;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "companyId", nullable = false)
    private Company company;


    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "bankId", nullable = false)
    private BankAccount bankAccount;

    @ManyToMany(mappedBy = "employees")
    private Set<CompanyLocation> companyLocations;
}
