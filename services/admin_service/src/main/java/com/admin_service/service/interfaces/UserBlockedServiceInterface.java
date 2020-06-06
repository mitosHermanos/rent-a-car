package com.admin_service.service.interfaces;

import com.admin_service.model.UserBlocked;

import java.util.List;
import java.util.Optional;

public interface UserBlockedServiceInterface {

    public Optional<UserBlocked> findById(Integer id);
    public UserBlocked findByEmail(String email);

    public UserBlocked save(UserBlocked user);
    public List<UserBlocked> findAll();

}
