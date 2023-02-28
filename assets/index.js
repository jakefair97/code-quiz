var timer = document.getElementById("timer");
var startBtn = document.getElementById("start");
var mainEl = document.getElementById("main");
var question = document.getElementById("question");
var questionText = document.querySelector(".question-text");

var questions = {
    question1: "Commonly used datatypes do NOT include:",
    question2: "The condition in an if/else statement is enclosed with:",
    question3: "Arrays in JavaScript can be used to store:",
    question4: "Object values are enclosed with:",
    question5: "DOM stands for:",
    question6: "String values are always enclosed with:"
};
var answers = {
    answer1: ["Boolean", "Arrays", "Prompt", "Strings"],
    answer2: ["Parentheses", "Quotes", "Colons", "Square brackets"],
    answer3: ["Other arrays", "Strings", "Numbers", "All of the above"],
    answer4: ["Asterisks", "Curly brackets", "Dollar signs", "Quotes"],
    answer5: ["Delta Omega Mu", "Determine Origin Maximum", "Delete Optional Model", "Document Object Model"],
    answer6: ["Quotes", "Caret tops", "Backslashes", "Tildes"]
};
var correctAnswers = {
    CAnswer1: "Prompt",
    CAnswer2: "Parentheses",
    CAnswer3: "All of the above",
    CAnswer4: "Curly brackets",
    CAnswer5: "Document Object Model",
    CAnswer6: "Quotes"
};
// 2 ways that I can think of: predefine elements in HTML and change their visibility as needed
// or create arrays with questions and answers that populate elements 

var time = 0;
timer.textContent = 'Time: ' + time;

function setTime() {
    var timerInterval = setInterval(function() {
        time--;
        timer.textContent = "Time " + time;

        if(time === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}

startBtn.addEventListener('click', function() {
    mainEl.innerHTML = "";
    time = 75;
    timer.textContent = "Time: " + time;

    questionText.innerHTML = questions.question1;
   
    for (var i = 0; i < answers.answer1.length; i++) {
        var button = document.createElement("button");
        button.setAttribute("class", "answer");
        button.setAttribute("id", "answer" + i)
        button.innerHTML = answers.answer1[i];
        document.querySelector(".choices").appendChild(button);
    }
})