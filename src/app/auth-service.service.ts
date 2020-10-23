import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(public router: Router) { }

  public isAuthenticated(): boolean {
    const login = localStorage.getItem('login');

    const pwd = localStorage.getItem('password');
    // Check whether the token is expired and return
    // true or false

    if(pwd == 'admin' && login == 'admin'){
      return true;
    }else {
      return false
    }

  }

  public login(login, password){
    localStorage.setItem('login',login);
    localStorage.setItem('password', password);
    this.router.navigate(['home']);
  }

  public disconnected(){
    localStorage.setItem('login','');
    localStorage.setItem('password', '');
  }
}
