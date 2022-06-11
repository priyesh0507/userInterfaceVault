import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Role } from 'src/app/models/role';
import { AuthService } from 'src/app/services/auth.service';
import { UserRegistrationService } from 'src/app/services/users/user-registration.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  // Role = Role;
  loginUser: any = FormBuilder;
  users: any = [];

  alertMessage:any = {};

  ngOnInit(): void {
    this.loginUser = this.fb.group({
      password: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])]
    });
  }

  constructor(private router: Router, private userRegistrationService: UserRegistrationService, private fb: FormBuilder) { }

  // login(role: Role) {
  //   this.authService.login(role);
  //   this.router.navigate(['/']);
  // }

  loginSubmit(data: any) {
    console.warn("loginSubmit:: data :------", data);

    if (data.email && data.password) {
      const loginData = {
        email: data.email,
        password: data.password
      };

      this.userRegistrationService.loginRequestService(loginData).subscribe((response: any) => {
        if(response.data){
          localStorage.setItem('isLoggedIn', 'true');
          this.router.navigate(['admin/dashboard']);

          console.warn("user logged in successfuly ::data------", response.data);
        }else{
          localStorage.clear();
          this.router.navigate(['signin']);
          this.alertMessage = {message:"Invalid email/password combination", color:"red"};
        }
      });

    }


  }

}
