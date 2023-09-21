package spring.crudexamplewithjs.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import spring.crudexamplewithjs.model.employee;
import spring.crudexamplewithjs.repository.empRepository;

@RestController
@RequestMapping("/tab")
@CrossOrigin("*")
public class employeecontroller {


    @Autowired
private  empRepository empRepository;

//create operation

     @PostMapping()
     public ResponseEntity<employee> createemp(@RequestBody employee employee){
     
        employee employeecreate=empRepository.save(employee);

        return ResponseEntity.ok(employeecreate);
     }

//read opeartion

     @GetMapping()
     public  List<employee> getallemp(){
        return empRepository.findAll();
     }
    
//edit opeation

     @GetMapping("/{id}")
    public ResponseEntity<employee> editemp(@PathVariable Long id){
        Optional<employee> editemp=empRepository.findById(id);

        if(editemp.isPresent()){
           return  ResponseEntity.ok(editemp.get());
        }
        else{
            return ResponseEntity.notFound().build();
        }

    }
     
    //update mapping
    @PutMapping("/{id}")
    public ResponseEntity<employee> updateemp(@PathVariable long id,@RequestBody employee updateemployee){
       
        if(!empRepository.existsById(id)){
            return ResponseEntity.notFound().build();
        }
         updateemployee.setId(id);  
         employee employeeup=empRepository.save(updateemployee);
         
         return ResponseEntity.ok(employeeup);


    }

//delete mapping
    @DeleteMapping("/{id}")
    public ResponseEntity<employee> deleteemp(@PathVariable Long id){

        if(!empRepository.existsById(id)){
            return ResponseEntity.notFound().build();
        }

        empRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    
}
