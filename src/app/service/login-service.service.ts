import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenResponse } from '../models/TokenResponse';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http:HttpClient) { }

  authenticate(userDetails):Observable<TokenResponse>
  {
    return this.http.post<TokenResponse>("http://localhost:8500/portal/login",userDetails);
  }

  loginUser(token)
  {
    sessionStorage.setItem("token",token);
    // console.log(token);
    return true;
  }

  saveUser(username)
  {
    sessionStorage.setItem("user",username);
    return true;
  }

  getUser()
  {
    return sessionStorage.getItem("user");
  }

  isLoggedIn()
  {
    let token = sessionStorage.getItem("token");
    if(token==null || token==undefined || token=="")
      return false;
    else
      return true;
  }
  
  logOut()
  {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    return true;
  }

  getToken()
  {
    return sessionStorage.getItem("token");
  }
  
}
