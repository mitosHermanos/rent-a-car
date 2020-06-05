package com.rent_a_car.agentski_bekend.controller;
import com.rent_a_car.agentski_bekend.model.CarClass;
import com.rent_a_car.agentski_bekend.model.Pricing;
import com.rent_a_car.agentski_bekend.service.interfaces.PricingServicecInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AdvertisementController {


    @Autowired
    private PricingServicecInterface pricingService;


    @PostMapping(value="/addPricing")
    public ResponseEntity<?> addPricing(@RequestBody Pricing pricing){
        try{
            pricingService.save(pricing);
            return ResponseEntity.ok().build();
        }catch (Exception e){
        }
        return ResponseEntity.status(400).build();
    }
}