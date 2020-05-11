import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './product/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { UserService } from './web-api/user.service';
import { FormsModule } from '@angular/forms';
import { GridModule } from '@progress/kendo-angular-grid';
import { FooterComponent } from './footer/footer/footer.component';
import { HeaderComponent } from './header/header/header.component';
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';
import { UserDetailComponent } from './product/user-detail/user-detail/user-detail.component';
import { NavLinksComponent } from './nav/nav-links/nav-links/nav-links.component';
import { HomePageComponent } from './homePage/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    FooterComponent,
    HeaderComponent,
    UserDetailComponent,
    NavLinksComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    HttpClientModule,
    GridModule,
    ChartsModule
  ],
  providers: [
    HttpClient,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
