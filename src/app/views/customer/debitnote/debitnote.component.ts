import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { debounce, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
// import { Addcustomermodels } from './addcustomermodel';
import { ApiService } from '../../common/api.service';
import { Debitnotemodels } from './debitnotemodel'
@Component({
  selector: 'app-debitnote',
  templateUrl: './debitnote.component.html',
  styleUrls: ['./debitnote.component.scss']
})
export class DebitnoteComponent implements OnInit {
  debitnoteform!: FormGroup
  adddebitnoteAll: any
  IsActive = 1;
  filterresourcestrue = 1;
  filterresourcesfalse = 0;
  visible1 = false
  filterdata: any;
  customStylesValidated: boolean = false
  submitted = false
  alldatashift: any
  showAdd !: boolean;
  showupdate !: boolean;
  Add !: boolean;
  alldataName: any;
  alldatanozal: any;
  alldatapump: any;
  alldatafuel: any;
  debitnoteOnj: Debitnotemodels = new Debitnotemodels();
  UserID: any;
  visible2 = false;
  visible3 = false;
  constructor(private formBuildir: FormBuilder, private router: Router, private api: ApiService) {
  }
  ngOnInit(): void {
    this.debitnoteform = this.formBuildir.group({
      Customer_Name: [''],
      Date: ['', Validators.required],
      ShiftNO: ['', Validators.required],
      Vehicleno: ['', Validators.required],
      ShiftType: [''],
      PumpName: [''],
      NozelNumber: [''],
      FuelName: [''],
      Rate: ['', Validators.required],
      Quantity: ['', Validators.required],
      Amount: ['', Validators.required],
    })
    this.getAlldebitnote(this.IsActive);
    // this.filterdata = 1
    this.dropdrowndataShift();
    this.dropdrowndataPump();
    this.dropdrowndataNozal();
    this.dropdrowndataFuelname();
    this.dropdrowndataaddcustomer();
    this.dropdrowndataName();


  }
  dropdrowndataName() {
    this.api.getaddcustomer(this.UserID, this.IsActive).subscribe(Response => {
      this.UserID = localStorage.getItem('UserID')

      this.alldataName = Response
      console.log(Response);

    })
  }
  dropdrowndataShift() {
    this.UserID = localStorage.getItem('UserID')

    this.api.getshiftmaster(this.UserID, this.IsActive).subscribe(Response => {

      this.alldatashift = Response
      console.log(Response);
    })
  }
  dropdrowndataPump() {
    this.UserID = localStorage.getItem('UserID')

    this.api.getshiftmaster(this.UserID, this.IsActive).subscribe(Response => {

      this.alldatashift = Response
      console.log(Response);
    })

  }
  dropdrowndataNozal() {
    this.UserID = localStorage.getItem('UserID')

    this.api.getnozelmaster(this.UserID, this.IsActive).subscribe(Response => {

      this.alldatashift = Response
      console.log(Response);
    })

  }
  dropdrowndataFuelname() {
    this.UserID = localStorage.getItem('UserID')

    this.api.getfuelmaster(this.UserID, this.IsActive).subscribe(Response => {

      this.alldatashift = Response
      console.log(Response);
    })

  }
  dropdrowndataaddcustomer() {
    this.UserID = localStorage.getItem('UserID')

    this.api.getaddcustomer(this.UserID, this.IsActive).subscribe(Response => {

      this.alldatashift = Response
      console.log(Response);
    })

  }
  debitnote() {
    // this.submitted = true;
    // this.debitnoteform.reset();
    this.Add = true;
    this.showAdd = true;
    this.showupdate = false;
    this.visible1 = true;

  }
  // datafilter(event: any) {
  //   console.log("eventFilter", event);

  //   console.log(event.target.value)
  //   this.IsActive = event.target.value
  //   this.IsActive = event.target.value
  //   this.getAlldebitnote(this.IsActive);
  // }
  getAlldebitnote(active: any) {
    console.log(localStorage.getItem('UserID'));
    this.UserID = localStorage.getItem("UserID")
    this.filterresourcestrue = 1;
    this.IsActive = active;

    this.api.getdebitnote(this.UserID).subscribe(Response => {
      console.log(localStorage.getItem('UserID'));

      this.adddebitnoteAll = Response;
      localStorage.getItem('UserID');


      console.log(Response);

    })


  }
  edit(data: any) {
    this.showAdd = false;
    this.showupdate = true;
    this.visible1 = true;
    console.log(data.DebitnoteID)
    this.debitnoteOnj.DebitnoteID = data.DebitnoteID;

    this.debitnoteform.controls['Customer_Name'].setValue(data.Customer_Name);
    this.debitnoteform.controls['Date'].setValue(data.Date);
    this.debitnoteform.controls['ShiftNO'].setValue(data.ShiftNO);
    this.debitnoteform.controls['Vehicleno'].setValue(data.Vehicleno);
    this.debitnoteform.controls['Rate'].setValue(data.Rate);

    this.debitnoteform.controls['Quantity'].setValue(data.Quantity);
    this.debitnoteform.controls['Amount'].setValue(data.Amount);
    this.debitnoteform.controls['PumpName'].setValue(data.PumpName);
    this.debitnoteform.controls['FuelName'].setValue(data.FuelName);
    this.debitnoteform.controls['NozelNumber'].setValue(data.NozelNumber);
    this.debitnoteform.controls['ShiftType'].setValue(data.ShiftType);


  }
  // restore(data: any) {
  //   this.visible3=true;
  //   this.debitnoteOnj.DebitnoteID=data.DebitnoteID

  // }
  // delete(data: any) {
  //   this.visible2=true
  //   this.debitnoteOnj.DebitnoteID = data.DebitnoteID

  // }
  closemodal() {
    this.visible1 = false
  }
  // addcustomer() {
  //   this.submitted = true;
  //   this.debitnoteform.reset();
  //   this.Add = true;
  //   this.showAdd = true;
  //    this.showupdate = false;
  //   this.visible1 = true;
  // }

  add() {
    this.submitted = true
    if (this.debitnoteform.valid) {
      // this.debitnoteOnj.Acno = this.debitnoteform.value.Acno;
      this.debitnoteOnj.Customer_Name = this.debitnoteform.value.Customer_Name;
      this.debitnoteOnj.Date = this.debitnoteform.value.Date;
      this.debitnoteOnj.ShiftNO = this.debitnoteform.value.ShiftNO;
      this.debitnoteOnj.CreatedBy = Number(localStorage.getItem('UserID'))
      this.debitnoteOnj.UserID = Number(localStorage.getItem('UserID'));
      this.debitnoteOnj.Vehicleno = this.debitnoteform.value.Vehicleno;
      this.debitnoteOnj.Rate = this.debitnoteform.value.Rate;
      this.debitnoteOnj.Quantity = this.debitnoteform.value.Quantity;
      this.debitnoteOnj.Amount = this.debitnoteform.value.Amount;
      this.debitnoteOnj.PumpName = this.debitnoteform.value.PumpName;
      this.debitnoteOnj.FuelName = this.debitnoteform.value.FuelName;
      this.debitnoteOnj.NozelNumber = this.debitnoteform.value.NozelNumber;
      this.debitnoteOnj.ShiftType = this.debitnoteform.value.ShiftType;

      this.debitnoteOnj.PumpID = this.debitnoteform.value.PumpName;
      this.debitnoteOnj.ShiftID = this.debitnoteform.value.ShiftType;
      this.debitnoteOnj.FuelID = this.debitnoteform.value.FuelName;
      this.debitnoteOnj.AddcustomerID = this.debitnoteform.value.Name;
      this.debitnoteOnj.NozelID = this.debitnoteform.value.NozelNumber;
      //  this.fuelmasterOnj.PetrolPumpName=this.pumps
      this.api.adddebitnote(this.debitnoteOnj).subscribe(Response => {
        // console.log(this.fuelmasterOnj.PumpID);

        console.log(Response);
        // console.log(this.debitnoteOnj.AccountID);

        alert("debitnote Record Added Successfully !")
        this.submitted = false;
        this.debitnoteform.reset();
        this.getAlldebitnote(this.IsActive);
        // this.dropdrowndata();


      },
        err => {
          alert("something went Wrong !");
        })

    }


  }
  update() {
    if (this.debitnoteform.valid) {

      this.debitnoteOnj.Customer_Name = this.debitnoteform.value.Customer_Name;
      this.debitnoteOnj.Date = this.debitnoteform.value.Date;
      this.debitnoteOnj.ShiftNO = this.debitnoteform.value.ShiftNO;
      this.debitnoteOnj.UpdatedBy = Number(localStorage.getItem('UserID'))
      this.debitnoteOnj.UserID = Number(localStorage.getItem('UserID'));
      this.debitnoteOnj.Vehicleno = this.debitnoteform.value.Vehicleno;
      this.debitnoteOnj.Rate = this.debitnoteform.value.Rate;
      this.debitnoteOnj.Quantity = this.debitnoteform.value.Quantity;
      this.debitnoteOnj.Amount = this.debitnoteform.value.Amount;
      this.debitnoteOnj.PumpName = this.debitnoteform.value.PumpName;
      this.debitnoteOnj.FuelName = this.debitnoteform.value.FuelName;
      this.debitnoteOnj.NozelNumber = this.debitnoteform.value.NozelNumber;
      this.debitnoteOnj.ShiftType = this.debitnoteform.value.ShiftType;
      this.UserID = localStorage.getItem("UserID");
      this.UserID = this.debitnoteOnj.DebitnoteID;
      console.log(this.debitnoteOnj)
      this.api.updatdebitnote(this.debitnoteOnj, this.debitnoteOnj.DebitnoteID).subscribe(Response => {
        this.UserID = this.debitnoteOnj.DebitnoteID;

        alert("record update succussfull !!");
        this.debitnoteform.reset();
        this.getAlldebitnote(this.IsActive);
      },
        err => {
          alert("something went Wrong !")
        })


    }
  }
  // yes(){
  //   this.debitnoteOnj.UpdatedBy = Number(localStorage.getItem('UserID'));

  //   this.IsActive = 1;

  //   console.log("DebitnoteID", this.debitnoteOnj.DebitnoteID)   
  //   if (this.IsActive == 1) {
  //     this.IsActive = 0;
  //     this.api.deletedebit(this.debitnoteOnj.DebitnoteID, this.debitnoteOnj.UpdatedBy).subscribe(Response => {
  //   this.IsActive=1
  //       this.getAlldebitnote(this.IsActive);
  //   this.visible2=false
  //     })
  //   }
  //   }
  //   submit(){
  //     this.debitnoteOnj.UpdatedBy = Number(localStorage.getItem('UserID'));
  //     console.log("DebitnoteID",this.debitnoteOnj.DebitnoteID)
  //   if(this.IsActive==0){
  //     this.IsActive=1;
  //     this.api.restoredebit(this.debitnoteOnj.DebitnoteID, this.debitnoteOnj.UpdatedBy).subscribe(Response => {
  //   this.IsActive=0;
  //       this.getAlldebitnote(this.IsActive);
  //       this.visible3=false

  //     })

  //   }

  //   }
  //   no(){
  //     this.visible2=false
  //    }
  //    notsubmit(){
  //     this.visible3=false;
  //    }



}
