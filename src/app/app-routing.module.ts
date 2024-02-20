import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './containers';
import { HttpClientModule } from '@angular/common/http';
import { Page404Component } from './views/pages/page404/page404.component';
import { Page500Component } from './views/pages/page500/page500.component';
import { LoginComponent } from './views/pages/login/login.component';
import { RegisterComponent } from './views/pages/register/register.component';
import { AddcustomerComponent } from './views/customer/addcustomer/addcustomer.component';
import { DebitnoteComponent } from './views/customer/debitnote/debitnote.component';
import { CreditnoteComponent } from './views/customer/creditnote/creditnote.component';
import { PrintreportComponent } from './views/customer/printreport/printreport.component';
import { AccounttypeComponent } from './views/master/accounttype/accounttype.component';
import { CredittypeComponent } from './views/master/credittype/credittype.component';
import { EmployeeComponent } from './views/master/employee/employee.component';
import { FuelmasterComponent } from './views/master/fuelmaster/fuelmaster.component';
import { OilmasterComponent } from './views/master/oilmaster/oilmaster.component';
import { PumpmasterComponent } from './views/master/pumpmaster/pumpmaster.component';
import { ShiftmasterComponent } from './views/master/shiftmaster/shiftmaster.component';
import { OilpurchaseComponent } from './views/master/oilpurchase/oilpurchase.component';
import { OilstockComponent } from './views/master/oilstock/oilstock.component';
import { AboutComponent } from './views/about/about.component';
import { ViewprofileComponent } from './views/profile/viewprofile/viewprofile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: 'theme',
        loadChildren: () =>
          import('./views/theme/theme.module').then((m) => m.ThemeModule)
      },
      {
        path: 'base',
        loadChildren: () =>
          import('./views/base/base.module').then((m) => m.BaseModule)
      },
      {
        path: 'buttons',
        loadChildren: () =>
          import('./views/buttons/buttons.module').then((m) => m.ButtonsModule)
      },
      {
        path: 'forms',
        loadChildren: () =>
          import('./views/forms/forms.module').then((m) => m.CoreUIFormsModule)
      },
      {
        path: 'charts',
        loadChildren: () =>
          import('./views/charts/charts.module').then((m) => m.ChartsModule)
      },
      {
        path: 'icons',
        loadChildren: () =>
          import('./views/icons/icons.module').then((m) => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('./views/notifications/notifications.module').then((m) => m.NotificationsModule)
      },
      {
        path: 'widgets',
        loadChildren: () =>
          import('./views/widgets/widgets.module').then((m) => m.WidgetsModule)
      },
      {
        path: 'pages',
        loadChildren: () =>
          import('./views/pages/pages.module').then((m) => m.PagesModule)
      },
      {
        path: 'customer',
        loadChildren: () =>
          import('./views/customer/customer.module').then((m) => m.CustomerModule)
      },
      {
        path: 'master',
        loadChildren: () =>
          import('./views/master/master.module').then((m) => m.MasterModule)
      },
      {
        path: 'pumps',
        loadChildren: () =>
          import('./views/pumps/pumps.module').then((m) => m.pumpsModule)
      },
      {

        path: 'about',
        loadChildren: () =>
          import('./views/about/about.module').then((m) => m.AboutModule)
      },
      {

        path: 'employee',
        loadChildren: () =>
          import('./views/employee/employee.module').then((m) => m.EmployeeModule)
      },

      {
        path: 'profile',
        loadChildren: () =>
          import('./views/profile/profile.module').then((m) => m.ProfileModule)
      }
    ]
  },
  // {
  //   path: '404',
  //   component: Page404Component,
  //   data: {
  //     title: 'Page 404'
  //   }
  // },
  // {
  //   path: '500',
  //   component: Page500Component,
  //   data: {
  //     title: 'Page 500'
  //   }
  // },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  // {
  //   path: 'addcustomer',
  //   component: AddcustomerComponent
  // },
  // {
  //   path: 'debitnote',
  //   component: DebitnoteComponent
  // },
  // {
  //   path: 'creditnote',
  //   component: CreditnoteComponent
  // },
  // {
  //   path: 'printreport',
  //   component: PrintreportComponent
  // },
  // {
  //   path: 'accounttype',
  //   component: AccounttypeComponent
  // },
  // {
  //   path: 'credittype',
  //   component: CredittypeComponent
  // },
  // {
  //   path: 'employee',
  //   component: EmployeeComponent
  // },
  // {
  //   path: 'oilpurchase',
  //   component: OilpurchaseComponent
  // },
  // {
  //   path: 'fuelmaster',
  //   component: FuelmasterComponent
  // },
  // {
  //   path: 'oilmaster',
  //   component: OilmasterComponent
  // },
  // {
  //   path: 'pumpmaster',
  //   component: PumpmasterComponent
  // },
  // {
  //   path: 'shiftmaster',
  //   component: ShiftmasterComponent
  // },
  // {
  //   path: 'oilstock',
  //   component: OilstockComponent
  // },
  // {
  //   path: 'about',
  //   component: AboutComponent,
  //   data: {
  //     title: 'about'
  //   }
  // },
  // {
  //   path:'viewprofile',
  //   component:ViewprofileComponent
  // },




  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
