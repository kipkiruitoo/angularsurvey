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


import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
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
    component: SurveyCreatorComponent
  },
  {
    path: "viewsurvey",
    component: ViewSurveysComponent
  }
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
