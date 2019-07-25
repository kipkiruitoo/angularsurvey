import { Component, Input, EventEmitter, Output, OnInit } from "@angular/core";

import * as Survey from "survey-angular";
import * as widgets from "surveyjs-widgets";
import { SurveyService } from "../../../services/survey.service";
import { ActivatedRoute } from '@angular/router';

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
  // tslint:disable-next-line:component-selector
  selector: "survey",
  templateUrl: "./answer-survey.component.html"
})
export class SurveyComponent implements OnInit {
  @Output() submitSurvey = new EventEmitter<any>();

  // @Input()
  // json: object;
  json;
  public  id: string;

  constructor(private surveyservice: SurveyService,private route: ActivatedRoute) {}
  onSurveySaved(survey) {
    this.surveyservice.saveSurvey(survey);
  }

  click(result) {
    console.log(result);
  }

  ngOnInit() {
    // this.id = this.route.snapshot.paramMap.get('id');
    this.json = this.surveyservice.getQuestions();
    console.log(this.json)
    const surveyModel = new Survey.Model(this.json);
    surveyModel.onAfterRenderQuestion.add((survey, options) => {
      if (!options.question.popupdescription) {
        return;
      }

      // Add a button;
      const btn = document.createElement("button");
      btn.className = "btn btn-info btn-xs";
      btn.innerHTML = "More Info";
      const question = options.question;
      btn.onclick = function() {
        // showDescription(question);
        alert(options.question.popupdescription);
      };
      const header = options.htmlElement.querySelector("h5");
      const span = document.createElement("span");
      span.innerHTML = "  ";
      header.appendChild(span);
      header.appendChild(btn);
    });
    surveyModel.onComplete.add(result => this.submitSurvey.emit(result.data));
    Survey.SurveyNG.render("surveyElement", { model: surveyModel });

  }

  // getOneCategories(id) {
  //   this.surveyservice.getOneCategory(id)
  //     .subscribe(
  //       res => this.json,
  //       err => console.log(err)
  //     );
  // }

  // getQues() {
  //   this.getOneCategories(this.id)
  // }

}
