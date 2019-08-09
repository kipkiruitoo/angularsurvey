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
    this._auth.registerUser(this.registerUserData)
      .subscribe(
        res => {
          console.log(res)
          this.notifier.notify('success', 'Registration Successful');
          this._router.navigate(['login']);
        },

        err => {
          console.log(err)
          this.isLoading = false;
        }

      );
  }

}

