var readlineSync = require('readline-sync');
const chalk = require('chalk');

console.log(chalk.bold.bgYellowBright.black(' Do You Know JavaScript ? '))

var userName = readlineSync.question(chalk.greenBright("\nWhat's your name? \nPress Enter after writing your name: "));

console.log(chalk`\n{cyanBright Welcome {bold.bgWhiteBright.black  ${userName} } to {bold.bgYellowBright.black  Do You Know JS? }}`)

console.log(chalk.greenBright("\n Rules: \n(1)This game will test your knowledge of JavaScript\n   From history, basics, intermediate and advanced stuff \n(2)Every question is in the form of MCQ \n(3)This game has 2 levels\n(4)Every right answer rewards +ve point according to level\n(5)No negative point for wrong answer"));

var score = 0;

var highScore = [
  {
    name: "Tanay",
    score: 20
  },
  {
    name: "Shivam",
    score: 19
  },
  {
    name: "Walt",
    score: 18
  },
  {
    name: "Kyle",
    score: 17
  },
  {
    name: "Rahul",
    score: 16
  }
]

function printScore(){
  console.log(chalk.hex('#f7a1c4')("\nCurrent score: " + score));
  console.log(chalk.blue("-----------------------------------------"))
}

function playLevelOne(question, answer){
  var userAnswer = readlineSync.keyIn(chalk.hex('#E4572E')(question));
  if(userAnswer.toLowerCase() === answer){
    console.log("Correct 🤓")
    score = score + 1;
    printScore();
  } else {
    console.log("Wrong 🙃")
    printScore();
  }
}

levelOneQuestions = [
  {
    question : `
  Who invented JavaScript?  
  (a) Tim Berners Lee
  (b) Brendan Eich
  (c) Kyle Simpson
  (d) Steve Jobs \n
  Your answer: `,
    answer: "b"
  },
  {
    question : `
  Is JavaScript related to Java?  
  (a) Yes
  (b) No
  (c) Maybe
  (d) Definitely Not \n
  Your answer: `,
    answer: "d"
  },
  {
    question : `
  Which of the following is considered best and most used JS engine?  
  (a) SpiderMonkey
  (b) V8
  (c) JavaScriptCore
  (d) Chakra \n
  Your answer: `,
    answer: "b"
  },
  {
    question : `
  Where is JS code written in html?  
  (a) using <script> tag in head
  (b) using <script> tag in body before closing of body
  (c) in a separate JS file
  (d) All of the above \n
  Your answer: `,
    answer: "d"
  },
  {
    question : `
  Which of the options is not correct for selecting html element using JS?\n<p id="root"></p>  
  (a) document.getElement("p")
  (b) documment.querySelector("#root")
  (c) document.getElementById("root")
  (d) document.getElementByName("p") \n
  Your answer: `,
    answer: "a"
  },
  {
    question : `
  What is the global object in Browser JavaScript called?  
  (a) global
  (b) super
  (c) web
  (d) window \n
  Your answer: `,
    answer: "d"
  },
  {
    question : `
  Which of the following is of non-primitive type?  
  (a) number
  (b) boolean
  (c) object
  (d) undefined \n
  Your answer: `,
    answer: "c"
  },
  {
    question : `
  What is typeof Array in JS?  
  (a) function
  (b) array
  (c) object
  (d) undefined \n
  Your answer: `,
    answer: "c"
  },
  {
    question : `
  JSON stands for?  
  (a) JavaScript Of NodeJS
  (b) JavaScript On Network
  (c) JavaScript Or Nahi
  (d) JavaScript Object Notation \n
  Your answer: `,
    answer: "d"
  },
  {
    question : `
  We can pause JS code using which command?  
  (a) pause
  (b) debugger
  (c) break
  (d) stop \n
  Your answer: `,
    answer: "b"
  },
]

