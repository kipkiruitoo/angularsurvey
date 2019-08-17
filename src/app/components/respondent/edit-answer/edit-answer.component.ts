import { Component, Input, EventEmitter, Output, OnInit } from "@angular/core";
import * as Survey from "survey-angular";
import * as widgets from "surveyjs-widgets";
import { AnswersService } from '../../../services/answers.service';
import { SurveyService } from "../../../services/survey.service";
import { AuthService } from '../../../services/auth.service';
import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';
import "inputmask/dist/inputmask/phone-codes/phone.js";

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

Survey.JsonObject.metaData.addProperty("questionbase", "popupdescription:text");
Survey.JsonObject.metaData.addProperty("page", "popupdescription:text");

@Component({
  selector: 'app-edit-answer',
  templateUrl: './edit-answer.component.html',
  styleUrls: ['./edit-answer.component.css']
})
export class EditAnswerComponent implements OnInit {
  @Output() submitSurvey = new EventEmitter<any>();
  json;
  isloading = false;
  answer;
  category;
  school;
  answers = { 'school': '', 'category': '', 'answer': '' };
  constructor(private router: Router, private notifier: NotifierService, private answerservice: AnswersService, private surveyservice: SurveyService, private authService: AuthService) { }

  ngOnInit() {
    this.json = this.answerservice.getQuestions();
    console.log(this.json)
    this.answer = this.answerservice.getAnswers();
    const surveyModel = new Survey.Model(this.json);
    console.log(this.answer)
    // surveyModel.currentPageNo = this.answer.currentPageNo
    surveyModel.data = this.answer
    surveyModel.onAfterRenderQuestion.add((survey, options) => {
      if (!options.question.popupdescription) {
        return;
      }

      // Add a button;
      const btn = document.createElement("button");
      btn.className = "btn btn-info btn-xs";
      btn.innerHTML = "More Info";
      const question = options.question;
      btn.onclick = function () {
        // showDescription(question);
        alert(options.question.popupdescription);
      };
      const header = options.htmlElement.querySelector("h5");
      const span = document.createElement("span");
      span.innerHTML = "  ";
      header.appendChild(span);
      header.appendChild(btn);
    });
    surveyModel.onComplete.add((result) => {
      this.isloading = true;
      this.submitSurvey.emit(result.data);
      this.school = parseInt(this.authService.getUserId());

      this.answers.category = 'https://gptsbackend.eu-gb.mybluemix.net/survey/categories/' + JSON.parse(localStorage.getItem('categoryId')) + '/';
      this.answers.school = "https://gptsbackend.eu-gb.mybluemix.net/api/users/" + localStorage.getItem('userId') + '/';

      // this.answers.school = this.school
      // this.category = this.surveyservice.getCategoryId();
      // this.answers.category = this.category;
      this.answers['answer'] = result.data;
      console.log(this.answers)
      this.onSurveyUpdate(this.answers);
    })
    Survey.SurveyNG.render("surveyElement", { model: surveyModel });
  }
  onSurveyUpdate(survey) {
    this.answerservice.saveAnswers(survey)
      .subscribe(
        res => {
          this.isloading = false;
          console.log(res)
          this.notifier.notify('success', 'Your answers were saved');
          this.router.navigate(['viewsurvey'])
        },
        err => {
          this.notifier.notify('error', err)
          console.log(err)
        }
      );
  }

}
