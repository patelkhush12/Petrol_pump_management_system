import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterRoutingModule } from './master-routing.module';
import { AccounttypeComponent } from './accounttype/accounttype.component';
import { TableModule,FormModule,ModalModule,FooterModule,NavbarModule,ButtonModule,DropdownModule,CardModule,BadgeModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { OilmasterComponent } from './oilmaster/oilmaster.component';
import { PumpmasterComponent } from './pumpmaster/pumpmaster.component';
import { OilpurchaseComponent } from './oilpurchase/oilpurchase.component';
import { OilstockComponent } from './oilstock/oilstock.component';
import { ShiftmasterComponent } from './shiftmaster/shiftmaster.component';
import { CredittypeComponent } from './credittype/credittype.component';
import { EmployeeComponent } from './employee/employee.component';
import { NozalmasterComponent } from './nozalmaster/nozalmaster.component';
import { FuelmasterComponent } from './fuelmaster/fuelmaster.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
// import { NgxToastModule} from 'ngx-angular-popup'

// import { NotificationsRout } from '../notifications/notifications-routing.module';
// import { ToastModule } from '@coreui/angular';
// import
// import{ NgxToastModule } from 'ngx-toast';
// import { NgxToastModule } from 'ngx-toast/toast';
// import { ToastModule } from '@coreui/angular';
// import { }
// import { ToastrModule } from 'ngx-toastr/toastr';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
    declarations: [
        AccounttypeComponent,
        OilmasterComponent,
        PumpmasterComponent,
        OilpurchaseComponent,
        OilstockComponent,
        ShiftmasterComponent,
        CredittypeComponent,
        EmployeeComponent,
        NozalmasterComponent,
        FuelmasterComponent,
        // ToastModule.
      //  'ngx-toast'
     ],
    imports: [                                            
      CommonModule,
      MasterRoutingModule,          
      TableModule,
      FormModule,
      IconModule,
      ModalModule,
      FooterModule,
      NavbarModule,
      ReactiveFormsModule,
      FormsModule,
      ButtonModule,
      DropdownModule,
      CardModule,
      NgxPaginationModule,
      // ToastrModule.forRoot(),
      // NgxToastModule,
      // BrowserAnimationsModule
      // ToastModule
      // NgToastModule
      // NgxToastModule
      BadgeModule
    ],
  })
  export class MasterModule {
  }