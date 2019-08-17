import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../../services/profile.service';
import { AuthService } from '../../../services/auth.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NotifierService } from 'angular-notifier';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private http: HttpClient, private prof: ProfileService, private authservice: AuthService, private notifier: NotifierService) { }
  httpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });
  profile = { user: "", dob: "", city: "", address: "", county: "", zip: "" };
  user: any;
  id;
  username;
  email;
  county;
  address;
  city;
  zip;
  userurl: any;
  isloading = true;
  ngOnInit() {
    this.userurl = 'https://gptsbackend.eu-gb.mybluemix.net/api/users/'
    this.id = localStorage.getItem('userId');

    this.prof.getProfile(this.id).subscribe(profile => {
      this.profile = profile
      console.log(this.profile)
      this.http.get(this.userurl + this.id + '/').subscribe(user => {
        console.log(user);
        this.user = user
        this.isloading = false;
      });
    });



  }

  onSubmit() {
    this.isloading = true;
    console.log('something was submitted')
    console.log(this.profile)
    this.prof.updateProfile(this.profile, this.id).subscribe(profile => {
      this.profile = profile;
      this.isloading = false;
      this.notifier.notify('success', 'profile updated sucessfully')
    }, err => {
      this.isloading = false;
      this.notifier.notify('error', 'something went wrong while trying to update your profile');
      console.log(err)
    });
  }

}
