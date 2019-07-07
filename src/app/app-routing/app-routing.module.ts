import { NgModule } from "@angular/core";
import { AppComponent } from "../app.component";
import { SurveyComponent } from "../repondent/answer-survey/survey.component";
import { SurveyCreatorComponent } from "../admin/create-survey/survey.creator.component";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";

const routes: Routes = [
  {
    path: "",
    component: SurveyComponent
  },
  {
    path: "admin",
    component: SurveyCreatorComponent
  }
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
