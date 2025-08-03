const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');

} );

const page1btn=document.querySelector("#page1btn");
const page1=document.querySelector("#page1");
const page2btn=document.querySelector("#page2btn");
const page2=document.querySelector("#page2");
const foodchainbtn=document.querySelector("#foodchainbtn");
const foodchain=document.querySelector("#foodchain");
const biodiversitybtn=document.querySelector("#biodiversitybtn");
const biodiversity=document.querySelector("#biodiversity");
const oceanhealthbtn=document.querySelector("#oceanhealthbtn");
const oceanhealth=document.querySelector("#oceanhealth");
const testquizbtn=document.querySelector("#testquizbtn");
const testquiz=document.querySelector("#testquiz");



function hideall(){ //function to hide all pages
page1.style.display="none";
page2.style.display="none";
foodchain.style.display="none";
biodiversity.style.display="none";
oceanhealth.style.display="none";
testquiz.style.display="none";
}

page1btn.addEventListener("click", function () {
hideall(); //we don't know which page is shown, so hideall
page1.style.display="block";
});

page2btn.addEventListener("click", function () {
hideall(); //we don't know which page is shown, so hideall
page2.style.display="block";
});

testquizbtn.addEventListener("click", function () {
hideall(); //we don't know which page is shown, so hideall
testquiz.style.display="block";
});


foodchainbtn.addEventListener("click", function () {
  if (biodiversity.style.display === "block") {
    biodiversity.style.display = "none";
  }
  if (oceanhealth.style.display === "block") {
    oceanhealth.style.display = "none";
  }

  if (foodchain.style.display === "block") {
    foodchain.style.display = "none";
  } else {
    foodchain.style.display = "block";
  }
});

biodiversitybtn.addEventListener("click", function () {
  if (foodchain.style.display === "block") {
    foodchain.style.display = "none";
  }
  if (oceanhealth.style.display === "block") {
    oceanhealth.style.display = "none";
  }

  if (biodiversity.style.display === "block") {
    biodiversity.style.display = "none";
  } else {
    biodiversity.style.display = "block";
  }
});

oceanhealthbtn.addEventListener("click", function () {
  if (foodchain.style.display === "block") {
    foodchain.style.display = "none";
  }
  if (biodiversity.style.display === "block") {
    biodiversity.style.display = "none";
  }

  if (oceanhealth.style.display === "block") {
    oceanhealth.style.display = "none";
  } else {
    oceanhealth.style.display = "block";
  }
});

hideall();

const questions = [
    {
        question: "All sharks are carnivores!",
        answers: [
            { text: "True", correct: true},
            { text: "False", correct: false},
        ]
    },
    {
        question: "Sharks have bones!",
        answers: [
            { text: "True", correct: false},
            { text: "False", correct: true},
        ]
    },
    {
        question: "The whale shark is the largest fish in the world!",
        answers: [
            { text: "True", correct: true},
            { text: "False", correct: false},
        ]
    },
    {
        question: "Sharks play an important role in keeping the ocean healthy!",
        answers: [
            { text: "True", correct: true},
            { text: "False", correct: false},
        ]
    },
    {
        question: "Lemon sharks may show signs of jealousy regarding their favorite divers!",
        answers: [
            { text: "True", correct: true},
            { text: "False", correct: false},
        ]
    },
    {
        question: "Hammerhead sharks have 360-degree vision!",
        answers: [
            { text: "True", correct: true},
            { text: "False", correct: false},
        ]
    },
    {
        question: "Some sharks can survive in volcanoes!!",
        answers: [
            { text: "True", correct: true},
            { text: "False", correct: false},
        ]
    },
    {
        question: "A Lemon sharks average life span is 70-90 years!",
        answers: [
            { text: "True", correct: false},
            { text: "False", correct: true},
        ]
    },
    {
        question: "Baby sharks eat each other before birth!!",
        answers: [
            { text: "True", correct: true},
            { text: "False", correct: false},
        ]
    },
    {
        question: "There are more deaths from falling coconuts than shark attacks",
        answers: [
            { text: "True", correct: true},
            { text: "False", correct: false},
        ]
    }
    
];



const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;


function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion. 
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("quizbtn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}



function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";

    const audio = document.getElementById('end-audio');
    audio.currentTime = 0;
    audio.play().catch(error => {
        console.log('Audio playback failed:', error);
    });

}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=> {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();

// const question = document.querySelector('#question');
// const choices = Array.from(document.querySelectorAll('.choice-text'));
// const progressText = document.querySelector('#progressText');
// const scoreText = document.querySelector('#score');
// const progressBarFull = document.querySelector('#progressBarFull');

// let currentQuestion = {}
// let acceptingAnswers = true
// let score = 0
// let questionCounter = 0
// let availableQuestions = []

// let questions = [
//     {
//         question: 'PLACEHOLDER',
//         choice1: '1',
//         choice2: '2',
//         choice3: '3',
//         choice4: '4',
//         answer: 3,
//     },
//      {
//         question: 'PLACEHOLDER',
//         choice1: 'B',
//         choice2: 'A',
//         choice3: 'A',
//         choice4: 'A',
//         answer: A,
//     },
//      {
//         question: 'PLACEHOLDER',
//         choice1: 'C',
//         choice2: 'A',
//         choice3: 'A',
//         choice4: 'A',
//         answer: A,
//     },
//      {
//         question: 'PLACEHOLDER',
//         choice1: 'D',
//         choice2: 'A',
//         choice3: 'A',
//         choice4: 'A',
//         answer: A,
//     },
//      {
//         question: 'PLACEHOLDER',
//         choice1: 'E',
//         choice2: 'A',
//         choice3: 'A',
//         choice4: 'A',
//         answer: A,
//     },

// ]

// const SCORE_POINTS = 100
// const MAX_QUESTIONS = 5

// startGame = () => {
//     questionCounter = 0
//     score = 0
//     availableQuestions = [...questions]
//     getNewQuestion()
// }

// getNewQuestion = () => {
//     if(availableQuestions.length === 0 || questionsCounter > MAX_QUESTIONS){

//     }

//     questionCounter++
//     progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
//     progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

//     const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
//     currentQuestion = availableQuestions[questionsIndex]
//     question.innerText = currentQuestion.question

//     choices.forEach(choice => {
//         const number = choice.dataset['number']
//         choice.innerText = currentQuestion['choice' + number]
//     })

//     availableQuestions.splice(questionsIndex, 1)

//     acceptingAnswers = true

// }

// choices.forEach(choice => {
//     choice.addEventListener('click', e => {
//         if(!acceptingAnswers) return

//         acceptingAnswers = false;
//         const selectedChoice = e.target
//         const selectedAnswer = selectedChoice.dataset['number']

//         let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 
//         'incorrect'

//         if(classToApply === 'correct'){
//             increntmentScore(SCORE_POINTS)
//         }

//         selectedChoice.parentElement.classList.add(classToApply)

//         setTimeout(() => {
//             selectedChoice.parentElement.classList.remove(classToApply)
//             getNewQuestion()

//         }, 1000)

//     })
// })