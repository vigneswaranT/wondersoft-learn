import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecyclehooks',
  templateUrl: './lifecyclehooks.component.html',
  styleUrls: ['./lifecyclehooks.component.css']
})
export class LifecyclehooksComponent implements OnInit ,OnDestroy{

  constructor() {
    console.log("hi constructro")
   }
  ngOnDestroy(): void {
    console.log("hai destroy method close")
    //throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    console.log("database :db connection //")
  }

}
