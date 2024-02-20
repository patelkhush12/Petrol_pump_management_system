import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../common/api.service';
import { Creditnotemodels } from '../creditnote/creditnotemodel'
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-creditnote',
  templateUrl: './creditnote.component.html',
  styleUrls: ['./creditnote.component.scss']
})
export class CreditnoteComponent implements OnInit {
  submitted = false
  showAdd !: boolean;
  showupdate !: boolean;
  visible1 = false;
  Add !: boolean;
  creditnoteform !: FormGroup
  alldataName: any;
  filterresourcestrue = 1;
  filterresourcesfalse = 0;
  customStylesValidated: boolean = false;
  IsActive = 1;
  filterdata: any;
  UserID: any;
  creditnoteOnj: Creditnotemodels = new Creditnotemodels();
  addcreditnoteAll: any
  data: any
  visible2 = false;
  visible3 = false;
  constructor(private formBuildir: FormBuilder, private router: Router, private api: ApiService) {
  }
  ngOnInit(): void {
    this.creditnoteform = this.formBuildir.group({
      Name: [''],
      startdate: ['', Validators.required],
      enddate: ['', Validators.required],
      paidtype: [''],
      PaidAmount: [''],
      bankname: ['', Validators.required],
      chequeno: ['', Validators.required],
      bankac: ['', Validators.required],
    })
    this.getAllcreditnote();

    // this.filterdata = 1
    this.dropdrowndataName();

  }
  creditnote() {
    // this.submitted = true;
    // this.customerform.reset();
    this.Add = true;
    this.showAdd = true;
    this.showupdate = false;
    this.visible1 = true;
    this.dropdrowndataName();

  }
  dropdrowndataName() {
    this.api.getaddcustomer(this.UserID, this.IsActive).subscribe(Response => {
      this.UserID = localStorage.getItem('UserID')

      this.alldataName = Response
      console.log(Response);

    })
  }