for(var i = 0; i < levelOneQuestions.length; i++){
  if(i === 0){
    if(readlineSync.keyInYN(chalk.greenBright('\nStart the game? '))){
      playLevelOne(levelOneQuestions[i].question, levelOneQuestions[i].answer);
    } else{
      console.log("\nYou didn't even tried. Too bad. 🙄")
      break;
    }
  }
 if(i>0){
    if(readlineSync.keyInYN(chalk.greenBright('Next question? '))){
      playLevelOne(levelOneQuestions[i].question, levelOneQuestions[i].answer);
    } else{
      break;
    }
 }
}

console.log("Your Score: "+ score);

function playLevelTwo(question, answer){
  var userAnswer = readlineSync.keyIn(chalk.hex('#E4572E')(question));
  if(userAnswer.toLowerCase() === answer){
    console.log("Correct 🤓")
    score = score + 2;
    printScore();
  } else {
    console.log("Wrong 🙃")
    printScore();
  }
}


levelTwoQuestions = [
  {
    question : `
  function foo(){
    console.log(this);
  }
  foo();
  Output?  
  (a) window
  (b) foo
  (c) this
  (d) undefined \n
  Your answer: `,
    answer: "a"
  },
  {
    question : `
  var obj = {
    name : "object sample",
    sample_method : function(){
        console.log(this)
    }
  }
  obj.sample_method();
  Output?  
  (a) window
  (b) sample_method
  (c) obj
  (d) undefined \n
  Your answer: `,
    answer: "c"
  },
  {
    question : `
  What is at the root of the DOM tree structure?  
  (a) <head>
  (b) <body>
  (c) <root>
  (d) <html> \n
  Your answer: `,
    answer: "d"
  },
  {
    question : `
  When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors. What is this principle?  
  (a) Prototypal Inheritance
  (b) Mixins
  (c) Bubbling
  (d) DOM traversal \n
  Your answer: `,
    answer: "c"
  },
  {
    question : `
  What type of language is JavaScript?  
  (a) Double Threaded
  (b) Single Threaded
  (c) Multi Threaded
  (d) Still not known \n
  Your answer: `,
    answer: "b"
  },
]

if(score>=7){
 console.log(chalk.whiteBright('\nWell looks like you know the basics pretty well.\nYou are qualified for level 2. 🥳')) 
 levelTwoQualified(levelTwoQuestions);
}else if(score > 0){
 console.log(chalk.whiteBright('\nWell played \nYou are not qualified for level 2.\nYou need to brush up the basics.😬')) 
}

function levelTwoQualified(levelTwoQuestions){
  for(var i = 0; i < levelTwoQuestions.length; i++){
    if(i === 0){
      if(readlineSync.keyInYN(chalk.greenBright('\nStart level 2? '))){
        playLevelTwo(levelTwoQuestions[i].question, levelTwoQuestions[i].answer);
      } else{
        break;
      }
    }
    if(i>0){
        if(readlineSync.keyInYN(chalk.greenBright('Next question? '))){
          playLevelTwo(levelTwoQuestions[i].question, levelTwoQuestions[i].answer);
        } else{
          break;
        }
    }
  }
}

if(score > 10){
  console.log("\nYour Final Score: "+ score);
  var f = 0;

  for(var i = 0 ; i < highScore.length;){
    if(score >= highScore[i].score){
      f = 1;
      break;
    }else{
      i++;
    }
  }

  if(f === 1){
    console.log(chalk.redBright(`\n\n Hurray you have beaten or equaled a score on the "The Leaderboard" !!! \n Send me a screenshot of your score and your name shall be included in "The Wall of Fame" 🙌 `))
  } else{
    console.log(chalk.redBright(`\n\nWell played. \nUnfortunately you did not make it to the Leaderboard, \nDon't let this set you back. Brush up JS concepts and play again. You will make it to leaderboard one day. 😇`))
  }
}

function showLeaderBoard(highScore){
  console.log(chalk.bgCyanBright.black.bold('\n  LEADERBOARD  '))
  for(var i = 0; i < highScore.length; i++){
    console.log(chalk`\n{bold.bgWhiteBright.black   ${highScore[i].name} : ${highScore[i].score}  }`)
  }
}

if(readlineSync.keyInYN(chalk.greenBright('\nView LeaderBoard? '))){
  showLeaderBoard(highScore)
} 
