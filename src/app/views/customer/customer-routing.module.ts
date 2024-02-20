import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { DebitnoteComponent } from './debitnote/debitnote.component';
import { CreditnoteComponent } from './creditnote/creditnote.component';
import { PrintreportComponent } from './printreport/printreport.component';


const routes: Routes = [

    {
        path: 'addcustomer',
        component: AddcustomerComponent,
        data: {
          title: 'addcustomer'
        }
      },
      {
        path: 'debitnote',
        component: DebitnoteComponent,
        data: {
          title: 'debitnote'
        }
      },
      {
        path: 'creditnote',
        component: CreditnoteComponent,
        data: {
          title: 'creditnote'
        }
      },
      {
        path: 'printreport',
        component: PrintreportComponent,
        data: {
          title: 'printreport'
        }
      },
]  
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class CustomerRoutingModule {
  }
  

