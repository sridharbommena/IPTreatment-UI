import { Component, OnInit } from '@angular/core';
import { InsurerDetail } from 'src/app/models/InsurerDetail';
import { InsuranceClaimServiceService } from 'src/app/service/insurance-claim-service/insurance-claim-service.service';

@Component({
  selector: 'view-insurers',
  templateUrl: './view-insurers.component.html',
  styleUrls: ['./view-insurers.component.css']
})
export class ViewInsurersComponent implements OnInit {

  insurers:InsurerDetail[] = [];

  constructor(private service:InsuranceClaimServiceService) { }

  ngOnInit(): void {
  }

  getInsurerDetail()
  {
    this.service.getInsurers().subscribe(
      (success)=>{
        //assign data to the local variable
        this.insurers = success;
      },
      (error)=>{
        console.log("error");
        console.log(error);
      });

  }

}
