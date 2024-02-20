import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
@NgModule({
  declarations: [
   ViewprofileComponent
  ],
  imports: [                                            
    CommonModule,                                         
    ProfileRoutingModule,                                   
    CardModule,
    ButtonModule,FormsModule, ReactiveFormsModule ,
    GridModule,
    IconModule,
    FormModule
  ]
})
export class ProfileModule {
}
