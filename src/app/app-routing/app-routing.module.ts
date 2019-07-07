import { NgModule } from "@angular/core";
import { AppComponent } from "../app.component";
import { AnswerSurveyComponent } from "../repondent/answer-survey/answer-survey.component";
import { CreateSurveyComponent } from "../admin/create-survey/create-survey.component";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";

const routes: Routes = [
  {
    path: "",
    component: AnswerSurveyComponent
  },
  {
    path: "admin",
    component: CreateSurveyComponent
  }
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
