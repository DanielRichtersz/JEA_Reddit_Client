import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private router: Router, 
    private loginService: LoginService) { }

  ngOnInit() {
  }

  private logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
