import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'insurer-names',
  templateUrl: './insurer-names.component.html',
  styleUrls: ['./insurer-names.component.css']
})
export class InsurerNamesComponent implements OnInit {

  insurerNames:string[] = []
  constructor() { }

  ngOnInit(): void {
  }

  getInsurerNames()
  {
    
  }

}
