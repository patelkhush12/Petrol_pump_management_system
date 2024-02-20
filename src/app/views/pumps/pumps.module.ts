import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { MasterRoutingModule } from './master-routing.module';
// import { AccounttypeComponent } from './accounttype/accounttype.component';
import { TableModule,FormModule,ModalModule,FooterModule,NavbarModule,ButtonModule,DropdownModule,CardModule,BadgeModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import {  ShiftwiseentryComponent } from './shiftwiseentry/shiftwiseentry.component'
import { PumpsRoutingModule } from './pumps-routing.module';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { ShiftwiseentrylistComponent } from './shiftwiseentrylist/shiftwiseentrylist.component';
import { ShiftssettingComponent } from './shiftssetting/shiftssetting.component';

@NgModule({
    declarations: [
        ShiftwiseentryComponent,
        ShiftwiseentrylistComponent,
        ShiftssettingComponent
             // ToastModule.
      //  'ngx-toast'
     ],
    imports: [                                            
      CommonModule,
      PumpsRoutingModule,          
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

export class pumpsModule {
  
}