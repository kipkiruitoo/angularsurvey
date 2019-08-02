import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../../../services/survey.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-surveys',
  templateUrl: './view-surveys.component.html',
  styleUrls: ['./view-surveys.component.css']
})
export class ViewSurveysComponent implements OnInit {

  constructor(private route: ActivatedRoute, private surveyService: SurveyService) { }

  categories = [];
  question = { 'title': '', 'showProgressBar': 'top', 'pages': '' };
  cats;
  answers;
  // question;
  question1 = '';
  ngOnInit() {
    this.surveyService.getCategory()
      .subscribe(
        res => {
          this.categories.push(res),
            console.log(this.categories);
        },
        err => console.log(err)
      );
    this.route.paramMap
      .subscribe(params => {
        console.log(params);
      });
  }
  getQues(id) {
    for (var i = 0; i < this.cats.length; i++) {
      if (this.cats[i]['id'] === id) {
        console.log(this.cats[i])
        this.question['title'] = this.cats[i]['name'];
        this.question['pages'] = this.cats[i]['questionaire'][0]['pages'];
        this.answers = this.cats[i]['answers'][0]['answer'];
        this.surveyService.setCategoryId(id);
        this.surveyService.storeAnswers(this.answers)
        this.surveyService.saveQuestions(this.question)
        console.log(this.question)
      }
    }
  }
  openSurvey(id) {
    console.log(id);
  }
  getCats() {
    this.cats = this.categories[0];
    console.log(this.cats)
  }
}
