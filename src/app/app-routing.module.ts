import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HoldingComponent } from './holding/holding.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'holdingtax', component: HoldingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
