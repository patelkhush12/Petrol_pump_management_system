import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import { Registermodels } from './registermodel'
import { Router } from '@angular/router';
import { ApiService } from '../../common/api.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  csignupForm!: FormGroup
  submitted = false
  customStylesValidated: boolean = false
  registerOnj: Registermodels = new Registermodels();
  // data: any;


  constructor(private formBuildir: FormBuilder, private router: Router, private api: ApiService) {
    console.log("this is register page")
  }
  ngOnInit() {
    this.csignupForm = this.formBuildir.group({
      email:['',Validators.required],
      PetrolPumpName:['',Validators.required],
      Branch:['',Validators.required],

      password:['', Validators.required],
      confirmPassword:['', Validators.required],
    },
      {
        Validators: this.mustmatch('password', 'confirmPassword')
      }
      )


  }
  mustmatch(controlName: string, matchingControlName: string) {
    console.log(controlName);
    
    return (FormGroup: FormGroup) => {
      const control = FormGroup.controls[controlName]

      const matchingControl = FormGroup.controls[matchingControlName]
      if (matchingControl.errors && !matchingControl.errors['mustmatch']) {
        return
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustmatch: true })
      }
      else {
        matchingControl.setErrors(null)
      }
    }
  }
  signup() {
    // console.log(this.registerOnj.email)
    console.log(this.csignupForm.valid)
    console.log(this.registerOnj.confirmPassword);
    
    this.submitted = true;
    if (this.csignupForm.valid) {
      this.registerOnj.email = this.csignupForm.value.email;
      this.registerOnj.PetrolPumpName = this.csignupForm.value.PetrolPumpName;
      this.registerOnj.Branch  = this.csignupForm.value.Branch ;
      this.registerOnj.password = this.csignupForm.value.password;
      this.registerOnj.confirmPassword = this.csignupForm.value.confirmPassword;
      this.api.signup(this.registerOnj).subscribe(Response => {
        console.log(Response);
        alert("register Successfully !")
        this.router.navigate(['login']);
        this.submitted = false
        this.csignupForm.reset();
        // this.getAllStudent();
      },
        err => {
          alert("something went Wrong !");
        })
    }
  }
}