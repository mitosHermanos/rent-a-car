package com.rent_a_car.agentski_bekend.repository;

import com.rent_a_car.agentski_bekend.model.UserBlocked;
import com.rent_a_car.agentski_bekend.model.UserRequest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserBlockedRepository extends JpaRepository<UserBlocked, Integer> {
    UserBlocked findByEmail(String email);
}

