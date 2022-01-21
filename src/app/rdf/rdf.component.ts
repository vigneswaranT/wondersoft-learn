import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators}from"@angular/forms";
@Component({
  selector: 'app-rdf',
  templateUrl: './rdf.component.html',
  styleUrls: ['./rdf.component.css']
})
export class RdfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
loginForm=new FormGroup({
  email1:new FormControl('',Validators.required),
  pswd1:new FormControl('',[Validators.required,Validators.minLength(6)])
})
get email1(){
  return this.loginForm.controls;

}get pswd1(){
  return this.loginForm.controls;

}

}

