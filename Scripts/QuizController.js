/*
class interface from Awais Mirza, Develop a Quiz App with Javascript - Object
Oriented Programming, published Aug 23,2016
project URL: https://www.youtube.com/watch?v=jvk1pFNqXaw
*/ 
class QuizController {
  
  constructor(questions) {
    this.questions = questions; // array of Questions
    this.score = 0;             // number of question answered correctly
    this.questionIndex = 0;     // index of the currecnt Question
  }

  // returns the question the user is on
  getCurrQuestion() {
    return this.questions[this.questionIndex];
  }

  // determine if the quiz has ended
  hasEnded() {
    return this.questionIndex == this.questions.length; 
  }

  // check if the answer submitted is correct and move to the next question
  answerSubmit(answer) {
    var currQuestion = this.getCurrQuestion();
    
    this.questionIndex++;

    if(currQuestion.check(answer)) {
      this.score++;
      return true
    }
    return false;
  }

  // return the number of questions in the quiz
  numOfQuestion() {
    return questions.length;
  }

}