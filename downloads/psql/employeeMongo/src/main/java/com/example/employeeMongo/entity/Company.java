package com.example.employeeMongo.entity;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = Company.TABLE_NAME)
@Getter
@Setter
public class Company {
    public static final String TABLE_NAME = "COMPANY";

    @Id
    @Column(name = Employee.ID_COLUMN_NAME)
    @GeneratedValue(generator = Employee.SEQ_GEN_ALIAS)
    @GenericGenerator(name = Employee.SEQ_GEN_ALIAS, strategy = Employee.SEQ_GEN_STRATEGY)
    private String companyId;

    private String companyName;

    @OneToMany(mappedBy = "company", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<Employee> employees = new HashSet<>();
}
