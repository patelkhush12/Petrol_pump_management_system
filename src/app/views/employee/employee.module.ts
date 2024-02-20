import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRoutingModule } from './employee-routing.module';
import { ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
    declarations: [
        // LoginComponent,
        // RegisterComponent,
        // Page404Component,
        // Page500Component
        EmployeeComponent
    ],
    imports: [
        CommonModule,
        // PagesRoutingModule,                                   
        CardModule,
        ButtonModule, FormsModule, ReactiveFormsModule,
        GridModule,
        IconModule,
        FormModule,
        EmployeeRoutingModule
    ]
})

export class EmployeeModule {
}
