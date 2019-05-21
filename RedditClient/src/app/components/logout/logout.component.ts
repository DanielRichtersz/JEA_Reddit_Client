import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';
import { SocketService } from 'src/app/services/socket/socket.service';
import { Redditor } from 'src/app/models/Redditor';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  private redditor: Redditor;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private socketService: SocketService) { }

  ngOnInit() {
    this.redditor = this.loginService.currentUserValue;
  }

  private logout() {
    this.loginService.logout();
    this.socketService.close();
    this.router.navigate(['/login']);
  }
}
