import { Component, Input, Output, EventEmitter } from "@angular/core";
import * as SurveyKo from "survey-knockout";
import * as SurveyCreator from "survey-creator";
import * as widgets from "surveyjs-widgets";
import { SurveyService } from "../../../services/survey.service";

import "inputmask/dist/inputmask/phone-codes/phone.js";
import { Observable } from "rxjs";

widgets.icheck(SurveyKo);
widgets.select2(SurveyKo);
widgets.inputmask(SurveyKo);
widgets.jquerybarrating(SurveyKo);
widgets.jqueryuidatepicker(SurveyKo);
widgets.nouislider(SurveyKo);
widgets.select2tagbox(SurveyKo);
widgets.signaturepad(SurveyKo);
widgets.sortablejs(SurveyKo);
widgets.ckeditor(SurveyKo);
widgets.autocomplete(SurveyKo);
widgets.bootstrapslider(SurveyKo);

var CkEditor_ModalEditor = {
  afterRender: function (modalEditor, htmlElement) {
    var editor = window["CKEDITOR"].replace(htmlElement);
    editor.on("change", function () {
      modalEditor.editingValue = editor.getData();
    });
    editor.setData(modalEditor.editingValue);
  },
  destroy: function (modalEditor, htmlElement) {
    var instance = window["CKEDITOR"].instances[htmlElement.id];
    if (instance) {
      instance.removeAllListeners();
      window["CKEDITOR"].remove(instance);
    }
  }
};
SurveyCreator.SurveyPropertyModalEditor.registerCustomWidget(
  "html",
  CkEditor_ModalEditor
);

@Component({
  selector: "survey-creator",
  templateUrl: "./create-survey.component.html"
})
export class SurveyCreatorComponent {
  surveyCreator: SurveyCreator.SurveyCreator;
  constructor(private surveyservice: SurveyService) { }

  json;
  public data = { "pages": "" };
  page = this.data.pages
  cat_id;

  category = { "name": '', "description": '' };
  @Output() surveySaved: EventEmitter<Object> = new EventEmitter();
  ngOnInit() {
    // this.surveyservice.getSurveys().subscribe(json => {
    //   console.log(json);
    //   this.json = json.json;
    // });
    this.json = this.surveyservice.getSurveys();
    SurveyKo.JsonObject.metaData.addProperty(
      "questionbase",
      "popupdescription:text"
    );
    SurveyKo.JsonObject.metaData.addProperty("page", "popupdescription:text");

    let options = { showEmbededSurveyTab: true, generateValidJSON: true };
    this.surveyCreator = new SurveyCreator.SurveyCreator(
      "surveyCreatorContainer",
      options
    );
    this.surveyCreator.text = JSON.stringify(this.json);
    this.surveyCreator.saveSurveyFunc = this.saveMySurvey;
  }

  saveMySurvey = () => {
    // console.log(JSON.stringify(this.surveyCreator.text));
    this.json = JSON.parse(this.surveyCreator.text);
    this.surveyservice.saveSurvey(this.json['pages']);
    // console.log(this.json['title'])
    // console.log(this.json['description'])
    this.page = JSON.stringify(this.surveyCreator.text)
    console.log(this.json)
    this.saveMyCategory();
  };
  saveMyCategory = () => {
    this.json = JSON.parse(this.surveyCreator.text);
    // console.log(this.json['title'])
    this.surveyservice.saveCategory(this.json['title'], this.json['description']);
    this.category = { "name": this.json['title'], "description": this.json['description'] };
    // console.log(this.json['title'])
    // this.submitCategories()

    //  this is what i changed... rather than calling another method.. i called the post category method in the service..
    // then got the id from the response
    // and passed it to the category part in the json
    // and then make another service request to save the json with the new category;
    this.surveyservice.postCategory(this.category).subscribe(res => {
      console.log(res);
      this.cat_id = res.id;
      console.log(this.cat_id);
      this.json['category'] = this.cat_id
      console.log(this.json);

      this.surveyservice.postQuestionnaire(this.json).subscribe(res => {
        console.log(res);
      })

    })
  }
  // submitCategories() {
  //   this.surveyservice.submitCategory()
  //     .subscribe(
  //       res => this.submitSurveys(res['id']),
  //       err => console.log(err)
  //     );
  // }
  // submitSurveys(id) {
  //   this.surveyservice.submitSurvey(id)
  //     .subscribe(
  //       res => console.log(res),
  //       // res['id']=this.cat_id,
  //       err => console.log(err)
  //     );
  // }
}

// this.submitSurveys
