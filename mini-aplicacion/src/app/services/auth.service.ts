import { Injectable } from '@angular/core';
import { UserEntity } from "src/app/model/UserEntity";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  user: UserEntity = {
    mail: '',
    password: ''
  };

  constructor() {}

  login(user: UserEntity): boolean {
    if(user.mail === 'master8@lemoncode.net' && user.password === '12345678') {
      localStorage.setItem('username', user.mail.split('@')[0]);
      return true;
    }
    return false;
  }
  logout(): void {
    localStorage.removeItem('mail');
  }
  isLogged(): boolean {
    return (localStorage.getItem('username') !== null);
  }
  getUsername(): string {
    return localStorage.getItem('username')
  }
}
