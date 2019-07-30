import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { HttpModule } from '@angular/http';
import { Observable } from "rxjs";
import { Router } from '@angular/router';

@Injectable({
  providedIn: "root"
})
export class SurveyService {
  // Url for questionaires endpoint
  private json_url = 'http://127.0.0.1:8000/survey/questionaires/';
  // Url for categories endpoint
  private category_url = 'http://127.0.0.1:8000/survey/categories/';
  private answers_url = 'http://127.0.0.1:8000/survey/answers/';

  httpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  // global variables for storing data
  json = {};
  categoryId; _
  category = { "name": '', "description": '' };
  question;
  answers;
  storedAnswers;

  constructor(private http: HttpClient) { }

  // retrieve the questions of the category the user wants to view
  getQuestions() {
    return this.question;
  }
  getAnswers() {
    return this.storedAnswers;
  }
  storeAnswers(answer) {
    this.storedAnswers = answer
    console.log(this.storedAnswers)
  }
  // stores the question to be viewed when the user clicks on view category
  saveQuestions(category) {
    this.question = category;
    console.log(this.question)
  }

  // retrieves the saved questionaire
  getSurveys() {
    return this.json;
  }
  // saves the pages created on a questionaire
  saveSurvey(pages) {
    this.json['pages'] = pages;
  }

  // saves the category created when the scripter creates a new category
  saveCategory(title, desc) {
    this.category['name'] = title;
    this.category['description'] = desc;
  }

  // post request for adding the category created
  submitCategory() {
    return this.http.post<any>(this.category_url, this.category);
  }

  // post request for saving the questionaire created
  submitSurvey(id) {
    this.json['category'] = id
    console.log(this.json)
    return this.http.post<any>(this.json_url, this.json);
  }

  // retrieve the categoryId for the questionaire being answered
  getCategoryId() {
    return this.categoryId
  }

  // store the categoryId for the questionaire being answered
  setCategoryId(id) {
    this.categoryId = id;
  }

  // get request for retrieving all the categories
  getCategory() {
    return this.http.get<any>(this.category_url);
  }

  // stores the answers once the user submits
  saveAnswers(answer) {
    this.answers = answer
    return this.http.post<any>(this.answers_url, this.answers);
  }
  // created this 2 new methods
  postCategory(category) {

    return this.http.post<any>(this.category_url, category);


  }

  postQuestionnaire(questions) {

    return this.http.post(this.json_url, questions);
  }

}



