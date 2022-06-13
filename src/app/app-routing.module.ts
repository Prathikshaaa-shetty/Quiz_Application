import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddQuestionComponent } from './add-question/add-question.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CanactivateGuard } from './guard/canactivate.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { QuizPageComponent } from './quiz/components/quiz-page/quiz-page.component';
import { RegisterComponent } from './quiz/components/register/register.component';
import { ResultComponent } from './quiz/components/result/result.component';
import { QuizComponent } from './quiz/quiz.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'sign-up',
    component: SignupComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [CanactivateGuard],
  },
  {
    path: 'addquestion',
    component: AddQuestionComponent,
    canActivate: [CanactivateGuard],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [CanactivateGuard],
  },

  {
    path: 'quiz',
    component: QuizComponent,
    canActivate: [CanactivateGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [CanactivateGuard],
  },
  {
    path: 'quiz-page',
    component: QuizPageComponent,
    canActivate: [CanactivateGuard],
  },
  {
    path: 'result',
    component: ResultComponent,
    canActivate: [CanactivateGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
