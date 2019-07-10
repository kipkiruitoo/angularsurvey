import { NgModule } from "@angular/core";
import { AppComponent } from "../app.component";
import { HomeComponent } from "../home/home/home.component";
import { SurveyComponent } from "../repondent/answer-survey/survey.component";
import { SurveyCreatorComponent } from "../admin/create-survey/survey.creator.component";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";

const routes: Routes = [
  {
    path: "survey",
    component: SurveyComponent
  },
  {
    path: "",
    component: HomeComponent
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
