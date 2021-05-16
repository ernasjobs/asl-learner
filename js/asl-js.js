window.onload = init;

var cardValues = ['A', 'a', 'I', 'x', 'n', 'R', 'i', 'Y', 'B', 'b', 'X', 'P', 'p', 'r', 'N', 'y'];
// write function to randomize this
    
var cardIds = [];
var cardsFlipped = [];
var matches = [];

var flipped = 0; 
var totalMatches = 0;

function init(){
  resetBoard();

  var boardCards = '';
  for(var i = 0; i < cardValues.length; i++){
    boardCards += '<div id="tile_'+i+'" onclick="flip(this,\''+cardValues[i]+'\', )"></div>';
  }
  document.getElementById('board').innerHTML = boardCards;
}

function flip(card, value) {
  if (flipped < 2 && !matches.includes(value)) {

    if (value == value.toUpperCase()) {
      var fileString = 'CardFacesLetters/letter_'+value.toUpperCase()+'.png'
      card.style.backgroundImage = "url("+fileString+")";
    } else {
      var fileString = 'CardFaces/asl_'+value.toUpperCase()+'.png'
      card.style.backgroundImage = "url("+fileString+")";
    }
      
    cardsFlipped.push(value.toUpperCase());
    cardIds.push(card.id);
    matches.push(value);
      
    flipped += 1;
      
    if (flipped == 2) {
      if (cardsFlipped[0] == cardsFlipped[1]) {              
        totalMatches++;
        document.getElementById("score").innerHTML = "Score: "+totalMatches;
       var i = cardValues.indexOf(cardsFlipped[0]);
       var j = cardValues.indexOf(cardsFlipped[1].toLowerCase()) ;
       console.log ("tile_"+i);
       console.log ("tile_"+j);
       $("div#tile_"+i).css({"border-radius":"50%"} );
       $("div#tile_"+j).css({"border-radius":"50%"});
        cardsFlipped = [];
        cardsIds = [];
        flipped = 0;
        if (totalMatches == 8) {
          endGame();
        }
        
      } else {
        setTimeout(flipBack, 500);
      }
    }
  }
}

function flipBack() {
  var card1 = document.getElementById(cardIds[cardIds.length - 2]);
  var card2 = document.getElementById(cardIds[cardIds.length - 1]);

  matches.pop();
  matches.pop();

  cardsFlipped = [];
  cardsIds = [];
  flipped = 0;

  card1.style.backgroundImage = 'url(Card.png)';
  
  card2.style.backgroundImage = 'url(Card.png)';
}

function endGame() {
  alert("Congrats! You've matched all the values! You are ready to take the quiz!");
}

function resetBoard() {
  var cardIds = [];
  var cardsFlipped = [];
  var matches = [];

  var flipped = 0; 
  var totalMatches = 0;
  
  document.getElementById("score").innerHTML = "Score: "+totalMatches;
  document.getElementById("board").innerHTML = "";
}
