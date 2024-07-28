const quizData = [
    { question: "What is the capital of France?", a: "Berlin", b: "Madrid", c: "Paris", d: "Lisbon", correct: "c" },
    { question: "Who is the CEO of Tesla?", a: "Jeff Bezos", b: "Elon Musk", c: "Bill Gates", d: "Tony Stark", correct: "b" },
    { question: "The iPhone was created by which company?", a: "Apple", b: "Intel", c: "Amazon", d: "Microsoft", correct: "a" },
    { question: "How many Harry Potter books are there?", a: "5", b: "6", c: "7", d: "8", correct: "c" },
    { question: "What is the capital of Japan?", a: "Seoul", b: "Tokyo", c: "Beijing", d: "Bangkok", correct: "b" },
    { question: "Which planet is known as the Red Planet?", a: "Earth", b: "Mars", c: "Jupiter", d: "Saturn", correct: "b" },
    { question: "What is the largest ocean on Earth?", a: "Atlantic", b: "Indian", c: "Arctic", d: "Pacific", correct: "d" },
    { question: "Who wrote '1984'?", a: "George Orwell", b: "Aldous Huxley", c: "J.K. Rowling", d: "Mark Twain", correct: "a" },
    { question: "What is the hardest natural substance on Earth?", a: "Gold", b: "Iron", c: "Diamond", d: "Silver", correct: "c" },
    { question: "Who wrote 'To Kill a Mockingbird'?", a: "Harper Lee", b: "Mark Twain", c: "Jane Austen", d: "J.K. Rowling", correct: "a" },
    { question: "What is the chemical symbol for water?", a: "O2", b: "H2O", c: "CO2", d: "H2", correct: "b" },
    { question: "What is the largest planet in our solar system?", a: "Earth", b: "Mars", c: "Jupiter", d: "Saturn", correct: "c" },
    { question: "Who painted the Mona Lisa?", a: "Vincent van Gogh", b: "Pablo Picasso", c: "Leonardo da Vinci", d: "Claude Monet", correct: "c" },
    { question: "What is the smallest prime number?", a: "1", b: "2", c: "3", d: "5", correct: "b" },
    { question: "Who is the author of the Harry Potter series?", a: "J.K. Rowling", b: "J.R.R. Tolkien", c: "George R.R. Martin", d: "C.S. Lewis", correct: "a" },
    { question: "What is the longest river in the world?", a: "Nile", b: "Amazon", c: "Yangtze", d: "Mississippi", correct: "a" },
    { question: "Who was the first President of the United States?", a: "George Washington", b: "Thomas Jefferson", c: "Abraham Lincoln", d: "John Adams", correct: "a" },
    { question: "Which element has the atomic number 1?", a: "Oxygen", b: "Hydrogen", c: "Helium", d: "Carbon", correct: "b" },
    { question: "Who discovered penicillin?", a: "Marie Curie", b: "Albert Einstein", c: "Alexander Fleming", d: "Isaac Newton", correct: "c" },
    { question: "What is the main ingredient in guacamole?", a: "Tomato", b: "Avocado", c: "Pepper", d: "Lemon", correct: "b" },
    { question: "Which country is the largest by area?", a: "Canada", b: "China", c: "Russia", d: "USA", correct: "c" },
    { question: "What is the tallest mountain in the world?", a: "K2", b: "Kangchenjunga", c: "Lhotse", d: "Mount Everest", correct: "d" },
    { question: "Which scientist is known for the theory of relativity?", a: "Isaac Newton", b: "Albert Einstein", c: "Galileo Galilei", d: "Nikola Tesla", correct: "b" },
    { question: "What is the main language spoken in Brazil?", a: "Spanish", b: "Portuguese", c: "French", d: "English", correct: "b" },
    { question: "What is the largest desert in the world?", a: "Sahara", b: "Gobi", c: "Arctic", d: "Antarctic", correct: "d" },
    { question: "What is the most widely spoken language in the world?", a: "English", b: "Spanish", c: "Mandarin", d: "Hindi", correct: "c" },
    { question: "Who is known as the 'Father of Computers'?", a: "Alan Turing", b: "Charles Babbage", c: "John von Neumann", d: "Steve Jobs", correct: "b" },
    { question: "What is the currency of Japan?", a: "Yen", b: "Won", c: "Dollar", d: "Euro", correct: "a" },
    { question: "Which gas is most abundant in the Earth's atmosphere?", a: "Oxygen", b: "Carbon Dioxide", c: "Nitrogen", d: "Helium", correct: "c" },
    { question: "Who wrote 'Pride and Prejudice'?", a: "Jane Austen", b: "Charlotte Bronte", c: "Emily Bronte", d: "Mary Shelley", correct: "a" },
    { question: "What is the capital of Australia?", a: "Sydney", b: "Melbourne", c: "Canberra", d: "Brisbane", correct: "c" },
    { question: "What is the largest mammal in the world?", a: "Elephant", b: "Blue Whale", c: "Giraffe", d: "Hippopotamus", correct: "b" },
    { question: "Who developed the theory of evolution?", a: "Charles Darwin", b: "Gregor Mendel", c: "Alfred Wallace", d: "Louis Pasteur", correct: "a" },
    { question: "Which planet is closest to the sun?", a: "Venus", b: "Earth", c: "Mercury", d: "Mars", correct: "c" },
    { question: "Who painted the Sistine Chapel ceiling?", a: "Leonardo da Vinci", b: "Michelangelo", c: "Raphael", d: "Donatello", correct: "b" },
    { question: "What is the smallest country in the world?", a: "Monaco", b: "San Marino", c: "Liechtenstein", d: "Vatican City", correct: "d" },
    { question: "Which ocean is the smallest?", a: "Atlantic", b: "Indian", c: "Arctic", d: "Southern", correct: "c" },
    { question: "Who invented the telephone?", a: "Alexander Graham Bell", b: "Thomas Edison", c: "Nikola Tesla", d: "Guglielmo Marconi", correct: "a" },
    { question: "What is the main ingredient in traditional paella?", a: "Pasta", b: "Rice", c: "Bread", d: "Potatoes", correct: "b" },
    { question: "What is the capital of Canada?", a: "Toronto", b: "Vancouver", c: "Ottawa", d: "Montreal", correct: "c" },
    { question: "Who is the author of 'The Catcher in the Rye'?", a: "F. Scott Fitzgerald", b: "J.D. Salinger", c: "Ernest Hemingway", d: "Mark Twain", correct: "b" },
    { question: "Which planet has the most moons?", a: "Earth", b: "Mars", c: "Jupiter", d: "Saturn", correct: "d" },
    { question: "What is the primary ingredient in hummus?", a: "Beans", b: "Lentils", c: "Chickpeas", d: "Peas", correct: "c" },
    { question: "Who was the first man to step on the moon?", a: "Yuri Gagarin", b: "Buzz Aldrin", c: "Michael Collins", d: "Neil Armstrong", correct: "d" },
    { question: "What is the name of the longest river in Africa?", a: "Nile", b: "Congo", c: "Zambezi", d: "Niger", correct: "a" },
    { question: "Who wrote 'The Odyssey'?", a: "Homer", b: "Virgil", c: "Sophocles", d: "Euripides", correct: "a" },
    { question: "What is the smallest unit of life?", a: "Cell", b: "Atom", c: "Molecule", d: "Organ", correct: "a" },
    { question: "What is the capital of Italy?", a: "Milan", b: "Venice", c: "Rome", d: "Florence", correct: "c" },
    { question: "Which is the longest bone in the human body?", a: "Femur", b: "Humerus", c: "Tibia", d: "Fibula", correct: "a" },
    { question: "Who is the author of 'Brave New World'?", a: "George Orwell", b: "Aldous Huxley", c: "Ray Bradbury", d: "Philip K. Dick", correct: "b" },
    { question: "Which element is known as the 'King of Chemicals'?", a: "Sulfuric Acid", b: "Hydrochloric Acid", c: "Nitric Acid", d: "Acetic Acid", correct: "a" },
    { question: "What is the capital of Spain?", a: "Barcelona", b: "Madrid", c: "Seville", d: "Valencia", correct: "b" },
    { question: "Which planet is known as the Morning Star?", a: "Mars", b: "Venus", c: "Mercury", d: "Jupiter", correct: "b" },
    { question: "What is the largest continent?", a: "Africa", b: "Asia", c: "Europe", d: "North America", correct: "b" },
    { question: "Who discovered gravity?", a: "Isaac Newton", b: "Albert Einstein", c: "Galileo Galilei", d: "Nikola Tesla", correct: "a" },
    { question: "What is the capital of Germany?", a: "Berlin", b: "Munich", c: "Frankfurt", d: "Hamburg", correct: "a" },
    { question: "Which animal is known as the 'King of the Jungle'?", a: "Tiger", b: "Lion", c: "Elephant", d: "Leopard", correct: "b" },
    { question: "Who wrote 'Moby Dick'?", a: "Herman Melville", b: "Mark Twain", c: "Ernest Hemingway", d: "F. Scott Fitzgerald", correct: "a" },
    { question: "What is the speed of light?", a: "299,792 km/s", b: "150,000 km/s", c: "100,000 km/s", d: "50,000 km/s", correct: "a" },
    { question: "What is the primary ingredient in sushi?", a: "Fish", b: "Rice", c: "Seaweed", d: "Vegetables", correct: "b" },
    { question: "Who is the author of 'The Great Gatsby'?", a: "F. Scott Fitzgerald", b: "Ernest Hemingway", c: "Mark Twain", d: "J.D. Salinger", correct: "a" },
    { question: "What is the largest organ in the human body?", a: "Heart", b: "Liver", c: "Skin", d: "Lungs", correct: "c" },
    { question: "Which country is known as the Land of the Rising Sun?", a: "China", b: "Japan", c: "Thailand", d: "Vietnam", correct: "b" },
    { question: "Who painted 'Starry Night'?", a: "Vincent van Gogh", b: "Pablo Picasso", c: "Claude Monet", d: "Leonardo da Vinci", correct: "a" },
    { question: "What is the capital of Egypt?", a: "Cairo", b: "Alexandria", c: "Giza", d: "Luxor", correct: "a" },
    { question: "Who is known as the 'Father of Modern Physics'?", a: "Albert Einstein", b: "Isaac Newton", c: "Galileo Galilei", d: "Niels Bohr", correct: "a" },
    { question: "What is the primary ingredient in chocolate?", a: "Milk", b: "Sugar", c: "Cocoa", d: "Butter", correct: "c" },
    { question: "Which planet is known as the Blue Planet?", a: "Mars", b: "Venus", c: "Earth", d: "Neptune", correct: "c" },
    { question: "Who is the author of 'Crime and Punishment'?", a: "Fyodor Dostoevsky", b: "Leo Tolstoy", c: "Anton Chekhov", d: "Vladimir Nabokov", correct: "a" },
    { question: "What is the smallest particle of an element?", a: "Atom", b: "Molecule", c: "Proton", d: "Neutron", correct: "a" },
    { question: "What is the capital of Russia?", a: "St. Petersburg", b: "Moscow", c: "Kazan", d: "Sochi", correct: "b" },
    { question: "Which element is known as the 'Building Block of Life'?", a: "Oxygen", b: "Hydrogen", c: "Carbon", d: "Nitrogen", correct: "c" },
    { question: "Who painted the Mona Lisa?", a: "Vincent van Gogh", b: "Leonardo da Vinci", c: "Pablo Picasso", d: "Claude Monet", correct: "b" }
];

