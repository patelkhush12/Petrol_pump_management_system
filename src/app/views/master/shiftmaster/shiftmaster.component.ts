import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Shiftmatermodels } from './shiftmastermodel';
import { ApiService } from '../../common/api.service';
import { PaginationInstance } from 'ngx-pagination';
import { count } from 'rxjs';
import { ToastModule } from '@coreui/angular';
@Component({
  selector: 'app-shiftmaster',
  templateUrl: './shiftmaster.component.html',
  styleUrls: ['./shiftmaster.component.scss']
})
export class ShiftmasterComponent implements OnInit {
  // title='pagenation ';
  // // Posts:any;
  // page: number=1;
  // count: number=0;
  // tableSize: number=10;
  // tableSizes:any =[5,10,15,20];
  // itemsperpage:tableSize
  // itemsPerPage:tableSize

  shiftmasterform!: FormGroup
  // page: number = 1
  name = ""
  submitted = false
  customStylesValidated: boolean = false
  Add !: boolean;
  showAdd !: boolean;
  showupdate !: boolean;
  shiftmasterAll: any;
  // shiftmasterAll: any[];
  // filteredShiftMaster: 
  filterresourcestrue = 1;
  filterresourcesfalse = 0;
  // count: number = 0;
  shiftmasterOnj: Shiftmatermodels = new Shiftmatermodels();
  visible1 = false;
  filterdata: any;
  // tableSize: number = 10;
  // tableSizes: any = [10, 20, 30, 40];
  allshifts: any = [];
  IsActive = 1;
  deleteShiftId = 0;


  // UserID: any;
  @ViewChild('filter') teams!: ElementRef;
  // data: any
  // showActive ! : boolean;
  // showInActive ! : boolean;
  // isActive !: boolean;
  public config: PaginationInstance = {
    itemsPerPage: 10,
    currentPage: 1
  };
  UserID: any;
  visible2 = false;
  visible3 = false
  showdata: any;
  activedata = 1;
  inactiveData = 0;
  target: any;
  // active: boolean = false;



  constructor(private formBuildir: FormBuilder, private api: ApiService) {
    console.log("this is shiftmaster page")
  }
  ngOnInit() {

    this.shiftmasterform = this.formBuildir.group({
      ShiftType: ['', Validators.required],
      ShiftDescription: ['', Validators.required],
    })
    this.getAllshiftmaster(this.IsActive)
    this.filterdata = 1

  }
  // onTableDataChange(event:any){
  //   this.page=event;
  //   this.getAllshiftmaster(this.IsActive);
  // }
  // onTableSizeChange(event:any){
  //   this.tableSize=this.target.value;
  //   this.page =1;
  //   this.getAllshiftmaster(this.IsActive);

  // }
  shiftmaster() {
    // this.submitted = true
    // this.shiftmasterform.reset();
    this.Add = true;
    this.showAdd = true;
    this.showupdate = false;
    this.visible1 = true
  }
  add() {
    console.log(this.shiftmasterOnj.ShiftType);

    console.log(this.shiftmasterform)
    this.submitted = true

    if (this.shiftmasterform.valid) {
      // this.submitted = true

      this.shiftmasterOnj.ShiftType = this.shiftmasterform.value.ShiftType;
      this.shiftmasterOnj.ShiftDescription = this.shiftmasterform.value.ShiftDescription;
      this.shiftmasterOnj.CreatedBy = localStorage.getItem('UserID');
      this.shiftmasterOnj.UserID = localStorage.getItem('UserID');
      console.log(this.shiftmasterOnj.UserID);
      this.api.addshift(this.shiftmasterOnj).subscribe(Response => {
        console.log(Response);

        alert("shiftmaster Record Added Successfully !")
        this.submitted = false;
        this.shiftmasterform.reset();
        this.getAllshiftmaster(this.IsActive);

      },
        err => {
          alert("something went Wrong !");
        })
    }
  }


  getAllshiftmaster(active: any) {
    console.log('UserID', localStorage.getItem('UserID'));
    this.UserID = localStorage.getItem("UserID");
    this.filterresourcestrue = 1;
    this.IsActive = active;
    this.api.getshiftmaster(this.UserID, this.IsActive).subscribe(Response => {

      this.shiftmasterAll = Response;
      localStorage.getItem('UserID');
      console.log(Response);
      // this.count = Response.totalRows;
    })
  }

  delete(data: any) {
    this.visible2 = true;
    this.shiftmasterOnj.ShiftID = data.ShiftID

  }
  restore(data: any) {
    this.visible3 = true;
    this.shiftmasterOnj.ShiftID = data.ShiftID



  }

  // Submit(){
  // this.shiftmasterOnj.UpdatedBy = Number(localStorage.getItem('UserID'));
  // console.log(this.shiftmasterOnj.ShiftID);
  // console.log("ShiftId",this.shiftmasterOnj.ShiftID)

