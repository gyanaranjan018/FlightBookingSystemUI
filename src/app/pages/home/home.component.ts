import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private authService: AuthService, private router: Router ) { }

  ngOnInit(): void {
  }
  showNavBar = false;

  isLoggedIn = () => {
    return this.authService.isLoggedIn();
  };

  onLogout = () => {
    this.authService.logOut();
    this.router.navigate(['/login']);
  };

  toggleNavBar = () => {
    this.showNavBar = !this.showNavBar;
  };
}
