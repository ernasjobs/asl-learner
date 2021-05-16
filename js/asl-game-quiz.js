//Questions Array
var questions = [
    {
        question: 'What letter is the sign below?',
        imageUrl: 'ASL/asl_I.png',
        answerA: '1. A',
        answerB: '2. B',
        answerC: '3. C',
        answerD: '4. I',
        correctAnswer: 'd'
    },
    {
        question: 'What letter is the sign below?',
        imageUrl: 'ASL/asl_A.png',
        answerA: '1. A',
        answerB: '2. B',
        answerC: '3. R',
        answerD: '4. C',
        correctAnswer: 'a'
    },
    {
        question: 'What letter is the sign below?',
        imageUrl: 'ASL/asl_N.png',
        answerA: '1. O',
        answerB: '2. L',
        answerC: '3. N',
        answerD: '4. S',
        correctAnswer: 'c'
    },
    {
        question: 'What letter is the sign below?',
        imageUrl: 'ASL/asl_X.png',
        answerA: '1. F',
        answerB: '2. A',
        answerC: '3. X',
        answerD: '4. M',
        correctAnswer: 'c'
    },
    {
        question: 'What letter is the sign below?',
        imageUrl: 'ASL/asl_I.png',
        answerA: '1. H',
        answerB: '2. P',
        answerC: '3. T',
        answerD: '4. D',
        correctAnswer: 'p'
    }
];
//log array
console.log(questions);

//DOM ELEMENTS 

var homeScreen = document.getElementById('playScreen');
var scoreBtn = document.getElementById('score-btn');
var playBtn = document.getElementById('play-btn');

//Timer
var timer = document.getElementById('timer');
timer.style.visibility = 'hidden';
var timeNumber = document.getElementById('timeNumber');
var timeLeft = 60;
var timeInterval;

//Questions and Answer Variable
var quizPrompts = document.getElementById('quiz-prompts');
quizPrompts.style.display = 'none';
var askQuestion = document.getElementById('question');
var imagesSource = document.getElementById('imageQuestion');
var btnA = document.getElementById('a');
var btnB = document.getElementById('b');
var btnC = document.getElementById('c');
var btnD = document.getElementById('d');

//End Sceen Variables
var endQuiz = document.getElementById('end-quiz');
endQuiz.style.display = 'none';
var enterName = document.getElementById('initials');
var saveScore = document.getElementById('saveScore');
var playAgain = document.getElementById('playAgain');
var finalScore = document.getElementById('final-score');

//Leaderboard Screen Variable
var leaderboardScreen = document.getElementById('leaderboardScreen');
leaderboardScreen.style.display = 'none';
var initials = document.getElementById('leaderboard-initials');
var backBtn = document.getElementById('back-home');





//Home Screen Functions
//ON CLick hide other screens and start the quiz and timer
function startQuiz() {
    homeScreen.style.display = 'none';
    endQuiz.style.display = 'none';
    leaderboardScreen.style.display = 'none';
    timer.style.visibility = 'visible';
    quizPrompts.style.display = 'flex';
    quizQuestions();

    timerInterval = setInterval(function() {
        timeLeft--;
        timeNumber.textContent = timeLeft;

        if (timeLeft === 0 || timeLeft < 0) {
            clearInterval(timerInterval);
            endScreen();
        }
    }, 1000);

}
//triggers function startQuiz
playBtn.addEventListener("click", startQuiz);
console.log(startQuiz)

//opens the leaderboards on main screen
function openLeaderboard() {
    leaderboardScreen.style.display = 'flex';
    homeScreen.style.display = 'none';
    endQuiz.style.display = 'none';
    quizPrompts.style.display = 'none';
    timer.style.visibility = 'hidden';
    generateScore();
}
//triggers leaderboard button home screen
scoreBtn.addEventListener("click", openLeaderboard);
console.log(openLeaderboard);

//button on leaderboard screen takes you back home
function backHome() {
    leaderboardScreen.style.display = 'none';
    homeScreen.style.display = 'block';
    endQuiz.style.display = 'none';
    quizPrompts.style.display = 'none';
    timer.style.visibility = 'hidden';
}
//triggers back home event
backBtn.addEventListener("click", backHome);

//Question Index
var runningQuestionIndex = 0;
var lastQuestionIndex = questions.length -1;
// Generates the Questions
function quizQuestions(){
    var q = questions[runningQuestionIndex];

    askQuestion.innerHTML = q.question;
    imagesSource.src  = q.imageUrl;
    btnA.innerHTML = q.answerA;
    btnB.innerHTML = q.answerB;
    btnC.innerHTML = q.answerC;
    btnD.innerHTML = q.answerD;
    console.log(score);
}

console.log(quizQuestions);

function rightWrong(answer) {
    //checks if the answer is correct or not
    if (answer === questions[runningQuestionIndex].correctAnswer) {
        correctAnswer();
    } else {
        wrongAnswer();
    }
    //check if there are any more questions to ask
    if (runningQuestionIndex < lastQuestionIndex) {
        runningQuestionIndex++;
        quizQuestions();
    }
    //Enters the score if all questions have been answered
    else {
        endScreen();
    }

};

//Starting point for score
var score = 0;
//gives 100 point if correct answer
function correctAnswer() {
    alert('Correct Answer');
    score += 100;
}
//-10s for wrong answer
function wrongAnswer() {
    alert('Wrong Answer -10s')
    timeLeft -= 10;
}
//only shows the end screen and activates function to get user score
function endScreen() {
    leaderboardScreen.style.display = 'none';
    homeScreen.style.display = 'none';
    endQuiz.style.display = 'flex';
    quizPrompts.style.display = 'none';
    timer.style.visibility = 'hidden';

    yourScore()
}

//reloads page on click
function replay() {
    reload = location.reload();
  }
  //makes play again button function
  playAgain.addEventListener("click", replay, false);

  
//Make user score appear
function yourScore(){
    finalScore.innerHTML = score;   
}
function aslGame()
{
    window.location.href = 'aslgame.html';
}
//Adds user score to local storage
saveScore.addEventListener("click", function (event){
var userInput = enterName.value;
    //must have a name to go with score
    if(userInput === "" ){
        alert('Error, Must input a name, Please try again.');
        event.preventDefault();
    }
    //score was saved to storage
    else {
        event.preventDefault();
        alert('Your score was saved!')
        var finalScore = {
            User: enterName.value,
            Score: score
        }       
    }

    //gets the data from local storage and puts it in highscore list
    var storedScores = localStorage.getItem("storedScores")
    if (storedScores === null) {
        storedScores = [];
    } else {
        storedScores = JSON.parse(storedScores);
    }
    storedScores.push(finalScore)
    var newScore = JSON.stringify(storedScores);
    localStorage.setItem("storedScores", newScore);
    
}); 

var storedScores = JSON.parse(localStorage.getItem ("storedScores"));
//orders highscore from high to low
function generateScore(){   
    var highscore = JSON.parse(localStorage.getItem("storedScores")) || [];
    highscore.sort(function (a, b) {
        return a - b;
    });

    highscore.forEach(function (item) {
      var listIt = document.createElement("li");
      listIt.textContent = item.User + " " + item.Score;
      initials.appendChild(listIt);
    });

}

saveScore.addEventListener("click", generateScore);