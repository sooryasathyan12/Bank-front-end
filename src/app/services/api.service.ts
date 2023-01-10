import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
const options ={
  headers:new HttpHeaders()
}
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private api:HttpClient) { }
  // 1. login Api -asynchronous
  login(acno:any,pswd:any){
    const body={
      acno,
      pswd
    }
    return this.api.post('http://localhost:3000/login',body)
  }
  // 2.register api
  register(acno:any,pswd:any,uname:any){
    const body={
      acno,
      pswd,
      uname 
       
    }
    return this.api.post('http://localhost:3000/register',body)
    
  }
  
  // to insert token in a http header
getToken(){
  // 1.get token from local storage
    const token = localStorage.getItem("token")
   // 2.create http header
  let headers = new HttpHeaders()

  // 3. insert token inside header
  if (token){
headers =headers.append("access-token",token)
// to achieve function overloading
options.headers=headers
  }
  return options
}

  // 3.deposit api
  deposit(acno:any,pswd:any,amt:any){
    const body={
      acno,
      pswd,
      amt 
       
    }
    return this.api.post('http://localhost:3000/deposit',body,this.getToken())
    
  }


    // 3.withdraw api
    withdraw(acno:any,pswd:any,amt:any){
      const body={
        acno,
        pswd,
        amt 
         
      }
      return this.api.post('http://localhost:3000/withdraw',body,this.getToken())
      
    }
  //5.transaction API -Asynchr
  transaction(acno:any){
    return this.api.get('http://localhost:3000/transaction/'+acno,this.getToken())

  }
  //6.delete api - asynchronous
  deleteAcc(acno:any){
    return this.api.delete('http://localhost:3000/deleteAcno/'+acno,this.getToken())
 
  }
}