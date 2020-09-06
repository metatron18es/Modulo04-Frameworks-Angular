import { Component, OnInit, DoCheck } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from '@angular/router';
import { faHome, faInfoCircle, faSignInAlt, faSignOutAlt, faTh, faPhotoVideo, faUser, faDatabase } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  isLogged: boolean = false;
  username: string = 'Guest'
  faHome = faHome;
  faInfoCircle = faInfoCircle;
  faSignInAlt = faSignInAlt;
  faSignOutAlt = faSignOutAlt;
  faTh = faTh;
  faPhotoVideo = faPhotoVideo;
  faUser = faUser;
  faDatabase = faDatabase;

  constructor(private authService: AuthService, private router: Router) { }
  


  ngOnInit(): void {
    this.authService.getIsLogged$().subscribe( isLogged => this._isLogged(isLogged) );
    this._isLogged(this.authService.isLogged());
  }

  _isLogged(status) {
    this.isLogged = status;
    this.username  = status ? this.authService.getUsername() : 'Guest';
  }

  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/');
  }

}
