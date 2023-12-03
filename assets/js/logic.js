import { questions } from "./questions.js";

let startButton = document.querySelector("#start");
let startScreen = document.querySelector("#start-screen");
let questionsScreen = document.querySelector("#questions");
let questionTitle = document.querySelector("#question-title");
let choices = document.querySelector("#choices");
let timerID = document.querySelector("#time");
let timerClass = document.querySelector(".time");
let feedbackScreen = document.querySelector("#feedback");
let endScreen = document.querySelector("#end-screen");
let playerNameInput = document.querySelector("#initials");
let submitBtn = document.querySelector("#submit");
let finalScoreText = document.querySelector("#final-score");
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
      showFeedback("Correct Answer!", "green");
      playerScore += 10;
      questionNumber += 1;
      createQuestion(questionNumber);
    } else {
      showFeedback("Wrong Answer!", "red");
      time -= 10;
      questionNumber += 1;
      createQuestion(questionNumber);
    }
  });
  submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    var playerName = playerNameInput.value.trim();
    if (playerName === "") {
      alert("Please enter your name!");
      return;
    } else {
      let scores = getScores();
      scores.push({ name: playerName, score: playerScore });
      sessionStorage.setItem("scores", JSON.stringify(scores));
      location.href = "highscores.html";
    }
    playerName = "";
  });
}

function startTime() {
  var Countdown = setInterval(function () {
    timerID.textContent = time;
    time--;
    if (time <= 0) {
      endGame();
      clearInterval(Countdown);
      timerID.textContent = 60;
      alert("You have run out of time!");
    }
  }, 1000);
}

function showFeedback(message, colour) {
  feedbackScreen.textContent = "";
  feedbackScreen.setAttribute("class", "start");
  let feedbackPara = document.createElement("h4");
  feedbackPara.textContent = message;
  feedbackPara.style.backgroundColor = colour;
  feedbackScreen.appendChild(feedbackPara);
}

function createChoices(choice) {
  let choiceBtn = document.createElement("button");
  choiceBtn.textContent = choice;
  choices.appendChild(choiceBtn);
}

function createQuestion(questionNumber) {
  if (questionNumber < questions.length) {
    choices.textContent = "";
    var currentQ = questions[questionNumber];
    questionTitle.textContent = currentQ.question;
    for (let i = 0; i < 4; i++) {
      createChoices(currentQ.choices[i]);
    }
  } else {
    questionTitle.textContent = '';
    endGame();
  }
}

function endGame() {
  questionsScreen.setAttribute("class", "hide");
  feedbackScreen.setAttribute("class", "hide");
  endScreen.setAttribute("class", "start");
  timerID.textContent = 0;
  finalScoreText.textContent = playerScore;
}

function getScores() {
  if ("scores" in sessionStorage) {
    return JSON.parse(sessionStorage.getItem("scores"));
  } else {
    return [];
  }
}
