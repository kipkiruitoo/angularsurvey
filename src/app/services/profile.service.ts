import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})


export class ProfileService {


  profileurl = "https://gptsbackend.eu-gb.mybluemix.net/api/profile/"
  constructor(private http: HttpClient) {


  }

  getProfile(id): Observable<any> {
    return this.http.get(this.profileurl + id + '/');
  }

  updateProfile(profile, id): Observable<any> {

    console.log(profile)
    return this.http.put(this.profileurl + id + '/', profile);
  }
}
