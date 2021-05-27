import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuardGuard } from './auth/admin-guard.guard';
import { UserGuardGuard } from './auth/user-guard.guard';
import { Error404Component } from './error/error404/error404.component';
import { UnauthorizedComponent } from './error/unauthorized/unauthorized.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';

const routes: Routes = [
  { 
    path:"" , 
    redirectTo: "/login" ,
    pathMatch:"full"
  },
  {
    path:"login",
    component:LoginPageComponent,    
  },
  { 
    path:"admin",
    component : AdminPageComponent,
    pathMatch:"full",
    canActivate : [AdminGuardGuard]
  },
  { 
    path: "user",
    component : UserPageComponent,
    pathMatch:"full",
    canActivate : [UserGuardGuard]
  },
  {
    path:"401",
    component : UnauthorizedComponent,
    pathMatch : "full"
  },
  {
    path:"**",
    pathMatch:"full",
    component:Error404Component,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
