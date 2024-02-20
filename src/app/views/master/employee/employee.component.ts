import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { ApiService } from '../../common/api.service';
import { Employeemodels } from './employeemodel'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {
  employeeform!: FormGroup
  submitted = false
  customStylesValidated: boolean = false
  Add !: boolean;
  showAdd !: boolean;
  showupdate !: boolean;
  employeeOnj: Employeemodels = new Employeemodels();
  visible1=false
  visible2=false
  visible3=false
  employeemasterAll:any;
  UserID:any;
  count: number = 0;
  filterdata:any;
  filterresourcestrue=1;
  filterresourcesfalse=0;
  IsActive=1;


  constructor(private formBuildir: FormBuilder,private api:ApiService) { }
  ngOnInit() {
    this.employeeform = this.formBuildir.group({
      FirstName:  ['', Validators.required],
      LastName:['',Validators.required],
      Salary:  ['', Validators.required],
      Address:  ['', Validators.required],
      City:  ['', Validators.required],
      MobileNo:  ['', Validators.required],
      PinCode:['',Validators.required],

    })
    this.getAllemployeemaster(this.IsActive)
this.filterdata=1
  }
  employee() {
    // this.submitted = true
    // this.employeeform.reset();
    this.Add = true;
    this.showAdd=true;
    this.showupdate=false;
    this.visible1=true
  }
  add() {
    this.submitted = true
    if (this.employeeform.valid) {
      this.employeeOnj.FirstName = this.employeeform.value.FirstName;
      this.employeeOnj.LastName = this.employeeform.value.LastName;
      this.employeeOnj.Salary = this.employeeform.value.Salary;
      this.employeeOnj.Address = this.employeeform.value.Address;

      this.employeeOnj.City = this.employeeform.value.City;
      this.employeeOnj.MobileNo = this.employeeform.value.MobileNo;
      this.employeeOnj.PinCode = this.employeeform.value.PinCode;

      this.employeeOnj.CreatedBy = localStorage.getItem('UserID');
      this.employeeOnj.UserID = localStorage.getItem('UserID');
      this.api.addemployeetype(this.employeeOnj).subscribe(Response => {
        console.log(Response);

        alert("credittype Record Added Successfully !")
        this.submitted = false;
        this.employeeform.reset();
        this.getAllemployeemaster(this.IsActive);

      },
        err => {
          alert("something went Wrong !");
        })
    }
  }
  getAllemployeemaster(active:any){
    console.log(localStorage.getItem('UserID'));
    this.UserID = localStorage.getItem("UserID")
    this.filterresourcestrue=1;
    this.IsActive = active;

    this.api.getemployeemaster(this.UserID,this.IsActive).subscribe(Response => {
      console.log(localStorage.getItem('UserID'));
  
      this.employeemasterAll = Response;
      localStorage.getItem('UserID');
  
  
      console.log(Response);
      this.count = Response.totalRows;
    })
  
  }

    
  edit(data:any){

    this.showAdd=false;
    this.showupdate=true;
    this.visible1=true;
    console.log(data.EmpID)
    this.employeeOnj.EmpID = data.EmpID;

    this.employeeform.controls['FirstName'].setValue(data.FirstName);
    this.employeeform.controls['LastName'].setValue(data.LastName);
    this.employeeform.controls['Salary'].setValue(data.Salary);
    this.employeeform.controls['Address'].setValue(data.Address);
    this.employeeform.controls['City'].setValue(data.City);

    this.employeeform.controls['MobileNo'].setValue(data.MobileNo);
    this.employeeform.controls['PinCode'].setValue(data.PinCode);

  }
  update(){
    console.log(this.employeeOnj.EmpID);
  
    if (this.employeeform.valid) {
      console.log(this.employeeOnj.EmpID);
      this.employeeOnj.FirstName = this.employeeform.value.FirstName;
      this.employeeOnj.LastName = this.employeeform.value.LastName;
      this.employeeOnj.Salary = this.employeeform.value.Salary;
      this.employeeOnj.Address = this.employeeform.value.Address;

      this.employeeOnj.City = this.employeeform.value.City;
      this.employeeOnj.MobileNo = this.employeeform.value.MobileNo;
      this.employeeOnj.PinCode = this.employeeform.value.PinCode;
      this.employeeOnj.UpdatedBy = Number(localStorage.getItem('UserID'))
      this.UserID = localStorage.getItem("UserID");
      this.UserID = this.employeeOnj.EmpID;
  console.log(this.employeeOnj)
  this.api.updatemployee(this.employeeOnj, this.employeeOnj.EmpID).subscribe(Response => {
    this.UserID = this.employeeOnj.EmpID;

    alert("record update succussfull !!");
    this.employeeform.reset();
    this.getAllemployeemaster(this.IsActive);
  },
    err => {
      alert("something went Wrong !")
    })


}
   
  }
  delete(data:any) {
    this.visible2=true
    this.employeeOnj.EmpID = data.EmpID

    // this.employeeOnj.UpdatedBy = Number(localStorage.getItem('UserID'));

    // this.IsActive = 1;

    // console.log("ShiftId", this.employeeOnj.EmpID)   
    // if (this.IsActive == 1) {
    //   this.IsActive = 0;
    //   this.api.deleteemployee(this.employeeOnj.EmpID, this.employeeOnj.UpdatedBy).subscribe(Response => {

    //     alert("EmployeeID DeActivated Successfully");
    //     this.getAllemployeemaster(this.IsActive);

    //   })
    // }
  }
  restore(data:any){
    this.visible3=true;
    this.employeeOnj.EmpID=data.EmpID;

  //   this.employeeOnj.UpdatedBy = Number(localStorage.getItem('UserID'));
  //   console.log("ShiftId",this.employeeOnj.EmpID)
  // if(this.IsActive==0){
  //   this.IsActive=1;
  //   this.api.restoreemp(this.employeeOnj.EmpID, this.employeeOnj.UpdatedBy).subscribe(Response => {
  
  //     alert("Shiftid DeActivated Successfully");
  //     this.getAllemployeemaster(this.IsActive);
  
  //   })
  // }
   
  }


  datafilter(event: any) {
    console.log("eventFilter", event);
  
     console.log(event.target.value)
    this.IsActive = event.target.value
    this.IsActive=event.target.value
    this.getAllemployeemaster(this.IsActive);
   }

close(){
  this.visible1=false
}
yes(){
this.employeeOnj.UpdatedBy = Number(localStorage.getItem('UserID'));

this.IsActive = 1;

console.log("ShiftId", this.employeeOnj.EmpID)   
if (this.IsActive == 1) {
  this.IsActive = 0;
  this.api.deleteemployee(this.employeeOnj.EmpID, this.employeeOnj.UpdatedBy).subscribe(Response => {
this.IsActive=1
    this.getAllemployeemaster(this.IsActive);
this.visible2=false
  })
}
}
submit(){
  this.employeeOnj.UpdatedBy = Number(localStorage.getItem('UserID'));
  console.log("ShiftId",this.employeeOnj.EmpID)
if(this.IsActive==0){
  this.IsActive=1;
  this.api.restoreemp(this.employeeOnj.EmpID, this.employeeOnj.UpdatedBy).subscribe(Response => {
this.IsActive=0;
    this.getAllemployeemaster(this.IsActive);
    this.visible3=false

  })

}

}
no(){
  this.visible2=false
 }
 notsubmit(){
  this.visible3=false;
 }

}

