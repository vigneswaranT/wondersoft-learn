import { Component, OnInit } from '@angular/core';
import { DemosService } from '../demos.service';

@Component({
  selector: 'app-pasha',
  templateUrl: './pasha.component.html',
  styleUrls: ['./pasha.component.css']
})
export class PashaComponent implements OnInit {

  constructor(private cs:DemosService) { }

  ngOnInit(): void {
  }
  msgs=[]
  
  send(mymsg:any){
    this.msgs=this.cs.chat(mymsg);
  }
}
