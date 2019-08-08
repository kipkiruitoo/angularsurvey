import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { SurveyService } from "../../../services/survey.service";
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { AnswersService } from '../../../services/answers.service';

import * as Survey from 'survey-angular';
import * as widgets from 'surveyjs-widgets';
import * as SurveyPDF from 'survey-pdf';
import 'inputmask/dist/inputmask/phone-codes/phone.js';

widgets.icheck(Survey);
widgets.select2(Survey);
widgets.inputmask(Survey);
widgets.jquerybarrating(Survey);
widgets.jqueryuidatepicker(Survey);
widgets.nouislider(Survey);
widgets.select2tagbox(Survey);
widgets.signaturepad(Survey);
widgets.sortablejs(Survey);
widgets.ckeditor(Survey);
widgets.autocomplete(Survey);
widgets.bootstrapslider(Survey);
widgets.prettycheckbox(Survey);

Survey.JsonObject.metaData.addProperty('questionbase', 'popupdescription:text');
Survey.JsonObject.metaData.addProperty('page', 'popupdescription:text');

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'survey',
  templateUrl: './answer-survey.component.html',
})
export class SurveyComponent implements OnInit {
  @Output() submitSurvey = new EventEmitter<any>();

  cat_id;
  json;
  question = { 'title': '', 'showProgressBar': 'top', 'pages': '' };
  answers = { 'school': '', 'category': '', 'answer': '' };
  message;


  constructor(private surveyservice: SurveyService, private route: ActivatedRoute, private authService: AuthService, private answerservice: AnswersService) {
    // this.route.params.subscribe(params => {
    //   console.log(params.id),
    //     this.cat_id = params.id
    // });
  }

  // : object = this.surveyservice.getQuestions();



  result: any;
  ngOnInit() {
    this.cat_id = this.answerservice.getQuestionByCategoryId();
    console.log(this.cat_id)
    const surveyModel = new Survey.Model(this.cat_id);
    surveyModel.onAfterRenderQuestion.add((survey, options) => {
      if (!options.question.popupdescription) { return; }
      // Add a button;
      const btn = document.createElement('button');
      btn.className = 'btn btn-info btn-xs';
      btn.innerHTML = 'More Info';
      const question = options.question;
      btn.onclick = function () {
        // showDescription(question);
        alert(options.question.popupdescription);
      };
      const header = options.htmlElement.querySelector('h5');
      const span = document.createElement('span');
      span.innerHTML = '  ';
      header.appendChild(span);
      header.appendChild(btn);
    });
    // surveyModel.onComplete.add((result) => {
    //     // this.submitSurvey.emit(result.data);
    //     // this.result = result.data;
    //     this.submitSurvey.emit(result.data);
    //   console.log(result.data)
    //   console.log(this.surveyservice.getCategoryId())
    //   this.answers['category'] = this.surveyservice.getCategoryId();
    //   this.answers['school']= this.authService.getUserId();
    //   this.answers['answer'] = result.data;
    //   this.onSurveySaved(this.answers);
    //   }
    //   );
    surveyModel.onComplete.add((result) => {
      this.submitSurvey.emit(result.data);
      console.log(result.data)
      console.log(this.answerservice.getCategoryId())
      this.answers['category'] = 'http://127.0.0.1:8000/survey/categories/' + this.answerservice.getCategoryId() + '/';
      this.answers['school'] = "http://localhost:8000/api/users/" + localStorage.getItem('userId') + '/';
      this.answers['answer'] = result.data;
      this.result = result.data;
      this.onSurveySaved(this.answers);

    });
    Survey.SurveyNG.render('surveyElement', { model: surveyModel });

  }
  onSurveySaved(survey) {
    console.log(survey);
    this.surveyservice.saveAnswers(survey).subscribe(res => {
      console.log(res);

    },
      err => console.log(err)
    );
  }


  savePDF() {
    var options = {
      fontSize: 14,
      margins: {
        left: 10,
        right: 10,
        top: 10,
        bot: 10
      }
    };
    const surveyPDF = new SurveyPDF.Survey(this.cat_id, options);
    console.log(this.result);
    surveyPDF.data = this.result;
    surveyPDF.save("survey PDF example");
  }

}
