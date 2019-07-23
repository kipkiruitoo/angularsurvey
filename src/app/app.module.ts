import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { SurveyComponent } from "./components/respondent/answer-survey/survey.component";
import { SurveyCreatorComponent } from "./components/admin/create-survey/survey.creator.component";
// import { CreateSurveyComponent } from "./admin/create-survey/create-survey.component";
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { HomeComponent } from './components/home/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { VerifierComponent } from './components/usersPages/verifier/verifier.component';
import { JudgeComponent } from './components/usersPages/judge/judge.component';
import { ScripterComponent } from './components/usersPages/scripter/scripter.component';
import { ProfileComponent } from './components/usersPages/profile/profile.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import {AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { TokenInterceptorService } from './services/tokeninterceptor.service';
import { AdminComponent } from './components/admin/admin/admin.component';
import { AdminSidebarComponent } from './components/admin/admin-sidebar/admin-sidebar.component'

@NgModule({
  declarations: [AppComponent, SurveyComponent, SurveyCreatorComponent, HomeComponent, LoginComponent, RegisterComponent, VerifierComponent, JudgeComponent, ScripterComponent, ProfileComponent, HeaderComponent, FooterComponent, AdminComponent, AdminSidebarComponent],

  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [AuthService, AuthGuard,{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {}
