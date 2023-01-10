import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({

    acno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  })
  constructor(private fb: FormBuilder, private api: ApiService, private route: Router) { }

  ngOnInit(): void {
  }
  login() {
    var acno = this.loginForm.value.acno
    var pswd = this.loginForm.value.pswd

    if (this.loginForm.valid) {
      //asynchronous
      this.api.login(acno, pswd)
        .subscribe((result: any) => {
          console.log(result);

          // store username in local storage
          localStorage.setItem("username", result.username)
          // store token
          localStorage.setItem("token", result.token)
          // store currentAcno
          localStorage.setItem("currentAcno", result.currentAcno)

          alert(result.message)
        },
          //if client error  -4xx)
          (result: any) => {
            alert(result.error.message)
          })
      this.route.navigateByUrl('dashboard')



    }
    else {
      alert("Invalid Form")
    }

  }

}