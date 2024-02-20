import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AddcustomerComponent } from './addcustomer/addcustomer.component';
// import { DebitnoteComponent } from './debitnote/debitnote.component';
// import { CreditnoteComponent } from './creditnote/creditnote.component';
// import { PrintreportComponent } from './printreport/printreport.component';
import { AboutComponent } from './about.component';


const routes: Routes = [

  {
    path: '',
    component: AboutComponent,
    data: {
      title: $localize`about`
    }   
  }  
]  
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AboutRoutingModule {
  }
  

