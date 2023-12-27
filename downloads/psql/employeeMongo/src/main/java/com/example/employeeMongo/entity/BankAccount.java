package com.example.employeeMongo.entity;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;


@Entity
@Table(name = BankAccount.TABLE_NAME)
@Getter
@Setter
public class BankAccount {
    public static final String TABLE_NAME = "BANK_ACCOUNT";

    @Id
    @Column(name = Employee.ID_COLUMN_NAME)
    @GeneratedValue(generator = Employee.SEQ_GEN_ALIAS)
    @GenericGenerator(name = Employee.SEQ_GEN_ALIAS, strategy = Employee.SEQ_GEN_STRATEGY)
    private String id;

    private String bankName;

    private String accountNumber;

    @OneToOne(mappedBy = "bankAccount", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Employee employee;
}
