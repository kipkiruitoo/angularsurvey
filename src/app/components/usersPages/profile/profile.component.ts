import { Component, OnInit } from "@angular/core";
import { ProfileService } from "../../../services/profile.service";
import { AuthService } from "../../../services/auth.service";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { NotifierService } from "angular-notifier";
@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private prof: ProfileService,
    private authservice: AuthService,
    private notifier: NotifierService
  ) {}
  httpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });
  profile: any = {
    user: "",
    dob: "",
    city: "",
    address: "",
    county: "",
    zip: "",
    total_pop: ""
  };
  user: any = { username: "", email: "" };
  id;
  username;
  email;
  county;
  address;
  city;
  zip;
  userurl: any;
  isloading = true;
  isboys = false;
  isgirls = false;
  ngOnInit() {
    this.notifier.notify(
      "success",
      "please finish filling in your school's profile"
    );
    this.userurl = "https://gptsbackend.eu-gb.mybluemix.net/api/users/";
    this.id = localStorage.getItem("userId");

    this.prof.getProfile(this.id).subscribe(profile => {
      this.profile = profile;
      console.log(this.profile);
      this.http.get(this.userurl + this.id + "/").subscribe(user => {
        console.log(user);
        this.user = user;
        this.isloading = false;
      });
    });
  }
  genderselected(event) {
    let selected = event.target.value;
    console.log(selected);
    if (selected == "Boys") {
      this.isboys = true;
      this.isgirls = false;
      this.profile["girls_pop"] = 0;
    } else if (selected == "Girls") {
      this.isboys = false;
      this.isgirls = true;
      this.profile["boys_pop"] = 0;
    } else if (selected == "Mixed") {
      this.isboys = true;
      this.isgirls = true;
    } else {
      this.isboys = false;
      this.isgirls = false;
    }
  }

  onSubmit() {
    this.isloading = true;
    console.log("something was submitted");
    console.log(this.profile);
    // console.log(this.user.groups)
    delete this.user.groups;
    console.log(this.profile["boys_pop"]);
    this.profile.total_pop =
      parseInt(this.profile["boys_pop"]) + parseInt(this.profile["girls_pop"]);
    console.log(this.profile.total_pop);

    this.submit();
  }

  submit() {
    this.prof.updateProfile(this.profile, this.id).subscribe(
      profile => {
        this.profile = profile;
        this.http.patch(this.userurl + this.id + "/", this.user).subscribe(
          res => {
            this.isloading = false;
            console.log(res);
            this.notifier.notify("success", "profile updated sucessfully");
          },

          err => {
            this.isloading = false;
            this.notifier.notify(
              "error",
              "something went wrong while trying to update your profile"
            );
            console.log(err);
          }
        );
      },
      err => {
        this.isloading = false;
        this.notifier.notify(
          "error",
          "something went wrong while trying to update your profile"
        );
        console.log(err);
      }
    );
  }
}
