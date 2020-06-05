package com.renting_service.service.interfaces;

import com.renting_service.model.Cars;

import java.util.List;

public interface CarsServiceInterface {

    Cars findByName (String name);
    Cars save(Cars car);
    List<Cars> findAll();

}
