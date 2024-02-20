import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Pumpmastermodels } from './pumpmastermodel';
import { ApiService } from '../../common/api.service';
import { ToastModule } from '@coreui/angular';

@Component({
  selector: 'app-pumpmaster',
  templateUrl: './pumpmaster.component.html',
  styleUrls: ['./pumpmaster.component.scss']
})
export class PumpmasterComponent implements OnInit {
  pumpmasterform!: FormGroup;
  page: number = 1;
  name = "";
  pumpmasterAll: any;
  submitted = false
  customStylesValidated: boolean = false
  Add !: boolean;
  showAdd !: boolean;
  showupdate !: boolean;
  visible1 = false
  filterresourcestrue = 1;
  filterresourcesfalse = 0;
  count: number = 0;
  filterdata: any;
  tableSize: number = 10;
  tableSizes: any = [10, 20, 30, 40];
  allshifts: any = [];
  IsActive = 1;
  // PumpID:any;
  pumpmasterOnj: Pumpmastermodels = new Pumpmastermodels();
  @ViewChild('filter') teams!: ElementRef;
  UserID: any;
  // PumpId: any;
  toast: any;
  activedata = 1;
  inactiveData = 0;
  visible2 = false
  visible3 = false
  AllpumpName:any
  constructor(private formBuildir: FormBuilder, private api: ApiService) {
    console.log("this is pump page")
  }
  ngOnInit() {
    this.pumpmasterform = this.formBuildir.group({
      PumpName: ['', Validators.required],
    })
    // this.filterdata = 1

    this.getAllpumpmaster(this.IsActive)
    this.filterdata = 1

  }
  pumpmaster() {
    // this.submitted=true
    // this.pumpmasterform.reset();
    this.Add = true;
    this.showAdd = true;
    this.showupdate = false;
    this.visible1 = true
  }
  add() {
    this.submitted = true;

    if (this.pumpmasterform.valid) {
      // this.submitted=true

      this.pumpmasterOnj.PumpName = this.pumpmasterform.value.PumpName;
      this.pumpmasterOnj.CreatedBy = localStorage.getItem('UserID');
      this.pumpmasterOnj.UserID = localStorage.getItem('UserID');
      this.api.addpump(this.pumpmasterOnj).subscribe(Response => {
        console.log(Response);

        this.toast = true;
        // this.toast  =
        alert("pumpmaster Record Added Successfully !")
        // this.submitted = false;
        this.pumpmasterform.reset();
        this.getAllpumpmaster(this.IsActive);

      },
        err => {
          alert("something went Wrong !");
        })
    }
  }
  // Toast() {
  //   throw new Error('Method not implemented.');
  // }


  getAllpumpmaster(active: any) {
    console.log(localStorage.getItem('UserID'));

    this.UserID = localStorage.getItem("UserID")
    this.filterresourcestrue = 1;

    this.IsActive = active;

    this.api.getpumpmaster(this.UserID, this.IsActive).subscribe(Response => {
      // localStorage.setItem('PumpID',JSON.stringify(Response));
      // localStorage.setItem('PumpID',Response.PumpName);

      this.pumpmasterAll = Response;
      // this.AllpumpName=Response.data;
      localStorage.getItem('UserID');

      console.log(Response);
      this.count = Response.totalRows;
    })
  }
  delete(data: any) {
    this.visible2 = true
    this.pumpmasterOnj.PumpID = data.PumpID

  }
  restore(data: any) {
    this.visible3 = true
    this.pumpmasterOnj.PumpID = data.PumpID


  }



  edit(data: any) {
    console.log(data)

    this.showAdd = false;
    this.showupdate = true;
    this.visible1 = true;
    console.log(data.PumpID)
    this.pumpmasterOnj.PumpID = data.PumpID;
    this.pumpmasterform.controls['PumpName'].setValue(data.PumpName);

  }
  update() {
    console.log(this.pumpmasterOnj.PumpID);

    if (this.pumpmasterform.valid) {
      console.log(this.pumpmasterOnj.PumpID);

      this.submitted = true;
      this.pumpmasterOnj.PumpName = this.pumpmasterform.value.PumpName;
      this.pumpmasterOnj.UpdatedBy = Number(localStorage.getItem('UserID'))
      this.UserID = localStorage.getItem("UserID");
      this.UserID = this.pumpmasterOnj.PumpID;
      console.log(this.pumpmasterOnj)
      this.api.updatepump(this.pumpmasterOnj, this.pumpmasterOnj.PumpID).subscribe(Response => {
        this.UserID = this.pumpmasterOnj.PumpID;

        alert("record update succussfull !!");
        this.pumpmasterform.reset();
        this.getAllpumpmaster(this.IsActive);
      },
        err => {
          alert("something went Wrong !")
        })


    }

  }

  close() {
    this.visible1 = false
  }
  datafilter(event: any) {
    console.log("eventFilter", event);

    console.log(event.target.value)
    this.IsActive = event.target.value
    this.getAllpumpmaster(this.IsActive);

  }
  onTableDataChange(event: any) {
    console.log(event)
    this.tableSize = 10
    this.page = event;
    // this.page = 1;
    // this.getallresources()
    // this.spinner.show()
    // this.pumpmasterAll(this.page, 10, this.name, JSON.parse(this.teams.nativeElement.value))
  }
  yes() {
    this.pumpmasterOnj.UpdatedBy = Number(localStorage.getItem('UserID'));

    this.IsActive = 1;

    console.log("PumpID", this.pumpmasterOnj.PumpID)
    if (this.IsActive == 1) {
      this.IsActive = 0;
      this.api.deletepump(this.pumpmasterOnj.PumpID, this.pumpmasterOnj.UpdatedBy).subscribe(Response => {
        this.IsActive = 1
        this.getAllpumpmaster(this.IsActive);
        this.visible2 = false
      })
    }
  }
  submit() {
    this.pumpmasterOnj.UpdatedBy = Number(localStorage.getItem('UserID'));
    console.log("ShiftId", this.pumpmasterOnj.PumpID)
    if (this.IsActive == 0) {
      this.IsActive = 1;
      this.api.restorepump(this.pumpmasterOnj.PumpID, this.pumpmasterOnj.UpdatedBy).subscribe(Response => {
        this.IsActive = 0;
        this.getAllpumpmaster(this.IsActive);
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
