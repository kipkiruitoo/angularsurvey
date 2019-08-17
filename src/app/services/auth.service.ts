import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginComponent } from '../components/auth/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  uId;
  user_id;
  role;
  private _registerUrl = 'https://gptsbackend.eu-gb.mybluemix.net/api/auth/register/';
  private _loginUrl = 'https://gptsbackend.eu-gb.mybluemix.net/api/auth/login/';
  user_url = "https://gptsbackend.eu-gb.mybluemix.net/api/users/";
  constructor(private http: HttpClient,
    private _router: Router) { }


  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user);
  }
  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user);
  }
  logoutUser() {
    localStorage.removeItem('token');
    localStorage.clear();
    this.role = "Respondent"
    // LoginComponent.resetRole();
    this._router.navigate(['/login']);
  }
  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }
  saveUserId(id) {
    this.user_id = id;
    localStorage.setItem('userId', this.user_id)
    console.log(this.user_id);
  }
  getUserId() {
    this.uId = localStorage.getItem('userId')
    this.uId = JSON.parse(this.uId)
    return this.uId;
  }
  getRole(id) {
    return this.http.get(this.user_url + id + '/');


  }
}
