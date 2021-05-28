import { Component, OnInit } from '@angular/core';
import { InsuranceClaimServiceService } from 'src/app/service/insurance-claim-service/insurance-claim-service.service';

@Component({
  selector: 'insurer-names',
  templateUrl: './insurer-names.component.html',
  styleUrls: ['./insurer-names.component.css']
})
export class InsurerNamesComponent implements OnInit {

  insurerNames:string[] = []
  constructor(private service:InsuranceClaimServiceService) { }

  ngOnInit(): void {
  }

  getInsurerNames()
  {
    this.service.getInsurerNames().subscribe(
      (success)=>{
        this.insurerNames = success;
      },
      (error:string)=>{
        console.log(error);
      });
  }

}
