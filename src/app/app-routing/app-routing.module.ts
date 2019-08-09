import { NgModule } from "@angular/core";
import { AppComponent } from "../app.component";
import { HomeComponent } from "../components/home/home/home.component";
import { SurveyComponent } from "../components/respondent/answer-survey/survey.component";
import { SurveyCreatorComponent } from "../components/admin/create-survey/survey.creator.component";
import { LoginComponent } from "../components/auth/login/login.component";
import { RegisterComponent } from "../components/auth/register/register.component";
import { ProfileComponent } from "../components/usersPages/profile/profile.component"
import { AdminComponent } from "../components/admin/admin/admin.component";
import { ViewSurveysComponent } from '../components/respondent/view-surveys/view-surveys.component';
import { EditAnswerComponent } from '../components/respondent/edit-answer/edit-answer.component';
import { EditsurveyComponent } from '../components/admin/editsurvey/editsurvey.component';
import { CategoryIndexComponent } from '../components/category-index/category-index.component';

import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: "editsurvey",
    component: EditsurveyComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "editanswer",
    component: EditAnswerComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "survey",
    component: SurveyComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "admin",
    component: AdminComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "profile",
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "createsurvey",
    component: SurveyCreatorComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "surveys",
    component: CategoryIndexComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "editsurvey",
    component: EditsurveyComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "viewsurvey",
    component: ViewSurveysComponent,
    canActivate: [AuthGuard]
  }
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
