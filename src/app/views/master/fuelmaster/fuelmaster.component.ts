import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { ApiService } from '../../common/api.service';
import { Fuelmastermodels } from './fuelmastermodel'

@Component({
  selector: 'app-fuelmaster',
  templateUrl: './fuelmaster.component.html',
  styleUrls: ['./fuelmaster.component.scss']
})
export class FuelmasterComponent implements OnInit {
  fuelmasterform!: FormGroup
  page: number = 1
  name = ""
  nozalmasterAll: any;

  filterresourcestrue = 1;
  filterresourcesfalse = 0;
  count: number = 0;
  filterdata: any;
  tableSize: number = 10;
  tableSizes: any = [10, 20, 30, 40];
  allshifts: any = [];
  fuelmasterAll: any;
  submitted = false
  customStylesValidated: boolean = false
  Add !: boolean;
  showAdd !: boolean;
  showupdate !: boolean;
  @ViewChild('filter') teams!: ElementRef;
  UserId: any;
  // pumps: any;
  fuelmasterOnj: Fuelmastermodels = new Fuelmastermodels();
  visible1 = false
  addfueltype !: string;
  PumpName: any;
  pumps: any;
  AllpumpName: any;
  UserID: any;
  IsActive = 1;
  pump: any;
  visible2 = false;
  visible3 = false
  PumpID: any
  // pump: any;
  // selectedPumpId:any;
  // pump: any;
  // PumpName !: string ;
  selectedPump: any
  constructor(private formBuildir: FormBuilder, private api: ApiService, private http: HttpClient) {
    this.PumpName = localStorage.getItem('PumpId');
  }

