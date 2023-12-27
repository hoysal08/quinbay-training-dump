package com.example.employeeMongo.service.impl;

import com.example.employeeMongo.entity.BankAccount;
import com.example.employeeMongo.repository.BankRepository;
import com.example.employeeMongo.service.BankService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class BankServiceImpl implements BankService {

    @Autowired
    BankRepository bankRepository;

    @Override
    public boolean addBank(String bankAccountName) {
        BankAccount bk = new BankAccount();
        bk.setBankName(bankAccountName);
        bankRepository.save(bk);
        return true;
    }

    @Override
    public Iterable<BankAccount> getAll() {
        return bankRepository.findAll();
    }

    @Override
    public Optional<BankAccount> findOne(String companyId) {
        return bankRepository.findById(companyId);
    }

}
