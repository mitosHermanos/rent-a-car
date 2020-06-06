package com.admin_service.repository;

import com.admin_service.model.UserBlocked;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserBlockedRepository  extends JpaRepository<UserBlocked, Integer> {

    UserBlocked findByEmail(String email);

}
