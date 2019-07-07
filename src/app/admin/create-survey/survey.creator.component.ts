import { Component, Input, Output, EventEmitter } from "@angular/core";
import * as SurveyKo from "survey-knockout";
import * as SurveyCreator from "survey-creator";
import * as widgets from "surveyjs-widgets";

import "inputmask/dist/inputmask/phone-codes/phone.js";

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
  afterRender: function(modalEditor, htmlElement) {
    var editor = window["CKEDITOR"].replace(htmlElement);
    editor.on("change", function() {
      modalEditor.editingValue = editor.getData();
    });
    editor.setData(modalEditor.editingValue);
  },
  destroy: function(modalEditor, htmlElement) {
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

  json = {
    title: "Product Feedback Survey Example",
    showProgressBar: "top",
    pages: [
      {
        elements: [
          {
            type: "text",
            inputMask: "phone",
            popupdescription: "Some text"
          },
          {
            type: "barrating",
            name: "barrating",
            ratingTheme: "css-stars",
            choices: [1, 2, 3, 4, 5]
          },
          {
            type: "bootstrapslider",
            name: "bootstrapslider"
          },
          {
            type: "radiogroup",
            name: "prettycheckbox",
            renderAs: "prettycheckbox",
            choices: ["One", "Two", "Three"]
          },
          {
            type: "dropdown",
            renderAs: "select2",
            choicesByUrl: {
              url: "https://restcountries.eu/rest/v1/all"
            },
            name: "countries",
            title: "Please select the country you have arrived from:"
          },
          {
            type: "signaturepad",
            name: "sign",
            title: "Please enter your signature"
          },
          {
            type: "sortablelist",
            name: "lifepriopity",
            title: "Life Priorities ",
            isRequired: true,
            colCount: 0,
            choices: ["family", "work", "pets", "travels", "games"]
          },
          {
            name: "date",
            type: "datepicker",
            inputType: "date",
            title: "Your favorite date:",
            dateFormat: "mm/dd/yy",
            isRequired: true
          }
        ]
      },
      {
        questions: [
          {
            type: "matrix",
            name: "Quality",
            title:
              "Please indicate if you agree or disagree with the following statements",
            columns: [
              {
                value: 1,
                text: "Strongly Disagree"
              },
              {
                value: 2,
                text: "Disagree"
              },
              {
                value: 3,
                text: "Neutral"
              },
              {
                value: 4,
                text: "Agree"
              },
              {
                value: 5,
                text: "Strongly Agree"
              }
            ],
            rows: [
              {
                value: "affordable",
                text: "Product is affordable"
              },
              {
                value: "does what it claims",
                text: "Product does what it claims"
              },
              {
                value: "better then others",
                text: "Product is better than other products on the market"
              },
              {
                value: "easy to use",
                text: "Product is easy to use"
              }
            ]
          },
          {
            type: "rating",
            name: "satisfaction",
            title: "How satisfied are you with the Product?",
            mininumRateDescription: "Not Satisfied",
            maximumRateDescription: "Completely satisfied"
          },
          {
            type: "rating",
            name: "recommend friends",
            visibleIf: "{satisfaction} > 3",
            title:
              "How likely are you to recommend the Product to a friend or co-worker?",
            mininumRateDescription: "Will not recommend",
            maximumRateDescription: "I will recommend"
          },
          {
            type: "comment",
            name: "suggestions",
            title: "What would make you more satisfied with the Product?"
          }
        ]
      },
      {
        questions: [
          {
            type: "radiogroup",
            name: "price to competitors",
            title: "Compared to our competitors, do you feel the Product is",
            choices: [
              "Less expensive",
              "Priced about the same",
              "More expensive",
              "Not sure"
            ]
          },
          {
            type: "radiogroup",
            name: "price",
            title: "Do you feel our current price is merited by our product?",
            choices: [
              "correct|Yes, the price is about right",
              "low|No, the price is too low for your product",
              "high|No, the price is too high for your product"
            ]
          },
          {
            type: "multipletext",
            name: "pricelimit",
            title: "What is the... ",
            items: [
              {
                name: "mostamount",
                title: "Most amount you would every pay for a product like ours"
              },
              {
                name: "leastamount",
                title: "The least amount you would feel comfortable paying"
              }
            ]
          }
        ]
      },
      {
        questions: [
          {
            type: "text",
            name: "email",
            title:
              'Thank you for taking our survey. Please enter your email address, then press the "Submit" button.'
          }
        ]
      }
    ]
  };
  @Output() surveySaved: EventEmitter<Object> = new EventEmitter();
  ngOnInit() {
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
    console.log(JSON.stringify(this.surveyCreator.text));
    this.json = JSON.parse(this.surveyCreator.text);
  };
}
