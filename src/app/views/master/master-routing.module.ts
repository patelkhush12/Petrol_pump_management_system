import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccounttypeComponent } from './accounttype/accounttype.component';
import { CredittypeComponent } from './credittype/credittype.component';
import { EmployeeComponent } from './employee/employee.component';
import { FuelmasterComponent } from './fuelmaster/fuelmaster.component';
import { NozalmasterComponent } from './nozalmaster/nozalmaster.component';
import { OilmasterComponent } from './oilmaster/oilmaster.component';
import { OilpurchaseComponent } from './oilpurchase/oilpurchase.component';
import { OilstockComponent } from './oilstock/oilstock.component';
import { PumpmasterComponent } from './pumpmaster/pumpmaster.component';
import { ShiftmasterComponent } from './shiftmaster/shiftmaster.component';



const routes: Routes = [

    {
        path: 'accounttype',
        component: AccounttypeComponent,
        data: {
          title: 'accounttype'
        }
      },
      {
        path: 'fuelmaster',
        component: FuelmasterComponent,
        data: {
          title: 'fuelmaster'
        }
      },
      {
        path: 'oilstock',
        component: OilstockComponent,
        data: {
          title: 'oilstock'
        }
      },
      {
        path: 'pumpmaster',
        component: PumpmasterComponent,
        data: {
          title: 'pumpmaster'
        }
      },
      {
        path: 'employee',
        component: EmployeeComponent,
        data: {
          title: 'employee'
        }
      },
      {
        path: 'nozalmaster',
        component: NozalmasterComponent,
        data: {
          title: 'nozalmaster'
        }
      },
      {
        path: 'credittype',
        component: CredittypeComponent,
        data: {
          title: 'credittype'
        }
      },
      {
        path: 'oilpurchase',
        component: OilpurchaseComponent,
        data: {
          title: 'oilpurchase'
        }
      },
      {
        path: 'oilmaster',
        component: OilmasterComponent,
        data: {
          title: 'oilmaster'
        }
      },
      {
        path: 'shiftmaster',
        component: ShiftmasterComponent,
        data: {
          title: 'shiftmaster'
        }
      },

]  
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class MasterRoutingModule {
  }
  

