import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";
import { Router } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';
import { Question } from 'survey-angular';

@Injectable({
  providedIn: 'root'
})
export class AnswersService {
  private answers_url = 'http://127.0.0.1:8000/survey/answers/';
  json;
  answers;
  answer;
  ans1;
  ans2;
  catIdString;
  catId;
  questionString;
  questions;
  questionaire = { 'title': '', 'showProgressBar': 'top', 'pages': '' };

  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();
  constructor(private http: HttpClient, private _router: Router) {
  }
  saveAnswers(answer) {
    this.answers = answer
    return this.http.post<any>(this.answers_url, this.answers);
  }
  // getQuestions() {

  //   return this.json;
  // }
  getAnswers() {
    return this.answer;
  }
  changeMessage(message: string) {
    this.messageSource.next(message)
    localStorage.setItem('question', message);
    console.log(this.currentMessage)
  }
  getCategoryId() {
    this.catIdString = localStorage.getItem('categoryId');
    this.catId = JSON.parse(this.catIdString);
    return this.catId
  }


  // retrieve the questions of the category the user wants to view
  getQuestions() {
    this.catIdString = localStorage.getItem('categoryId');
    this.catId = JSON.parse(this.catIdString);
    console.log(this.catId);
    this.questionString = localStorage.getItem('question');
    this.questions = JSON.parse(this.questionString)
    console.log(this.questions);

    for (var i = 0; i < this.questions.length; i++) {
      if (this.questions[i].id == JSON.parse(localStorage.getItem('categoryId'))) {
        this.questionaire['title'] = this.questions[i]['name'];
        console.log(this.questionaire['title'])
        this.questionaire['pages'] = this.questions[i]['questionaire'][0]['pages'];
        // this.answer = this.questions[i]['answers'][0]['answer'];
        console.log(this.answer)
        return this.questionaire
      }


    }

  }
  getSurvey() {
    this.catIdString = localStorage.getItem('categoryedit');
    this.catId = JSON.parse(this.catIdString);
    console.log(this.catId);
    this.questionString = localStorage.getItem('question');
    this.questions = JSON.parse(this.questionString)
    console.log(this.questions);

    for (var i = 0; i < this.questions.length; i++) {
      if (this.questions[i].id == JSON.parse(localStorage.getItem('categoryedit'))) {
        this.questionaire['title'] = this.questions[i]['name'];
        this.questionaire['description'] = this.questions[i]['description']
        console.log(this.questionaire['title'])
        this.questionaire['pages'] = this.questions[i]['questionaire'][0]['pages'];
        // this.questionaire[] = this.questions[i]['answers'][0]['answer'];
        return this.questionaire
      }


    }
  }
}

