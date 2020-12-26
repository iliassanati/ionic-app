import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public authenticated : boolean;
  public token : string;

  constructor() { }

  public login(username:string, password:string){
    if(username=='admin' && password=='123456789'){
      this.authenticated=true;
      this.saveToken()
    }else{
      this.authenticated=false;
    }
    return this.authenticated
  } 

  private saveToken(){
    this.token='qwerty';
    localStorage.setItem('myToken', this.token)
  }

  public loadToken(){
this.token = localStorage.getItem('myToken');
if(this.token == 'qwerty'){
  this.authenticated=true;
}else{
  this.authenticated=false
}
return this.authenticated;
  }

  logout(){
    localStorage.removeItem('myToken')
  }
}
