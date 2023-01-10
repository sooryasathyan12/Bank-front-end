import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

acno:Number=0
transaction:any =[]

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    if(localStorage.getItem("currentAcno")){
      this.acno = Number(localStorage.getItem("currentAcno"))
      console.log(this.acno);

      
    }
    this.apiService.transaction(this.acno)
    .subscribe((result:any)=>{
      this.transaction = result.transaction
      console.log(this.transaction);
      
    })
  }

}
