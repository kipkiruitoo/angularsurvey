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
    return this.answers;
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
        // this.questionaire[] = this.questions[i]['answers'][0]['answer'];
        return this.questionaire
      }


    }

  }
}
//  this.json = {
//       pages: [
//           {
//             questions: [
//                 {
//                     type: "matrix",
//                     name: "Quality",
//                     title: "Please indicate if you agree or disagree with the following statements",
//                     columns: [
//                         {
//                             value: 1,
//                             text: "Strongly Disagree"
//                         }, {
//                             value: 2,
//                             text: "Disagree"
//                         }, {
//                             value: 3,
//                             text: "Neutral"
//                         }, {
//                             value: 4,
//                             text: "Agree"
//                         }, {
//                             value: 5,
//                             text: "Strongly Agree"
//                         }
//                     ],
//                     rows: [
//                         {
//                             value: "affordable",
//                             text: "Product is affordable"
//                         }, {
//                             value: "does what it claims",
//                             text: "Product does what it claims"
//                         }, {
//                             value: "better then others",
//                             text: "Product is better than other products on the market"
//                         }, {
//                             value: "easy to use",
//                             text: "Product is easy to use"
//                         }
//                     ]
//                 }, {
//                     type: "rating",
//                     name: "satisfaction",
//                     title: "How satisfied are you with the Product?",
//                     isRequired: true,
//                     mininumRateDescription: "Not Satisfied",
//                     maximumRateDescription: "Completely satisfied"
//                 }, {
//                     type: "rating",
//                     name: "recommend friends",
//                     visibleIf: "{satisfaction} > 3",
//                     title: "How likely are you to recommend the Product to a friend or co-worker?",
//                     mininumRateDescription: "Will not recommend",
//                     maximumRateDescription: "I will recommend"
//                 }, {
//                     type: "comment",
//                     name: "suggestions",
//                     title: "What would make you more satisfied with the Product?"
//                 }
//             ]
//         }, {
//             questions: [
//                 {
//                   type: "radiogroup",
//                   name: "price to competitors",
//                   title: "Compared to our competitors, do you feel the Product is",
//                   choices: ["Less expensive", "Priced about the same", "More expensive", "Not sure"]
//                   }, {
//                       type: "radiogroup",
//                       name: "price",
//                       title: "Do you feel our current price is merited by our product?",
//                       choices: ["correct|Yes, the price is about right", "low|No, the price is too low for your product", "high|No, the price is too high for your product"]
//                   }, {
//                       type: "multipletext",
//                       name: "pricelimit",
//                       title: "What is the... ",
//                       items: [
//                           {
//                               name: "mostamount",
//                               title: "Most amount you would every pay for a product like ours"
//                           }, {
//                               name: "leastamount",
//                               title: "The least amount you would feel comfortable paying"
//                           }
//                       ]
//                   }
//               ]
//           }, {
//               questions: [
//                   {
//                       type: "text",
//                       name: "email",
//                       title: "Thank you for taking our survey. Your survey is almost complete, please enter your email address in the box below if you wish to participate in our drawing, then press the 'Submit' button."
//                   }
//               ]
//           }
//       ]
//   };
//   this.answers = {
//     currentPageNo: 1,
//     data: {
//         "satisfaction": "4",
//         "Quality": {
//             "does what it claims": "1"
//         },
//         "recommend friends": "3",
//         "price to competitors": "More expensive",
//         "price": "correct",
//         "pricelimit": {
//             "mostamount": ""
//         }
//     }
// };
