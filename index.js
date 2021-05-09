 var readlinesync = require('readline-sync')
 score=0;
 function welcome()
 {
   var username= readlinesync.question("what is your name ")
  console.log("Hey " +username+" welcome to the game")
  console.log("lets start")
  console.log("-----------------")
 }
 function quiz(question, optionone, optiontwo, optionthree, optionfour,answer) {
   console.log(question+"\n"+optionone+"\n" +optiontwo+"\n" +optionthree)
 var result = readlinesync.question(optionfour);
  
   if(result==answer)
   {
     console.log("you were right");
     score = score+1;
     console.log("score is :"+score);
     console.log("----------");
   }
   else
   {
     console.log("you were wrong");
     score= score-0.5;
    console.log("score is ;"+score);
     console.log("----------");
   }
 }
var questions=[{
   question:"Which villain caused the warp in avengers infinity war ?",
   optionone:"a.Bucky",
   optiontwo:"a.Red skull",
   optionthree:"c.Thanos",
   optionfour:"your answer is:",
   answerz: "c",
  
 }, {
   question:"What is the real name of Black widow ?",
   optionone:"a.gamora",
   optiontwo:"b.Natasha",
   optionthree:"c.pepper",
   optionfour:"your answer is:",
   answerz:"b",
   
},{
  question:"In which year was captain America freezed? ",
  optionone:"a.1982",
   optiontwo:"a.1941",
   optionthree:"c.1945",
   optionfour:"your answer is:",
   answerz:"c",
   
},{
  question:"Who is the strongest Avenger? :",
  optionone:"a.Bucky",
   optiontwo:"b.Hulk",
   optionthree:"c.Thor",
   optionfour:"your answer is:",
   answerz:"b",
 
}];
function game() {
for( var i=0;i<questions.length;i++)
 {
   var currentQuestion = questions[i];
 quiz(currentQuestion.question,currentQuestion.optionone,currentQuestion.optiontwo,currentQuestion.optionthree,currentQuestion.optionfour,currentQuestion.answerz)
 }
}
function finalscore() {
{
  console.log("Your final score is " +score+" you played well!!");
}
}
welcome();
 game();
 finalscore();
