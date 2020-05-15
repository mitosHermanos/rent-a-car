package com.rent_a_car.agentski_bekend.controller;

import com.rent_a_car.agentski_bekend.dto.UserDTO;
import com.rent_a_car.agentski_bekend.model.User;
import com.rent_a_car.agentski_bekend.service.interfaces.UserServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
//@CrossOrigin(origins = "http://localhost:4200/api")
@RequestMapping(value="/api", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
public class TestController {

    @Autowired
    private UserServiceInterface userService;

    @RequestMapping
    public String testService () {
        return "'Ziv sam' - Agentski servis";
    }

    @RequestMapping(path = "/login", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity<Void> register(@RequestBody UserDTO dto) {
        User user = new User();
        user.setPassword(dto.getPassword());
        user.setUsername(dto.getUsername());
        userService.save(user);
//        System.out.println(dto.getUsername()+" + " + dto.getPassword());
//        if(dto.getUsername().equals("pera") && dto.getPassword().equals("peric")){
//            return new ResponseEntity<>(HttpStatus.OK);
//        }
//
//        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);

        return new ResponseEntity<>(HttpStatus.OK);
    }

}
