import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { DebitnoteComponent } from './debitnote/debitnote.component';
import { CreditnoteComponent } from './creditnote/creditnote.component';
import { PrintreportComponent } from './printreport/printreport.component';
import { TableModule,FormModule,ModalModule,FooterModule,NavbarModule,ButtonModule,DropdownModule,CardModule,BadgeModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GridModule } from '@coreui/angular';


@NgModule({
    declarations: [
      AddcustomerComponent,
      DebitnoteComponent,
      CreditnoteComponent,
      PrintreportComponent,
    ],
    imports: [                                            
      CommonModule,
      CustomerRoutingModule,           
      TableModule,
      GridModule,
      FormModule,
      IconModule,
      ModalModule,
      FooterModule,
      NavbarModule,
      FooterModule,
      ReactiveFormsModule,
      FormsModule,
      ButtonModule,
      CardModule,
      DropdownModule,
      BadgeModule
    ]
  })
  export class CustomerModule {
  }