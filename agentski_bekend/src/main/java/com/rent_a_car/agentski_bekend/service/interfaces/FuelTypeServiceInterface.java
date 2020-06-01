package com.rent_a_car.agentski_bekend.service.interfaces;

import com.rent_a_car.agentski_bekend.model.CarClass;
import com.rent_a_car.agentski_bekend.model.FuelType;

import java.util.List;

public interface FuelTypeServiceInterface {
    FuelType findByName(String name);
    FuelType save(FuelType fuelType);
    List<FuelType> findAll();
}
