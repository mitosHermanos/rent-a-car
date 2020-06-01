package com.rent_a_car.agentski_bekend.service;

import com.rent_a_car.agentski_bekend.model.CarModels;
import com.rent_a_car.agentski_bekend.model.FuelType;
import com.rent_a_car.agentski_bekend.repository.CarModelsRepository;
import com.rent_a_car.agentski_bekend.repository.FuelTypeRepository;
import com.rent_a_car.agentski_bekend.service.interfaces.FuelTypeServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FuelTypeService implements FuelTypeServiceInterface {

    @Autowired
    private FuelTypeRepository carModelsRepository;

    @Override
    public FuelType findByName(String name) {
        return carModelsRepository.findByName(name);
    }

    @Override
    public FuelType save(FuelType carModels) {
        return carModelsRepository.save(carModels);
    }

    @Override
    public List<FuelType> findAll() {
        return carModelsRepository.findAll();
    }
}
