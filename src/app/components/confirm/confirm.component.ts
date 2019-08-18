
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';
@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  constructor(public http: HttpClient, private _router: Router, private notifier: NotifierService) { }
  url: any = "https://kipkiruitoo.pythonanywhere.com/api/password_reset/confirm/"
  password1: any;
  key: any;
  isloading = false;
  password2: any;
  data: any = { password: '', token: '' }
  ngOnInit() {
  }
  reset() {
    this.isloading = true;
    if (this.password1 === this.password2) {

      this.data.password = this.password2;
      this.data.token = this.key;

      this.http.post(this.url, this.data).subscribe(res => {
        console.log(res);
        this.isloading = false;
        if (res['status'] == "OK") {
          this.notifier.notify('success', "Password Set Successfully")
          this._router.navigate(['login']);
        } else {
          this.notifier.notify('error', "The token might have expired")
        }
      }, err => {
        console.log(err)
        if (err.error.status == "notfound") {
          this.notifier.notify('error', "The token might have expired or has been used please request for another password reset token")
        }
        this.isloading = false;
      })

    } else {
      this.isloading = false;
      this.notifier.notify('error', 'passwords not matching')
    }
  }

}
