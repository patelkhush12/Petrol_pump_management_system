import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { debounce, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { Addcustomermodels } from './addcustomermodel';
import { ApiService } from '../../common/api.service';
@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.scss']
})
export class AddcustomerComponent implements OnInit {
  customerform!: FormGroup
  submitted = false
  customStylesValidated: boolean = false
  showAdd !: boolean;
  showupdate !: boolean;
  addcustomerOnj: Addcustomermodels = new Addcustomermodels();
  visible1 = false;
  Add !: boolean;
  IsActive = 1
  UserID: any
  alldata: any
  addcustomerAll: any
  filterresourcestrue = 1
  filterresourcesfalse = 0
  searchForm: FormGroup = new FormGroup({
    search: new FormControl('')
  })
  filterdata: any;
  visible2 = false;

  visible3 = false;


  // closeButton	! : Boolean;
  constructor(private formBuildir: FormBuilder, private router: Router, private api: ApiService) {
    console.log("this is addcustomer page")
    // this.searchForm.get('search')
    // .valueChanges.pipe(debounceTime(1000),
    // distinctUntilChangedChanged(),
    // switchMap((v) => this.apiService.getUsers(v)),
    // )
    // .subscribe((v) => {
    //   this.userList=  v?.users
    // })
  }
  ngOnInit() {
    this.customerform = this.formBuildir.group({
      Acno: ['', Validators.required],
      Name: [''],
      Phone: ['', Validators.required],
      AccountDescription: [''],
    })
    this.getAlladdcustomer(this.IsActive);
    this.dropdrowndata();
    this.filterdata = 1

  }
  // toggleLiveDemo() {
  //   this.visible1 = false;
  // }
  dropdrowndata() {
    this.UserID = localStorage.getItem('UserID')

    this.api.getaccountmaster(this.UserID, this.IsActive).subscribe(Response => {

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
    // this.api.dropdrowndata().subscribe(Response => {


    //   if(Response.success)
    //   {
    //     this.pumps=Response.data;
    //   }})
  }


  closemodal() {
    this.visible1 = false
  }
  addcustomer() {
    // this.submitted = true;
    // this.customerform.reset();
    this.Add = true;
    this.showAdd = true;
    this.showupdate = false;
    this.visible1 = true;
  }
  add() {
    this.submitted = true
    if (this.customerform.valid) {
      this.addcustomerOnj.AccountDescription = this.addcustomerOnj.AccountID

      this.addcustomerOnj.Acno = this.customerform.value.Acno;
      this.addcustomerOnj.Name = this.customerform.value.Name;
      this.addcustomerOnj.Phone = this.customerform.value.Phone;
      this.addcustomerOnj.AccountDescription = Array(this.customerform.value.AccountDescription);
      this.addcustomerOnj.CreatedBy = Number(localStorage.getItem('UserID'))
      this.addcustomerOnj.UserID = Number(localStorage.getItem('UserID'));
      // this.addcustomerOnj.AccountID = this.customerform.value.AccountDescription;

      //  this.fuelmasterOnj.PetrolPumpName=this.pumps
      this.api.addcustomer(this.addcustomerOnj).subscribe(Response => {
        // console.log(this.fuelmasterOnj.PumpID);

        console.log(Response);
        console.log(this.addcustomerOnj.AccountID);

        alert("addcustomer Record Added Successfully !")
        this.submitted = false;
        this.customerform.reset();
        this.getAlladdcustomer(this.IsActive);
        // this.dropdrowndata();


      },
        err => {
          alert("something went Wrong !");
        })

    }
  }
  getAlladdcustomer(active: any) {
    console.log(localStorage.getItem('UserID'));
    this.UserID = localStorage.getItem("UserID")
    this.filterresourcestrue = 1;
    this.IsActive = active;

    this.api.getaddcustomer(this.UserID, this.IsActive).subscribe(Response => {
      console.log(localStorage.getItem('UserID'));

      this.addcustomerAll = Response;
      localStorage.getItem('UserID');


      console.log(Response);

    })

  }
  update() {
    if (this.customerform.valid) {
      this.addcustomerOnj.AccountDescription = this.addcustomerOnj.AccountID

      this.addcustomerOnj.Acno = this.customerform.value.Acno;
      this.addcustomerOnj.Name = this.customerform.value.Name;
      this.addcustomerOnj.Phone = this.customerform.value.Phone;
      this.addcustomerOnj.AccountDescription = Array(this.customerform.value.AccountDescription);
      this.addcustomerOnj.UpdatedBy = Number(localStorage.getItem('UserID'))
      this.UserID = localStorage.getItem("UserID");
      this.UserID = this.addcustomerOnj.CustomerID;
      console.log(this.addcustomerOnj)
      this.api.updateaddcustomer(this.addcustomerOnj, this.addcustomerOnj.CustomerID).subscribe(Response => {
        this.UserID = this.addcustomerOnj.CustomerID;

        alert("record update succussfull !!");
        this.customerform.reset();
        this.getAlladdcustomer(this.IsActive);
      },
        err => {
          alert("something went Wrong !")
        })


    }

  }
  // edit(data: any){
  //   this.customerform.controls['Acno'].setValue(data.Acno);
  //   this.customerform.controls['name'].setValue(data.name);
  //   this.customerform.controls['address'].setValue(data.address);
  //   this.customerform.controls['phonenumber'].setValue(data.phonenumber);
  //   this.customerform.controls['accounttype'].setValue(data.accounttype);


  // }
  edit(data: any) {
    console.log(data)

    this.showAdd = false;
    this.showupdate = true;
    this.visible1 = true;
    console.log(data.CustomerID)
    this.addcustomerOnj.CustomerID = data.CustomerID;

    this.customerform.controls['Acno'].setValue(data.Acno);
    this.customerform.controls['Name'].setValue(data.Name);
    this.customerform.controls['Phone'].setValue(data.Phone);
    this.customerform.controls['AccountDescription'].setValue(data.AccountDescription);

  }

  //  close(){
  //   this.submitted=true
  //   this.router.navigate(['addcustomer']);
  //  }
  table() {
    this.submitted = true;

  }
  datafilter(event: any) {
    console.log("eventFilter", event);

    console.log(event.target.value)
    this.IsActive = event.target.value
    this.IsActive = event.target.value
    this.getAlladdcustomer(this.IsActive);
  }
  //  delete(data:any) {
  //   this.visible2=true;
  //   this.addcustomerOnj.AddcustomerID = data.AddcustomerID

  //    }
  // restore(data:any){
  //   this.visible3=true;
  //   this.addcustomerOnj.AddcustomerID=data.AddcustomerID


  // }
  // yes(){
  //   this.addcustomerOnj.UpdatedBy = Number(localStorage.getItem('UserID'));

  //   this.IsActive = 1;

  //   console.log("ShiftId", this.addcustomerOnj.AddcustomerID)   
  //   if (this.IsActive == 1) {
  //     this.IsActive = 0;
  //     this.api.deleteaddcustomer(this.addcustomerOnj.AddcustomerID, this.addcustomerOnj.UpdatedBy).subscribe(Response => {
  //   this.IsActive=1
  //       this.getAlladdcustomer(this.IsActive);
  //   this.visible2=false
  //     })
  //   }
  //   }
  //   submit(){
  //     this.addcustomerOnj.UpdatedBy = Number(localStorage.getItem('UserID'));
  //     console.log("ShiftId",this.addcustomerOnj.AccountID)
  //   if(this.IsActive==0){
  //     this.IsActive=1;
  //     this.api.restoreaddcustomer(this.addcustomerOnj.AccountID, this.addcustomerOnj.UpdatedBy).subscribe(Response => {
  //   this.IsActive=0;
  //       this.getAlladdcustomer(this.IsActive);
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