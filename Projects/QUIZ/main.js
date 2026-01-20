const questions = [
    {
        question: "What does HTML stand for?",
        options: ["HyperText Markup Language", "Home Tool Markup Language", "Hyperlinks Markup Language", "Hyperlinking Text Language"],
        answer: 0
    },
    {
        question: "HTML is used to create?",
        options: ["website", "movie", "song", "game"],
        answer: 0
    },
    {
        question: "Which file contains the design of the webpage?",
        options: [".html", ".css", ".js", ".style"],
        answer: 1

    },
    {
        question: "JavaScript is used for:",
        options: ["Styling pages", "Structuring pages", "Adding interactivity", "Database management"],
        answer: 2
    },
    {
        question: "Which HTML tag is used to create a button?",
        options: ["<input>", "<button>", "<div>", "<p>"],
        answer: 1
    }

];

let index = 0;
let score = 0;



const questionText = document.getElementById("question");
const optionBox = document.getElementById("options");
const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result-box");
const scoreText = document.getElementById("score");

function loadQuestion() {
    const q = questions[index];
    questionText.textContent = q.question;
    optionBox.innerHTML = "";

    q.options.forEach((opt, i) => {
        const btn = document.createElement("div");
        btn.textContent = opt;
        btn.classList.add("option");
        btn.onclick = () => checkAnswer(i);
        optionBox.appendChild(btn);
    });
}
function checkAnswer(selected) {
    if (selected === questions[index].answer) {
        score++;
    }

    index++;

    if (index < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizBox.classList.add("hidden");
    resultBox.classList.remove("hidden");
    scoreText.textContent = `${score} / ${questions.length}`;
}
loadQuestion();


