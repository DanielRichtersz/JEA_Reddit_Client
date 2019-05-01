import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { Redditor } from 'src/app/models/Redditor';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  redditor: Redditor;
  errorMsg: String;

  constructor(
    private route: ActivatedRoute,
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
        console.log("Redditor: ");
        console.log(this.redditor);
        console.log(this.redditor.id);
        console.log(this.redditor.username);
        console.log(this.redditor.password);
  
        this.navigateToUserTimeline();
      }
      catch {
        this.errorMsg = "Something went wrong while logging in, please try again";
      }
    });
  }

  private navigateToUserTimeline() {
    if (this.redditor.username != null && this.redditor.username != "") {
      this.router.navigate(['/redditors/' + this.redditor.username + '/timeline']);
    }
  }
}
