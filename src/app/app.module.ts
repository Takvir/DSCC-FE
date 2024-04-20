import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DataFormComponent } from './data-form/data-form.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HoldingComponent } from './holding/holding.component';

@NgModule({
  declarations: [
    AppComponent,
    DataFormComponent,
    LoginComponent,
    HoldingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
