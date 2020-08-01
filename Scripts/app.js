/*
heavly insperation from Awais Mirza, Develop a Quiz App with Javascript - Object
Oriented Programming, published Aug 23,2016
project URL: https://www.youtube.com/watch?v=jvk1pFNqXaw
*/ 

//#region c# quizs
var consoleApplication = [
  new Question("What type of project sohud you make?", [".java", "Empty Project", "Console App (.Net Core)", "Console App C++"], "Console App (.Net Core)"),
  new Question("What button will run the program?", ["CTRL + R", "F0", "F5", "ESC"], "F5")
]

var comments = [
  new Question("Which is for a single line comment", ["/**/", "//", "/*", "/"], "//"),
  new Question("Which is for a multi - line comment", ["//", "/**/", "/*", "*"], "/**/")
]

var keywords = [
  new Question("Can a key word be used with as variable name?", ["Yes", "No", "", ""], "No"),
  new Question("Is 'int' the same as 'Int'?", ["Yes", "No", "", ""], "No"),
  new Question("C# is a case sensitive language.", ["false", "true", "", ""], "true")
]

var variables = [
  new Question("Whch is an example of an integer", ["7", "3.14", "6/9", "0.7"], "7"),
  new Question("Are 'char a = (char)65' and 'char b = 'A'' equal", ["Yes", "No", "", ""], "Yes"),
  new Question("How are float and double differentiated", ["with and f at the end 0.7f", "they are the same", "the program decides which it is", "they are not"], "with and f at the end 0.7f"),
  new Question("Maybe is a possibe value for a boolean", ["Yes", "No", "Maybe", "IDK"], "No")
]

var arrays = [
  new Question("Arrays are dynamicly resizing oout of the box", ["true", "false", "", ""], "false"),
  new Question("Which will convert a string into an array of characters?", [".Length", ".ToArray()", ".ToCharArray", ".ToCharArray()"], ".ToCharArray()"),
  new Question("Whats an example of array initialization?", ["int[] scores = new int[5]", "string[] names = {'kelsey'}", "array = new arra", "A & B"], "A & B"),
  new Question("What element is accessed from scores[0] = 9", ["the first element", "DNE", "the last one", "the one before the first one"], "the first element")
]

var operators = [
  new Question("x = 1; x++; what is x now", ["1", "2", "4", "0"], "2"),
  new Question("Which is the mod operation", ["/", "%", ".", "$"], "%"),
  new Question("What is the difference between x++ & ++x", ["x++ will increment after using the current value of x and ++x will increment then use x", "They are the same", "++x will increment after using the current value of x and x++ will increment then use x", "Those are not valid operators"], "x++ will increment after using the current value of x and ++x will increment then use x"),
  new Question("Are x++ & ++x the same", ["Yes", "No", "", ""], "No"),
]

var conditionals = [
  new Question("Which is not a conditional", ["if", "do...while", "if else if", "switch"], "do...while"),
  new Question("Its better to use 20 if else if statments than on switch", ["true", "false", "", ""], "false"),
  new Question("14 % 2 == 0 is true", ["true", "false", "", ""], "true"),
  new Question("you should always include the default statment in a switch", ["true", "false", "", ""], "true"),
]

var loops = [
  new Question("What is the difference between while & do...while", ["nothing", "one is a loop the other is a conditional", "do...while executes at least once", "everything"], "do...while executes at least once"),
  new Question("When should you use a foreach loop instead of a regular for loop", ["When the index does not matter", "It makes no difference", "When ths index is important", "never"], "When the index does not matter"),
  new Question("are for loop difference than while loops in their functions they can do", ["Yes", "No", "", ""], "No"),
  new Question("You can only use integers for a for loop", ["ture", "false", "", ""], "false")
]

