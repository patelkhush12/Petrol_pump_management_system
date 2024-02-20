import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  ShiftwiseentryComponent } from './shiftwiseentry/shiftwiseentry.component'
import {  ShiftwiseentrylistComponent } from './shiftwiseentrylist/shiftwiseentrylist.component'
import { ShiftssettingComponent } from './shiftssetting/shiftssetting.component'
const routes: Routes = [

    {
        path: 'shiftwiseentry',
        component: ShiftwiseentryComponent,
        data: {
          title: 'shiftwiseentry'
        }
      },
      {
        path: 'shiftwiseentrylist',
        component: ShiftwiseentrylistComponent,
        data: {
          title: 'shiftwiseentrylist'
        }
      },
      {
        path: 'shiftssetting',
        component: ShiftssettingComponent,
        data: {
          title: 'shiftwiseentrylist'
        }
      },
 
    ]
    @NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
      })
      export class PumpsRoutingModule {
      }
    