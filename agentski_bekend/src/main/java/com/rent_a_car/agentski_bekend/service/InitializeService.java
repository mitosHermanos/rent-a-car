package com.rent_a_car.agentski_bekend.service;

import com.rent_a_car.agentski_bekend.model.User;
import com.rent_a_car.agentski_bekend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Component
public class InitializeService {

//    @Autowired
//    private UserRepository userRepository;
//
//    @PostConstruct
//    public void init(){
//        User u = new User();
//        u.setUsername("mika");
//        u.setPassword("antic");
//        userRepository.save(u);
//    }
}
