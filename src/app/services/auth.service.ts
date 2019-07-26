import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user_id;

  private _registerUrl = 'http://127.0.0.1:8000/api/auth/register/';
  private _loginUrl = 'http://127.0.0.1:8000/api/auth/login/';
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
    this._router.navigate(['/login']);
  }
  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }
  saveUserId(id){
    this.user_id = id;
    console.log(this.user_id);
  }
  getUserId(){
    return this.user_id;
  }
}
