import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from './models/role';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vault-as-service';
  
  constructor(private router: Router, private authService: AuthService) { }

  get isAuthorized() {
    return this.authService.isAuthorized();
  }

  get isAdmin() {
    return this.authService.hasRole(Role.Admin);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['signin']);
  }
}