var functions = [
  new Question("what is the return type of public int Funtion(){...}", ["float", "int", "void", "cat"], "int"),
  new Question("there is a limit to the number of params a function can have", ["true", "false", "", ""], "false"),
  new Question("Functions can only return int, long, float, double, bool, char, or string data types", ["true", "false", "", ""], "false"),
  new Question("it is best that one function preform one specific task and no more", ["true", "false", "", ""], "true")
]

var classes = [
  new Question("A class is a blue print for an object", ["true", "false", "", ""], "true"),
]

var objects = [
  new Question("An object is an instance of a class", ["true", "false", "", ""], "true"),
  new Question("a", ["the", "answer", "is", "false"], "false"),
]

var inheritance = [
  new Question("If the class Dog is a subclass of Animal are Dog object also Animal objects?", ["Yes", "No", "", ""], "Yes"),
  new Question("If the Dog and Cat class both inherite from the Animal class can they each have their own Speak() method?", ["Yes", "No", "", ""], "Yes")
]

//#endregion
//#region unity Quizs
var navigation = [
  new Question("You can toggle between 2D and 3D", ["true", "false", "", ""], ""),
  new Question("How can you change you layout", ["the layout dropdown", "can't", "", ""], "the layout dropdown"),
  new Question("you should use a play mode tint", ["true", "false", "", ""], "true"),
  new Question("IDK", ["", "", "", "i"], "i")
]

var windows = [
  new Question("the game scene is where you test play", ["true", "false", "", ""], "true"),
  new Question("The project window is where all your assets are stored", ["true", "false", "", ""], "true"),
  new Question("What is the purpose of the console window", ["none", "the what window??", "it log errors, warnings, and help with debugging", "to tell you how things work"], "it log errors, warnings, and help with debugging"),
  new Question("Is there a way to turn off all audio", ["Yes", "No", "", ""], "Yes")
]

var tags = [
  new Question("Enemy is a default tag", ["true", "false", "", ""], "false"),
  new Question("you can only have 5 tags", ["true", "false", "", ""], "false"),
  new Question("how do you access a game object through script", ["FindGameObjectWithTag('some tag')", "you can't", ".GetTag(some tag)", "gameObjecct.tag == 'some tag'"], "FindGameObjectWithTag('some tag')"),
  new Question("tags are actually usless and should not be used", ["true", "false", "", ""], "false")
]

var layers = [
  new Question("sorting layers are the same as layers", ["true", "false", "", ""], "false"),
  new Question("What are sorting layers for", ["nothing", "help with organization and more", "to confues people", "a new thing to replace the old layer system"], "help with organization and more")
]

var components = [
  new Question("what two components do you need to have working physics on an object", ["rigidbody and collider", "audio source and collider", "just the rigidbody", "just the collider"], "rigidbody and collider"),
  new Question("Are the custom scripts you write also components", ["Yes", "No", "", ""], "Yes"),
  new Question("the Rigidbody is what allows game objects to interact with physics", ["true", "false", "", ""], "true")
]

var prefabs = [
  new Question("What is a prefab?", ["A way to animate", "IDK", "thats not a real thing", "A prefab is a template for a game object, it stores the setup for that item i.e. an enemy in the game"], "A prefab is a template for a game object, it stores the setup for that item i.e. an enemy in the game"),
]


//#endregion
//#region topDown shooter 
var playerMovement = [
  new Question("What method is used to move the rigidbody to some positon?", ["GoTo()", "NewPosition()", "MovePosition()", "GoToPosition"], "MovePosition()"),
  new Question("What should the players gravity be set to?", ["9.81", "0", "1", "none"], "0")
]

var playerShooting = [
  new Question("How do you check if the user clicks the left mouse button for firing?", ["if(input.GetKeyDown(KeyCode.mouse0))", "if(Fire.click)", "if(shootButton.Pressed())", "if(Input.GetButtonDown(\"Fire1\"))"], "if(Input.GetButtonDown(\"Fire1\"))")
]

var health = [
  new Question("What is the name of the method we wrote for takeing damage?", ["Hit()", "TakeDamage()", "RemoveHealth()", "Kill()"], "TakeDamage()"),
  new Question("What is the type of the param in TakeDamage()", ["double", "int", "float", "sting"], "float")
]

