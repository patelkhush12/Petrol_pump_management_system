import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { ApiService } from '../../common/api.service';
import { Oilpurchasemodels } from './oilpurchasemodel'

@Component({
  selector: 'app-oilpurchase',
  templateUrl: './oilpurchase.component.html',
  styleUrls: ['./oilpurchase.component.scss']
})
export class OilpurchaseComponent implements OnInit {
  oilpurchasefrom!: FormGroup
  visible1 = false;
  Add !: boolean;
  showAdd !: boolean;
  showupdate !: boolean;
  submitted = false
  oilpurchaseOnj: Oilpurchasemodels = new Oilpurchasemodels();
  oilpuerchaseAll: any
  data: any
  UserID: any;
  IsActive = 1;
  alldata: any

  constructor(private formBuildir: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.oilpurchasefrom = this.formBuildir.group({
      OilName: [''],
      Quantity: ['', Validators.required],
      Amount: ['', Validators.required],
      PurchaseDate: ['', Validators.required],


    })
    this.getAlloilpurchase();
    this.dropdrowndata();

  }
  dropdrowndata() {
    this.UserID = localStorage.getItem('UserID')

    this.api.getoilmaster(this.UserID, this.IsActive).subscribe(Response => {

      this.alldata = Response
      console.log(Response);
      // this.selectedPump=Response.PumpID

      // this.pump =(this.fuelmasterform.value.PetrolPumpName).PumpID
      // this.selectedPump=Response.PumpID
      // alert("fuelmaster Record Added Successfully !")
      // this.submitted = false;
      // this.fuelmasterform.reset();
      // this.getAllfuelmaster();

    })

  }
  oilpurchase() {
    this.Add = true;
    this.showAdd = true;
    this.showupdate = false;
    this.visible1 = true

  }
  add() {
    this.submitted = true
    if (this.oilpurchasefrom.valid) {
      // this.oilpurchaseOnj.OilName = this.oilpurchase
      // this.fuelmasterOnj.PetrolPumpName = this.PumpID
      this.oilpurchaseOnj.OilName = this.oilpurchaseOnj.OilID
      // this.pumps=this.fuelmasterOnj.PumpID
      this.oilpurchaseOnj.OilName = Array(this.oilpurchasefrom.value.OilName)

      this.oilpurchaseOnj.Quantity = this.oilpurchasefrom.value.Quantity;
      this.oilpurchaseOnj.Amount = this.oilpurchasefrom.value.Amount;
      this.oilpurchaseOnj.PurchaseDate = this.oilpurchasefrom.value.PurchaseDate;
      this.oilpurchaseOnj.CreatedBy = localStorage.getItem('UserID');
      // this.oilpurchaseOnj.OilName = this.oilpurchasefrom.value.OilName
      this.oilpurchaseOnj.UserID = localStorage.getItem('UserID');
      // this.oilpurchasefrom.value.PetrolPumpName=this.alldata

      this.api.addpurachase(this.oilpurchaseOnj).subscribe(Response => {
        console.log(Response);

        alert("oilpurchasemaster Record Added Successfully !")
        this.submitted = false;
        this.oilpurchasefrom.reset();
        this.getAlloilpurchase();

      },
        err => {
          alert("something went Wrong !");
        })

    }
  }

  close() {
    this.visible1 = false
  }

  getAlloilpurchase() {
    console.log(localStorage.getItem('UserID'));
    this.UserID = localStorage.getItem("UserID");
    // this.oilpurchasefrom.value.PetrolPumpName=this.alldata

    this.api.getoilpurchase(this.UserID).subscribe(Response => {
      console.log(localStorage.getItem('UserID'));

      this.oilpuerchaseAll = Response;
      localStorage.getItem('UserID');


      console.log(Response);

    })

  }
  edit(data: any) {
    this.showAdd = false;
    this.showupdate = true;
    this.visible1 = true;
    console.log(data.EmpID)
    this.oilpurchaseOnj.OilPurchaseID = data.OilPurchaseID;

    this.oilpurchasefrom.controls['OilName'].setValue(data.OilName);
    this.oilpurchasefrom.controls['Quantity'].setValue(data.Quantity);
    this.oilpurchasefrom.controls['PurchaseDate'].setValue(data.PurchaseDate);
    this.oilpurchasefrom.controls['Amount'].setValue(data.Amount);

  }
  // close(){
  //   this.visible1=false;
  // }
  // update(){

  // }
  update() {
    if (this.oilpurchasefrom.valid) {
      // console.log(this.fuelmasterOnj.FuelID);
      // this.fuelmasterOnj.PetrolPumpName = this.pump
      // // this.fuelmasterOnj.PetrolPumpName = this.PumpID
      // this.fuelmasterOnj.PetrolPumpName = this.fuelmasterOnj.PumpID

      this.oilpurchaseOnj.OilName = Array(this.oilpurchasefrom.value.OilName)
      this.oilpurchaseOnj.Quantity = this.oilpurchasefrom.value.Quantity;
      this.oilpurchaseOnj.Amount = this.oilpurchasefrom.value.Amount;
      this.oilpurchaseOnj.PurchaseDate = this.oilpurchasefrom.value.PurchaseDate;
      this.oilpurchaseOnj.UpdatedBy = Number(localStorage.getItem('UserID'))
      this.UserID = localStorage.getItem("UserID");
      // this.UserID = this.fuelmasterOnj.FuelID;
      this.UserID = this.oilpurchaseOnj.OilPurchaseID;

      console.log(this.oilpurchaseOnj)
      this.api.updateoilpurchase(this.oilpurchaseOnj, this.oilpurchaseOnj.OilPurchaseID).subscribe(Response => {
        this.UserID = this.oilpurchaseOnj.OilPurchaseID;

        alert("record update succussfull !!");
        this.oilpurchasefrom.reset();
        this.getAlloilpurchase();
      },
        err => {
          alert("something went Wrong !")
        })


    }
  }


}
