import { Component, OnInit } from '@angular/core';
import { DemosService } from '../demos.service';

@Component({
  selector: 'app-asha',
  templateUrl: './asha.component.html',
  styleUrls: ['./asha.component.css']
})
export class AshaComponent implements OnInit {

  constructor(private cs:DemosService) { }

  ngOnInit(): void {
  }
  msgs=[]
  
send(mymsg:any){
  this.msgs=this.cs.chat(mymsg);
}
}