  ngOnInit() {
    this.fuelmasterform = this.formBuildir.group({
      PetrolPumpName: [''],
      FuelName: [''],
      Price: ['', Validators.required],
      Date: ['', Validators.required],


    })
    this.getAllfuelmaster(this.IsActive);
    this.dropdrowndata();
    this.filterdata = 1

  }
  // PumpName: string = "";
  fuelmaster() {
    // this.PumpId = localStorage.getItem('PumpId');
    // this.PumpID = this.fuelmasterOnj.PetrolPumpName;
    // this.PumpName = localStorage.getItem('PumpId');
    this.PumpName = this.fuelmasterOnj.PetrolPumpName;
    // console.log(this.PumpName)thh
    // this.submitted=true;
    // this.fuelmasterform.reset();
    this.UserID = localStorage.getItem('UserID')
    this.Add = true;
    this.showAdd = true;
    this.showupdate = false;
    this.visible1 = true;


    // this.dropdrowndata();



  }
  dropdrowndata() {
    // console.log(this.fuelmasterOnj.PumpID);
    // this.pumps=this.fuelmasterOnj.PumpID
    this.UserID = localStorage.getItem('UserID')

    this.api.getpumpmaster(this.UserID, this.IsActive).subscribe(Response => {
      console.log(Response);

      this.pumps = Response
      console.log(this.pumps)
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
  // public pumps = [
  //   { PumpName: '{{pumps.PumpName}}', PumpId: '{{pumps.PumpId}}' },
  // this.pumps =localStorage.getItem('PumpId')
  // add more objects as needed
  // ];

  add() {
    this.submitted = true;
    console.log(this.fuelmasterform.value.PetrolPumpName)
    console.log(this.fuelmasterform.valid);
    // console.log(this.fuelmasterOnj.PumpID);

    if (this.fuelmasterform.valid) {
      console.log(this.PumpName);
      // this.fuelmasterOnj.PumpID=this.pumps
      console.log("this.pump", this.pumps)
      this.submitted = true;
      // this.fuelmasterOnj.PumpID=this.pump
      this.fuelmasterOnj.PetrolPumpName = this.pump
      // this.fuelmasterOnj.PetrolPumpName = this.PumpID
      this.fuelmasterOnj.PetrolPumpName = this.fuelmasterOnj.PumpID
      // this.pumps=this.fuelmasterOnj.PumpID
      this.fuelmasterOnj.PetrolPumpName = Array(this.fuelmasterform.value.PetrolPumpName)
      // this.fuelmasterOnj.PetrolPumpName = this.fuelmasterOnj.PumpID
      this.fuelmasterOnj.FuelName = this.fuelmasterform.value.FuelName;
      this.fuelmasterOnj.Price = this.fuelmasterform.value.Price.toString();
      this.fuelmasterOnj.Date = this.fuelmasterform.value.Date;
      this.fuelmasterOnj.CreatedBy = localStorage.getItem('UserID')
      this.fuelmasterOnj.UserID = localStorage.getItem('UserID');
      // console.log(this.pumps/)
      // const name: any = this.pumps.find((p: any) => {
      //   console.log(p.PumpID)
      //   console.log(this.fuelmasterform.value.PetrolPumpName)
      //   p.PumpID = this.fuelmasterform.value.PetrolPumpName
      // })
      // console.log(name);

      // this.fuelmasterOnj.PumpID = this.fuelmasterform.value.PetrolPumpName;
      // console.log(this.fuelmasterOnj);
      console.log(this.fuelmasterOnj)
      //  this.fuelmasterOnj.PetrolPumpName=this.pumps
      this.api.addfueltype(this.fuelmasterOnj).subscribe(Response => {
        // console.log(this.fuelmasterOnj.PumpID);

        console.log(Response);
        console.log(this.fuelmasterOnj.PumpID);

        alert("fuelmaster Record Added Successfully !")
        this.submitted = false;
        this.fuelmasterform.reset();
        this.getAllfuelmaster(this.IsActive);
        // this.dropdrowndata();


      },
        err => {
          alert("something went Wrong !");
        })
    }
  }

  getAllfuelmaster(active: any) {
    console.log(localStorage.getItem('UserID'));
    this.UserID = localStorage.getItem("UserID")
    this.filterresourcestrue = 1;
    this.IsActive = active;

    this.api.getfuelmaster(this.UserID, this.IsActive).subscribe(Response => {
      console.log(localStorage.getItem('UserID'));

      this.fuelmasterAll = Response;
      console.log(this.fuelmasterAll)
      localStorage.getItem('UserID');


      console.log(Response);

    })



  }

  edit(data: any) {
    this.showAdd = false;
    this.showupdate = true;
    this.visible1 = true;
    console.log(data.EmpID)
    this.fuelmasterOnj.FuelID = data.FuelID;

    this.fuelmasterform.controls['PetrolPumpName'].setValue(data.PetrolPumpName);
    this.fuelmasterform.controls['FuelName'].setValue(data.FuelName);
    this.fuelmasterform.controls['Price'].setValue(data.Price);
    this.fuelmasterform.controls['Date'].setValue(data.Date);

  }
  update() {
    if (this.fuelmasterform.valid) {
      // console.log(this.fuelmasterOnj.FuelID);
      this.fuelmasterOnj.PetrolPumpName = this.pump
      // // this.fuelmasterOnj.PetrolPumpName = this.PumpID
      this.fuelmasterOnj.PetrolPumpName = this.fuelmasterOnj.PumpID

      this.fuelmasterOnj.PetrolPumpName = Array(this.fuelmasterform.value.PetrolPumpName)
      this.fuelmasterOnj.FuelName = this.fuelmasterform.value.FuelName;
      this.fuelmasterOnj.Price = this.fuelmasterform.value.Price;
      this.fuelmasterOnj.Date = this.fuelmasterform.value.Date;
      this.fuelmasterOnj.UpdatedBy = Number(localStorage.getItem('UserID'))
      this.UserID = localStorage.getItem("UserID");
      // this.UserID = this.fuelmasterOnj.FuelID;
      this.UserID = this.fuelmasterOnj.FuelID;

      console.log(this.fuelmasterOnj)
      this.api.updatefuel(this.fuelmasterOnj, this.fuelmasterOnj.FuelID).subscribe(Response => {
        this.UserID = this.fuelmasterOnj.FuelID;

        alert("record update succussfull !!");
        this.fuelmasterform.reset();
        this.getAllfuelmaster(this.IsActive);
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
    this.IsActive = event.target.value
    this.getAllfuelmaster(this.IsActive);
  }
  onTableDataChange(event: any) {
    console.log(event)
    this.tableSize = 10
    this.page = event;
    // this.page = 1;
    // this.getallresources()
    // this.spinner.show()
    this.fuelmasterAll(this.page, 10, this.name, JSON.parse(this.teams.nativeElement.value))
  }
  delete(data: any) {
    this.visible2 = true;
    // this.fuelmasterOnj.FuelID = data.FuelID


  }
  restore(data: any) {
    this.visible3 = true;
    // this.fuelmasterOnj.FuelID = data.FuelID
  }
  yes() {
    this.fuelmasterOnj.UpdatedBy = Number(localStorage.getItem('UserID'));

    this.IsActive = 1;

    // console.log("ShiftId", this.fuelmasterOnj.FuelID)
    if (this.IsActive == 1) {
      this.IsActive = 0;
      // this.api.deletefuel(this.fuelmasterOnj.FuelID, this.fuelmasterOnj.UpdatedBy).subscribe(Response => {
      //   this.IsActive = 1
      //   this.getAllfuelmaster(this.IsActive);
      //   this.visible2 = false
      // })
    }
  }
  submit() {
    this.fuelmasterOnj.UpdatedBy = Number(localStorage.getItem('UserID'));
    // console.log("ShiftId", this.fuelmasterOnj.FuelID)
    if (this.IsActive == 0) {
      this.IsActive = 1;
      // this.api.restorefuel(this.fuelmasterOnj.FuelID, this.fuelmasterOnj.UpdatedBy).subscribe(Response => {
      //   this.IsActive = 0;
      //   this.getAllfuelmaster(this.IsActive);
      //   this.visible3 = false

      // })

    }

  }
  no() {
    this.visible2 = false
  }
  notsubmit() {
    this.visible3 = false;
  }


}
