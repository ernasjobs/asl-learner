var questionNumber = document.getElementsByTagName("div").length;
let totalQuestions = 8
var completedQuestions = 0
var correctAnswers = 0

function CheckQuestion(usr, rslt, ans, btn) {
    var x = document.getElementById(usr).value;
    if (x == ""){
        alert("Please write an answer!");
        return false;
    }
    if (x.toUpperCase() == ans){
        txt = "<b>Result</b>: Your answer is correct! :)";
        correctAnswers++;
    }
    else {
        txt = "<b>Result</b>: Your answer is wrong! :(";
    }

    document.getElementById(rslt).innerHTML = txt;

    var button = document.getElementById(btn);
    button.disabled = true;
    button.classList.add('disabled');

    completedQuestions++;
} 

function EndQuiz(){
    if (completedQuestions < totalQuestions){
        alert("You need to finish the quiz.");
        return false;
    }
    else{
        var score = correctAnswers/totalQuestions;
        score *= 100;
        alert("You got " + score.toString()+"%");
    }
}
function PlayGame(){
    window.location.href = 'aslgame.html';
}