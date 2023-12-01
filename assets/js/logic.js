import { questions } from "./questions.js";

let startButton = document.querySelector("#start");
let startScreen = document.querySelector("#start-screen");
let questionTitle = document.querySelector("#question-title");
let choices = document.querySelector("#choices");
let timer = document.querySelector('#time');

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
    startScreen.setAttribute("style", "display: none;");
    getQuestions();
//     startTimer ();
//   let question = getRandomQuestion();
//   console.log(question);

//   document.getElementById("question-title").style.display = "block";
}

function getQuestions() {
    // Get the first question and display it on screen
    let currentQ = questions[0];
    questionTitle.textContent = currentQ.question;
    for(let i=0;i<4;i++){
        let choiceBtn = document.createElement('button')
        choiceBtn.textContent = currentQ.choices[i];
        choices.appendChild(choiceBtn);
    }D
}
