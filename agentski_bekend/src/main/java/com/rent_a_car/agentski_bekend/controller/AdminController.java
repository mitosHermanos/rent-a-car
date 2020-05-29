package com.rent_a_car.agentski_bekend.controller;


import com.rent_a_car.agentski_bekend.model.CarClass;
import com.rent_a_car.agentski_bekend.model.Manufacturer;
import com.rent_a_car.agentski_bekend.model.TransmissionType;
import com.rent_a_car.agentski_bekend.service.interfaces.CarClassServiceInterface;
import com.rent_a_car.agentski_bekend.service.interfaces.ManufacturerServiceInterface;
import com.rent_a_car.agentski_bekend.service.interfaces.TransmissionTypeServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AdminController {

    @Autowired
    private CarClassServiceInterface carClassService;

    @Autowired
    private ManufacturerServiceInterface manufacturerService;

    @Autowired
    private TransmissionTypeServiceInterface transmissionTypeService;

    @PostMapping(value="/admin/addCarC")
    public ResponseEntity<?> addCarClass(@RequestBody String name){
        try{
            CarClass cc = new CarClass();
            cc.setName(name);
            cc.setDeleted(false);
            carClassService.save(cc);
            return ResponseEntity.ok().build();
        }catch (Exception e){

        }
        return ResponseEntity.status(400).build();
    }

    @PostMapping(value="/admin/addManufac")
    public ResponseEntity<?> addManufacturer(@RequestBody String name){
        try{
            Manufacturer m = new Manufacturer();
            m.setName(name);
            m.setDeleted(false);
            manufacturerService.save(m);
            return ResponseEntity.ok().build();
        }catch (Exception e){

        }
        return ResponseEntity.status(400).build();
    }

    @PostMapping(value="/admin/addTrans")
    public ResponseEntity<?> addTransmissionType(@RequestBody String name){
        try{
            TransmissionType tt = new TransmissionType();
            tt.setName(name);
            tt.setDeleted(false);
            transmissionTypeService.save(tt);
            return ResponseEntity.ok().build();
        }catch (Exception e){

        }
        return ResponseEntity.status(400).build();
    }


}
