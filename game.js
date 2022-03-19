const questions = [
    {
        questionText: "Commonly used data types DO NOT include:",
        options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        answer: "3. alerts",
    },
    {
        questionText: "Arrays in JavaScript can be used to store ______.",
        options: [
            "1. numbers and strings",
            "2. other arrays",
            "3. booleans",
            "4. all of the above",
        ],
        answer: "4. all of the above",
    },
    {
        questionText:
            "String values must be enclosed within _____ when being assigned to variables.",
        options: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
        answer: "3. quotes",
    },
    {
        questionText:
            "A very useful tool used during development and debugging for printing content to the debugger is:",
        options: [
            "1. JavaScript",
            "2. terminal/bash",
            "3. for loops",
            "4. console.log",
        ],
        answer: "4. console.log",
    },
    {
        questionText:
            "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
        options: ["1. break", "2. stop", "3. halt", "4. exit"],
        answer: "1. break",
    },
];

const question = document.getElementById("question");


let score = 0;
let questionCounter = 0;
let currentQuestion = [];
let availableQuestion = {};

let countdown = 50;
let answerTimer = setInterval(function () {
    if (countdown <= 0) {
        clearInterval(answerTimer);
        document.getElementById("countdown").innerHTML = "Time out";
        availableQuestion.splice(questionIndex, 1);
        questionCounter++;
        getNewQuestion();
    } else {
        document.getElementById("countdown").innerHTML = countdown;
    }
    countdown -= 1;
}, 1000);


const start = () => {
    availableQuestion = [...questions];
    score = 0;
    getNewQuestion();
}


const getNewQuestion = () => {
    if (questionCounter === questions.length) {
        localStorage.setItem("mostRecentScore", score);
        return window.location.assign("./end.html");
    }

    const questionIndex = Math.floor(Math.random() * availableQuestion.length)
    currentQuestion = availableQuestion[questionIndex];

    question.innerHTML = currentQuestion.questionText;
    for (let i = 0; i < currentQuestion.options.length; i++) {
        document.getElementById(`option${i + 1}`).innerHTML = currentQuestion.options[i];
        document.getElementById(`option${i + 1}`).setAttribute("onclick", `chooseAnswer(${i},${questionIndex})`);
    }
}

const chooseAnswer = (index, questionIndex) => {
    if (currentQuestion.options[index] === currentQuestion.answer) {
        score++;
        document.getElementById("status").innerHTML = "correct"
    } else document.getElementById("status").innerHTML = "wrong";

    setTimeout(() => {
        document.getElementById("status").innerHTML = "......"
        availableQuestion.splice(questionIndex, 1);
        questionCounter++;
        getNewQuestion();
    }, 1000);
}

start();

