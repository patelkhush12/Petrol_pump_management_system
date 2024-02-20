import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { AccountTypemodels } from './accounttypemodel'
import { ApiService } from '../../common/api.service';

@Component({
  selector: 'app-accounttype',
  templateUrl: './accounttype.component.html',
  styleUrls: ['./accounttype.component.scss']
})
export class AccounttypeComponent implements OnInit {
  accounttypeform!: FormGroup
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
  accountmasterAll: any;
  submitted = false
  customStylesValidated: boolean = false
  Add !: boolean;
  showAdd !: boolean;
  showupdate !: boolean;
  credittypeOnj: AccountTypemodels = new AccountTypemodels();
  visible1 = false;
  visible2 = false;
  visible3 = false;
  @ViewChild('filter') teams!: ElementRef;
  UserID: any;
  IsActive = 1;


  constructor(private formBuildir: FormBuilder, private api: ApiService) { }
  ngOnInit() {
    this.accounttypeform = this.formBuildir.group({
      AccountDescription: ['', Validators.required],
      NoOfDay: ['', Validators.required],
    })
    this.getAllaccountmaster(this.IsActive)
    // this.filterdata=1
    this.filterdata = 1
  }
  adddetails() {
    // this.submitted = true
    // this.employeeform.reset();
    this.Add = true;
    this.showAdd = true;
    this.showupdate = false;
    this.visible1 = true
  }
  add() {
    this.submitted = true
    if (this.accounttypeform.valid) {
      this.credittypeOnj.AccountDescription = this.accounttypeform.value.AccountDescription;
      this.credittypeOnj.NoOfDay = this.accounttypeform.value.NoOfDay;
      this.credittypeOnj.CreatedBy = localStorage.getItem('UserID');
      this.credittypeOnj.UserID = localStorage.getItem('UserID');
      this.api.addaccounttype(this.credittypeOnj).subscribe(Response => {
        console.log(Response);

        alert("accounttype Record Added Successfully !")
        this.submitted = false;
        this.accounttypeform.reset();

        this.getAllaccountmaster(this.IsActive);

      },
        err => {
          alert("something went Wrong !");
        })

    }

  }
  getAllaccountmaster(active: any) {
    console.log(localStorage.getItem('UserID'));
    this.UserID = localStorage.getItem("UserID")
    this.filterresourcestrue = 1;
    this.IsActive = active;

    this.api.getaccountmaster(this.UserID, this.IsActive).subscribe(Response => {
      console.log(localStorage.getItem('UserID'));

      this.accountmasterAll = Response;
      localStorage.getItem('UserID');


      console.log(Response);
      this.count = Response.totalRows;
    })

  }
  delete(data: any) {
    this.visible2 = true;
    this.credittypeOnj.AccountID = data.AccountID

  }
  restore(data: any) {
    this.visible3 = true;
    this.credittypeOnj.AccountID = data.AccountID


  }


  edit(data: any) {
    console.log(data)

    this.showAdd = false;
    this.showupdate = true;
    this.visible1 = true;
    console.log(data.AccountID)
    this.credittypeOnj.AccountID = data.AccountID;

    this.accounttypeform.controls['AccountDescription'].setValue(data.AccountDescription);
    this.accounttypeform.controls['NoOfDay'].setValue(data.NoOfDay);

  }
  update() {
    console.log(this.credittypeOnj.AccountID);

    if (this.accounttypeform.valid) {
      console.log(this.credittypeOnj.AccountID);

      this.submitted = true;
      this.credittypeOnj.AccountDescription = this.accounttypeform.value.AccountDescription;
      this.credittypeOnj.NoOfDay = this.accounttypeform.value.NoOfDay;

      this.credittypeOnj.UpdatedBy = Number(localStorage.getItem('UserID'))
      this.UserID = localStorage.getItem("UserID");
      this.UserID = this.credittypeOnj.AccountID;
      console.log(this.credittypeOnj)
      this.api.updateaccount(this.credittypeOnj, this.credittypeOnj.AccountID).subscribe(Response => {
        this.UserID = this.credittypeOnj.AccountID;

        alert("record update succussfull !!");
        this.accounttypeform.reset();
        this.getAllaccountmaster(this.IsActive);
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
    this.getAllaccountmaster(this.IsActive);
  }

  onTableDataChange(event: any) {
    console.log(event)
    this.tableSize = 10
    this.page = event;
    // this.page = 1;
    // this.getallresources()
    // this.spinner.show()
    this.accountmasterAll(this.page, 10, this.name, JSON.parse(this.teams.nativeElement.value))
  }
  yes() {
    this.credittypeOnj.UpdatedBy = Number(localStorage.getItem('UserID'));

    this.IsActive = 1;

    console.log("ShiftId", this.credittypeOnj.AccountID)
    if (this.IsActive == 1) {
      this.IsActive = 0;
      this.api.deleteemployee(this.credittypeOnj.AccountID, this.credittypeOnj.UpdatedBy).subscribe(Response => {
        this.IsActive = 1
        this.getAllaccountmaster(this.IsActive);
        this.visible2 = false
      })
    }
  }
  submit() {
    this.credittypeOnj.UpdatedBy = Number(localStorage.getItem('UserID'));
    console.log("ShiftId", this.credittypeOnj.AccountID)
    if (this.IsActive == 0) {
      this.IsActive = 1;
      this.api.restoreemp(this.credittypeOnj.AccountID, this.credittypeOnj.UpdatedBy).subscribe(Response => {
        this.IsActive = 0;
        this.getAllaccountmaster(this.IsActive);
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
