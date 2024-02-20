import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
} from 'ngx-perfect-scrollbar';
// import { , ReactiveFormsModule } from '@angular/forms';

// Import routing module
import { AppRoutingModule } from './app-routing.module';

// Import app component
import { AppComponent } from './app.component';

// Import containers
import {
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,

} from './containers';

import {

  AvatarModule,
  BadgeModule,

  BreadcrumbModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FooterModule,
  FormModule,
  GridModule,
  HeaderModule,
  ListGroupModule,
  NavModule,
  ProgressModule,
  SharedModule,
  SidebarModule,
  TabsModule,
  UtilitiesModule,

} from '@coreui/angular';

import { IconModule, IconSetService } from '@coreui/icons-angular';
// import { AboutComponent } from './views/about/about.component';
// import { AddcustomerComponent } from './views/customer/addcustomer/addcustomer.component';
// import { DebitnoteComponent } from './views/customer/debitnote/debitnote.component';
// import { CreditnoteComponent } from './views/customer/creditnote/creditnote.component';
// import { PrintreportComponent } from './views/customer/printreport/printreport.component';
// import { ShiftmasterComponent } from './views/master/shiftmaster/shiftmaster.component';
// import { PumpmasterComponent } from './views/master/pumpmaster/pumpmaster.component';
// import { NozalmasterComponent } from './views/master/nozalmaster/nozalmaster.component';
// import { AccounttypeComponent } from './views/master/accounttype/accounttype.component';
// import { FuelmasterComponent } from './views/master/fuelmaster/fuelmaster.component';
// import { EmployeeComponent } from './views/master/employee/employee.component';
// import { CredittypeComponent } from './views/master/credittype/credittype.component';
// import { OilmasterComponent } from './views/master/oilmaster/oilmaster.component';
// import { OilpurchaseComponent } from './views/master/oilpurchase/oilpurchase.component';
// import { OilstockComponent } from './views/master/oilstock/oilstock.component';
// import { AboutComponent } from './views/about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeComponent } from './views/employee/employee/employee.component';
// import { ShiftwiseentryComponent } from './views/pumps/shiftwiseentry/shiftwiseentry.component';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

const APP_CONTAINERS = [
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,
];

@NgModule({
  declarations: [AppComponent, ...APP_CONTAINERS],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AvatarModule,
    BreadcrumbModule,
    FooterModule,
    DropdownModule,
    GridModule,
    HeaderModule,
    FormsModule,
    SidebarModule,
    IconModule,
    PerfectScrollbarModule,
    NavModule,
    ButtonModule,
    FormModule,
    UtilitiesModule,
    ButtonGroupModule,
    ReactiveFormsModule,
    SidebarModule,
    SharedModule,
    TabsModule,
    ListGroupModule,
    ProgressModule,
    BadgeModule,
    ListGroupModule,
    CardModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    IconSetService,
    Title
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
