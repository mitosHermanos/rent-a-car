package com.renting_service.repository;

import com.renting_service.model.Cars;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CarsRepository extends JpaRepository<Cars, Integer> {

    @Query(value="select c.* from cars_table c", nativeQuery = true)
    List<Cars> findAll ();

    Cars findByName(String name);


    Cars getOne(Integer id);

}
