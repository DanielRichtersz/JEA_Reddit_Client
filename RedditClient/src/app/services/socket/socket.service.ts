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

  public openTestSocket() {
    console.log("Opening test socket");
    this.socket = new $WebSocket('ws://localhost:8080/WebSocketServer/endpoint');
    this.socket.onopen = function () {
      console.log("SOCKET Connected");
    }
    this.socket.onmessage = function (event) {
      var text = event.data;
      console.log(text);
    };
  }

  public open() {
    console.log("Opening timeline socket");
    let currentUser = this.loginService.currentUserValue;

    if (!currentUser) {
      this.router.navigate(['/login']);
    }
    console.log("Socket.Service.Open() Username: " + currentUser.username);
    this.socket = new $WebSocket('ws://localhost:8080/WebSocketServer/timeline/' + currentUser.username);
    this.socket.onopen = function () {
      console.log("SOCKET Connected");
    }
    this.socket.onmessage = function (event) {
      var text = event.data;
      console.log(text);
    };
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
