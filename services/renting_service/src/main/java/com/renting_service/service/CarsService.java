package com.renting_service.service;


import com.renting_service.model.Cars;
import com.renting_service.repository.CarsRepository;
import com.renting_service.service.interfaces.CarsServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CarsService implements CarsServiceInterface {

    @Autowired
    private CarsRepository carsRepository;

    @Override
    public Cars findByName(String name) {
        return carsRepository.findByName(name);
    }

    @Override
    public Cars save(Cars carModels) {
        return carsRepository.save(carModels);
    }

    @Override
    public List<Cars> findAll() {
        return carsRepository.findAll();
    }

    public List<Cars> filterByCity (ArrayList<Cars> cars, String town) {
        ArrayList<Cars> retVal = new ArrayList<Cars> ();
        for (Cars car : cars) {
            if (car.getTown().equals(town)) {
                retVal.add(car);
            }
        }
        return retVal;
    }

    public Cars getCar (Integer id) {
        return carsRepository.getOne(id);
    }


}
