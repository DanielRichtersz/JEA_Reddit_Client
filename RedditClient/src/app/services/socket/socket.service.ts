import { Injectable, HostListener } from '@angular/core';
import { $WebSocket } from 'angular2-websocket/angular2-websocket'
import { Post } from 'src/app/models/Post';
import { LoginService } from '../login/login.service';
import { LogoutComponent } from 'src/app/components/logout/logout.component';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  socket: any;

  constructor(
    private loginService: LoginService,
    private router: Router) {

  }

  public send(post: Post) {
    this.socket.send(post).subscribe(
      (msg) => {
        // console.log("next", msg.data);
      },
      (msg) => {
        console.log("Error: ", msg);
      },
      () => {
        // console.log("complete");
      }
    );

  }

  public open() {
    let currentUser = this.loginService.currentUserValue;  

    if (!currentUser) {
      this.router.navigate(['/login']);
    }
    console.log("Username: " + currentUser.username);
    this.socket = new $WebSocket("ws://127.0.0.1:8080/timeline/" + currentUser.username);
  }

  public receive() {
    return this.socket.getDataStream();
  }

  public close() {
    if (this.socket) {
      this.socket.close();
    }
  }

  @HostListener('window:beforeunload', ['$event'])
  public handleBeforeUnload(event) {
    this.socket.close();
  }
}
