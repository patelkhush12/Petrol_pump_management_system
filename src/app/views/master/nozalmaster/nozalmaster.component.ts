import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { FormBuilder,FormControl,Validators,FormGroup } from '@angular/forms';
import { Nozalmastermodels } from './nozalmastermodel';
import { ApiService } from '../../common/api.service';

@Component({
  selector: 'app-nozalmaster',
  templateUrl: './nozalmaster.component.html',
  styleUrls: ['./nozalmaster.component.scss']
})
export class NozalmasterComponent implements OnInit{
  nozalmasterform! : FormGroup
  page: number = 1
  name = ""
  nozalmasterAll:any;

  submitted = false
  customStylesValidated: boolean=false
  Add !: boolean;
  showAdd !: boolean;
  filterresourcestrue = 1;
  filterresourcesfalse = 0;
  count: number = 0;
  visible1 = false;
  filterdata: any;
  tableSize: number = 10;
  tableSizes: any = [10, 20, 30, 40];
  allshifts: any = [];
  IsActive=1;
  visible2=false
  visible3=false

  showupdate !: boolean;
  nozalmasterOnj: Nozalmastermodels = new Nozalmastermodels(); 
  @ViewChild('filter') teams!: ElementRef;
  UserID: any;

  constructor(private formBuildir: FormBuilder,private api: ApiService){}
  ngOnInit(){
    this.nozalmasterform = this.formBuildir.group({
      NozelNumber:['', Validators.required],
    })
    this.getAllnozalmaster(this.IsActive)
    this.filterdata=1

  }
  nozalmaster(){
    // this.submitted=true
    // this.nozalmasterform.reset();
    this.Add = true;
     this.showAdd=true;
     this.showupdate=false
     this.visible1=true
  }
  add(){
    this.submitted=true

    if(this.nozalmasterform.valid){
      // this.submitted=true

  this.nozalmasterOnj.NozelNumber = this.nozalmasterform.value.NozelNumber;
  this.nozalmasterOnj.CreatedBy = localStorage.getItem('UserID');
      this.nozalmasterOnj.UserID = localStorage.getItem('UserID');
      this.api.addnozel(this.nozalmasterOnj).subscribe(Response => {
        console.log(Response);

        alert("nozelmaster Record Added Successfully !")
        this.submitted = false;
        this.nozalmasterform.reset();
        this.getAllnozalmaster(this.IsActive);

      },
        err => {
          alert("something went Wrong !");
        })
    }
  }
  getAllnozalmaster(active:any) {
    console.log(localStorage.getItem('UserID'));
    this.UserID = localStorage.getItem("UserID");
    this.filterresourcestrue=1;
     this.IsActive = active;
  // Check if delete button is clicked
//   if (active == 0) {
//     this.inactiveData = active;
//     this.activedata = active = 1;
// } else {
//     this.activedata = active = 1;
//     this.inactiveData = active = 0;
// }     

    // active=1;
    // this.activedata=active=1;
    // this.inactiveData=active=0;
    this.api.getnozelmaster(this.UserID,this.IsActive).subscribe(Response => {
 
      this.nozalmasterAll = Response;
      localStorage.getItem('UserID');
      console.log(Response);
      this.count = Response.totalRows;
    })
  }
  edit(data:any){
    console.log(data)
  
    this.showAdd=false;
    this.showupdate=true;
    this.visible1=true;
    console.log(data.NozelID)
    this.nozalmasterOnj.NozelID = data.NozelID;
    this.nozalmasterform.controls['NozelNumber'].setValue(data.NozelNumber);
        
  }
  update() {
    console.log(this.nozalmasterOnj.NozelID);
  
    if (this.nozalmasterform.valid) {
      console.log(this.nozalmasterOnj.NozelID);
     
      this.submitted = true;
      this.nozalmasterOnj.NozelNumber = this.nozalmasterform.value.NozelNumber;
      this.nozalmasterOnj.UpdatedBy = Number(localStorage.getItem('UserID'))
          this.UserID = localStorage.getItem("UserID");
          this.UserID = this.nozalmasterOnj.NozelID;
      console.log(this.nozalmasterOnj)
      this.api.updatenozel(this.nozalmasterOnj, this.nozalmasterOnj.NozelID).subscribe(Response => {
        this.UserID = this.nozalmasterOnj.NozelID;
  
        alert("record update succussfull !!");
        this.nozalmasterform.reset();
        this.getAllnozalmaster(this.IsActive);
      },
        err => {
          alert("something went Wrong !")
        })
  
  
    }
  
  }
  delete(data:any) {
    this.visible2=true
    this.nozalmasterOnj.NozelID = data.NozelID

    // this.nozalmasterOnj.UpdatedBy = Number(localStorage.getItem('UserID'));
    // this.IsActive = 1;

    // this.nozalmasterOnj.NozelID = data.NozelID
    // console.log("ShiftId", this.nozalmasterOnj.NozelID)   
    // if (this.IsActive == 1) {
    //   this.IsActive = 0;
    //   this.api.deletenozal(this.nozalmasterOnj.NozelID, this.nozalmasterOnj.UpdatedBy, data).subscribe(Response => {

    //     alert("pumpid DeActivated Successfully");
    //     this.getAllnozalmaster(this.IsActive);

    //   })
    // }
  }
  restore(data:any){
    this.visible3=true
    this.nozalmasterOnj.NozelID=data.NozelID

  //   this.nozalmasterOnj.UpdatedBy = Number(localStorage.getItem('UserID'));
  //   this.nozalmasterOnj.NozelID=data.NozelID
  //   console.log("ShiftId",this.nozalmasterOnj.NozelID)
  // if(this.IsActive==0){
  //   this.IsActive=1;
  //   this.api.restorenozel(this.nozalmasterOnj.NozelID, this.nozalmasterOnj.UpdatedBy,data).subscribe(Response => {
  
  //     alert("Shiftid DeActivated Successfully");
  //     this.getAllnozalmaster(this.IsActive);
  
  //   })
  // }
   
  }

   close(){
    this.visible1=false
  }
  datafilter(event: any) {
    console.log("eventFilter", event);
  
     console.log(event.target.value)
    this.IsActive = event.target.value
    this.IsActive=event.target.value
    this.getAllnozalmaster(this.IsActive);
   }
  
  onTableDataChange(event: any) {
    console.log(event)
    this.tableSize = 10
    this.page = event;
    // this.page = 1;
    // this.getallresources()
    // this.spinner.show()
    this.nozalmasterAll(this.page, 10, this.name, JSON.parse(this.teams.nativeElement.value))
  }
  yes(){
    this.nozalmasterOnj.UpdatedBy = Number(localStorage.getItem('UserID'));
    
    this.IsActive = 1;
    
    console.log("ShiftId", this.nozalmasterOnj.NozelID)   
    if (this.IsActive == 1) {
      this.IsActive = 0;
      this.api.deletenozal(this.nozalmasterOnj.NozelID, this.nozalmasterOnj.UpdatedBy).subscribe(Response => {
    this.IsActive=1
        this.getAllnozalmaster(this.IsActive);
    this.visible2=false
      })
    }
    }
    submit(){
      this.nozalmasterOnj.UpdatedBy = Number(localStorage.getItem('UserID'));
      console.log("ShiftId",this.nozalmasterOnj.NozelID)
    if(this.IsActive==0){
      this.IsActive=1;
      this.api.restorenozel(this.nozalmasterOnj.NozelID, this.nozalmasterOnj.UpdatedBy).subscribe(Response => {
    this.IsActive=0;
        this.getAllnozalmaster(this.IsActive);
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