import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private readonly notifier: NotifierService;

  public registerUserData = { username: '', email: '', password: '' };
  constructor(private _auth: AuthService, private _router: Router, private notifierService: NotifierService, ) {

    this.notifier = notifierService;
  }
  isLoading = false;
  ngOnInit() {
  }
  registerUser() {
    this.isLoading = true;
    // console.log(this.registerUserData);
    if (!this.validateEmail(this.registerUserData.email)) {

      this.isLoading = false;
      this.notifier.notify('error', 'Enter a valid email')
    }
    else if (!this.checklength(this.registerUserData.password)) {
      this.isLoading = false;
      this.notifier.notify('error', 'Password must be at least 6 characters')
    }
    else {
      this._auth.registerUser(this.registerUserData)
        .subscribe(
          res => {
            console.log(res)
            this.notifier.notify('success', 'Registration Successful');
            this._router.navigate(['profile']);
          },

          err => {
            console.log(err)
            this.isLoading = false;
            this.notifier.notify('error', 'Looks like that email is already used');
          }

        );
    }

  }
  checklength(pass) {
    console.log(pass)
    if (pass.length < 6) {
      return false;
    } else {
      return true;
    }
  }
  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}

