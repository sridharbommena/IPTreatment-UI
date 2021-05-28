import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { UnauthorizedComponent } from './error/unauthorized/unauthorized.component';
import { Error404Component } from './error/error404/error404.component';
import { ViewInsurersComponent } from './components/view-insurers/view-insurers.component';
import { HttpConfigInterceptor } from './interceptor/httpconfig.interceptor';
import { InsurerNamesComponent } from './components/insurer-names/insurer-names.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AdminPageComponent,
    UserPageComponent,
    UnauthorizedComponent,
    Error404Component,
    ViewInsurersComponent,
    InsurerNamesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
