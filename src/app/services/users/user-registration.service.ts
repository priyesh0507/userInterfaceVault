import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUserService } from '../../interfaces/users/user-service'
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {
  apiEndPoint: any = "http://restapi.adequateshop.com/api/" ; //environment.apiEndPoint;  //"http://localhost:8088/userRequest";
  // register : http://restapi.adequateshop.com/api/authaccount/registration
  /**
   * {
        "name":"Developer",
        "email":"Developer5@gmail.com",
        "password":123456
      }
   */
  // login: http://restapi.adequateshop.com/api/authaccount/login
  /**
   * {
        "email":"Developer5@gmail.com",
        "password":123456
      }
   * 
   */

  userServiceData?: IUserService
  
  headers = new HttpHeaders()
   .append('content-type', 'application/json')
   .append('Access-Control-Allow-Origin', ['http://localhost:8088', 'http://localhost:4200'])
   .append('Access-Control-Allow-Credentials', 'true');

  constructor(private http: HttpClient) {   }

  getAllRequests(){
    return this.http.get(this.apiEndPoint+'/InProgress');
  }
  
  registerRequest(data: any) {
    console.warn("UserRegistrationService::data---",data);
    
    const userData = {
      "name": "amerjeet",
      "email": "ashu@gmail.com",
      "requestStatus": "InProgress",
      "status": true,
      "comment": "me ashutosh",
      "organization": "Thales"
    }
    console.warn("console.log(headers):_--",this.headers);

    return this.http.post(this.apiEndPoint,userData);
  }

  loginRequestService(data: any){
    return this.http.post(this.apiEndPoint+'/authaccount/login',data);
  }

}
