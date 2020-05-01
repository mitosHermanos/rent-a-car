package com.rent_a_car.agentski_bekend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @RequestMapping
    public String testService () {
        return "'Ziv sam' - Agentski servis";
    }

}
