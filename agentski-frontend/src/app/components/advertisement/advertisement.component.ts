import { Component, OnInit } from '@angular/core';
import { CarModel } from 'src/app/models/CarModel';
import { FuelType } from 'src/app/models/FuelType';
import { AdvertisementService } from 'src/app/services/advertisement.service';
import { AdminService } from 'src/app/services/admin.service';
import { Pricing } from 'src/app/models/Pricing';
import { first } from 'rxjs/operators';
import { FormGroup, FormBuilder } from '@angular/forms';
import * as moment from 'moment';
// import {ModalDismissReasons, NgbDatepickerConfig, NgbModal} from '@ng-bootstrap/ng-bootstrap';
// import {faCalendar, faWindowClose, faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.css']
})
export class AdvertisementComponent implements OnInit {
  model: CarModel[];
  fuelType: FuelType[];
  //fuelTyp: string;
  name: string;
  milage: number;
  distancelimit: number;
  regularprice: number;
  overuseprice: number;
  collisiondamage: number;
  discountdays: number;
  discountperc:  number;
  pricing: Pricing;
  ft:FuelType;
  selectedStartDate:Date;
  selectedEndDate: Date;
  minDate = moment(new Date()).format('YYYY-MM-DD');  //current
  constructor(
    private adminService: AdminService, 
    private advertisementService: AdvertisementService,
  ) {
  }
  selectedFuelType(name:FuelType){
    this.ft = name;
    console.log(this.fuelType);
  }
  selectStartDate() {
    console.log(this.selectedStartDate);
  }
  selectEndDate() {
    console.log(this.selectedEndDate);
  }
  ngOnInit(): void {
    // this.adminService.getCarModel().subscribe(data =>{
    //   this.model = data;
    // });
    this.adminService.getFuelT().subscribe(data =>{
      this.fuelType = data;
    });
  }
  onSubmit() {
    this.pricing={distanceLimit: this.distancelimit, regularPrice: this.regularprice, overusePrice: this.overuseprice, collisionDamage: this.collisiondamage, discountDays: this.discountdays, discountPercent: this.discountperc, name: this.name, owner:null, company:null, deleted:false};
    console.log(this.ft);
    console.log(this.pricing);
    this.advertisementService.addPricing(this.pricing).pipe(first())
    .subscribe(
        data => {
            console.log('Making advertisement successful');
        })
  }
}
