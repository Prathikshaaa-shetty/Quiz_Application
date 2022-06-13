import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { QuizModel } from '../quiz/models/quiz.model';
import { UserModel } from '../shared/models/user.model';
import { Question } from './models/question.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public questionsList: QuizModel[] = [];

  constructor(private router: Router) {
    this.questionsList =
      JSON.parse(localStorage.getItem('questions') || 'null') || [];
  }

  ngOnInit() {}

  get image(): string {
    let user: UserModel = JSON.parse(localStorage.getItem('User') || 'null');
    return user?.image;
  }

  onClickProfile() {
    this.router.navigateByUrl('/profile');
  }

  addQuestion() {
    this.router.navigateByUrl('/addquestion');
  }

  onSelectOption(quiestionIndex: number, anwser: string) {
    this.questionsList[quiestionIndex].correct = anwser;
    console.log('questions', this.questionsList);
  }

  SubmitAnswers() {
    let notAnswered = this.questionsList.find((q) => !q.correct);
    if (notAnswered) {
      alert('Not all questions answered !!!');
    } else {
      alert('Submitted!!!');
    }
  }

  getQuestionOptions(question: Question): string[] {
    return question.options;
  }

  handleUpdate(id: number) {
    localStorage.setItem('editQuestionId', JSON.stringify(id));
    this.router.navigateByUrl('addquestion');
  }

  handleDelete(index: number) {
    this.questionsList = this.questionsList.filter((q, i) => index != i ?? q);
    localStorage.setItem('questions', JSON.stringify(this.questionsList));
  }


  logout()  {
    localStorage.setItem('access','false');
    this.router.navigateByUrl('./login');
  }


}
