import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddaccountComponent } from './addaccount/addaccount.component';
import { BalancecheckComponent } from './balancecheck/balancecheck.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { RdfComponent } from './rdf/rdf.component';
import { TdfComponent } from './tdf/tdf.component';

const routes: Routes = [
  {
    path:"addaccound",
    component:AddaccountComponent
  },
  {
    path:'balancecheck',
    component:BalancecheckComponent
  },
  {
     path:'pipedemo',
     component:PipedemoComponent
   },
   {
     path:'rdf',
     component:RdfComponent
   },
   { path:'tdf',
   component:TdfComponent

   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
