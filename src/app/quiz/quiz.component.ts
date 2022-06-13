import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from '../dashboard/models/question.model';
import { ScoreModel } from './models/score.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  ngOnInit(): void {}

  title = 'quiz';
  public showRegister: boolean = true;
  public showQuiz: boolean = false;
  public showResult: boolean = false;
  public noOfCorrectAns: number = 0;
  public totalQuestions: number = 0;

  handleRegister(showRegister: boolean): void {
    this.showRegister = showRegister;
    if (!this.showRegister) {
      this.showQuiz = true;
    }
  }

  handleOnComplete(event: ScoreModel): void {
   
    this.noOfCorrectAns = event.noOfCorrectAns;
    this.totalQuestions = event.totalQuestions;
    this.showRegister = false;
    this.showQuiz = false;
    this.showResult = true;
  }
}
