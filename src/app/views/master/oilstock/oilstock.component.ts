import { Component,OnInit } from '@angular/core';
import { ApiService } from '../../common/api.service';
@Component({
  selector: 'app-oilstock',
  templateUrl: './oilstock.component.html',
  styleUrls: ['./oilstock.component.scss']
})
export class OilstockComponent implements OnInit {
  IsActive=1;
  UserID:any;
  Alldata:any;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.dropdrowndata();

  }
  dropdrowndata(){
    this.UserID = localStorage.getItem('UserID')

    this.api.getoilmaster(this.UserID,this.IsActive).subscribe(Response => {
      console.log(localStorage.getItem('UserID'));

      this.Alldata = Response

      // localStorage.getItem('ShiftId');
      // this.shiftmasterOnj.ShiftId = this.shiftmasterOnj.ShiftId;
      // this.shiftmasterOnj.UpdatedBy = localStorage.getItem('UserID');

      console.log(Response);
      
      // this.count = Response.totalRows;
    })

  }
}
