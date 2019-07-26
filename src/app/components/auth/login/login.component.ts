import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginUserData = {email:'', password: ''};
  user_id;
  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit() {
  }
  loginUser() {
    // console.log(this.loginUserData);
    this._auth.loginUser(this.loginUserData)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token', res.token);
          this.user_id = res.id;
          this._auth.saveUserId(this.user_id);
          this._router.navigate(['']);
        },
        err => console.log(err)
      );
  }

}


