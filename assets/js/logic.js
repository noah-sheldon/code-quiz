import { questions } from "./questions.js";

let startButton = document.querySelector("#start");
let startScreen = document.querySelector("#start-screen");
let questionsScreen = document.querySelector("#questions");
let questionTitle = document.querySelector("#question-title");
let choices = document.querySelector("#choices");
let timer = document.querySelector("#time");
let feedbackScreen = document.querySelector("#feedback");
let endScreen = document.querySelector("#end-screen");
let playerNameInput = document.querySelector("#initials");
let submitBtn = document.querySelector("#submit");
let questionNumber = 0;
let time = 60;
let playerScore = 0;

startButton.addEventListener("click", function () {
  startQuiz();
});

function startQuiz() {
  startScreen.setAttribute("class", "hide");
  questionsScreen.setAttribute("class", "start");
  startTime();
  getQuestions();
}

function getQuestions() {
  createQuestion(questionNumber);
  choices.addEventListener("click", function (event) {
    event.preventDefault();
    let selectedAnswer = event.target;
    let answerBool =
      selectedAnswer.textContent === questions[questionNumber].answer;
    if (answerBool) {
      showFeedback("Correct Answer!");
      playerScore += 10;
      questionNumber += 1;
      createQuestion(questionNumber);
    } else {
      showFeedback("Wrong Answer!");
      time -= 10;
      questionNumber += 1;
      createQuestion(questionNumber);
    }
  });
  submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    var playerName = playerNameInput.value.trim();
    if (playerName === "") {
      return;
    } else {
      sessionStorage.setItem(playerName, playerScore);
    }
    playerName.value = "";
  });
}

function startTime() {
  var Countdown = setInterval(function () {
    timer.textContent = time;
    time--;
    if (time <= 0) {
      clearInterval(Countdown);
      timer.textContent = 60;
      alert("You have run out of time!");
      endGame();
    }
  }, 1000);
}

function showFeedback(message) {
  feedbackScreen.textContent = "";
  feedbackScreen.setAttribute("class", "start");
  let feedbackPara = document.createElement("h4");
  feedbackPara.textContent = message;
  feedbackScreen.appendChild(feedbackPara);
}

function createChoices(choice) {
  let choiceBtn = document.createElement("button");
  choiceBtn.textContent = choice;
  choices.appendChild(choiceBtn);
}

function createQuestion(questionNumber) {
  if (questionNumber <= questions.length) {
    choices.textContent = "";
    var currentQ = questions[questionNumber];
    questionTitle.textContent = currentQ.question;
    for (let i = 0; i < 4; i++) {
      createChoices(currentQ.choices[i]);
    }
  }
}

function endGame() {
  questionsScreen.setAttribute("class", "hide");
  feedbackScreen.setAttribute("class", "hide");
  endScreen.setAttribute("class", "start");
}
