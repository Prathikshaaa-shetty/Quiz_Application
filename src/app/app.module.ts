import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddQuestionComponent } from './add-question/add-question.component';
import { QuestionService } from './dashboard/serivces/question.service';
import { QuizComponent } from './quiz/quiz.component';
import { RegisterComponent } from './quiz/components/register/register.component';
import { QuizPageComponent } from './quiz/components/quiz-page/quiz-page.component';
import { ResultComponent } from './quiz/components/result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignupComponent,
    LoginComponent,
    ProfileComponent,
    HomeComponent,
    AddQuestionComponent,
    QuizComponent,
    RegisterComponent,
    QuizPageComponent,
    ResultComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [QuestionService],
  bootstrap: [AppComponent],
})
export class AppModule {}
