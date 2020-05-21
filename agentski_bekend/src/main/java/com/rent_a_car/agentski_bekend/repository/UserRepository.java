package com.rent_a_car.agentski_bekend.repository;

import com.rent_a_car.agentski_bekend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


public interface UserRepository extends JpaRepository<User, Integer> {
//    @Query
//    User findById(long id);
//    @Query
//    User findByUsername(String username);
}
