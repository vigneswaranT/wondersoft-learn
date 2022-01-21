// import { Component, OnInit } from '@angular/core';


// @Component({
//   selector: 'app-bank',
//   templateUrl: './bank.component.html',
//   styleUrls: ['./bank.component.css']
// })
// export class BankComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }
//   total: any = "0";
//   emi: any = "0";
//   calculateValue(pAmount: any, duration: any, loanType: any) {
//     var mytotal: any = 0;
//     var rateOfInterest: any = loanType / (12 * 100);
//     mytotal = pAmount * rateOfInterest * Math.pow(1 + rateOfInterest, duration) / (Math.pow(1 + rateOfInterest, duration) - 1);
//     this.total = Math.round(mytotal * duration);
//     this.emi = Math.round(mytotal);
//   }

// }
