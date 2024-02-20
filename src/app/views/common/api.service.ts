import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  token = localStorage.getItem('token_id');
  constructor(private http: HttpClient) { }
  // baseurl = "http://192.168.1.7:5000/"
  baseurl = "http://192.168.1.12:8000/"

  signup(data: any) {
    return this.http.post<any>(this.baseurl + 'signup', data).pipe(map((Response: any) => {
      return Response;
    }))
  }
  login(data: any) {
    return this.http.post<any>(this.baseurl + 'login', data).pipe(map((Response: any) => {
      return Response;
    }))
  }
  getshiftmaster(UserID: any, active: any) {
    return this.http.get<any>(this.baseurl + 'master/shift/getdata/' + UserID + '/' + active).pipe(map((Response: any) => {
      return Response;
    }))

  }
  // getshiftmaster(id: any, page: any, row: any, search: any, active: any) {
  //   return this.http.get<any>(this.baseurl + 'master/shift/getdata' + id + '?' + 'PageNumber=' + page + '&' + 'NoOfRows=' + row + '&' + 'SearchParam=' + search + '&' + 'IsActive=' + active).pipe(map((Response: any) => {
  //     return Response;
  //   }))
  // }

  addshift(data: any) {
    return this.http.post<any>(this.baseurl + 'master/shift/shiftadd', data).pipe(map((Response: any) => {
      return Response;
    }))
  }
  updateshift(data: any, ShiftID: number = 0) {
    console.log(ShiftID);
    return this.http.put<any>(this.baseurl + 'master/shift/update', data).pipe(map((Response: any) => {
      return Response;
    }))
  }

  deleteshift(ShiftID: number, UpdatedBy: any) {
    console.log(ShiftID);

    return this.http.put<any>(this.baseurl + 'master/shift/delete/' + ShiftID + "/" + UpdatedBy, {}).pipe(map((Response: any) => {
      return Response;
    }))
  }
  restoreshift(ShiftID: number, UpdatedBy: any) {
    return this.http.put<any>(this.baseurl + 'master/shift/restore/' + ShiftID + "/" + UpdatedBy, {}).pipe(map((Response: any) => {
      return Response;
    }))
  }


  addpump(data: any) {
    return this.http.post<any>(this.baseurl + 'master/pump/pumpadd', data).pipe(map((Response: any) => {
      return Response;
    }))
  }
  getpumpmaster(UserID: any, active: any) {
    return this.http.get<any>(this.baseurl + 'master/pump/getdata/' + UserID + '/' + active).pipe(map((Response: any) => {
      return Response;
    }))

  }
  updatepump(data: any, PumpId: number = 0) {
    console.log(PumpId);
    return this.http.put<any>(this.baseurl + 'master/pump/update', data).pipe(map((Response: any) => {
      return Response;
    }))
  }
  deletepump(PumpID: number = 0, UpdatedBy: any) {
    return this.http.put<any>(this.baseurl + 'master/pump/delete/' + PumpID + "/" + UpdatedBy, {}).pipe(map((Response: any) => {
      return Response;
    }))
  }
  restorepump(PumpID: number, UpdatedBy: any) {
    return this.http.put<any>(this.baseurl + 'master/pump/restore/' + PumpID + "/" + UpdatedBy, {}).pipe(map((Response: any) => {
      return Response;
    }))
  }
  addnozel(data: any) {
    return this.http.post<any>(this.baseurl + 'master/nozel/nozeladd', data).pipe(map((Response: any) => {
      return Response;
    }))

  }
  updatenozel(data: any, NozelID: number = 0) {
    console.log(NozelID);
    return this.http.put<any>(this.baseurl + 'master/nozel/update', data).pipe(map((Response: any) => {
      return Response;
    }))

  }
  getnozelmaster(UserID: any, active: any) {
    return this.http.get<any>(this.baseurl + 'master/nozel/getdata/' + UserID + '/' + active).pipe(map((Response: any) => {
      return Response;
    }))

  }
  deletenozal(NozelID: number = 0, UpdatedBy: any) {
    return this.http.put<any>(this.baseurl + 'master/nozel/delete/' + NozelID + "/" + UpdatedBy, {}).pipe(map((Response: any) => {
      return Response;
    }))
  }
  restorenozel(NozelID: number, UpdatedBy: any) {
    return this.http.put<any>(this.baseurl + 'master/nozel/restore/' + NozelID + "/" + UpdatedBy, {}).pipe(map((Response: any) => {
      return Response;
    }))
  }
  addaccounttype(data: any) {
    return this.http.post<any>(this.baseurl + 'master/account/accountadd', data).pipe(map((Response: any) => {
      return Response;
    }))

  }
  getaccountmaster(UserID: any, active: any) {
    return this.http.get<any>(this.baseurl + 'master/account/getdata/' + UserID + '/' + active).pipe(map((Response: any) => {
      return Response;
    }))

  }
  deleteaccount(AccountID: any, UpdatedBy: any) {
    return this.http.put<any>(this.baseurl + 'master/account/delete/' + AccountID + "/" + UpdatedBy, {}).pipe(map((Response: any) => {
      return Response;
    }))
  }
  restoreaccount(AccountID: any, UpdatedBy: any) {
    return this.http.put<any>(this.baseurl + 'master/account/restore/' + AccountID + "/" + UpdatedBy, {}).pipe(map((Response: any) => {
      return Response;
    }))
  }
  updateaccount(data: any, AccountID: number = 0) {
    console.log(AccountID);
    return this.http.put<any>(this.baseurl + 'master/account/update', data).pipe(map((Response: any) => {
      return Response;
    }))

  }
  addfueltype(data: any) {

    return this.http.post<any>(this.baseurl + 'master/fuel/fueladd', data).pipe(map((Response: any) => {
      return Response;
    }))

  }
  addcredittype(data: any) {
    return this.http.post<any>(this.baseurl + 'master/credit/creditadd', data).pipe(map((Response: any) => {
      return Response;
    }))

  }
  getcreditmaster(UserID: any, active: any) {
    return this.http.get<any>(this.baseurl + 'master/credit/getdata/' + UserID + '/' + active).pipe(map((Response: any) => {
      return Response;
    }))

  }
  updatecredit(data: any, CreditID: number = 0) {
    console.log(CreditID);
    return this.http.put<any>(this.baseurl + 'master/credit/update', data).pipe(map((Response: any) => {
      return Response;
    }))

  }
  deletecredit(CreditID: any, UpdatedBy: any) {
    return this.http.put<any>(this.baseurl + 'master/credit/delete/' + CreditID + "/" + UpdatedBy, {}).pipe(map((Response: any) => {
      return Response;
    }))
  }
  restorecredit(CreditID: any, UpdatedBy: any) {
    return this.http.put<any>(this.baseurl + 'master/credit/restore/' + CreditID + "/" + UpdatedBy, {}).pipe(map((Response: any) => {
      return Response;
    }))
  }
  addemployeetype(data: any) {
    return this.http.post<any>(this.baseurl + 'master/employee/employeeadd', data).pipe(map((Response: any) => {
      return Response;
    }))

  }
  getemployeemaster(UserID: any, active: any) {
    return this.http.get<any>(this.baseurl + 'master/employee/getdata/' + UserID + '/' + active).pipe(map((Response: any) => {
      return Response;
    }))

  }
  updatemployee(data: any, EmpID: number = 0) {
    console.log(EmpID);
    return this.http.put<any>(this.baseurl + 'master/employee/update', data).pipe(map((Response: any) => {
      return Response;
    }))
  }
  deleteemployee(EmpID: any, UpdatedBy: any) {
    return this.http.put<any>(this.baseurl + 'master/employee/delete/' + EmpID + "/" + UpdatedBy, {}).pipe(map((Response: any) => {
      return Response;
    }))
  }
  restoreemp(EmpID: any, UpdatedBy: any) {
    return this.http.put<any>(this.baseurl + 'master/employee/restore/' + EmpID + "/" + UpdatedBy, {}).pipe(map((Response: any) => {
      return Response;
    }))
  }
  addfueldropdowntype() {
    return this.http.get<any>(this.baseurl + '/master/fueldropdown/getdata/').pipe(map((Response: any) => {
      return Response;
    }))

  }
  getfuelmaster(UserID: any, active: any) {
    return this.http.get<any>(this.baseurl + 'master/fuel/getdata/' + UserID + '/' + active).pipe(map((Response: any) => {
      return Response;
    }))

  }
  dropdrowndata() {
    return this.http.get<any>(this.baseurl + '/master/fueldropdown/getdata').pipe(map((Response: any) => {
      return Response;
    }))

  }
  addOil(data: any) {
    return this.http.post<any>(this.baseurl + 'master/oil/oiladd', data).pipe(map((Response: any) => {
      return Response;
    }))

  }
  getoilmaster(UserID: any, active: any) {
    return this.http.get<any>(this.baseurl + 'master/oil/getdata/' + UserID + '/' + active).pipe(map((Response: any) => {
      return Response;
    }))

  }
  updateoil(data: any, OilID: number = 0) {
    console.log(OilID);
    return this.http.put<any>(this.baseurl + 'master/oil/update', data).pipe(map((Response: any) => {
      return Response;
    }))
  }
  deleteoil(OilID: any, UpdatedBy: any) {
    return this.http.put<any>(this.baseurl + 'master/oil/delete/' + OilID + "/" + UpdatedBy, {}).pipe(map((Response: any) => {
      return Response;
    }))
  }
  restoreoil(OilID: any, UpdatedBy: any) {
    return this.http.put<any>(this.baseurl + 'master/oil/restore/' + OilID + "/" + UpdatedBy, {}).pipe(map((Response: any) => {
      return Response;
    }))
  }
  addpurachase(data: any) {
    return this.http.post<any>(this.baseurl + 'master/oil_purchase/oil_purchase_add', data).pipe(map((Response: any) => {
      return Response;
    }))
  }

  getoilpurchase(UserID: any) {
    return this.http.get<any>(this.baseurl + 'master/oil_purchase/getdata/' + UserID).pipe(map((Response: any) => {
      return Response;
    }))

  }
  updateoilpurchase(data: any, OilPurchaseID: number = 0) {
    console.log(OilPurchaseID);

    return this.http.get<any>(this.baseurl + 'master/oil_purchase/update', data).pipe(map((Response: any) => {
      return Response;
    }))

  }
  updatefuel(data: any, FuelID: number = 0) {

    console.log(FuelID);
    return this.http.put<any>(this.baseurl + 'master/fuel/update', data).pipe(map((Response: any) => {
      return Response;
    }))

  }
  deletefuel(FuelID: any, UpdatedBy: any) {
    return this.http.put<any>(this.baseurl + 'master/fuel/delete/' + FuelID + "/" + UpdatedBy, {}).pipe(map((Response: any) => {
      return Response;
    }))

  }
  restorefuel(FuelID: any, UpdatedBy: any) {
    return this.http.put<any>(this.baseurl + 'master/fuel/restore/' + FuelID + "/" + UpdatedBy, {}).pipe(map((Response: any) => {
      return Response;
    }))
  }
  addcustomer(data: any) {
    return this.http.post<any>(this.baseurl + 'master/customer/customeradd', data).pipe(map((Response: any) => {
      return Response;
    }))

  }
  getaddcustomer(UserID: any, active: any) {
    return this.http.get<any>(this.baseurl + 'master/customer/getcustomer/' + UserID + '/' + active).pipe(map((Response: any) => {
      return Response;
    }))

  }
  updateaddcustomer(data: any, AddcustomerID: number = 0) {
    console.log(AddcustomerID);
    return this.http.put<any>(this.baseurl + 'master/customer/update', data).pipe(map((Response: any) => {
      return Response;
    }))

  }
  deleteaddcustomer(AddcustomerID: any, UpdatedBy: any) {
    return this.http.put<any>(this.baseurl + 'master/addcustomer/delete/' + AddcustomerID + "/" + UpdatedBy, {}).pipe(map((Response: any) => {
      return Response;
    }))

  }
  restoreaddcustomer(AddcustomerID: any, UpdatedBy: any) {
    return this.http.put<any>(this.baseurl + 'master/addcustomer/restore/' + AddcustomerID + "/" + UpdatedBy, {}).pipe(map((Response: any) => {
      return Response;
    }))
  }
  adddebitnote(data: any) {
    return this.http.post<any>(this.baseurl + 'master/debit/debitadd', data).pipe(map((Response: any) => {
      return Response;
    }))

  }
  getdebitnote(UserID: any) {
    return this.http.get<any>(this.baseurl + 'master/debit/getdebit/' + UserID).pipe(map((Response: any) => {
      return Response;
    }))

  }
  updatdebitnote(data: any, DebitnoteID: number = 0) {
    console.log(DebitnoteID);
    return this.http.put<any>(this.baseurl + 'master/debit/update', data).pipe(map((Response: any) => {
      return Response;
    }))

  }
  // deletedebit(DebitnoteID: any, UpdatedBy: any) {
  //   return this.http.put<any>(this.baseurl + 'master/debitnote/delete/' + DebitnoteID + "/" + UpdatedBy, {}).pipe(map((Response: any) => {
  //     return Response;
  //   }))

  // }
  // restoredebit(DebitnoteID: any, UpdatedBy: any) {
  //   return this.http.put<any>(this.baseurl + 'master/addcustomer/restore/' + DebitnoteID + "/" + UpdatedBy, {}).pipe(map((Response: any) => {
  //     return Response;
  //   }))
  // }
  addcreditnote(data: any) {
    return this.http.post<any>(this.baseurl + 'master/credit/creditadd', data).pipe(map((Response: any) => {
      return Response;
    }))

  }
  getcreditnote(UserID: any) {
    return this.http.get<any>(this.baseurl + 'master/credit/getcredit' + UserID).pipe(map((Response: any) => {
      return Response;
    }))

  }
  updatecreditnote(data: any, CreditnoteID: number = 0) {
    console.log(CreditnoteID);
    return this.http.put<any>(this.baseurl + 'master/credit/update', data).pipe(map((Response: any) => {
      return Response;
    }))

  }
  // deletecreditnote(CreditnoteID: any, UpdatedBy: any) {
  //   return this.http.put<any>(this.baseurl + 'master/creditnote/delete/' + CreditnoteID + "/" + UpdatedBy, {}).pipe(map((Response: any) => {
  //     return Response;
  //   }))

  // }
  // restorecreditnote(CreditnoteID: any, UpdatedBy: any) {
  //   return this.http.put<any>(this.baseurl + 'master/creditnote/restore/' + CreditnoteID + "/" + UpdatedBy, {}).pipe(map((Response: any) => {
  //     return Response;
  //   }))

  // }
}
