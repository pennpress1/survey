var questions = [
  {   text: 'What does IGGY stand for?', 
         id: '1', 
       type: 'single-select', 
    options: ["Italian Site Hound", "Italian Greyhound", "Italian Golden Retriever ", "Italian German Pinscher"]
    correct: 2,
       fact: "Iggy is a nickname for Italian Greyhound.",
  },

  {   text: 'What country did IGGA\'s origin from?', 
         id: '2', 
       type: 'single-select', 
    options: ["Italy", "Greece", "Germany", "Spain"]
    correct: 2,
       fact: "Italian Greyhound's came from Greece."
  },

  {   text: 'How long does IGGY live?', 
         id: '3', 
       type: 'single-select', 
    options: ["1-8", "1-10", "1-15", "1-20"]
    correct: 3,
       fact: "Italian Greyhound's live about 15 yrs."
  },

  {   text: 'On average how many hours does IGGY get sleep per-day?', 
         id: '4', 
       type: 'single-select', 
    options: ["8hrs", "11hrs", "12hrs", "18hrs"]
    correct: 4,
       fact: "Italian Greyhound's sleep about 18hrs a day."
  },

  {   text: 'What is the top speed of a IGGY?', 
         id: '5', 
       type: 'single-select', 
    options: ["10mph", "12mph", "18mph", "21mph"]
    correct: 4,
       fact: "Italian Greyhound's top speed is 21mph."
  },
];

var portionOfWindowSizeForQuestions = 0.9;
var firstQuestionDisplayed = 0;
var lastQuestionDisplayed = 0;

$(document).ready(function(){
   
  questions.forEach(function(question) {
    generateQuestionElement( question );
  });
  
  
  $('#nextBtn').click(function() {
    if ( $('#nextBtn').text() === 'Next' ) {
      showNextQuestionSet();
    } else {
      // call submitting stuff here.  
    }
    
  });
  
  showNextQuestionSet();
     
});