  add() {
    this.submitted = true
    if (this.creditnoteform.valid) {
      this.creditnoteOnj.Name = this.creditnoteform.value.Name;
      this.creditnoteOnj.startdate = this.creditnoteform.value.startdate;
      this.creditnoteOnj.enddate = this.creditnoteform.value.enddate;
      this.creditnoteOnj.paidtype = this.creditnoteform.value.paidtype;
      this.creditnoteOnj.PaidAmount = this.creditnoteform.value.PaidAmount;
      this.creditnoteOnj.bankname = this.creditnoteform.value.bankname;
      this.creditnoteOnj.bankac = this.creditnoteform.value.bankac;
      this.creditnoteOnj.chequeno = this.creditnoteform.value.chequeno;
      this.creditnoteOnj.AddcustomerID = this.creditnoteform.value.Name;
      this.creditnoteOnj.CreatedBy = Number(localStorage.getItem('UserID'))
      this.api.addcreditnote(this.creditnoteOnj).subscribe(Response => {
        // console.log(this.fuelmasterOnj.PumpID);

        console.log(Response);
        // console.log(this.debitnoteOnj.AccountID);

        alert("creditnote Record Added Successfully !")
        this.submitted = false;
        this.creditnoteform.reset();
        this.getAllcreditnote();
        // this.dropdrowndata();


      },
        err => {
          alert("something went Wrong !");
        })


    }
    // this.visible1=false
    // getAllcreditnote()
  }
  getAllcreditnote() {
    console.log(localStorage.getItem('UserID'));
    this.UserID = localStorage.getItem("UserID")
    this.filterresourcestrue = 1;
    // this.IsActive = active;

    this.api.getcreditnote(this.UserID).subscribe(Response => {
      console.log(localStorage.getItem('UserID'));

      this.addcreditnoteAll = Response;
      localStorage.getItem('UserID');


      console.log(Response);

    })


  }
  edit(data: any) {
    this.showAdd = false;
    this.showupdate = true;
    this.visible1 = true;
    console.log(data.CreditnoteID)
    this.creditnoteOnj.CreditnoteID = data.CreditnoteID;

    this.creditnoteform.controls['Name'].setValue(data.Name);
    this.creditnoteform.controls['startdate'].setValue(data.startdate);
    this.creditnoteform.controls['enddate'].setValue(data.enddate);
    this.creditnoteform.controls['paidtype'].setValue(data.paidtype);
    this.creditnoteform.controls['PaidAmount'].setValue(data.PaidAmount);
    this.creditnoteform.controls['bankname'].setValue(data.bankname);
    this.creditnoteform.controls['bankac'].setValue(data.bankac);
    this.creditnoteform.controls['chequeno'].setValue(data.chequeno);


  }
  update() {
    if (this.creditnoteform.valid) {

      this.creditnoteOnj.startdate = this.creditnoteform.value.startdate;
      this.creditnoteOnj.Name = this.creditnoteform.value.Name;
      this.creditnoteOnj.enddate = this.creditnoteform.value.enddate;
      this.creditnoteOnj.paidtype = this.creditnoteform.value.paidtype;
      this.creditnoteOnj.PaidAmount = this.creditnoteform.value.PaidAmount;
      this.creditnoteOnj.bankname = this.creditnoteform.value.bankname;
      this.creditnoteOnj.bankac = this.creditnoteform.value.bankac;
      this.creditnoteOnj.chequeno = this.creditnoteform.value.chequeno;

      this.creditnoteOnj.UpdatedBy = Number(localStorage.getItem('UserID'))
      this.UserID = localStorage.getItem("UserID");
      this.UserID = this.creditnoteOnj.AddcustomerID;
      console.log(this.creditnoteOnj)
      this.api.updatecreditnote(this.creditnoteOnj, this.creditnoteOnj.CreditnoteID).subscribe(Response => {
        this.UserID = this.creditnoteOnj.AddcustomerID;

        alert("record update succussfull !!");
        this.creditnoteform.reset();
        this.getAllcreditnote();
      },
        err => {
          alert("something went Wrong !")
        })


    }

  }
  // delete(data:any){
  //   this.visible2=true;
  //   this.creditnoteOnj.CreditnoteID = data.CreditnoteID

  // }
  // restore(data:any){
  //   this.visible3=true;
  //   this.creditnoteOnj.CreditnoteID=data.CreditnoteID

  // }
  closemodal() {
    this.visible1 = false
  }
  // datafilter(event: any) {
  //   console.log("eventFilter", event);

  //   console.log(event.target.value)
  //   this.IsActive = event.target.value
  //   this.IsActive = event.target.value
  //   this.getAllcreditnote(this.IsActive);
  // }
  // yes(){
  //   this.creditnoteOnj.UpdatedBy = Number(localStorage.getItem('UserID'));

  //   this.IsActive = 1;

  //   console.log("ShiftId", this.creditnoteOnj.CreditnoteID)   
  //   if (this.IsActive == 1) {
  //     this.IsActive = 0;
  //     this.api.deletecreditnote(this.creditnoteOnj.CreditnoteID, this.creditnoteOnj.UpdatedBy).subscribe(Response => {
  //   this.IsActive=1
  //       this.getAllcreditnote(this.IsActive);
  //   this.visible2=false
  //     })
  //   }
  //   }
  //   submit(){
  //     this.creditnoteOnj.UpdatedBy = Number(localStorage.getItem('UserID'));
  //     console.log("ShiftId",this.creditnoteOnj.CreditnoteID)
  //   if(this.IsActive==0){
  //     this.IsActive=1;
  //     this.api.restorecreditnote(this.creditnoteOnj.CreditnoteID, this.creditnoteOnj.UpdatedBy).subscribe(Response => {
  //   this.IsActive=0;
  //       this.getAllcreditnote(this.IsActive);
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
