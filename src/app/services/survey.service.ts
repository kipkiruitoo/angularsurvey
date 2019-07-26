import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http" ;
import  { HttpModule } from '@angular/http';
import { Observable } from "rxjs";
import { Router } from '@angular/router';

@Injectable({
  providedIn: "root"
})
export class SurveyService {
  private json_url = 'http://127.0.0.1:8000/survey/questionaires/';
  private category_url = 'http://127.0.0.1:8000/survey/categories/';
  // private Onecategory_url = `http://127.0.0.1:8000/survey/categories/{}`;
  httpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  json = {} ;
  category = {"name":'',"description":''} ;
  question;
  answers;
  // question1 = JSON.parse(this.question) = {'category':'', 'pages':''}
  constructor(private http: HttpClient) {}

  getQuestions() {
    return this.question;
  }

  saveQuestions(category) {
    this.question = category;
    console.log(this.question)
  }

  getSurveys() {
    return this.json;
  }
  saveSurvey(json) {
    this.json['pages'] = json;
    // console.log(this.json['pages'])
  }
  saveCategory(title,desc) {
    // console.log(title)
    this.category['name'] = title;
    this.category['description'] = desc;
    // console.log(this.category)
  }
  submitCategory(){
    // console.log(this.json)
    return this.http.post<any>(this.category_url, this.category);
  }
  submitSurvey(id){
    this.json['category'] = id
    console.log(this.json)
    return this.http.post<any>(this.json_url, this.json);
  }
  getCategoryId(){
    return this.json['category']
  }
  getCategory(){
    return this.http.get<any>(this.category_url);
  }
  saveAnswers(answer){
    this.answers = answer;
    console.log(this.answers);
  }

}



