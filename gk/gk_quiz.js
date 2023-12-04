const quiz = [
    {
     question: "What is the capital of France?",
     A: "Berlin",
     B: "Paris",
     C: "Madrid",
     D: "Rome",
     ans: "B"
    },
    {
     question: "Who wrote \"Romeo and Juliet\"?",
     A: "Charles Dickens",
     B: "William Shakespeare",
     C: "Jane Austen",
     D: "Mark Twain",
     ans: "B"
    },
    {
     question: "What is the largest planet in our solar system?",
     A: "Mercury",
     B: "Venus",
     C: "Jupiter",
     D: "Saturn",
     ans: "C"
    },
    {
     question: "Which element has the chemical symbol 'O'?",
     A: "Oxygen",
     B: "Gold",
     C: "Iron",
     D: "Uranium",
     ans: "A"
    },
    {
     question: "What is the capital of Japan?",
     A: "Seoul",
     B: "Beijing",
     C: "Tokyo",
     D: "Bangkok",
     ans: "C"
    },
    {
     question: "Who painted the Mona Lisa?",
     A: "Vincent van Gogh",
     B: "Leonardo da Vinci",
     C: "Pablo Picasso",
     D: "Michelangelo",
     ans: "B"
    },
    {
     question: "What is the powerhouse of the cell?",
     A: "Nucleus",
     B: "Mitochondria",
     C: "Ribosome",
     D: "Endoplasmic reticulum",
     ans: "B"
    },
    {
     question: "Which planet is known as the Red Planet?",
     A: "Venus",
     B: "Mars",
     C: "Jupiter",
     D: "Saturn",
     ans: "D"
    },
    {
     question: "Who developed the theory of relativity?",
     A: "Isaac Newton",
     B: "Albert Einstein",
     C: "Stephen Hawking",
     D: "Niels Bohr",
     ans: "B"
    },
    {
     question: "What is the largest ocean on Earth?",
     A: "Atlantic Ocean",
     B: "Indian Ocean",
     C: "Southern Ocean",
     D: "Pacific Ocean",
     ans: "D"
    },
    {
     question: "What is the capital of Brazil?",
     A: "Rio de Janeiro",
     B: "Brasília",
     C: "São Paulo",
     D: "Salvador",
     ans: "B"
    },
    {
     question: "In what year did Christopher Columbus reach the Americas?",
     A: 1492,
     B: 1607,
     C: 1776,
     D: 1498,
     ans: "A"
    },
    {
     question: "Which mammal can fly?",
     A: "Bat",
     B: "Penguin",
     C: "Dolphin",
     D: "Kangaroo",
     ans: "A"
    },
    {
     question: "What is the chemical symbol for gold?",
     A: "Au",
     B: "Ag",
     C: "Fe",
     D: "Pb",
     ans: "Au"
    },
    {
     question: "Who painted \"Starry Night\"?",
     A: "Pablo Picasso",
     B: "Vincent van Gogh",
     C: "Claude Monet",
     D: "Leonardo da Vinci",
     ans: "B"
    },
    {
     question: "In what year did World War II end?",
     A: 1945,
     B: 1939,
     C: 1918,
     D: 1941,
     ans: "A"
    },
    {
     question: "What is the capital of Australia?",
     A: "Sydney",
     B: "Canberra",
     C: "Melbourne",
     D: "Brisbane",
     ans: "B"
    },
    {
     question: "Who is known as the \"Queen of Pop\"?",
     A: "Beyoncé",
     B: "Madonna",
     C: "Rihanna",
     D: "Lady Gaga",
     ans: "B"
    },
    {
     question: "Which planet is known as the \"Morning Star\" or \"Evening Star\"?",
     A: "Mars",
     B: "Earth",
     C: "Jupiter",
     D: "Mercury",
     ans: "C"
    },
    {
     question: "What is the largest bird in the world?",
     A: "Eagle",
     B: "Ostrich",
     C: "Penguin",
     D: "Albatross",
     ans: "B"
    },
    {
     question: "What is the chemical symbol for silver?",
     A: "Ag",
     B: "Au",
     C: "Cu",
     D: "Fe",
     ans: "A"
    },
    {
     question: "Who is known as the \"Father of Computer Science\"?",
     A: "Bill Gates",
     B: "Alan Turing",
     C: "Steve Jobs",
     D: "Charles Babbage",
     ans: "B"
    },
    {
     question: "What is the currency of China?",
     A: "Yen",
     B: "Won",
     C: "Yuan",
     D: "Ringgit",
     ans: "C"
    },
    {
     question: "Which mammal can fly?",
     A: "Bat",
     B: "Penguin",
     C: "Dolphin",
     D: "Kangaroo",
     ans: "A"
    },
    {
     question: "What is the chemical symbol for gold?",
     A: "Au",
     B: "Ag",
     C: "Fe",
     D: "Pb",
     ans: "A"
    },
    {
     question: "Who painted \"Starry Night\"?",
     A: "Pablo Picasso",
     B: "Vincent van Gogh",
     C: "Claude Monet",
     D: "Leonardo da Vinci",
     ans: "B"
    }
]
   



