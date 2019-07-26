import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerUserData = { username:'', email:'', password:''} ;
  constructor(private _auth: AuthService,private _router: Router) { }

  ngOnInit() {
  }
  registerUser() {
    // console.log(this.registerUserData);
    this._auth.registerUser(this.registerUserData)
      .subscribe(
        res => {
          console.log(res)
          this._router.navigate(['login']);
        },
        err => console.log(err)
      );
  }

}

