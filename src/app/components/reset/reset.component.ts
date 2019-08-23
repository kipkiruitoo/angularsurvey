import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  constructor(public http: HttpClient, private _router: Router, private notifier: NotifierService) { }
  email: any;
  data: any = { email: '' }
  isloading = false;
  url: any = "https://gptsbackend.eu-gb.mybluemix.net/api/password_reset/"
  ngOnInit() {
  }

  reset() {
    this.isloading = true;
    this.data.email = this.email;

    console.log(this.data.email)
    this.http.post(this.url, this.data).subscribe(res => {
      console.log(res);
      this.isloading = false;
      if (res['status'] == "OK") {
        this.notifier.notify('success', "an email with the password reset code has been sent to your email")
        this._router.navigate(['confirm']);
      }
    },

      err => {
        this.isloading = false;
        console.log(err.error.email[0])
        this.notifier.notify('error', err.error.email[0])
      })

  }

}
