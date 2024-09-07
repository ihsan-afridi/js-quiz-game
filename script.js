const questions = [
    {
        question: "which one is javaScript key word",
        choices: ["case", "choices", "Play", "Rest"],
        answer: "case"
    },
    {
        question: "Which language is used for web development?",
        choices: ["Python", "JavaScript", "C++", "Java"],
        answer: "JavaScript"
    },
    {
        question: "What is 2 + 2?",
        choices: ["3", "4", "5", "6"],
        answer: "4"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const choicesElements = document.querySelectorAll('.choice');
const resultElement = document.getElementById('result');
const nextButton = document.getElementById('next-question');
const scoreElement = document.getElementById('score');

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    choicesElements.forEach((button, index) => {
        button.textContent = currentQuestion.choices[index];
        button.addEventListener('click', handleAnswerClick);
    });
    resultElement.textContent = '';
}

function handleAnswerClick(event) {
    const selectedAnswer = event.target.textContent;
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (selectedAnswer === correctAnswer) {
        resultElement.textContent = "Correct!";
        score++;
    } else {
        resultElement.textContent = "Try Again!";
    }

    scoreElement.textContent = `Score: ${score}`;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        endGame();
    }
}

function endGame() {
    questionElement.textContent = `Quiz Over! You scored ${score} out of ${questions.length}`;
    choicesElements.forEach(button => button.style.display = 'none');
    nextButton.style.display = 'none';
    resultElement.style.display = 'none';
}

nextButton.addEventListener('click', nextQuestion);

document.addEventListener('keydown', (event) => {
    const keyIndex = event.key - 1;
    if (keyIndex >= 0 && keyIndex < choicesElements.length) {
        choicesElements[keyIndex].click();
    }
});

loadQuestion();
