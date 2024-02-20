import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { ApiService } from '../../common/api.service';
import { CreditTypemodels } from './credittypemodel'

@Component({
  selector: 'app-credittype',
  templateUrl: './credittype.component.html',
  styleUrls: ['./credittype.component.scss']
})
export class CredittypeComponent implements OnInit {
  credittypeform!: FormGroup
  submitted = false
  customStylesValidated: boolean = false
  Add !: boolean;
  showAdd !: boolean;
  showupdate !: boolean;
  credittypeOnj: CreditTypemodels = new CreditTypemodels();
  visible1=false
  visible2=false
  visible3=false
  creditmasterAll:any;
  UserID:any;
  count: number = 0;
  filterdata:any;
  filterresourcestrue=1;
  filterresourcesfalse=0;
  IsActive=1

  constructor(private formBuildir: FormBuilder,private api:ApiService) { }
  ngOnInit() {
    this.credittypeform = this.formBuildir.group({
      CreditName: ['', Validators.required],
      BankName: ['', Validators.required],
      AccountNumber: ['', Validators.required],
      MobileNo:['', Validators.required],
    })
    this.getAllcreditmaster(this.IsActive)
    this.filterdata = 1

  }
  credittype() {
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
      this.credittypeOnj.CreditName = this.credittypeform.value.CreditName;
      this.credittypeOnj.BankName = this.credittypeform.value.BankName;
      this.credittypeOnj.AccountNumber = this.credittypeform.value.AccountNumber;
      this.credittypeOnj.MobileNo = this.credittypeform.value.MobileNo;
      this.credittypeOnj.CreatedBy = localStorage.getItem('UserID');
      this.credittypeOnj.UserID = localStorage.getItem('UserID');
      this.api.addcredittype(this.credittypeOnj).subscribe(Response => {
        console.log(Response);

        alert("credittype Record Added Successfully !")
        this.submitted = false;
        this.credittypeform.reset();
        this.getAllcreditmaster(this.IsActive);

      },
        err => {
          alert("something went Wrong !");
        })
    }
  }
  getAllcreditmaster(active:any){
   console.log(localStorage.getItem('UserID'));
  this.UserID = localStorage.getItem("UserID");
  this.filterresourcestrue=1;
  this.IsActive = active;

  this.api.getcreditmaster(this.UserID,this.IsActive).subscribe(Response => {
    console.log(localStorage.getItem('UserID'));

    this.creditmasterAll = Response;
    localStorage.getItem('UserID');


    console.log(Response);
    this.count = Response.totalRows;
  })


  }
  delete(data:any) {
    this.visible2=true;
    this.credittypeOnj.CreditID = data.CreditID

  //   this.credittypeOnj.UpdatedBy = Number(localStorage.getItem('UserID'));
  //   this.IsActive = 1;

  //   this.credittypeOnj.CreditID = data.CreditID
  //   console.log("ShiftId", this.credittypeOnj.CreditID)   
  //   if (this.IsActive == 1) {
  //     this.IsActive = 0;
  //     this.api.deletecredit(this.credittypeOnj.CreditID, this.credittypeOnj.UpdatedBy).subscribe(Response => {

  //       alert("CreditID DeActivated Successfully");
  //       this.getAllcreditmaster(this.IsActive);

  //     })
  //   }
  }
  restore(data:any){
    this.visible3=true;
    this.credittypeOnj.CreditID = data.CreditID

  //   this.credittypeOnj.UpdatedBy = Number(localStorage.getItem('UserID'));
  //   this.credittypeOnj.CreditID=data.CreditID
  //   console.log("ShiftId",this.credittypeOnj.CreditID)
  // if(this.IsActive==0){
  //   this.IsActive=1;
  //   this.api.restorecredit(this.credittypeOnj.CreditID, this.credittypeOnj.UpdatedBy).subscribe(Response => {
  
  //     alert("CreditID DeActivated Successfully");
  //     this.getAllcreditmaster(this.IsActive);
  
  //   })
  // }
   
  }



    
  edit(data:any){
    this.showAdd=false;
    this.showupdate=true;
    this.visible1=true;
    console.log(data.CreditID)
    this.credittypeOnj.CreditID = data.CreditID;

    this.credittypeform.controls['CreditName'].setValue(data.CreditName);
    this.credittypeform.controls['BankName'].setValue(data.BankName);
    this.credittypeform.controls['AccountNumber'].setValue(data.AccountNumber);
    this.credittypeform.controls['MobileNo'].setValue(data.MobileNo);

  }
  update(){
    console.log(this.credittypeOnj.CreditID);
  
    if (this.credittypeform.valid) {
      console.log(this.credittypeOnj.CreditID);
     
      this.submitted = true;
      this.credittypeOnj.CreditName = this.credittypeform.value.CreditName;
      this.credittypeOnj.BankName = this.credittypeform.value.BankName;
      this.credittypeOnj.AccountNumber = this.credittypeform.value.AccountNumber;
      this.credittypeOnj.MobileNo = this.credittypeform.value.MobileNo;

      this.credittypeOnj.UpdatedBy = Number(localStorage.getItem('UserID'))
          this.UserID = localStorage.getItem("UserID");
          this.UserID = this.credittypeOnj.CreditID;
      console.log(this.credittypeOnj)
      this.api.updatecredit(this.credittypeOnj, this.credittypeOnj.CreditID).subscribe(Response => {
        this.UserID = this.credittypeOnj.CreditID;
  
        alert("record update succussfull !!");
        this.credittypeform.reset();
        this.getAllcreditmaster(this.IsActive);
      },
        err => {
          alert("something went Wrong !")
        })
  
  
    }
  }
  datafilter(event: any) {
    console.log("eventFilter", event);
  
     console.log(event.target.value)
    this.IsActive = event.target.value
    this.IsActive=event.target.value
    this.getAllcreditmaster(this.IsActive);
   }

  close(){
    this.visible1 = false
  }
  yes(){
    this.credittypeOnj.UpdatedBy = Number(localStorage.getItem('UserID'));
    this.IsActive = 1;

    // this.credittypeOnj.CreditID = data.CreditID
    console.log("ShiftId", this.credittypeOnj.CreditID)   
    if (this.IsActive == 1) {
      this.IsActive = 0;
      this.api.deletecredit(this.credittypeOnj.CreditID, this.credittypeOnj.UpdatedBy).subscribe(Response => {
this.IsActive=1
        this.getAllcreditmaster(this.IsActive);
        this.visible2=false

      })
    }
    // this.filterdata=0

 
  }
submit(){
  this.credittypeOnj.UpdatedBy = Number(localStorage.getItem('UserID'));
    // this.credittypeOnj.CreditID=data.CreditID
    console.log("ShiftId",this.credittypeOnj.CreditID)
  if(this.IsActive==0){
    this.IsActive=1;
    this.api.restorecredit(this.credittypeOnj.CreditID, this.credittypeOnj.UpdatedBy).subscribe(Response => {
  this.IsActive=0
      this.getAllcreditmaster(this.IsActive);
  this.visible3=false
    })
  }
  // this.filterdata=1
}
no(){
  this.visible2=false
 }
 notsubmit(){
  this.visible3=false;
 }

}
