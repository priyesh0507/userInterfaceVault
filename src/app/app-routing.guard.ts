import { CanActivate, CanLoad, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router, ActivatedRouteSnapshot, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Role } from './models/role';
import { state } from '@angular/animations';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
    constructor(
        private router: Router,
        private authService: AuthService
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state:RouterStateSnapshot
        ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean {

        console.warn("canActivate::this.authService------",this.authService);
        console.warn("canActivate::this.authService.isAuthorized()------",this.authService.isAuthorized());


        if (localStorage.getItem('isLoggedIn') === 'true') {

            const roles = route.data['roles'] as Role[];
            if (roles && !roles.some(r => this.authService.hasRole(r))) {
                this.router.navigate(['error', 'not-found']);
                return false;
            }
            return true;
      
        }else{
            this.router.navigate(['signin']);
            return false;
        }


    }

    canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {

        console.warn("canLoad::this.authService------",this.authService);
        console.warn("canActivate::this.authService.isAuthorized()------",this.authService.isAuthorized());
        
        if (localStorage.getItem('isLoggedIn') === 'true') {
            return true;
        }else{
            return false;
        }
    }
        
}