  // if (this.activedata==0){
  //   this.inactiveData=0
  //   this.getAllshiftmaster(this.IsActive)
  // }
  // else{
  //   this.activedata=1
  // }

  //   this.api.deleteshift(this.shiftmasterOnj.ShiftID, this.shiftmasterOnj.UpdatedBy,data).subscribe(Response => {

  //     // this.shiftmasterAll.filter(item => item.someProperty === this.shiftmasterAll)
  //     // this.shiftmasterAll(1, 10, this.name, JSON.parse(this.teams.nativeElement.value))

  //     alert("Site DeActivated Successfully");
  //     // this.getAllshiftmaster(this.IsActive);

  //   })
  // }
  // restore(){
  //   var restoreOnj{
  //     "ShiftId":this.restoreShiftId,
  //     "UpdateBy":localStorage.getItem("UserID"),
  //     "IsActive":true,
  //   }
  // }
  // restore() {
  //   var restoreOnj{
  //     "ShiftId":this.restoreShiftId,
  //     "UpdateBy": localStorage.getItem('UserID'),
  //       "IsActive": true
  // }
  // this.api.shiftdelete(restoreOnj).subscribe(Response=>{})
  // }
  edit(data: any) {
    console.log(data)
    this.showAdd = false;
    this.showupdate = true;
    this.visible1 = true;
    console.log(data.ShiftID)
    this.shiftmasterOnj.ShiftID = data.ShiftID;
    this.shiftmasterform.controls['ShiftType'].setValue(data.ShiftType);
    this.shiftmasterform.controls['ShiftDescription'].setValue(data.ShiftDescription);
    // console.log(this.shiftmasterOnj.ShiftId)
  }
  update() {
    console.log(this.shiftmasterOnj.ShiftID);

    if (this.shiftmasterform.valid) {
      console.log(this.shiftmasterOnj.ShiftID);
      this.submitted = true;
      this.shiftmasterOnj.ShiftType = this.shiftmasterform.value.ShiftType;
      this.shiftmasterOnj.ShiftDescription = this.shiftmasterform.value.ShiftDescription;
      this.shiftmasterOnj.UpdatedBy = Number(localStorage.getItem('UserID'))
      this.UserID = localStorage.getItem("UserID");
      this.UserID = this.shiftmasterOnj.ShiftID;
      console.log(this.shiftmasterOnj)
      this.api.updateshift(this.shiftmasterOnj, this.shiftmasterOnj.ShiftID).subscribe(Response => {
        this.UserID = this.shiftmasterOnj.ShiftID;

        alert("record update succussfull !!");
        this.shiftmasterform.reset();
        this.getAllshiftmaster(this.IsActive);
      },
        err => {
          alert("something went Wrong !")
        })


    }

  }

  close() {
    this.visible1 = false
  }
  // shiftmasterAll(IsActive:boolean){

  // }
  datafilter(event: any) {
    console.log("eventFilter", event);

    console.log(event.target.value)
    this.IsActive = event.target.value
    this.IsActive = event.target.value
    this.getAllshiftmaster(this.IsActive);
  }
  // onTableDataChange(event: any) {
  //   console.log(event)
  //   this.tableSize = 10
  //   this.page = event;
  // this.page = 1;
  // this.getallresources()
  // this.spinner.show()
  // this.shiftmasterAll(1, 10, this.name, JSON.parse(this.teams.nativeElement.value))

  // this.shiftmasterAll.filter(item => item.someProperty === this.shiftmasterAll)
  // }
  yes() {
    this.shiftmasterOnj.UpdatedBy = Number(localStorage.getItem('UserID'));

    this.IsActive = 1;

    console.log("ShiftId", this.shiftmasterOnj.ShiftID)
    if (this.IsActive == 1) {
      this.IsActive = 0;
      this.api.deleteshift(this.shiftmasterOnj.ShiftID, this.shiftmasterOnj.UpdatedBy).subscribe(Response => {
        this.IsActive = 1
        this.getAllshiftmaster(this.IsActive);
        this.visible2 = false
      })
    }
  }
  submit() {
    this.shiftmasterOnj.UpdatedBy = Number(localStorage.getItem('UserID'));
    console.log("ShiftId", this.shiftmasterOnj.ShiftID)
    if (this.IsActive == 0) {
      this.IsActive = 1;
      this.api.restoreshift(this.shiftmasterOnj.ShiftID, this.shiftmasterOnj.UpdatedBy).subscribe(Response => {
        this.IsActive = 0;
        this.getAllshiftmaster(this.IsActive);
        this.visible3 = false

      })

    }

  }
  no() {
    this.visible2 = false
  }
  notsubmit() {
    this.visible3 = false;
  }

}
// function If() {
//   throw new Error('Function not implemented.');
// }

