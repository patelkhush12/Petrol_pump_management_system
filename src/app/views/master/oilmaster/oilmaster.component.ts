import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { ApiService } from '../../common/api.service';
import { Oilmastermodels } from './oilmastermodel'

@Component({
  selector: 'app-oilmaster',
  templateUrl: './oilmaster.component.html',
  styleUrls: ['./oilmaster.component.scss']
})
export class OilmasterComponent implements OnInit{
  credittypeform!: FormGroup
  submitted = false
  customStylesValidated: boolean = false
  Add !: boolean;
  showAdd !: boolean;
  showupdate !: boolean;
  oilmasterOnj: Oilmastermodels = new Oilmastermodels();
  visible1=false
  visible2=false
  oilmasterAll:any;
  UserID:any;
  filterdata:any;
  filterresourcestrue=1;
  filterresourcesfalse=0;
  IsActive=1;
  visible3=false
  OilName: string | null;
  constructor(private formBuildir: FormBuilder,private api: ApiService) { 
    this.OilName = localStorage.getItem('OilID');

  }
  ngOnInit() {
    this.credittypeform = this.formBuildir.group({
      OilName: new FormControl(null, Validators.required),
      PurchasePrice: new FormControl(null, Validators.required),
      SalePrice: new FormControl(null, Validators.required),
    })
    this.getAlloilmaster(this.IsActive);
    this.filterdata = 1
  }
  oilmaster() {
    // this.submitted = true
    // this.credittypeform.reset();
    this.Add = true;
    this.showAdd=true;
    this.showupdate=false;
    this.visible1=true
  }
  add() {
    this.submitted = true
    if (this.credittypeform.valid) {
      this.oilmasterOnj.OilName = this.credittypeform.value.OilName;
      this.oilmasterOnj.PurchasePrice = this.credittypeform.value.PurchasePrice;
      this.oilmasterOnj.SalePrice = this.credittypeform.value.SalePrice;
      this.oilmasterOnj.CreatedBy = localStorage.getItem('UserID');

      this.oilmasterOnj.UserID = localStorage.getItem('UserID');
      this.api.addOil(this.oilmasterOnj).subscribe(Response => {
        console.log(Response);

        alert("oilmaster Record Added Successfully !")
        this.submitted = false;
        this.credittypeform.reset();
        this.getAlloilmaster(this.IsActive);

      },
        err => {
          alert("something went Wrong !");
        })

    }
  }
  getAlloilmaster(active:any){
    console.log(localStorage.getItem('UserID'));
    this.UserID = localStorage.getItem("UserID")
    this.filterresourcestrue=1;
    this.IsActive = active;
  
    this.api.getoilmaster(this.UserID,this.IsActive).subscribe(Response => {
      console.log(localStorage.getItem('UserID'));

      this.oilmasterAll = Response;
      localStorage.getItem('UserID');


      console.log(Response);
      
    })

  }
  delete(data:any) {
    this.visible2=true;
    this.oilmasterOnj.OilID = data.OilID

  
  }
  restore(data:any){
    this.visible3=true;
    this.oilmasterOnj.OilID=data.OilID

   
  }


  edit(data:any){
    this.showAdd=false;
    this.showupdate=true;
    this.visible1=true;
    console.log(data.OilID)
    this.oilmasterOnj.OilID = data.OilID;
    this.credittypeform.controls['OilName'].setValue(data.OilName);
    this.credittypeform.controls['PurchasePrice'].setValue(data.PurchasePrice);
    this.credittypeform.controls['SalePrice'].setValue(data.SalePrice);

  }

  update(){
    this.oilmasterOnj.OilName = this.credittypeform.value.OilName;
    this.oilmasterOnj.PurchasePrice = this.credittypeform.value.PurchasePrice;
    this.oilmasterOnj.SalePrice = this.credittypeform.value.SalePrice;
    this.oilmasterOnj.UpdatedBy = Number(localStorage.getItem('UserID'))
    this.UserID = localStorage.getItem("UserID");
    this.UserID = this.oilmasterOnj.OilID;
console.log(this.oilmasterOnj)
this.api.updateoil(this.oilmasterOnj, this.oilmasterOnj.OilID).subscribe(Response => {
  this.UserID = this.oilmasterOnj.OilID;

  alert("record update succussfull !!");
  this.credittypeform.reset();
  this.getAlloilmaster(this.IsActive);
},
  err => {
    alert("something went Wrong !")
  })

  }
close(){
  this.visible1=false
}
datafilter(event: any) {
  console.log("eventFilter", event);

   console.log(event.target.value)
  this.IsActive = event.target.value;
  this.IsActive=event.target.value;
  this.getAlloilmaster(this.IsActive);
 }
 yes(){
  this.oilmasterOnj.UpdatedBy = Number(localStorage.getItem('UserID'));
  this.IsActive = 1;
  // this.filterdata=0;
  // this.oilmasterOnj.OilID = data.OilID
  console.log("ShiftId", this.oilmasterOnj.OilID)   
  if (this.IsActive == 1) {
    this.IsActive = 0;
    this.api.deleteoil(this.oilmasterOnj.OilID, this.oilmasterOnj.UpdatedBy).subscribe(Response => {
      this.IsActive=1;

      this.getAlloilmaster(this.IsActive);
this.visible2=false
    })
    // this.filterdata=1;

  }
  // this.filterdata=0
 }
 no(){
  this.visible2=false
 }
 submit(){
  this.oilmasterOnj.UpdatedBy = Number(localStorage.getItem('UserID'));
  // this.oilmasterOnj.OilID=data.OilID
  console.log("ShiftId",this.oilmasterOnj.OilID)
if(this.IsActive==0){
  this.IsActive=1;
  this.api.restoreoil(this.oilmasterOnj.OilID, this.oilmasterOnj.UpdatedBy).subscribe(Response => {
    this.IsActive=0;

    this.getAlloilmaster(this.IsActive);
    this.visible3=false

  })
}
// this.filterdata=0;

 }
 notsubmit(){
  this.visible3=false;
 }
}
