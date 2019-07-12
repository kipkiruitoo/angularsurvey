import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { SurveyComponent } from "./repondent/answer-survey/survey.component";
import { SurveyCreatorComponent } from "./admin/create-survey/survey.creator.component";
// import { CreateSurveyComponent } from "./admin/create-survey/create-survey.component";
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
   declarations: [
      AppComponent,
      SurveyComponent,
      SurveyCreatorComponent,
      HomeComponent,
      LoginComponent,
      SignupComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {}
