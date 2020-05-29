package com.rent_a_car.agentski_bekend.service.interfaces;

import com.rent_a_car.agentski_bekend.model.UserRequest;

import java.util.List;

public interface UserRequestServiceInterface {
    public UserRequest findById(long id);
    public UserRequest findByUsername(String Username);

    public UserRequest save(UserRequest user);
    public List<UserRequest> findAll();
}
