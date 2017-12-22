import {Injectable} from '@angular/core';
import {Question} from '../models/Question';
import {forEach} from '@angular/router/src/utils/collection';

@Injectable()
export class DataService {

  questions: Question[];

  constructor() {
    // this.questions = [
    //   {
    //     text: 'What is your name',
    //     answer: 'My name is Jack',
    //     hide: true
    //   },
    //   {
    //     text: 'What is your favorite color',
    //     answer: 'My favorite color is blue',
    //     hide: true
    //   },
    //   {
    //     text: 'What is your favorite langauge',
    //     answer: 'My favorite language is Javascript',
    //     hide: true
    //   }
    // ];
  }

  // Get Questions from the local storage.
  getQuestions() {
    if (localStorage.getItem('questions') == null) {
      this.questions = [];
    }else {
     this.questions =  JSON.parse(localStorage.getItem('questions'));
    }
    return this.questions;
  }

  // Add questions to the local storage
  addQuestion(question: Question) {
    this.questions.unshift(question);

    // Init local variable
    let questions;
    if (localStorage.getItem('questions') == null) {
      questions = [];
      // push new question
      questions.unshift(question);
      // Set new array to local Storage
      localStorage.setItem('questions', JSON.stringify(questions));
    }else {
      questions = JSON.parse(localStorage.getItem('questions'));
      questions.unshift(question);
      localStorage.setItem('questions', JSON.stringify(questions));
    }
  }

  // Remove question from local stoage
  removeQuestion(question: Question) {
    for (let i = 0; i < this.questions.length; i++) {
      if (this.questions[i] === question) {
        this.questions.splice(i, 1 );
        localStorage.setItem('questions', JSON.stringify(this.questions));
      }
    }
  }
}
