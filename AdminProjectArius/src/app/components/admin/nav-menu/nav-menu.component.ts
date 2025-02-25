import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

const USER_KEY = 'auth-sub';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  public jwtHelper: JwtHelperService = new JwtHelperService();

  public isExpanded = false;
  chosseItem = -1;
  constructor(private router: Router) { }
  
  currentUser: any;
  ngOnInit(): void {
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded == !this.isExpanded;
  }

  checkIteam(id: number){
    this.chosseItem = id;
  }

  isUserAuthenticated() {
    const token: string | null = localStorage.getItem("access_token");
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }
    else {
      return false;
    }
  }

  public logOut = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    this.router.navigate(["login"]);
  }
}
