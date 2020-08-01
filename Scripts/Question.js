/*
class interface from Awais Mirza, Develop a Quiz App with Javascript - Object
Oriented Programming, published Aug 23,2016
project URL: https://www.youtube.com/watch?v=jvk1pFNqXaw
*/ 
class Question {
  
  constructor(text, choices, answer) {
    this.text = text;       // what the user is being asked
    this.choices = choices; // array of possible answers
    this.answer = answer    // one of the choices
  }

  // check if the answer is correct
  check(userSubmition) {
    return userSubmition === this.answer;
  }

}