var damage = [
  new Question("Which of these do we attach the Damage script to?", ["Player", "Bullet prefab", "Bullet", "Shoot pos"], "Bullet prefab")
]

var enemyMovement = [
  new Question("Which is used to move the enemy towards the player", ["Rigidbody.MovePosition", "Vector2.MoveTowards", "", ""], "Vector2.MoveTowards")
]

var interactables = [
  new Question("What label do we give to the Interact() method", ["public virtual void", "private virtual int", "virtual", "virtual public void"], "public virtual void")
]

var obsticals = [
  new Question("How are different levels of damage shown to the players", ["with multiple sprites", "it is not", "with an array of sprites whose index is linked with the health", "by destroying the gameObject at zero health"], "with an array of sprites whose index is linked with the health")
]

var drops = [
  new Question("How is the droped object chosen?", ["Random.Range(0, drops.Length + 5)", "each type of enemy drops something specific", "there are not drops", "Random.Range"], "Random.Range(0, drops.Length + 5)"),
  new Question("Why do we add 5 to the drops.Length", ["we don't", "to make sure that sometimes drops do not spawn in", "there are five more drops", "to make it an odd number"], "to make sure that sometimes drops do not spawn in")
]

var spawning = [
  new Question("We use a coutine and not a method for spawning", ["true", "false", "", ""], "true")
]
//#endregion

// list of all the quizs
var quizs = [consoleApplication, comments, keywords, variables, arrays, operators,
conditionals, loops, functions, classes, objects, inheritance, navigation, windows, 
tags, layers, components, prefabs, playerMovement, playerShooting, health, damage,
enemyMovement, interactables, obsticals, drops, spawning]

var quiz;           // quiz that the user has choosen
var originalHTML;   // the html that shows a list of all the quizs
var incorrect = []; // array storing the questions the user answered wrong
var submition;

//#region DOM manipulation
// setup the html for the quiz
function starQuiz() {
  originalHTML = document.body.innerHTML;
  var questionHTML = "";
  questionHTML += "<div class='col-12 row'>"
  questionHTML +=   "<p><span id='progress'></span></p>"
  questionHTML += "</div>"
  questionHTML += "<div class='row'>";
  questionHTML +=   "<h1 id='question'>Question</h1>";
  questionHTML += "</div>";
  questionHTML += "<div>";
  questionHTML +=   "<form action='javascript:void(0);'>";
  questionHTML +=     "<input id='btn0' type='radio' name='choice0'>";
  questionHTML +=     "<label id='choice0' for='btn0'></label><br>";
  questionHTML +=     "<input id='btn1' type='radio' name='choice1'>";
  questionHTML +=     "<label id='choice1' for='btn1'></label><br>";
  questionHTML +=     "<input id='btn2' type='radio' name='choice2'>";
  questionHTML +=     "<label id='choice2' for='btn2'></label><br>";
  questionHTML +=     "<input id='btn3' type='radio' name='choice3'>";
  questionHTML +=     "<label id='choice3' for='btn3'></label><br>";
  questionHTML +=     "<input type='submit' id='submit'>";
  questionHTML +=   "</form>";
  questionHTML += "</div>";
  questionHTML += "<div class='row'>";
  questionHTML +=   "<div class='col-12'>";
  questionHTML +=     "<p id='alert'>Please select an answer before submiting</p>";
  questionHTML +=   "</div>";
  questionHTML += "</div>";
  

  var panel = document.getElementById("panel");
  panel.innerHTML = questionHTML;

  populateQuiz();
}

