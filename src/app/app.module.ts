import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { SurveyComponent } from "./survey.component";
import { SurveyCreatorComponent } from "./survey.creator.component";
import { CreateSurveyComponent } from "./admin/create-survey/create-survey.component";
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { AnswerSurveyComponent } from './repondent/answer-survey/answer-survey.component';
@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    SurveyCreatorComponent,
    CreateSurveyComponent,
    AnswerSurveyComponent
  ],

  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
