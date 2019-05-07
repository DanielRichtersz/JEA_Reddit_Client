import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { Redditor } from 'src/app/models/Redditor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  redditor: Redditor;
  errorMsg: String;

  constructor(
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit() {

  }

  public login(username: string, password: string) {
    console.log("Login method in component");
    this.loginService.login(username, password).subscribe(getRedditor => {
      try {
        this.errorMsg = "";
        this.redditor = getRedditor;
        console.log("Redditor: ", this.redditor);
        this.saveLoggedInUser();
  
        this.navigateToUserTimeline();
      }
      catch {
        this.errorMsg = "Something went wrong while logging in, please try again";
      }
    });
  }

  saveLoggedInUser() {
    
  }

  private navigateToUserTimeline() {
    if (this.redditor.username != null && this.redditor.username != "") {
      this.router.navigate(['/redditors/' + this.redditor.username + '/timeline']);
    }
  }
}
