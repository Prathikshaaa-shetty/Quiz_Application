import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Question } from '../dashboard/models/question.model';
import { QuizModel } from '../quiz/models/quiz.model';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css'],
})
export class AddQuestionComponent implements OnInit {
  public questionsList: QuizModel[] = [];
  public question: QuizModel;
  public isEdit: boolean = false;

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.questionsList =
      JSON.parse(localStorage.getItem('questions') || 'null') || [];
    let questionId =
      JSON.parse(localStorage.getItem('editQuestionId') || 'null') || null;
    if (questionId) {
      this.isEdit = true;
      this.question = this.questionsList.find((q) => q.id == questionId);
      let options = this.question;
      this.questionForm.patchValue({
        question: this.question.question,
        a: this.question.a,
        b: this.question.b,
        c: this.question.c,
        d: this.question.d,
        correct: this.question.correct,
      });
    }
    localStorage.removeItem('editQuestionId');
  }

  questionForm = this.formBuilder.group({
    question: ['', Validators.required],
    a: ['', Validators.required],
    b: ['', Validators.required],
    c: ['', Validators.required],
    d: ['', Validators.required],
    correct: ['', Validators.required],
  });

 



  ngOnInit() {}

  onClickProfile() {
    this.router.navigateByUrl('/profile');
  }

  onQuestionSubmit() {}

  onAddQuestion(): void {
    let question: QuizModel = null;
    if (!this.questionForm.valid) {
      alert('invalid!');
      return;
    }

    if (this.isEdit) {
      question = {
        id: this.question.id,
        question: this.questionForm.get('question')?.value,
        a: this.questionForm.get('a')?.value,
        b: this.questionForm.get('b')?.value,
        c: this.questionForm.get('c')?.value,
        d: this.questionForm.get('d')?.value,
        correct: this.questionForm.get('correct').value,
      };
      this.questionsList = this.questionsList.map((q) => {
        if (q.id == this.question.id) {
          q = question;
        }
        return q;
      });
    } else {
      question = {
        id: this.questionsList.length >= 0 ? this.questionsList.length + 1 : 1,
        question: this.questionForm.get('question')?.value,
        a: this.questionForm.get('a')?.value,
        b: this.questionForm.get('b')?.value,
        c: this.questionForm.get('c')?.value,
        d: this.questionForm.get('d')?.value,
        correct: this.questionForm.get('correct').value,
      };
      let questions: QuizModel[] =
        JSON.parse(localStorage.getItem('questions') || 'null') || [];
      this.questionsList.push(question);
    }

    localStorage.setItem('questions', JSON.stringify(this.questionsList));
    this.router.navigateByUrl('/dashboard');
  }
}
