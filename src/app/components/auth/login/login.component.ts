import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { AnswerCountValidator } from 'survey-angular';
import { Answers } from '../../../models/answers';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() answers: Answers;

  public loginUserData = {email:'', password: ''};
  user_id;
  answer = {'school':0 ,'category':0,'answer':''};
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
          localStorage.setItem('userId', res.id);
          // this.user_id = res.id;
          // this.answer.school = this.user_id;
          // this.answers = this.answer
          // console.log(this.answers)
          // console.log(res.id)
          this._auth.saveUserId(this.answers);
          this._router.navigate(['']);
        },
        err => console.log(err)
      );
  }

}


