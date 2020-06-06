package com.rent_a_car.agentski_bekend.service.interfaces;

import com.rent_a_car.agentski_bekend.model.UserBlocked;
import com.rent_a_car.agentski_bekend.model.UserRequest;

import java.util.List;
import java.util.Optional;

public interface UserBlockedServiceInterface {

    public Optional<UserBlocked> findById(Integer id);
    public UserBlocked findByEmail(String email);

    public UserBlocked save(UserBlocked user);
    public List<UserBlocked> findAll();
}
