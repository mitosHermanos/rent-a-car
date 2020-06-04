import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import { AdminService } from 'src/app/services/admin.service';
import {CarClass} from '../../models/CarClass';
import {Manufacturer} from '../../models/Manufacturer';
import {TransmissionType} from '../../models/TransmissionType';
import {FuelType} from '../../models/FuelType';
import {CarModels} from '../../models/CarModels';


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  nameM:string;
  nameCC:string;
  nameTT:string;
  nameFT:string;
  nameMU:string;
  nameCCU:string;
  nameTTU:string;
  nameFTU:string;

  maanu:Manufacturer;
  trrans:TransmissionType;
  caarc:CarClass;
  nameCM:string;
  nameCMU:string;

  actMan:boolean;
  actCC:boolean;
  actTT:boolean;
  actFT:boolean;
  actCM:boolean;
  show1:boolean=false;
  show2:boolean=false;
  show3:boolean=false;
  show4:boolean=false;
  show5:boolean=false;
  show6:boolean=false;
  show7:boolean=false;
  show8:boolean=false;
  show9:boolean=false;
  show10:boolean=false;
  show11:boolean=false;
  show12:boolean=false;
  show13:boolean=false;
  show14:boolean=false;
  show15:boolean=false;

  manufacturer:Manufacturer[];
  transmissionType:TransmissionType[];
  carClass:CarClass[];
  fuelType:FuelType[];
  carModels:CarModels[];

  constructor(
    private adminService:AdminService

  ) { 
  }

  selectedCarClass(name:CarClass){
    this.caarc = name;
    console.log('carclass');
  }

  selectedTransmission(name:TransmissionType){
    this.trrans = name;
  }

  selectedManufacturer(name:Manufacturer){
    this.maanu = name;
  }

  addCM(){
    console.log(this.caarc.name);
    console.log(this.trrans.name);
    console.log(this.maanu.name);
    this.adminService.addCM(this.nameCM, this.caarc.name, this.trrans.name, this.maanu.name).subscribe((data:string)=>{
      console.log(data);
    });
    this.show1 = false;
    this.show2 = false;
    this.show3 = false;
    this.show4 = false;
    this.show5 = false;
    this.show6 = false;
    this.show7 = false;
    this.show8 = false;
    this.show9 = false;
    this.show10 = false;
    this.show11 = false;
    this.show12 = false;
    this.show13 = false;
    this.show14 = false;
    this.show15 = false;
  }
  
  ngOnInit(): void {
    this.adminService.getManufac().subscribe(data =>{
      this.manufacturer = data;
    });
    this.adminService.getTransmis().subscribe(data =>{
      this.transmissionType = data;
    });
    this.adminService.getCarC().subscribe(data =>{
      this.carClass = data;
    });
    this.adminService.getFuelT().subscribe(data =>{
      this.fuelType = data;
    });
    this.adminService.getCarModels().subscribe(data =>{
      this.carModels = data;
    });
  }

  home(){
    this.show1 = false;
    this.show2 = false;
    this.show3 = false;
    this.show4 = false;
    this.show5 = false;
    this.show6 = false;
    this.show7 = false;
    this.show8 = false;
    this.show9 = false;
    this.show10 = false;
    this.show11 = false;
    this.show12 = false;
    this.show13 = false;
    this.show14 = false;
    this.show15 = false;
  }

  newCarModel(){
    this.adminService.getManufac().subscribe(data =>{
      this.manufacturer = data;
    });
    this.adminService.getTransmis().subscribe(data =>{
      this.transmissionType = data;
    });
    this.adminService.getCarC().subscribe(data =>{
      this.carClass = data;
    });
    this.adminService.getFuelT().subscribe(data =>{
      this.fuelType = data;
    });
    this.show1 = false;
    this.show2 = false;
    this.show3 = false;
    this.show4 = false;
    this.show5 = false;
    this.show6 = false;
    this.show7 = false;
    this.show8 = false;
    this.show9 = false;
    this.show10 = false;
    this.show11 = false;
    this.show12 = false;
    this.show13 = !this.show13;
    this.show14 = false;
    this.show15 = false;
  }

  allCarModels(){
    this.adminService.getCarModels().subscribe(data =>{
      this.carModels = data;
    });
    this.show1 = false;
    this.show2 = false;
    this.show3 = false;
    this.show4 = false;
    this.show5 = false;
    this.show6 = false;
    this.show7 = false;
    this.show8 = false;
    this.show9 = false;
    this.show10 = false;
    this.show11 = false;
    this.show12 = false;
    this.show13 = false;
    this.show14 = !this.show14;
    this.show15 = false;
  }

  newFuelType(){
    this.show1 = false;
    this.show2 = false;
    this.show3 = false;
    this.show4 = false;
    this.show5 = false;
    this.show6 = false;
    this.show7 = false;
    this.show8 = false;
    this.show9 = false;
    this.show10 = !this.show10;
    this.show11 = false;
    this.show12 = false;
    this.show13 = false;
    this.show14 = false;
    this.show15 = false;
  }

  newManufac(){
    this.show1 = !this.show1;
    this.show2 = false;
    this.show3 = false;
    this.show4 = false;
    this.show5 = false;
    this.show6 = false;
    this.show7 = false;
    this.show8 = false;
    this.show9 = false;
    this.show10 = false;
    this.show11 = false;
    this.show12 = false;
    this.show13 = false;
    this.show14 = false;
    this.show15 = false;
  }

  newCarC(){
    this.show2 = !this.show2;
    this.show1 = false;
    this.show3 = false;
    this.show4 = false;
    this.show5 = false;
    this.show6 = false;
    this.show7 = false;
    this.show8 = false;
    this.show9 = false;
    this.show10 = false;
    this.show11 = false;
    this.show12 = false;
    this.show13 = false;
    this.show14 = false;
    this.show15 = false;
  }

  newTransmis(){
    this.show3 = !this.show3;
    this.show1 = false;
    this.show2 = false;
    this.show4 = false;
    this.show5 = false;
    this.show6 = false;
    this.show7 = false;
    this.show8 = false;
    this.show9 = false;
    this.show10 = false;
    this.show11 = false;
    this.show12 = false;
    this.show13 = false;
    this.show14 = false;
    this.show15 = false;
  }

  showManufac(){
    this.adminService.getManufac().subscribe(data =>{
      this.manufacturer = data;
    });
    this.show1 = false;
    this.show2 = false;
    this.show3 = false;
    this.show4 = !this.show4;
    this.show5 = false;
    this.show6 = false;
    this.show7 = false;
    this.show8 = false;
    this.show9 = false;
    this.show10 = false;
    this.show11 = false;
    this.show12 = false;
    this.show13 = false;
    this.show14 = false;
    this.show15 = false;
  }

  showCarC(){
    this.adminService.getCarC().subscribe(data =>{
      this.carClass = data;
    });
    this.show1 = false;
    this.show2 = false;
    this.show3 = false;
    this.show4 = false;
    this.show5 = !this.show5;
    this.show6 = false;
    this.show7 = false;
    this.show8 = false;
    this.show9 = false;
    this.show10 = false;
    this.show11 = false;
    this.show12 = false;
    this.show13 = false;
    this.show14 = false;
    this.show15 = false;
  }

  showTransmis(){
    this.adminService.getTransmis().subscribe(data =>{
      this.transmissionType = data;
    });
    this.show1 = false;
    this.show2 = false;
    this.show3 = false;
    this.show4 = false;
    this.show5 = false;
    this.show6 = !this.show6;
    this.show7 = false;
    this.show8 = false;
    this.show9 = false;
    this.show10 = false;
    this.show11 = false;
    this.show12 = false;
    this.show13 = false;
    this.show14 = false;
    this.show15 = false;
  }

  showFuelType(){
    this.adminService.getFuelT().subscribe(data =>{
      this.fuelType = data;
    });
    this.show1 = false;
    this.show2 = false;
    this.show3 = false;
    this.show4 = false;
    this.show5 = false;
    this.show6 = false;
    this.show7 = false;
    this.show8 = false;
    this.show9 = false;
    this.show10 = false;
    this.show11 = !this.show11;
    this.show12 = false;
    this.show13 = false;
    this.show14 = false;
    this.show15 = false;
  }

  addM(){
    console.log(this.nameM);
    this.adminService.addM(this.nameM).subscribe((data:string)=>{
      console.log(data);
    },
    error =>{
      alert('Manufacturer with this name already exists');
    })
    this.show1 = false;
    this.show2 = false;
    this.show3 = false;
    this.show4 = false;
    this.show5 = false;
    this.show6 = false;
    this.show7 = false;
    this.show8 = false;
    this.show9 = false;
    this.show10 = false;
    this.show11 = false;
    this.show12 = false;
    this.show13 = false;
    this.show14 = false;
    this.show15 = false;
  }

  addCC(){
    console.log(this.nameCC);
    this.adminService.addCC(this.nameCC).subscribe((data:string)=>{
      console.log(data);
    },
    error =>{
      alert('Car class with this name already exists');
    })
    this.show1 = false;
    this.show2 = false;
    this.show3 = false;
    this.show4 = false;
    this.show5 = false;
    this.show6 = false;
    this.show7 = false;
    this.show8 = false;
    this.show9 = false;
    this.show10 = false;
    this.show11 = false;
    this.show12 = false;
    this.show13 = false;
    this.show14 = false;
    this.show15 = false;
  }

  addTT(){
    console.log(this.nameTT);
    this.adminService.addTT(this.nameTT).subscribe((data:string)=>{
      console.log(data);
    },
    error =>{
      alert('Transmission type with this name already exists');
    })
    this.show1 = false;
    this.show2 = false;
    this.show3 = false;
    this.show4 = false;
    this.show5 = false;
    this.show6 = false;
    this.show7 = false;
    this.show8 = false;
    this.show9 = false;
    this.show10 = false;
    this.show11 = false;
    this.show12 = false;
    this.show13 = false;
    this.show14 = false;
    this.show15 = false;
  }

  addFT(){
    console.log(this.nameFT);
    this.adminService.addFT(this.nameFT).subscribe((data:string)=>{
      console.log(data);
    },
    error =>{
      alert('FuelType type with this name already exists');
    })
    this.show1 = false;
    this.show2 = false;
    this.show3 = false;
    this.show4 = false;
    this.show5 = false;
    this.show6 = false;
    this.show7 = false;
    this.show8 = false;
    this.show9 = false;
    this.show10 = false;
    this.show11 = false;
    this.show12 = false;
    this.show13 = false;
    this.show14 = false;
    this.show15 = false;
  }

  deleteManufacturer(name: string){
    this.adminService.deleteManufacturer(name).subscribe((data:string)=>{
      console.log(data);
    }),
    this.show1 = false;
    this.show2 = false;
    this.show3 = false;
    this.show4 = false;
    this.show5 = false;
    this.show6 = false;
    this.show7 = false;
    this.show8 = false;
    this.show9 = false;
    this.show10 = false;
    this.show11 = false;
    this.show12 = false;
    this.show13 = false;
    this.show14 = false;
    this.show15 = false;
  }

  updateManufacturer(name:string){
    this.nameM = name;
    this.nameMU = name;
    this.show1 = false;
    this.show2 = false;
    this.show3 = false;
    this.show4 = false;
    this.show5 = false;
    this.show6 = false;
    this.show7 = !this.show7;
    this.show8 = false;
    this.show9 = false;
    this.show10 = false;
    this.show11 = false;
    this.show12 = false;
    this.show13 = false;
    this.show14 = false;
    this.show15 = false;
  }

  deleteCarClass(name:string){
    this.adminService.deleteCarClass(name).subscribe((data:string)=>{
      console.log(data);
    }),
    this.show1 = false;
    this.show2 = false;
    this.show3 = false;
    this.show4 = false;
    this.show5 = false;
    this.show6 = false;
    this.show7 = false;
    this.show8 = false;
    this.show9 = false;
    this.show10 = false;
    this.show11 = false;
    this.show12 = false;
    this.show13 = false;
    this.show14 = false;
    this.show15 = false;
  }

  updateCarClass(name:string){
    this.nameCC = name;
    this.nameCCU = name;
    this.show1 = false;
    this.show2 = false;
    this.show3 = false;
    this.show4 = false;
    this.show5 = false;
    this.show6 = false;
    this.show7 = false;
    this.show8 = !this.show8;
    this.show9 = false;
    this.show10 = false;
    this.show11 = false;
    this.show12 = false;
    this.show13 = false;
    this.show14 = false;
    this.show15 = false;
  }

  deleteTransmissionType(name:string){
    this.adminService.deleteTransmissionType(name).subscribe((data:string)=>{
      console.log(data);
    }),
    this.show1 = false;
    this.show2 = false;
    this.show3 = false;
    this.show4 = false;
    this.show5 = false;
    this.show6 = false;
    this.show7 = false;
    this.show8 = false;
    this.show9 = false;
    this.show10 = false;
    this.show11 = false;
    this.show12 = false;
    this.show13 = false;
    this.show14 = false;
    this.show15 = false;
  }

  updateTransmissionType(name:string){
    this.nameTT = name;
    this.nameTTU = name;
    this.show1 = false;
    this.show2 = false;
    this.show3 = false;
    this.show4 = false;
    this.show5 = false;
    this.show6 = false;
    this.show7 = false;
    this.show8 = false;
    this.show9 = !this.show9;
    this.show10 = false;
    this.show11 = false;
    this.show12 = false;
    this.show13 = false;
    this.show14 = false;
    this.show15 = false;
  }

  deleteFuelType(name:string){
    this.adminService.deleteFuelType(name).subscribe((data:string)=>{
      console.log(data);
    }),
    this.show1 = false;
    this.show2 = false;
    this.show3 = false;
    this.show4 = false;
    this.show5 = false;
    this.show6 = false;
    this.show7 = false;
    this.show8 = false;
    this.show9 = false;
    this.show10 = false;
    this.show11 = false;
    this.show12 = false;
    this.show13 = false;
    this.show14 = false;
    this.show15 = false;
  }

  updateFuelType(name:string){
    this.nameFT = name;
    this.nameFTU = name;
    this.show1 = false;
    this.show2 = false;
    this.show3 = false;
    this.show4 = false;
    this.show5 = false;
    this.show6 = false;
    this.show7 = false;
    this.show8 = false;
    this.show9 = false;
    this.show10 = false;
    this.show11 = false;
    this.show12 = !this.show12;
    this.show13 = false;
    this.show14 = false;
    this.show15 = false;
  }

  updateM(){
    this.adminService.updateM(this.nameMU, this.nameM, this.actMan).subscribe((data:string)=>{
      console.log(data);
    })
    this.show1 = false;
    this.show2 = false;
    this.show3 = false;
    this.show4 = false;
    this.show5 = false;
    this.show6 = false;
    this.show7 = false;
    this.show8 = false;
    this.show9 = false;
    this.show10 = false;
    this.show11 = false;
    this.show12 = false;
    this.show13 = false;
    this.show14 = false;
    this.show15 = false;
  }

  updateCC(){
    this.adminService.updateCC(this.nameCCU, this.nameCC, this.actCC).subscribe((data:string)=>{
      console.log(data);
    })
    this.show1 = false;
    this.show2 = false;
    this.show3 = false;
    this.show4 = false;
    this.show5 = false;
    this.show6 = false;
    this.show7 = false;
    this.show8 = false;
    this.show9 = false;
    this.show10 = false;
    this.show11 = false;
    this.show12 = false;
    this.show13 = false;
    this.show14 = false;
    this.show15 = false;
  }

  updateTT(){
    this.adminService.updateTT(this.nameTTU, this.nameTT, this.actTT).subscribe((data:string)=>{
      console.log(data);
    })
    this.show1 = false;
    this.show2 = false;
    this.show3 = false;
    this.show4 = false;
    this.show5 = false;
    this.show6 = false;
    this.show7 = false;
    this.show8 = false;
    this.show9 = false;
    this.show10 = false;
    this.show11 = false;
    this.show12 = false;
    this.show13 = false;
    this.show14 = false;
    this.show15 = false;
  }

  updateFT(){
    this.adminService.updateFT(this.nameFTU, this.nameFT, this.actFT).subscribe((data:string)=>{
      console.log(data);
    })
    this.show1 = false;
    this.show2 = false;
    this.show3 = false;
    this.show4 = false;
    this.show5 = false;
    this.show6 = false;
    this.show7 = false;
    this.show8 = false;
    this.show9 = false;
    this.show10 = false;
    this.show11 = false;
    this.show12 = false;
    this.show13 = false;
    this.show14 = false;
    this.show15 = false;
  }

  updateCM(){
    this.adminService.updateCarModel(this.nameCMU, this.nameCM, this.actCM).subscribe((data:string)=>{
      console.log(data);
    })
    this.show1 = false;
    this.show2 = false;
    this.show3 = false;
    this.show4 = false;
    this.show5 = false;
    this.show6 = false;
    this.show7 = false;
    this.show8 = false;
    this.show9 = false;
    this.show10 = false;
    this.show11 = false;
    this.show12 = false;
    this.show13 = false;
    this.show14 = false;
    this.show15 = false;
  }

  deleteCarModel(name:string){
    this.adminService.deleteCarModel(name).subscribe((data:string)=>{
      console.log(data);
    }),
    this.show1 = false;
    this.show2 = false;
    this.show3 = false;
    this.show4 = false;
    this.show5 = false;
    this.show6 = false;
    this.show7 = false;
    this.show8 = false;
    this.show9 = false;
    this.show10 = false;
    this.show11 = false;
    this.show12 = false;
    this.show13 = false;
    this.show14 = false;
    this.show15 = false;
  }

  updateCarModel(name:string){
    this.nameCM = name;
    this.nameCMU = name;
    this.show1 = false;
    this.show2 = false;
    this.show3 = false;
    this.show4 = false;
    this.show5 = false;
    this.show6 = false;
    this.show7 = false;
    this.show8 = false;
    this.show9 = false;
    this.show10 = false;
    this.show11 = false;
    this.show12 = false;
    this.show13 = false;
    this.show14 = false;
    this.show15 = !this.show15;
  }
}
