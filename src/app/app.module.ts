import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AshaComponent } from './asha/asha.component';
import { PashaComponent } from './pasha/pasha.component';
// import { BankComponent } from './bank/bank.component';
import { AddaccountComponent } from './addaccount/addaccount.component';
import { BalancecheckComponent } from './balancecheck/balancecheck.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { SqrPipe } from './sqr.pipe';
import { CubePipe } from './cube.pipe';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';
import { TdfComponent } from './tdf/tdf.component';
import { RdfComponent } from './rdf/rdf.component';
import { from } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AshaComponent,
    PashaComponent,
    // BankComponent,
    AddaccountComponent,
    BalancecheckComponent,
    PipedemoComponent,
    SqrPipe,
    CubePipe,
    LifecyclehooksComponent,
    TdfComponent,
    RdfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
