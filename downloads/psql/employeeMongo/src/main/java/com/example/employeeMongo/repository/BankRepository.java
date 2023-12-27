package com.example.employeeMongo.repository;

import com.example.employeeMongo.entity.BankAccount;
import org.springframework.data.repository.CrudRepository;

public interface BankRepository extends CrudRepository<BankAccount, String> {
}
