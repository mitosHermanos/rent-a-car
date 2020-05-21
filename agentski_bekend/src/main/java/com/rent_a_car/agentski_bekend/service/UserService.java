package com.rent_a_car.agentski_bekend.service;

import com.rent_a_car.agentski_bekend.model.User;
import com.rent_a_car.agentski_bekend.repository.UserRepository;
import com.rent_a_car.agentski_bekend.service.interfaces.UserServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService/* implements UserServiceInterface */{

    @Autowired
    private UserRepository userRepository;


    //@Override
    public User findById(Integer id) {
        return userRepository.findById(id).orElse(null);
    }

    //@Override
//    public User findByUsername(String username) {
//        return userRepository.findByUsername(username);
//    }

    //@Override
    public User save(User user) {
        return userRepository.save(user);
    }

    //@Override
    public List<User> findAll() {
        List<User> result = userRepository.findAll();
        return result;
    }
}
