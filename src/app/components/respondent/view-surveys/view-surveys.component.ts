import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../../../services/survey.service';
import { AnswersService } from '../../../services/answers.service';
import { ActivatedRoute } from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-view-surveys',
  templateUrl: './view-surveys.component.html',
  styleUrls: ['./view-surveys.component.css']
})
export class ViewSurveysComponent implements OnInit {

  constructor(private route: ActivatedRoute, private surveyService: SurveyService, private answerservice: AnswersService, private notifier: NotifierService) { }

  categories = [];
  question = { 'title': '', 'showProgressBar': 'top', 'pages': '' };
  cats;
  answers;
  localid;
  userid1;
  userid2;
  ans = { 'school': '', 'answer': '', 'category': '' };
  ans2;
  isLoading = false;
  // question;
  question1 = '';
  ngOnInit() {
    this.notifier.notify('warning', 'please remember to finish filling in your profile if you have not');
    this.surveyService.getCategory()
      .subscribe(
        res => {
          this.categories.push(res),
            console.log(this.categories);
        },
        err => console.log(err)
      );
    this.answerservice.getAns().subscribe(
      res => {
        console.log(res);
        this.userid1 = localStorage.getItem('userId');
        console.log(this.userid1)
        this.answers = res;
        console.log(this.answers[0]['category'])
      },
      err => console.log(err)
    )

    // this.userid2 = JSON.parse(this.userid1);
    // console.log(this.userid2)

    this.route.paramMap
      .subscribe(params => {
        console.log(params);
      });
  }
  getQues(id) {
    this.isLoading = true;
    localStorage.setItem('categoryId', id);
    this.localid = localStorage.getItem('categoryId');
    console.log(this.localid);
    for (var i = 0; i < this.cats.length; i++) {
      if (this.cats[i]['id'] === id) {
        this.question['title'] = this.cats[i]['name'];
        this.question['pages'] = this.cats[i]['questionaire'][0]['pages'];
        // this.answers = this.cats[i]['answers'][0]['answer'];
        this.surveyService.setCategoryId(id);
        this.surveyService.storeAnswers(this.answers)
        this.answerservice.changeMessage(JSON.stringify(this.question))

        // this.surveyService.saveQuestions(this.question)
        // localStorage.setItem('categoryId',id);
      }
    }
  }

  getAns(id) {
    localStorage.setItem('categoryId', id);
    this.userid1 = localStorage.getItem('userId');
    // this.userid2 = JSON.parse(this.userid1);
    // console.log(this.userid2)
    for (var i = 0; i < this.answers.length; i++) {
      if (this.answers[i]['category'] === "https://kipkiruitoo.pythonanywhere.com/survey/categories/" + id + "/" && this.answers[i]['school'] === "https://kipkiruitoo.pythonanywhere.com/api/users/" + this.userid1 + "/"
      ) {
        this.ans['category'] = this.answers[i]['category'];
        this.ans['school'] = this.answers[i]['school'];
        this.ans['answer'] = this.answers[i]['answer'];
        this.ans2 = JSON.stringify(this.answers[i]);
        localStorage.setItem('answerId', this.answers[i]['id'])
        localStorage.setItem('answer', this.ans2)
      }

    }
  }

  openSurvey(id) {
    console.log(id);
  }
  getCats() {
    this.isLoading = true;

    this.cats = this.categories[0];
    console.log(this.cats)
    localStorage.setItem('questions', JSON.stringify(this.cats));
    this.isLoading = false;
  }
}
// && this.answers[i]['school'] === `http://localhost:8000/api/users/${this.userid1}/`
