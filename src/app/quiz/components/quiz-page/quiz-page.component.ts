import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Question } from 'src/app/dashboard/models/question.model';
import { QuizModel } from '../../models/quiz.model';
import { quizDataModel } from '../../models/quizdata.model';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css'],
})
export class QuizPageComponent implements OnInit {
  @Output() onComplete: EventEmitter<any> = new EventEmitter();

  public quizData: QuizModel[] = [];
  public selectedQuiz: QuizModel;
  public selectedQuizIndex: number;
  public displayMessage: string = '';
  public showSubmitButton: boolean = false;
  public showNextButton: boolean = false;
  public noOfCorrectAns: number = 0;
  public correctAns: boolean = false;
  private selectedAnswer: string;
  public isDisable: boolean;
  radio: any;

  public userAnswers: quizDataModel[] = [];



  constructor() {
    this.quizData = JSON.parse(localStorage.getItem('questions'));

    this.selectedQuiz = this.quizData[0];
    this.selectedQuizIndex = 0;
    this.showNextButton = false;
    this.showSubmitButton = false;
    this.isDisable = false;
  }

  ngOnInit() {}

  onSelectAns(answer: string) {
    if (this.selectedAnswer) {
      this.showSubmitButton = true;
      this.showNextButton = true;
      return;
    }
    
    this.showSubmitButton = true;
    this.showNextButton = false;

    if (!answer) {
      
      this.showNextButton = false;
      return;
    }

    this.selectedAnswer = answer;
  }

  onSubmit() {

    this.showNextButton = true;
    this.showSubmitButton = false;
    if (!this.showNextButton) {
      this.isDisable = true;
    }
    this.correctAns = this.selectedAnswer == this.selectedQuiz.correct;
    if (this.correctAns) {
      this.displayMessage = 'Correct Answer! Go to the next question';
    } else {
      this.displayMessage = 'Wrong Answer! Go to the next question';
    }
    this.noOfCorrectAns = this.correctAns
      ? this.noOfCorrectAns + 1
      : this.noOfCorrectAns;

     

      this.userAnswers.push({question_id:this.selectedQuiz.id, answer:this.selectedAnswer});
      
      
  }

  onNext() {
    this.showNextButton = false;
    this.showSubmitButton = true;
    let selectedQuizIndex = this.selectedQuizIndex + 1;
    if (selectedQuizIndex < this.quizData.length) {
      this.selectedQuizIndex = selectedQuizIndex;
      this.selectedQuiz = this.quizData[this.selectedQuizIndex];
      this.displayMessage = '';
    } else {

      localStorage.setItem('userAnswers', JSON.stringify(this.userAnswers));
      
      this.onComplete.emit({
        noOfCorrectAns: this.noOfCorrectAns,
        totalQuestions: this.quizData.length,
      });
    }
   

    this.selectedAnswer = null;

    this.radio = document.querySelector('input[type = radio]:checked');

    this.radio.checked = false;
  }
}
