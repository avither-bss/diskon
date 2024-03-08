const questions = [
    { question: "Apa warna jeruk?", options: ["Merah", "Hijau", "Oranye", "Biru"], answer: "Oranye" },
    { question: "Berapa jumlah kaki yang dimiliki kucing?", options: ["2", "4", "6", "8"], answer: "4" },
    // Tambahkan pertanyaan lainnya di sini
];

let currentQuestionIndex = 0;
let score = 0;
let timer;

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const question = questions[currentQuestionIndex];

    questionElement.textContent = question.question;
    optionsElement.innerHTML = '';

    question.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => {
            checkAnswer(option);
        });
        optionsElement.appendChild(button);
    });

    startTimer();
}

function checkAnswer(selectedOption) {
    clearInterval(timer);

    const question = questions[currentQuestionIndex];
    if (selectedOption === question.answer) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex === questions.length) {
        endGame();
    } else {
        displayQuestion();
    }
}

function startTimer() {
    let timeLeft = 10;
    const timerElement = document.getElementById("timer");

    timer = setInterval(() => {
        timeLeft--;
        if (timeLeft <= 0) {
            clearInterval(timer);
            displayQuestion();
        }
        timerElement.textContent = `Waktu: ${timeLeft}s`;
    }, 1000);
}

function endGame() {
    const container = document.querySelector(".container");
    container.innerHTML = `
        <h1>Game Selesai!</h1>
        <p>Skormu: ${score}/${questions.length}</p>
        <button onclick="restartGame()">Main Lagi</button>
    `;
}

function restartGame() {
    currentQuestionIndex = 0;
    score = 0;
    displayQuestion();
}

displayQuestion();
