import { Injectable } from '@angular/core';
import { UserEntity } from "src/app/model/UserEntity";
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private isLogged$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  user: UserEntity = {
    mail: '',
    password: ''
  };

  constructor() {}

  login(user: UserEntity): boolean {
    if(user.mail === 'master8@lemoncode.net' && user.password === '12345678') {
      localStorage.setItem('username', user.mail.split('@')[0]);
      this.isLogged$.next(true);
      return true;
    }
    return false;
  }
  logout(): void {
    localStorage.removeItem('username');
    this.isLogged$.next(false);
  }
  isLogged(): boolean {
    return (localStorage.getItem('username') !== null);
  }
  getIsLogged$(): Observable<boolean> {
    return this.isLogged$.asObservable();
  }
  getUsername(): string {
    return localStorage.getItem('username')
  }
}
