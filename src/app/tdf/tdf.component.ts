import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
//   onSubmit(mydata:NgForm){
//   console.log(mydata)
//   }
onSubmit(mydata:NgForm){
  console.log(mydata)

}

}
