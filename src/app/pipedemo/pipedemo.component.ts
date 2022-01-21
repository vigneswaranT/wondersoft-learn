import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {
 
  
  str:string='hello everybody'
  emp:any={'name':"vignesh",'age':25}
  d1:any=Date();
  amount=1772891827;


  
  constructor() { }
 
  
  
  ngOnInit(): void {
  }

}
