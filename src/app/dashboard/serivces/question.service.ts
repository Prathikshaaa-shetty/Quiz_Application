import { Injectable } from '@angular/core';
import { Question } from '../models/question.model';

@Injectable()
export class QuestionService {
  public questionsList : Question[] = [];

  constructor() { }

  get Questions(): Question[] {
    return this.questionsList;
  }

  AddQuestions(question:Question): void {
    this.questionsList.push(question);
  }

}
