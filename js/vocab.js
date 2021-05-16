$(document).ready(function() {
    
    var fruits = [{"en": "apple", "kr": "https://media.giphy.com/media/l0HlHb4dtZZiMYEA8/source.gif"}, {"en": "peach", "kr": "https://media.giphy.com/media/l0HlHMChrHJrtUp4Q/giphy.gif"}, {"en": "strawberry", "kr": "https://media.giphy.com/media/3o6Zt4egdCBSvXRra0/source.gif"}, {"en": "banana", "kr": "https://media.giphy.com/media/3o6Zt6tOaFxXVjTxg4/source.gif"}, {"en": "pomegranate", "kr": "https://media.giphy.com/media/3o6ZtcKc1WXDeWQ91u/source.gif"},  {"en": "lemon", "kr": "https://media.giphy.com/media/l0HlHBKelRu308Owo/source.gif"}, {"en": "orange", "kr": "https://media.giphy.com/media/l0HlA4qMTtcEsVeOQ/source.gif"}];
    
    var colors = [{"en": "blue", "kr": "https://media.giphy.com/media/l4JyUSYJQFs4nJpU4/giphy.gif"}, {"en": "red", "kr": "https://media.giphy.com/media/l4Jzb897wzkAYERji/source.gif"}, {"en": "yellow", "kr": "https://media.giphy.com/media/l4Jz5mEdIwH793X32/giphy.gif"}, {"en": "green", "kr": "https://media.giphy.com/media/26FLgVlzonDpaONFu/giphy.gif"}, {"en": "orange", "kr": "https://media.giphy.com/media/1j15Lb85E1MzbGdq/giphy.gif"}, {"en": "pink", "kr": "https://media.giphy.com/media/l4Jzcqdxyi3K3JLqM/source.gif"}, {"en": "brown", "kr": "https://media.giphy.com/media/26FL1Z4aQQggwu57G/giphy.gif"}, {"en": "black", "kr": "https://media.giphy.com/media/l4Jz9tCZe34gFwAyA/giphy.gif"}, {"en": "white", "kr": "https://media.giphy.com/media/26FLf8uPLZ4fdUkZW/giphy.gif"}];
    
    var verbs = [{"en": "work", "kr": "https://media.giphy.com/media/ehyfBXQsQZHP51r0t7/source.mov"}, {"en": "learn", "kr": "https://media.giphy.com/media/ZETOboYC9LGQlRwGvO/source.mov"}];
    
    var sports = [{"en": "tennis", "kr": "https://media.giphy.com/media/l0MYsOQnVGA8wADLy/source.gif"}, {"en": "soccer", "kr": "https://media.giphy.com/media/26hitpMUgLeb2vCaQ/source.gif"}];
    
    var jobs = [{"en": "teacher", "kr": "https://media.giphy.com/media/ZCekloOpszLcDm8jni/source.mov"}, , {"en": "doctor", "kr": "https://media.giphy.com/media/UoXwtccBhWW6mxeEoX/source.mov"}];
    
    var family = [{"en": "sister", "kr": "https://media.giphy.com/media/3o6Ztqnz8kLL7LbRlu/source.gif"}, {"en": "father", "kr": "https://media.giphy.com/media/l0HlNzPBWFE3c2Hao/giphy.gif"}, {"en": "mother", "kr": "https://media.giphy.com/media/l0HlIhfKLBQ4QgRig/source.gif"}, {"en": "son", "kr": "https://media.giphy.com/media/3o6ZsSYHb0Agx4AIhO/giphy.gif"}];
    
  
    var words = []; //flashcard words to use

    
    var setting = "krEN";
    
    //English to Korean setting; highlights "EN to KR button"; unhighlights "KR to EN" button
    //Hides Korean word and shows English word; Hides "Show English" button and shows "Show Korean" button
    //changes setting variable to enKR
  $("#enToKr").on("click", function(){
    $("#enToKr").css({"background-color":"#2980b9", "color":"white", "border-color": "black", "border-width": "2px"});
    $("#krToEn").css({"background-color":"lightgray", "border-width": "0px"});
    $("#showEN").css("z-index", "-1");
    $(".korean").css("z-index", "-1"); 
    $("#showKR").css("z-index", "1");
    $(".english").css("z-index", "1");
    setting = "enKR";
  });
   
    //Korean to English setting; highlights "KR to EN button"; unhighlights "EN to KR" button
    //Hides English word and shows Korean word; Hides "Show Korean" button and shows "Show English" button
    //changes setting variable to krEN
  $("#krToEn").on("click", function(){
    $("#krToEn").css({"background-color":"#2980b9","color":"white", "border-color": "black", "border-width": "2px"});
    $("#enToKr").css({"background-color":"lightgray", "border-width": "0px"});
    $("#showKR").css("z-index", "-1");
    $(".english").css("z-index", "-1"); 
    $("#showEN").css("z-index", "1");
    $(".korean").css("z-index", "1");
    setting = "krEN";
  });
  
  $("#showEN").on("click", function() {
        $(".english").css("z-index", "1");
  });
    
  $("#showKR").on("click", function() {
        $(".korean").css("z-index", "1");
  })
    
  $("#nextCard").on("click", function() {
      
    if(onoffFruits === "off" && onoffColors === "off" && onoffVerbs === "off" && onoffAdjectives === "off" && onoffPlaces === "off" && onoffSports === "off" && onoffJobs === "off" && onoffFamily === "off")
    {
      window.alert("Please select category from category list!");
    }
    var randCard = Math.floor(Math.random()*words.length);
    
    var htmlEn = "<div>" + words[randCard]["en"] + "</div>"; 
    var htmlKr = "<div>" + "<img class="+ "asl"+ " src="+  words[randCard]["kr"] +">" + "</div>";
  
    if(setting === "krEN") {
      $(".english").css("z-index", "-1");  //hides the english of the next card
    } else if (setting === "enKR") {
      $(".korean").css("z-index", "-1")  //hides the korean of the next card
    }
    $(".english").html(htmlEn);
    $(".korean").html(htmlKr);
  });
 
    var onoffFruits = "off";
  $("#fruits").on("click", function(){
    if(onoffFruits === "off") {
      $("#fruits").css({"background-color":"#2980b9","color":"white", "border-color": "black", "border-width": "2px"});
      words = words.concat(fruits);
      return onoffFruits = "on";
      
    } else if (onoffFruits === "on") {
        $("#fruits").css({"background-color":"lightgray", "border-width": "0px"});
        //checks for fruits in words array and removes them
        var wordsFiltered = words.filter(function(obj) {
          if(fruits.indexOf(obj) === -1) {
            return true;
          } else {
              return false;
          }
        });
        words = wordsFiltered;                     
        return onoffFruits = "off";
    }
  });
  
    
  //toggles colors button on/off and adds/removes words from vocab quiz list
    var onoffColors = "off";
  $("#colors").on("click", function(){
    if(onoffColors === "off") {
      $("#colors").css({"background-color":"#2980b9","color":"white", "border-color": "black", "border-width": "2px"});
      words = words.concat(colors);
      onoffColors = "on";
    } else if (onoffColors === "on") {
        $("#colors").css({"background-color":"lightgray", "border-width": "0px"});
        //checks for colors in words array and removes them
        var wordsFiltered = words.filter(function(obj) {
          if(colors.indexOf(obj) === -1) {
            return true;
          } else {
              return false;
          }
        });
        words = wordsFiltered;
        onoffColors = "off";
    }
  });
  
  
  //toggles verbs button on/off and adds/removes words from vocab quiz list
    var onoffVerbs = "off";
  $("#verbs").on("click", function(){
    if(onoffVerbs === "off") {
      $("#verbs").css({"background-color":"#2980b9","color":"white", "border-color": "black", "border-width": "2px"});
      words = words.concat(verbs);
      return onoffVerbs = "on";
    } else if (onoffVerbs === "on") {
        $("#verbs").css({"background-color":"lightgray", "border-width": "0px"});
      //checks for verbs in words array and removes them
        var wordsFiltered = words.filter(function(obj) {
          if(verbs.indexOf(obj) === -1) {
            return true;
          } else {
              return false;
          }
        });
        words = wordsFiltered;
        return onoffVerbs = "off";
    }
  });
  
    
  //toggles adjectives button on/off and adds/removes words from vocab quiz list
    var onoffAdjectives = "off";
  $("#adjectives").on("click", function(){
    if(onoffAdjectives === "off") {
      $("#adjectives").css({"background-color":"#2980b9","color":"white", "border-color": "black", "border-width": "2px"});
      words = words.concat(adjectives);
      return onoffAdjectives = "on";
    } else if (onoffAdjectives === "on") {
        $("#adjectives").css({"background-color":"lightgray", "border-width": "0px"});
      //checks for adjectives in words array and removes them
        var wordsFiltered = words.filter(function(obj) {
          if(adjectives.indexOf(obj) === -1) {
            return true;
          } else {
              return false;
          }
        });
        words = wordsFiltered;
        return onoffAdjectives = "off";
    }
  });
  
  
  //toggles sports button on/off and adds/removes words from vocab quiz list
    var onoffPlaces = "off";
  $("#places").on("click", function(){
    if(onoffPlaces === "off") {
      $("#places").css({"background-color":"#2980b9","color":"white", "border-color": "black", "border-width": "2px"});
      words = words.concat(places);
      return onoffPlaces = "on";
    } else if (onoffPlaces === "on") {
        $("#places").css({"background-color":"lightgray", "border-width": "0px"});
      //checks for places in words array and removes them
        var wordsFiltered = words.filter(function(obj) {
          if(places.indexOf(obj) === -1) {
            return true;
          } else {
              return false;
          }
        });
        words = wordsFiltered;
        return onoffPlaces = "off";
    }
  });
    
    //toggles fruits button on/off and adds/removes words from vocab quiz list
    var onoffSports = "off";
  $("#sports").on("click", function(){
    if(onoffSports === "off") {
      $("#sports").css({"background-color":"#2980b9","color":"white", "border-color": "black", "border-width": "2px"});
      words = words.concat(sports);
      return onoffSports = "on";
    } else if (onoffSports === "on") {
        $("#sports").css({"background-color":"lightgray", "border-width": "0px"});
      //checks for sports in words array and removes them
        var wordsFiltered = words.filter(function(obj) {
          if(sports.indexOf(obj) === -1) {
            return true;
          } else {
              return false;
          }
        });
        words = wordsFiltered;
        return onoffSports = "off";
    }
  });
  
  //toggles jobs button on/off and adds/removes words from vocab quiz list
    var onoffJobs = "off";
  $("#jobs").on("click", function(){
    if(onoffJobs === "off") {
      $("#jobs").css({"background-color":"#2980b9","color":"white", "border-color": "black", "border-width": "2px"});
      words = words.concat(jobs);
      return onoffJobs = "on";
    } else if (onoffJobs === "on") {
        $("#jobs").css({"background-color":"lightgray", "border-width": "0px"});
      //checks for jobs in words array and removes them
        var wordsFiltered = words.filter(function(obj) {
          if(jobs.indexOf(obj) === -1) {
            return true;
          } else {
              return false;
          }
        });
        words = wordsFiltered;
        return onoffJobs = "off";
    }
  });
  
    
  
  //toggles family button on/off and adds/removes words from vocab quiz list
    var onoffFamily = "off";
  $("#family").on("click", function(){
    if(onoffFamily === "off") {
      $("#family").css({"background-color":"#2980b9", "color":"white", "border-color": "black", "border-width": "2px"});
      words = words.concat(family);
      return onoffFamily = "on";
    } else if (onoffFamily === "on") {
        $("#family").css({"background-color":"lightgray", "border-width": "0px"});
      //checks for family in words array and removes them
        var wordsFiltered = words.filter(function(obj) {
          if(family.indexOf(obj) === -1) {
            return true;
          } else {
              return false;
          }
        });
        words = wordsFiltered;
        return onoffFamily = "off";
    }
  });
 
  });  
  $(function() {
    $("li").click(function(e) {
      //e.preventDefault();
      $("li").removeClass("active");
      $(this).addClass("active");
    });
});