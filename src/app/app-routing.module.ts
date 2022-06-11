import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './app-routing.guard';
import { AboutThalesVaultsComponent } from './components/about-thales-vaults/about-thales-vaults.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RequestForTokenComponent } from './components/request-for-token/request-for-token.component';
import { RoadMapComponent } from './components/road-map/road-map.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { Role } from './models/role';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'about-thales-vaults',
    component:AboutThalesVaultsComponent
  },
  {
    path:'request-for-token',
    component:RequestForTokenComponent
  },
  {
    path:'road-map',
    component:RoadMapComponent
  },
  {
    path:'contact-us',
    component:ContactUsComponent
  },
  {
    path:'get-token',
    component:SignupComponent
  },
  {
    path:'signin',
    component:SigninComponent
  },
  {
    path: 'admin',
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
    loadChildren: () => import('./routing/admin/admin-routing/admin.module').then(m => m.AdminModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
