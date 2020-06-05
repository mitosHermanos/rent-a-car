package com.rent_a_car.agentski_bekend.service;


import com.rent_a_car.agentski_bekend.model.UserBlocked;
import com.rent_a_car.agentski_bekend.model.UserRequest;
import com.rent_a_car.agentski_bekend.repository.UserBlockedRepository;
import com.rent_a_car.agentski_bekend.service.interfaces.UserBlockedServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserBlockedService implements UserBlockedServiceInterface {

    @Autowired
    private UserBlockedRepository userBlockedRepository;

    @Override
    public Optional<UserBlocked> findById(Integer id) {
        return userBlockedRepository.findById(id);
    }

    @Override
    public UserBlocked findByEmail(String email) {
        return userBlockedRepository.findByEmail(email);
    }

    @Override
    public UserBlocked save(UserBlocked user) {
        return userBlockedRepository.save(user);
    }

    @Override
    public List<UserBlocked> findAll() {
        return userBlockedRepository.findAll();
    }
}
