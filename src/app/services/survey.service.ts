import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class SurveyService {
  url;

  constructor(private http: HttpClient) {}

  getSurveys() {
    this.url = " http://127.0.0.1:8000/surveys";
    return this.http.get(this.url);
  }
}
