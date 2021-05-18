// constant to store all the questions and answers

const questions = {
    
    question0: {
      question: "What is the correct sign for 'Sister' ?",
      option0: {
        type: "image",
        content:
          "signs/father.gif",
        correctAnswer: "N"
      },
      option1: {
        type: "image",
        content:
          "signs/sister.gif",
        correctAnswer: "Y"
      },
      option2: {
        type: "image",
        content:
          "signs/grandma.gif",
        correctAnswer: "N"
      }
     
    },
    question1: {
      question: "Which is the correct sign for 'Green' ?",
      option0: {
        type: "image",
        content: "signs/blue.gif",
        correctAnswer: "N"
      },
      option1: {
        type: "image",
        content: "signs/yellow.gif",
        correctAnswer: "N"
      },
      option2: {
        type: "image",
        content: "signs/green.gif",
        correctAnswer: "Y"
      }
    },
    question2: {
      question: "What is the correct sign for 'Sad' ?",
      option0: {
        type: "image",
        content: "signs/happy.gif",
        correctAnswer: "N"
      },
      option1: {
        type: "image",
        content: "signs/sad.gif",
        correctAnswer: "Y"
      },
      option2: {
        type: "image",
        content: "signs/love.gif",
        correctAnswer: "N"
      }
    },
    question3: {
      question:
        "What is the correct sign for letter 'U' ?",
      option0: {
        type: "image",
        content: "signs/u.jpg",
        correctAnswer: "Y"
      },
      option1: {
        type: "image",
        content: "signs/a.jpg",
        correctAnswer: "N"
      },
      option2: {
        type: "image",
        content: "signs/c.jpg",
        correctAnswer: "N"
      }
    },
    question4: {
      question:
        "What is the correct sign for letter 'C' ?",
      option0: {
        type: "image",
        content: "signs/c.jpg",
        correctAnswer: "Y"
      },
      option1: {
        type: "image",
        content: "signs/u.jpg",
        correctAnswer: "N"
      },
      option2: {
        type: "image",
        content: "signs/a.jpg",
        correctAnswer: "N"
      }
    }
  };
  
  // constant to store the description for each type of traveller
  const result = {
    Beginner: [
      "To effectively communicate with sign language, you need to know the basic sign language words and phrases, just like spoken languages.",
      "Our website is a great place to start with ASL. It has a series of lessons that you can work through sequentially.",
      "Recommended lessons for beginners: ASL Spelling and ASL Vocabulary", 
      "Correct answers"
    ],
    Intermediate: [
      "The intermediate ASL dialogs touch upon motivation for learning ASL, occupations, ordering food in a restorant, and shopping",
      "Our website has a section where you can learn words from various categories.",
      "Recommended lessons for beginners: ASL Game and ASL Vocabulary",
      "Correct answers" 
    ],
    Advanced: [
      "The advanced ASL looks at conversations that take place around the house and school, common phrases associated with talking about weather.",
      "Our website doesn't provide any learning experience for advanced ASL learners",
      "Recommended online sites  for advanced learners are: Signing Online, Handspeak, TakeLessonsLive", 
      "Correct answers"
    ]
   
  };
  
  // for keeping track of the score
  var score = {
    Adventurous: 0,
    Immersed: 0,
    Intellectual: 0,
    Dreamy: 0
  };
  var score1 = 
  {
      Y : 0, 
      N: 0 
  }
  
  // for keep track of the current question
  var currentQn = 0;
  
  // for setting up each of the questions
  function setupQuestion() {
    // find out the current percentage of completion and updates the css
    var progress = 20 + currentQn * 20;
    var progressbar = document.getElementById("progress");
    progressbar.style.width = progress + "%";
    progressbar.innerText = currentQn + 1 + "/5";
  
    // get the current questions content
    var qn = questions["question" + currentQn];
    var qnText = document.getElementById("question");
    qnText.innerText = qn.question;
  
    // updates each of the options for the current question
    for (var i = 0; i < 4; i++) {
      var option = document.getElementById("option" + i);
      var content = option.getElementsByClassName("content")[0];
      var qnOption = qn["option" + i];
      if (qnOption.type == "image") {
        var htmlStr = "<img src='" + qnOption.content + "'>";
        content.innerHTML = htmlStr;
      } else {
        var htmlStr = "<p>" + qnOption.content + "</p>";
        content.innerHTML = htmlStr;
      }
    }
  }
  
  // to unselect all of the options
  function resetOptions() {
    var btn = document.getElementsByTagName("input");
    btn[0].checked = false;
    btn[1].checked = false;
    btn[2].checked = false;
    btn[3].checked = false;
  }
  
  // to select the option that is clicked
  function select(element) {
    var btn = element.getElementsByTagName("input")[0];
    btn.checked = true;
    next();
  }
  
  // get the next questions, or display result if all questions were answered
  function next() {
    // get the current select option
    var ans = $("input[name=answer]:checked").val();
    var qn = questions["question" + currentQn];
    var answer = qn["option" + ans].correctAnswer;
    score1[answer]++;
    // increase the question count by 1
    currentQn = currentQn + 1;
    // unselect all options
    resetOptions();
    // check if quiz is completed
    if (currentQn < 5) {
      // if quiz not completed, setup the next question
      setupQuestion();
    } else {
       correctAnswers = score1["Y"];
      
    var result1 = correctAnswers / 5;
    if( result1 >= 0 && result1 <= 0.3 ) {highestResult = "Beginner";}
    else if (result1 > 0.3 && result1 <= 0.6) {
        highestResult = "Intermediate";
    }
    else {
        highestResult = "Advanced";
    }
      // get the description of the level and update the result page
      var levelResult = result[highestResult];
      document.getElementById("level-type").innerText =
     " Congratulations! You have scored: " + (correctAnswers / 5)*100 +"%"  ;
      document.getElementById("level-part-1").innerText =
        levelResult[0];
      document.getElementById("level-part-2").innerText =
        levelResult[1];
      document.getElementById("level-recommended").innerText =
        levelResult[2];
      // set question count to 0 so that when the user wishes to retry, the quiz is on the right question count
      currentQn = 0;
      displayProgressBar((correctAnswers / 5)*100);
      showPage(1);
      
    }
  }
  
  // bring the particular page into view.
  // page 0: start page
  // page 1: result page
  // page 2: quiz
  function showPage(num) {
     
        var pages = document.getElementsByClassName("container");
        pages[0].style.display = "none";
        pages[1].style.display = "none";
        pages[2].style.display = "none";
        pages[num].style.display = "block";  
       //   
  }
  function reloadPage()
  {
    window.location.reload();
  }

 function displayProgressBar(result) {
    var $p = $('.progress');
   // var $input = $('input');
      if(result <= 100 && result >= 0) {
        $p.css({
          width: result + '%',
          backgroundPosition: result + '%'
        });    
        document.getElementById("currentLevel").innerText =
     " Level Result: " + highestResult   ;  
      } 
  }
  