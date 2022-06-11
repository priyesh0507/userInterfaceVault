import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from "src/app/components/admin/dashboard/DashboardComponent";
import { routes } from './admin-routing.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  providers: []
})
export class AdminModule { }