document.addEventListener('DOMContentLoaded', () => {
    const question = document.querySelector('.question');
    const option1 = document.querySelector('#option1');
    const option2 = document.querySelector('#option2');
    const option3 = document.querySelector('#option3');
    const option4 = document.querySelector('#option4');
    const options = document.querySelector('.opt');
    const submit = document.querySelector('#submit');
    const homeButton = document.querySelector('#homeButton');
    const answers = document.querySelectorAll('.answer');
    const showScore = document.querySelector('#showScore');
    const timerDisplay = document.querySelector('#timer');

    let questionCount = Math.floor(Math.random() * quiz.length);
    let count = 0;
    let score = 0;
    let timerSeconds = 300;
    let timerInterval;

    const updateTimerDisplay = () => {
        timerDisplay.innerText = `Time left: ${timerSeconds}s`;
    };

    const startTimer = () => {
        timerInterval = setInterval(() => {
            if (timerSeconds > 0) {
                timerSeconds--;
                updateTimerDisplay();
            } else {
                clearInterval(timerInterval);
                finishQuiz();
            }
        }, 1000);
    };

    const hideSubmitButton = () => {
        submit.style.display = 'none';
    };

    const showHomeButton = () => {
        homeButton.style.display = 'block';
    };

    const finishQuiz = () => {
        clearInterval(timerInterval); // Stop the timer
        const congratulationMessage = getCongratulationMessage();
        showScore.innerHTML = `
            <h2>${congratulationMessage} You scored ${score}/10</h2>
            <button class='btn' onclick='location.reload()'>Restart</button>
            <button id="homeButton" class='btn' onclick="location.href='../subject/quiz-page.html'">Go to Home</button>
        `;
        showScore.classList.remove('scoreArea');
        question.classList.add('scoreArea');
        options.classList.add('scoreArea');
        hideSubmitButton();
        showHomeButton();
    };

    const getCongratulationMessage = () => {
        if (score === 10) {
            return "Congratulations! Perfect score!";
        } else if (score >= 7) {
            return "Well done! You did great!";
        } else {
            return "Nice try! Keep learning and try again!";
        }
    };

    const loadQuestion = () => {
        const questionList = quiz[questionCount];

        question.innerText = questionList.question;
        option1.innerText = questionList.A;
        option2.innerText = questionList.B;
        option3.innerText = questionList.C;
        option4.innerText = questionList.D;

        if (count === 0) {
            startTimer();
        }
    };

    loadQuestion();

    const getCheckAnswer = () => {
        let answer;
        answers.forEach((currAnsElem) => {
            if (currAnsElem.checked)
                answer = currAnsElem.id;
        });
        return answer;
    };

    const deselectAll = () => {
        answers.forEach((curr) => curr.checked = false);
    };

    submit.addEventListener('click', () => {
        const checkedAnswer = getCheckAnswer();

        if (checkedAnswer === quiz[questionCount].ans)
            score++;

        questionCount++;
        count++;
        deselectAll();

        if (count < 10) {
            loadQuestion();
        } else {
            finishQuiz();
        }
    });

    
});
