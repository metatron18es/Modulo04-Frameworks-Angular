import { Component, OnInit } from '@angular/core';
import { AuthService } from "src/app/services/auth.service";
import { UserEntity } from "src/app/model/UserEntity";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: UserEntity = {
    mail: '',
    password: ''
  };
  errorLogin: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }
  
  login() {
    if(this.authService.login(this.user)) {
      this.errorLogin = false;
      this.router.navigateByUrl('profile');
    } else {
      this.errorLogin = true;
    }
  }

}
