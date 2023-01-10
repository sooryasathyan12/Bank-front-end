import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // username
  user="";

  //to hold accont to be deleted
  acno:any;

  depositForm=this.fb.group({

  acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
  amt:['',[Validators.required,Validators.pattern('[0-9]*')]]
})
withdrawForm=this.fb.group({

  acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
  amt:['',[Validators.required,Validators.pattern('[0-9]*')]]
})
constructor(private fb:FormBuilder,private api:ApiService , private router:Router ) { }

ngOnInit(): void {
  if(localStorage.getItem("username")){
    this.user=localStorage.getItem("username") ||''

  }
  if(!localStorage.getItem("username")){
    alert('please log in')
    this.router.navigateByUrl('')
  }





}


withdraw(){ 
  var acno=this.withdrawForm.value.acno
  var pswd=this.withdrawForm.value.pswd
 var amt=this.withdrawForm.value.amt
  if(this.withdrawForm.valid){
    //asynchronous
    this.api.withdraw(acno,pswd,amt)
    .subscribe((result:any)=>{

      alert(result.message)
    },
    //if client error  -4xx)
    (result:any)=>{
      alert(result.error.message)
    }
    )
    
    
  }
  else{
    alert("Invalid Form")
  }

}


deposit(){ 
  var acno=this.depositForm.value.acno
  var pswd=this.depositForm.value.pswd
 var amt=this.depositForm.value.amt
  if(this.depositForm.valid){
    //asynchronous
    this.api.deposit(acno,pswd,amt)
    .subscribe((result:any)=>{

      alert(result.message)
    },
    //if client error  -4xx)
    (result:any)=>{
      alert(result.error.message)
    }
    )
    
    
  }
  else{
    alert("Invalid Form")
  }

}
//logout
logout(){
  //remove existing user details from localstorag
  localStorage.removeItem("username")
  localStorage.removeItem("token")
  localStorage.removeItem("currentAcno")
  //redirect to login page

  this.router.navigateByUrl('')
 
}
//delete()to displat
delete(){
  this.acno =localStorage.getItem("currentAcno")
}
//cancel() delete
cancel(){
  this.acno=""

}
onDelete(event:any){
  alert('from parent:'+ event)
  //make an call to service to delete the parent acnd
  this.api.deleteAcc(event)
  .subscribe((result:any)=>{
    alert(result.message)
    this.logout()

  },
  result=>{
    alert(result.error.message)
  }
  )

}

}