import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InsurerDetail } from 'src/app/models/InsurerDetail';
import { LoginServiceService } from '../login-service.service';

@Injectable({
  providedIn: 'root'
})
export class InsuranceClaimServiceService {

  constructor(private http:HttpClient,private loginService:LoginServiceService) { }

  getInsurers():Observable<InsurerDetail[]>
  {
    //headers will be automatically set for every request by Interceptor
    return this.http.get<InsurerDetail[]>("http://localhost:8500/portal/getAllInsurerDetail");
  }

}
