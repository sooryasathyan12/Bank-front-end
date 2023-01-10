import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  registerform=this.fb.group({

    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],

      acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
      pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  
  
  })
 
  constructor(private fb:FormBuilder,private api:ApiService) { }


  ngOnInit(): void {
  }
    register(){
      var uname = this.registerform.value.uname
      var acno = this.registerform.value.acno
      var pswd = this.registerform.value.pswd

  
      if(this.registerform.valid){
        //asynchrouns
        this.api.register(acno,pswd,uname)
        .subscribe((result:any)=>{
          alert(result.message)
        },
        //if client error -4xx
        (result:any)=>{
          alert(result.error.message)
        }
        )
      }
      else{
        alert('Invalid form')
  
      }
  
    }
  
 

}
