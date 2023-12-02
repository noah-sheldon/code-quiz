import { questions } from "./questions.js";

let startButton = document.querySelector("#start");
let startScreen = document.querySelector("#start-screen");
let questionsScreen = document.querySelector('#questions');
let questionTitle = document.querySelector("#question-title");
let choices = document.querySelector("#choices");
let timer = document.querySelector('#time');
let questionNumber = 0

startButton.addEventListener("click", function () {

    startQuiz();
//   if (startButton) {
//     startScreen.remove();
//     for (let i = 0; i < questions.length; i++) {
//       let q = questions[i];
//       questionTitle.textContent = q["question"];
//       createChoices(q);      
//     }
//   }
});

// function getRandomQuestion() {
//   let randNum = Math.floor(Math.random() * questions.length);
//   return questions[randNum];
// }

function startQuiz() {
    startScreen.setAttribute("class", "hide");
    questionsScreen.setAttribute("class","start");
    getQuestions();
    startTimer ();
//   let question = getRandomQuestion();
//   console.log(question);

//   document.getElementById("question-title").style.display = "block";
}

function getQuestions() {
    // Get the first question and display it on screen
    let currentQ = questions[questionNumber];
    questionTitle.textContent = currentQ.question;
    for(let i=0;i<4;i++){
        let choiceBtn = document.createElement('button')
        choiceBtn.textContent = currentQ.choices[i];
        choices.appendChild(choiceBtn);
    }
}

function startTimer () {
    var Countdown = setInterval (function () {
        timer.textContent = seconds
        seconds--;
    if (seconds == 0) {
        // clears countdown
        clearInterval(Countdown); 
        timer.textContent = 60
        alert("You have run out of time!")
    }
    }, 1000) 
    // runs at speed of 1 second
}

