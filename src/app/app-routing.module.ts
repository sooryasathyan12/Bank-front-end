import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeleteConfirmComponent } from './delete-confirm/delete-confirm.component';
import { DepositComponent } from './deposit/deposit.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TransactionComponent } from './transaction/transaction.component';
import { WithdrawalComponent } from './withdrawal/withdrawal.component';
// import { AppComponent } from './app.component';

const routes: Routes = [
  //login
  {
    path:'',component:LoginComponent
  },
  //register
  {
    path:'view register',component:RegisterComponent
  },
  {
    path:'view-deposit',component:DepositComponent
  },
  {
    path:'view-withdrawal',component:WithdrawalComponent
  },
  //DashboardComponent
  {
    path:'dashboard',component:DashboardComponent
  },
  //transactionComponent
  {
    path:'transaction',component:TransactionComponent
  },
    //DeleteConfirmComponent
    {
      path:'DeleteConfirm',component:DeleteConfirmComponent
    }
  
  




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
