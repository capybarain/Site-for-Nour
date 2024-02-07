document.addEventListener('DOMContentLoaded', function () {
    const starsContainer = document.querySelector('.stars');

    
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.animationDuration = (Math.random() * 2 + 1) + 's'; 
        starsContainer.appendChild(star);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const particlesContainer = document.querySelector('.particles');

    for (let i = 0; i < 100; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particlesContainer.appendChild(particle);
    }

    animateParticles();
});

function animateParticles() {
    const particles = document.querySelectorAll('.particle');

    particles.forEach(particle => {
        animateParticle(particle);
    });
}

function animateParticle(particle) {
    const duration = Math.random() * 2 + 1; // Random duration between 1 and 3 seconds
    const delay = Math.random() * duration; // Random delay

    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `-${delay}s`;

    particle.addEventListener('animationiteration', () => {
        animateParticle(particle);
    });
}



let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

showSlide(currentSlide);

const questions = [
    {
        question: 'Witch one is the best group in this univers?',
        answers: ['Defusion', 'Backstreet boys', 'Queen', 'One direction'],
        correctAnswer: 0,
    },
    {
        question: 'What is my favorite moment of the day?',
        answers: ['french', 'talking to you', 'waking up', 'the pause'],
        correctAnswer: 1,
    },
    {
        question: 'What is my favorite thing about you?',
        answers: ['your sense of humour', 'your generosity', 'your intelligence', 'all of the above'],
        correctAnswer: 3,
    },
    {
    question: 'What was my first impression of you?',
    answers: ['She is so beautiful', 'I know her!', 'I am in love', 'all of the above'],
    correctAnswer: 3,
},
  {
    question: 'Who is your ideal husband?',
    answers: ['random guy in the streets', 'old man', 'perfect, amazing, pretty, charismatic, flawless man (me)', 'anyone else'],
    correctAnswer: 2,
},
{
    question: 'What should i do in class?',
    answers: ['Study', 'write things on your carnet', 'understand', 'sleep',],
    correctAnswer: 1,
},
];

const displayedQuestions = []; // Create a new array to keep track of displayed questions

function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    if (displayedQuestions.includes(randomIndex)) {
        // If the random index is already in the `displayedQuestions` array,
        // recursively call the function until a new question is found
        return getRandomQuestion();
    }
    displayedQuestions.push(randomIndex);
    return questions[randomIndex];
}

function displayQuestion(question) {
    document.getElementById('question').textContent = question.question;
    const answerButtons = document.getElementById('answer-buttons');
    answerButtons.innerHTML = '';
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.classList.add('btn');
        button.textContent = answer;
        button.addEventListener('click', () => {
            if (index === question.correctAnswer) {
                button.style.backgroundColor = 'green';
            } else {
                button.style.backgroundColor = 'red';
            }

            // Disable the answer buttons after a user selects an answer
            question.answers.forEach((answer, index) => {
                const btn = document.querySelector(`#answer-buttons button:nth-child(${index + 1})`);
                btn.disabled = true;
            });

            // Show the "Next" button
            const nextButton = document.createElement('button');
            nextButton.classList.add('btn', 'next-btn');
            nextButton.textContent = 'Next';
            nextButton.addEventListener('click', () => {
                // Remove the "Next" button
                nextButton.remove();

                // Enable the answer buttons
                question.answers.forEach((answer, index) => {
                    const btn = document.querySelector(`#answer-buttons button:nth-child(${index + 1})`);
                    btn.disabled = false;
                    // Reset the background color of the answer buttons
                    btn.style.backgroundColor = '';
                });

                // Move to the next question
                if (displayedQuestions.length === questions.length) {
                    // Display a message to indicate that the quiz is over
                    const quizOverMessage = document.createElement('div');
                    quizOverMessage.classList.add('quiz-over-message');
                    quizOverMessage.textContent = 'You finished the quiz congratulations!';
                    document.body.appendChild(quizOverMessage);
                } else {
                    // Display the next question
                    const newQuestion = getRandomQuestion();
                    displayQuestion(newQuestion);
                }
            });

            answerButtons.appendChild(nextButton);
        });

        answerButtons.appendChild(button);
    });
}

function startQuiz() {
    displayedQuestions.length = 0; // Reset the `displayedQuestions` array
    const question = getRandomQuestion();
    displayQuestion(question);
}

startQuiz();


document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');

    sections.forEach(section => {
        const title = section.querySelector('h2');

        title.addEventListener('click', function() {
            section.classList.toggle('expanded');
        });
    });
}); 


