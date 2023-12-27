package com.example.employeeMongo.entity;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;


import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@Table(name = CompanyLocation.TABLE_NAME)
public class CompanyLocation {
    public static final String TABLE_NAME = "location";

    @Id
    @GeneratedValue(generator = Employee.SEQ_GEN_ALIAS)
    @GenericGenerator(name = Employee.SEQ_GEN_ALIAS, strategy = Employee.SEQ_GEN_STRATEGY)
    private String locationId;

    private String city;

    @ManyToMany
    @JoinTable(
            name = "emp_loc",
            joinColumns = @JoinColumn(name = "lid", referencedColumnName = "locationId"),
            inverseJoinColumns = @JoinColumn(name = "eid", referencedColumnName = "id"))
    List<Employee> employees;
}
