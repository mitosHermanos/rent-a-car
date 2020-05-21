package com.rent_a_car.agentski_bekend.service.interfaces;

import com.rent_a_car.agentski_bekend.model.User;

import java.util.List;


public interface UserServiceInterface {

    public User findById(long id);
    public User findByUsername(String Username);

    public User save(User user);
    public List<User> findAll();
}
