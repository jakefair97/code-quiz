var timer = document.getElementById("timer");
var startBtn = document.getElementById("start");
var mainEl = document.getElementById("main");
var question = document.getElementById("question");
var questionText = document.querySelector(".question-text");
var questionContainer = document.querySelector(".question-container");
var feedback = document.querySelector(".feedback");
var choices = document.querySelector('.choices');
var highScores = document.getElementById("high-scores");
var score = document.getElementById("score");
var submitScore = document.getElementById("submit-score");

var questions = {
    question1: "Commonly used datatypes do NOT include:",
    question2: "The condition in an if/else statement is enclosed with:",
    question3: "Arrays in JavaScript can be used to store:",
    question4: "Object values are enclosed with:",
    question5: "In programming, DOM stands for:",
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
var scores = {};
timer.textContent = 'Time: ' + time;

function setTime() {
    var timerInterval = setInterval(function() {
        time--;
        timer.textContent = "Time: " + time;

        if(time === 0) {
            clearInterval(timerInterval);
            inputScore();
        }
        else if (question.id === "complete") {
            clearInterval(timerInterval);
        }
    }, 1000);
}

function inputScore() {
    choices.textContent = '';
    questionText.textContent = '';
    score.innerHTML = time;
    highScores.setAttribute("class", "visible"); 
    

}
function setScore(event) {
    event.stopPropagation();


}

function displayScores() {

}

startBtn.addEventListener('click', function() {
    mainEl.innerHTML = "";
    time = 75;
    timer.textContent = "Time: " + time;
    setTime();

    questionText.innerHTML = questions.question1;
    question.id = 'question1';
   
    for (var i = 0; i < answers.answer1.length; i++) {
        var button = document.createElement("button");
        button.setAttribute("class", "answer");
        button.setAttribute("id", "answer" + i)
        button.innerHTML = answers.answer1[i];
        choices.appendChild(button);
    }
})

// When any of the answer buttons are pressed, the answer is checked against the correct answer and the elements are populated with the next question

questionContainer.addEventListener("click", function(event){
    var element = event.target;
    if (!element.matches("button")){
        return
    }
    if (question.id == 'question1') {
        if (element.innerHTML === correctAnswers.CAnswer1) {
            feedback.innerHTML = "Correct!";
        }else {
            feedback.innerHTML = "Wrong!";
            time -= 10;
            timer.textContent = "Time: " + time;
        }
        question.id = 'question2';
        questionText.innerHTML = questions.question2;
        for (i in choices.children) {
            choices.children[i].innerHTML = answers.answer2[i];
        }
    }

    else if (question.id == 'question2') {
        if (element.innerHTML === correctAnswers.CAnswer2) {
            feedback.innerHTML = "Correct!";
        }else {
            feedback.innerHTML = "Wrong!";
            time -= 10;
            timer.textContent = "Time: " + time;
        }
        question.id = 'question3';
        questionText.innerHTML = questions.question3;
        for (i in choices.children) {
            choices.children[i].innerHTML = answers.answer3[i];
        }
    }

    else if (question.id == 'question3') {
        if (element.innerHTML === correctAnswers.CAnswer3) {
            feedback.innerHTML = "Correct!";
        }else {
            feedback.innerHTML = "Wrong!";
            time -= 10;
            timer.textContent = "Time: " + time;
        }
        question.id = 'question4';
        questionText.innerHTML = questions.question4;
        for (i in choices.children) {
            choices.children[i].innerHTML = answers.answer4[i];
        }
    }
    
    else if (question.id == 'question4') {
        if (element.innerHTML === correctAnswers.CAnswer4) {
            feedback.innerHTML = "Correct!";
        }else {
            feedback.innerHTML = "Wrong!";
            time -= 10;
            timer.textContent = "Time: " + time;
        }
        question.id = 'question5';
        questionText.innerHTML = questions.question5;
        for (i in choices.children) {
            choices.children[i].innerHTML = answers.answer5[i];
        }
    }

    else if (question.id == 'question5') {
        if (element.innerHTML === correctAnswers.CAnswer5) {
            feedback.innerHTML = "Correct!";
        }else {
            feedback.innerHTML = "Wrong!";
            time -= 10;
            timer.textContent = "Time: " + time;
        }
        question.id = 'question6';
        questionText.innerHTML = questions.question6;
        for (i in choices.children) {
            choices.children[i].innerHTML = answers.answer6[i];
        }
    }

    else if (question.id == 'question6') {
        if (element.innerHTML === correctAnswers.CAnswer6) {
            feedback.innerHTML = "Correct!";
        }else {
            feedback.innerHTML = "Wrong!";
            time -= 10;
            timer.textContent = "Time: " + time;
        }
        question.id = 'complete';
        inputScore();
    }    

});

submitScore.addEventListener("click", function() {
    setScore();
    displayScores();
})