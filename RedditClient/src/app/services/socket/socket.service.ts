import { Injectable } from '@angular/core';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private socket: any;

  constructor(private loginService: LoginService) { }


}
