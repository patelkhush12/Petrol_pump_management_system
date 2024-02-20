import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, EmailValidator } from '@angular/forms';
import { Loginmodels } from './loginmodel'
import { ApiService } from '../../common/api.service';
import { Router } from '@angular/router';
import { __values } from 'tslib';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  cloginForm!: FormGroup
  submitted: boolean = false
  // customStylesValidated: boolean = false
  loginOnj: Loginmodels = new Loginmodels();
  invalidmsg = ""
  // data: any
  UserID: any ;
  constructor(private formBuildir: FormBuilder, private api: ApiService, private router: Router) {
    console.log("this is login page")
  }
  ngOnInit() {
    this.cloginForm = this.formBuildir.group({
      email:['',Validators.required],
      password:['',Validators.required],
    })
  }

  
  login() {
    console.log(this.cloginForm)
    console.log(this.loginOnj.email)
    console.log(this.loginOnj.password)


    this.submitted = true
    if (this.cloginForm.valid) {
      console.log(this.loginOnj);
      
      this.loginOnj.email  = this.cloginForm.value.email;
      this.loginOnj.password = this.cloginForm.value.password;
      this.api.login(this.loginOnj).subscribe(Response => {
        console.log(Response)
        
        
        if (JSON.parse(Response.success)) {

          const UserID = this.UserID?.Response.UserID;
          localStorage.setItem('UserID',JSON.stringify(Response));
          localStorage.setItem('UserID',Response.UserID);

          
          this.router.navigate(['dashboard']);
          this.cloginForm.reset();
          this.submitted = false
          this.invalidmsg = ""
        }
        else{
          this.invalidmsg = "invalid username or password"
          // alert("something went worng")
        }
      },
        err => {
          alert("server not found");
        })
    }
  }

//  login(){
//    {
//     this.submitted = true
//     if (this.cloginForm.valid) {
//       this.loginOnj.EmailId = this.cloginForm.value.EmailId
//       this.loginOnj.Password = this.cloginForm.value.Password
//       console.log(this.loginOnj)
//       if (this.cloginForm.valid) {
//         console.log("in side login")
//         this.api.login(this.loginOnj).subscribe({
//           next: (Response) => {
//             console.log(Response)

//             if (JSON.parse(Response.success) ) {
//               console.log(Response)
             
              
//               localStorage.setItem('UserId', Response.api.UserId)

//               this.router.navigate(['/dashboard'])
//             } else {
             
//             }

//           },
//           error: () => {
//             alert('Error Happen')
//           }
//         })
//       }
//     }
//   }
//  }

}