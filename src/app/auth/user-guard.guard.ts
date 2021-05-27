import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginServiceService } from '../service/login-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuardGuard implements CanActivate {

  constructor(private service:LoginServiceService,private router:Router){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(this.service.getUser()==null)
      {
        this.router.navigateByUrl("/401");
        return false;
      }  
      if(this.service.getUser().startsWith("user"))
      {
        return true;
      }
      else
      {
        this.router.navigateByUrl("/401");
        return false;
      }
    
  }
  
}
