let timer;
let timeLeft = 300; // 5 minutes in seconds
let score = 0;

const answers = {
    q1: 'B',
    q2: 'B',
    q3: 'B',
    q4: 'B',
    q5: 'D',
    q6: 'A',
    q7: 'A',
    q8: 'D',
    q9: 'C',
    q10: 'A'
};

function startTimer() {
    const timerElement = document.getElementById('timer');
    timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer);
            alert('Time is over!');
            submitQuiz();
        } else {
            timeLeft--;
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerElement.textContent = `Time: ${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
        }
    }, 1000);
}

function submitQuiz() {
    clearInterval(timer);
    const resultElement = document.getElementById('score');
    for (let i = 1; i <= Object.keys(answers).length; i++) {
        const answer = document.querySelector(`input[name="q${i}"]:checked`);
        const correctAnswer = answers[`q${i}`];
        if (answer) {
            if (answer.value === correctAnswer) {
                score++;
                answer.nextElementSibling.style.backgroundColor = '#5abf4c'; // Correct answer feedback
            } else {
                answer.nextElementSibling.style.backgroundColor = '#d9534f'; // Wrong answer feedback
                const correctOption = document.querySelector(`input[name="q${i}"][value="${correctAnswer}"]`).nextElementSibling;
                correctOption.style.backgroundColor = '#5bc0de'; // Correct answer highlight
            }
        }
    }
    resultElement.textContent = `Score: ${score}/10`;
    alert(`Your score is ${score}/10. You ${score > 5 ? 'passed' : 'failed'}!`);
}

window.onload = startTimer;