// display how many questions the user got right
function endResults() {
  // setup HTML
  var quizEndHTML = "<h1>Results</h1>";
  quizEndHTML += "<h2 id='score'>Your score: " + quiz.score + " out of " + 
    quiz.questions.length + "</h2>";

  quizEndHTML += "<h2>Thats " + (quiz.score / quiz.questions.length) * 100 + 
    " %</2>"

  quizEndHTML += "<button id='btn5'>Return to quiz selction</button>"
  quizEndHTML += "<h1>What You Got Wrong</h1>"

  // display all the questions the use got wrong
  for(var i = 0; i < incorrect.length; i++){
    quizEndHTML += "<div class='col-12'><h3>" + incorrect[i].text + "</h3></div>";
    quizEndHTML += "<div class='row'></div>"
  }

  var panel = document.getElementById("panel");
  panel.innerHTML = quizEndHTML;

  // return the quiz selection
  var button = document.getElementById("btn5");
  button.onclick = function() {
    incorrect = [];
    document.body.innerHTML = originalHTML;
    quizButtonSetup();
  }
}

// show how far into the quiz the user is
function showProgression() {
  var progressElement = document.getElementById("progress");
  var currIndex = quiz.questionIndex + 1;
  progressElement.innerHTML = "Question " + currIndex + " of " + quiz.questions.length;
}

// count the number of quizs
function getQuizCount() {
  var numOfQuizs;   // number of quizs there are
  numOfQuizs = document.getElementsByClassName("list");

  // set num qiuz text
  var numText = document.getElementsByClassName("num-of-quiz");
  for(var i = 0; i < numOfQuizs.length; i++){
    numText[i].innerHTML = "number of quizs: " + numOfQuizs[i].childElementCount;
  }

}
//#endregion

// setup the question and its answers
function populateQuiz() {
  if(quiz.hasEnded()) {
    endResults();
  } else {
    // set the question text
    var question = document.getElementById("question");
    question.innerHTML = quiz.getCurrQuestion().text;

    clearRadioButtons(null);

    // set the choices text
    var choices = quiz.getCurrQuestion().choices;
    for(var i = 0; i < choices.length; i++){
      var btn = document.getElementById("choice" + i);
      btn.innerHTML = choices[i];

      userSubmition("btn" + i, choices[i]);
    }
    var element = document.getElementById("alert");
    element.style.visibility = "hidden";
    showProgression();
  }
}

// make sure only one radio button is checked at a time
// param id: used to keep a specified button as checked
function clearRadioButtons(id) {
  for(var i = 0; i < 4; i++) {
    var btn = document.getElementById("btn" + i);
    if(btn.id != id)
      btn.checked = false;
  }
}

// determines if one radio button is checked
function findChecked() {
  for(var i = 0; i < 4; i++) {
    var btn = document.getElementById("btn" + i);
    if(btn.checked === true)
      return true;
  }
}

// submit the users answer
// param id: button id that the user clicked
// param guess: answer that the button clicked is mapped to
function userSubmition(id, guess) {
  var button = document.getElementById(id);
  var submitButton = document.getElementById("submit");
 
  // set the answer the user wants to submit to the radio text
  button.onclick = function() {
    clearRadioButtons(button.id);
    submition = guess;
    if(submition === "")
      clearRadioButtons(null);
  }

  // submit the users final answer
  submitButton.onclick = function() {
    // only submit if one radio button is checked
    if(findChecked()) {
      // if wrong answer add to incorrect array
      if(!quiz.answerSubmit(submition)){
        incorrect.push(quiz.questions[quiz.questionIndex - 1]);
      }
      populateQuiz();
    } else {
      var element = document.getElementById("alert");
      element.style.visibility = "visible";
    }
  }

}

// setup quiz select buttons
function quizButtonSetup() {
  for(var i = 0; i < quizs.length; i++) {
    getQuiz("btn" + i , i)
  }
}

// start the quiz that corolates with the button clicked
// param id: id of the button clicked
// param index: index of quiz mapped to the button with id
function getQuiz(id, index) {
  var button = document.getElementById(id);
  button.onclick = function() {
    quiz = new QuizController(quizs[index]);
    starQuiz(quiz);
  }
}

quizButtonSetup();