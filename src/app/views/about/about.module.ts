import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from  './about-routing.module';
import { AboutComponent } from './about.component';
import { ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    // LoginComponent,
    // RegisterComponent,
    // Page404Component,
    // Page500Component
    AboutComponent
  ],
  imports: [                                            
    CommonModule,                                         
    // PagesRoutingModule,                                   
    CardModule,
    ButtonModule,FormsModule, ReactiveFormsModule ,
    GridModule,
    IconModule,
    FormModule,
    AboutRoutingModule
  ]
})
export class AboutModule {
}
