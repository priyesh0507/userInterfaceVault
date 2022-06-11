import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserRegistrationService } from '../../services/users/user-registration.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerUser:any = FormGroup;

  constructor(private fb:FormBuilder, private userRegistrationService:UserRegistrationService) { }

  ngOnInit(): void {
    this.registerUser =  this.fb.group({
      username:['', Validators.required],
      organization:['', Validators.required],
      email:['', Validators.compose([Validators.required,Validators.email])],
      userId:['', Validators.required],
      requestFor:['', Validators.required]
    });
  }

  getAllRequests(){
    this.userRegistrationService.getAllRequests().subscribe((data:any)=>{
      console.warn("getAllRequests::data------",data);
    });
  }

  registerSubmit(data:any){

    const userDataComp = {
      "name": "amerjeet",
      "email": "ashu@gmail.com",
      "requestStatus": "InProgress",
      "status": true,
      "comment": "me ashutosh",
      "organization": "Thales"
    }
    
    const userDataComp2 = {
      "name": "amerjeet",
      "email": "ashu@gmail.com",
      "requestStatus": "InProgress",
      "status": true,
      "comment": "me ashutosh",
      "organization": "Thales"
    }

    console.warn("data---",data);
    this.userRegistrationService.registerRequest(userDataComp).subscribe((data:any)=>{
      console.warn("fromComponent::data------",data);
      
    });
  }

}
