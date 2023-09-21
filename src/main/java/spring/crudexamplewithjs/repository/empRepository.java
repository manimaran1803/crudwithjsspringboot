package spring.crudexamplewithjs.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import spring.crudexamplewithjs.model.employee;

public interface empRepository extends JpaRepository<employee,Long>{
    
}