const quizContainer = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const answerEls = document.querySelectorAll('.answer');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const previousBtn = document.getElementById('previous');
const nextBtn = document.getElementById('next');
const submitBtn = document.getElementById('submit');
const timerEl = document.getElementById('timer');
const progressBar = document.getElementById('progress');

let currentQuiz = 0;
let score = 0;
let timer;

const selectedQuestions = getRandomQuestions(quizData, 5);

function getRandomQuestions(questions, num) {
    const shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

loadQuiz();

function loadQuiz() {
    clearInterval(timer);
    deselectAnswers();

    const currentQuizData = selectedQuestions[currentQuiz];

    questionEl.innerText = `Question ${currentQuiz + 1}: ${currentQuizData.question}`;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    previousBtn.style.display = currentQuiz === 0 ? 'none' : 'inline-block';
    nextBtn.style.display = currentQuiz === selectedQuestions.length - 1 ? 'none' : 'inline-block';
    submitBtn.style.display = currentQuiz === selectedQuestions.length - 1 ? 'inline-block' : 'none';

    progressBar.style.width = `${(currentQuiz / selectedQuestions.length) * 100}%`;

    startTimer();
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function startTimer() {
    let time = 30;
    timerEl.innerText = time;
    timer = setInterval(() => {
        time--;
        timerEl.innerText = time;
        if (time <= 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

function nextQuestion() {
    const answer = getSelected();
    if (answer && answer === selectedQuestions[currentQuiz].correct) {
        score++;
    }

    currentQuiz++;

    if (currentQuiz < selectedQuestions.length) {
        loadQuiz();
    } else {
        showResults();
    }
}

nextBtn.addEventListener('click', nextQuestion);

previousBtn.addEventListener('click', () => {
    currentQuiz--;
    loadQuiz();
});

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer && answer === selectedQuestions[currentQuiz].correct) {
        score++;
    }
    showResults();
});

function showResults() {
    quizContainer.innerHTML = `
        <h2>You answered ${score}/${selectedQuestions.length} questions correctly</h2>
        <button onclick="location.reload()">Restart Quiz</button>
    `;
}
