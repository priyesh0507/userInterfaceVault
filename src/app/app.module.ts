import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SearchPopupComponent } from './components/search-popup/search-popup.component';
import { FooterToTopComponent } from './components/footer-to-top/footer-to-top.component';
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu.component';
import { CarouselSliderComponent } from './components/carousel-slider/carousel-slider.component';
import { FeatureComponent } from './components/feature/feature.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { TokenSectionComponent } from './components/token-section/token-section.component';
import { ServiceSectionComponent } from './components/service-section/service-section.component';
import { ServiceSectionOneComponent } from './components/service-section-one/service-section-one.component';
import { TableSectionComponent } from './components/table-section/table-section.component';
import { RoadMapSectionComponent } from './components/road-map-section/road-map-section.component';
import { GraphSectionComponent } from './components/graph-section/graph-section.component';
import { CallSectionComponent } from './components/call-section/call-section.component';
import { TeamSectionComponent } from './components/team-section/team-section.component';
import { FaqSectionComponent } from './components/faq-section/faq-section.component';
import { BlogSectionComponent } from './components/blog-section/blog-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { RequestForTokenComponent } from './components/request-for-token/request-for-token.component';
import { AboutThalesVaultsComponent } from './components/about-thales-vaults/about-thales-vaults.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RoadMapComponent } from './components/road-map/road-map.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { AuthGuard } from './app-routing.guard';
import { AuthService } from './services/auth.service';
import { UserRoleDirective } from './directives/user-role.directive';
import { UserDirective } from './directives/user.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './components/user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    SearchPopupComponent,
    FooterToTopComponent,
    MobileMenuComponent,
    CarouselSliderComponent,
    FeatureComponent,
    AboutSectionComponent,
    TokenSectionComponent,
    ServiceSectionComponent,
    ServiceSectionOneComponent,
    TableSectionComponent,
    RoadMapSectionComponent,
    GraphSectionComponent,
    CallSectionComponent,
    TeamSectionComponent,
    FaqSectionComponent,
    BlogSectionComponent,
    ContactSectionComponent,
    RequestForTokenComponent,
    AboutThalesVaultsComponent,
    HomeComponent,
    NotFoundComponent,
    RoadMapComponent,
    ContactUsComponent,
    SignupComponent,
    SigninComponent,
    UserDirective,
    UserRoleDirective,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
