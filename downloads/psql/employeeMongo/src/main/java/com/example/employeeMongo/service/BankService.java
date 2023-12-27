package com.example.employeeMongo.service;

import com.example.employeeMongo.entity.BankAccount;
import com.example.employeeMongo.entity.Company;

import java.util.Optional;

public interface BankService {
    boolean addBank(String bankAccountName );

    Iterable<BankAccount> getAll();

    Optional<BankAccount> findOne(String companyId);
}
