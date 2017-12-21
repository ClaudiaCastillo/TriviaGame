
// Trivia Questions

var allTriviaQuest = [{
  question: "Dogs make 10 different sounds. How many difference sounds can cats make?",
  answers: ["80 different sounds", "50 different sounds", "100 different sounds", "120 different sounds"],
  correctAnswer: "100 different sounds"
}, {
  question: "What percentage of households in North America own a cat?",
  answers: ["50% of households", "10% of households", "60% of households", "30% of households"],
  correctAnswer: "30% of households"
}, {
  question: "At approximately what top speed can a cat travel over a short distance?",
  answers: ["31 mph (49 km)", "27 mph (43 km)", "32 mph (51 km)", "29 mph (46 km)"],
  correctAnswer: "31 mph (49 km)"
}, {
  question: "Who was the first cartoon cat?",
  answers: ["Tom and Jerry", "Felix the Cat", "Puss Gets the Boot", "Cat in the Hat"],
  correctAnswer: "Felix the Cat"
}, {
  question: "Which scientist invented the cat flap because their cat kept opening the door and wrecking their experiment?",
  answers: ["Robert Hooke", "Blaise Pascal", "Galileo Galilei", "Isaac Newton"],
  correctAnswer: "Isaac Newton"
}, {
  question: "The longest non-fatal fall of a cat was from which floor of an apartment building?",
  answers: ["6th floor", "9th floor", "12th floor", "16th floor"],
  correctAnswer: "16th floor"
}, {
  question: "How many kittens can a single pair of cats and their offspring produce in just seven years?",
  answers: ["230,000 kittens", "380,000 kittens", "420,000 kittens", "530,000 kittens"],
  correctAnswer: "420,000 kittens"
}, {
  question: "Where was the oldest known pet cat found (hint: it was found in a 9,500-year-old grave)?",
  answers: ["Cyprus", "Egypt", "Greece", "Ethiopia"],
  correctAnswer: "Cyprus"
}];

// panel ID set to hold all questions and showFinalResultss 
var panel = $("#question-area");

// Variable timer that will hold the setInterval
var timer;

// trivia game object holds counters and various functions
var triviaGame = {

  correct: 0,
  incorrect: 0,
  counter: 120,

  countdown: function() {
    triviaGame.counter--;
    $("#counter-number").html(triviaGame.counter);
    if (triviaGame.counter === 0) {
      console.log("TIME UP");
      triviaGame.finishedGame();
    }
  },

  beginGame: function() {
    timer = setInterval(triviaGame.countdown, 1000);

    $("#trivia-counter-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");

    $("#start").remove();

    for (var i = 0; i < allTriviaQuest.length; i++) {
      panel.append("<h2>" + allTriviaQuest[i].question + "</h2>");
      for (var j = 0; j < allTriviaQuest[i].answers.length; j++) {
        panel.append("<input type='radio' size='100' name='triviaQuestNum-" + i +
        "' value='" + allTriviaQuest[i].answers[j] + "''>" + allTriviaQuest[i].answers[j]);
      }
    }

    panel.append("<button id='Finished'>Finished</button>");
  },

  finishedGame: function() {

    $.each($("input[name='triviaQuestNum-0']:checked"), function() {
      if ($(this).val() === allTriviaQuest[0].correctAnswer) {
        triviaGame.correct++;
      }
      else {
        triviaGame.incorrect++;
      }
    });

    $.each($("input[name='triviaQuestNum-1']:checked"), function() {
      if ($(this).val() === allTriviaQuest[1].correctAnswer) {
        triviaGame.correct++;
      }
      else {
        triviaGame.incorrect++;
      }
    });

    $.each($("input[name='triviaQuestNum-2']:checked"), function() {
      if ($(this).val() === allTriviaQuest[2].correctAnswer) {
        triviaGame.correct++;
      }
      else {
        triviaGame.incorrect++;
      }
    });

    $.each($("input[name='triviaQuestNum-3']:checked"), function() {
      if ($(this).val() === allTriviaQuest[3].correctAnswer) {
        triviaGame.correct++;
      }
      else {
        triviaGame.incorrect++;
      }
    });

    $.each($("input[name='triviaQuestNum-4']:checked"), function() {
      if ($(this).val() === allTriviaQuest[4].correctAnswer) {
        triviaGame.correct++;
      }
      else {
        triviaGame.incorrect++;
      }
    });

    $.each($("input[name='triviaQuestNum-5']:checked"), function() {
      if ($(this).val() === allTriviaQuest[5].correctAnswer) {
        triviaGame.correct++;
      }
      else {
        triviaGame.incorrect++;
      }
    });

    $.each($("input[name='triviaQuestNum-6']:checked"), function() {
      if ($(this).val() === allTriviaQuest[6].correctAnswer) {
        triviaGame.correct++;
      }
      else {
        triviaGame.incorrect++;
      }
    });

    $.each($("input[name='triviaQuestNum-7']:checked"), function() {
      if ($(this).val() === allTriviaQuest[7].correctAnswer) {
        triviaGame.correct++;
      }
      else {
        triviaGame.incorrect++;
      }
    });

    this.showFinalResults();

  },

  showFinalResults: function() {

    clearInterval(timer);

    $("#trivia-counter-wrapper h2").remove();

    panel.html("<h2>Game Finished!</h2>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (allTriviaQuest.length - (this.incorrect + this.correct)) + "</h3>");
  }
};

// cluck events to begin trivia game and finish showFinalResultss of trivia gaeme

$(document).on("click", "#start", function() {
  triviaGame.beginGame();
});


$(document).on("click", "#Finished", function() {
  triviaGame.finishedGame();
});