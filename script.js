"use strict";

alert('Welcome ! \n\n  This Game is called "Hold it !" \n\n You have to roll the Dice and collect scores ! \n\n You can keep on collecting untill You Decide to Hold the Collected Scores OR untill Dice Shows 1 \n\n First Player Who reaches 100 Scores WINS ! \n\n Good Luck and Have Fun ! 😉')

var playerOneCurrent = Number(document.querySelector(".playerOneCurrentScore").innerHTML);
var playerTwoCurrent = Number(document.querySelector(".playerTwoCurrentScore").innerHTML);
var playerOneMain = Number(document.querySelector(".playerOneMainScore").innerHTML);
var playerTwoMain = Number(document.querySelector(".playerTwoMainScore").innerHTML);

var turn = "one";

function playGame() {
  if (turn=="one"){
    playerOneTurn();
  } else if (turn=="two") {
    playerTwoTurn();
  }
}

function playerOneTurn(){
  var RandomNum  =(Math.floor(Math.random()*6) + 1);
  var diceNum = "dice-"+RandomNum+".png" ;
  document.querySelector(".Dice").setAttribute("src",diceNum);

  if(RandomNum!=1){
    playerOneCurrent = RandomNum + playerOneCurrent ;
    document.querySelector(".playerOneCurrentScore").innerHTML=playerOneCurrent;
    document.querySelector(".holdBtn").addEventListener("click",function(){
      playerOneMain = playerOneMain + playerOneCurrent;
      document.querySelector(".playerOneMainScore").innerHTML=playerOneMain;
      playerOneCurrent = 0 ;
      document.querySelector(".playerOneCurrentScore").innerHTML=playerOneCurrent;

      if (playerOneMain >= 100) {
        document.querySelector(".current1").innerHTML="PLAYER 1 WINS !";
        document.querySelector(".current2").style.display="none";
        document.querySelector(".playerOneCurrentScore").style.display="none";
        document.querySelector(".playerTwoCurrentScore").style.display="none";
        document.querySelector(".playerOne").classList.remove("active","deactive");
        document.querySelector(".playerOne").style.backgroundColor="green";
        document.querySelector(".rollDice").addEventListener("click",function(){
          alert('Press the "New Game" button to play again !')
        })
      } else {
        turn = "two";
        document.querySelector(".rollDice").classList.add("wrong");
        wrongOFF();
        document.querySelector(".playerOne").classList.remove("active");
        document.querySelector(".playerOne").classList.add("deactive");
        document.querySelector(".playerTwo").classList.remove("deactive");
        document.querySelector(".playerTwo").classList.add("active");
      }
    })

  } else {
    playerOneCurrent=0;
    document.querySelector(".playerOneCurrentScore").innerHTML=playerOneCurrent;
    turn = "two";
    document.querySelector(".rollDice").classList.add("wrong");
    wrongOFF();
    document.querySelector(".playerOne").classList.remove("active");
    document.querySelector(".playerOne").classList.add("deactive");
    document.querySelector(".playerTwo").classList.remove("deactive");
    document.querySelector(".playerTwo").classList.add("active");
  }
}

function playerTwoTurn(){
  var RandomNum  =(Math.floor(Math.random()*6) + 1);
  var diceNum = "dice-"+RandomNum+".png" ;
  document.querySelector(".Dice").setAttribute("src",diceNum);

  if(RandomNum!=1){
    playerTwoCurrent = RandomNum + playerTwoCurrent;
    document.querySelector(".playerTwoCurrentScore").innerHTML=playerTwoCurrent;
    document.querySelector(".holdBtn").addEventListener("click",function(){
      playerTwoMain = playerTwoMain + playerTwoCurrent;
      document.querySelector(".playerTwoMainScore").innerHTML=playerTwoMain;
      playerTwoCurrent = 0 ;
      document.querySelector(".playerTwoCurrentScore").innerHTML=playerTwoCurrent;

      if (playerTwoMain >= 100) {
        document.querySelector(".current2").innerHTML="PLAYER 2 WINS !";
        document.querySelector(".current1").style.display="none";
        document.querySelector(".playerOneCurrentScore").style.display="none";
        document.querySelector(".playerTwoCurrentScore").style.display="none";
        document.querySelector(".playerTwo").classList.remove("active","deactive");
        document.querySelector(".playerTwo").style.backgroundColor="green";
        document.querySelector(".rollDice").addEventListener("click",function(){
          alert('Press the "New Game" button to play again !')
        })
      } else {
        turn = "one";
        document.querySelector(".rollDice").classList.add("wrong");
        wrongOFF();
        document.querySelector(".playerOne").classList.add("active");
        document.querySelector(".playerOne").classList.remove("deactive");
        document.querySelector(".playerTwo").classList.add("deactive");
        document.querySelector(".playerTwo").classList.remove("active");
      }
    })
  } else {
    playerTwoCurrent=0;
    document.querySelector(".playerTwoCurrentScore").innerHTML=playerTwoCurrent;
    turn = "one";
    document.querySelector(".rollDice").classList.add("wrong");
    wrongOFF();
    document.querySelector(".playerOne").classList.add("active");
    document.querySelector(".playerOne").classList.remove("deactive");
    document.querySelector(".playerTwo").classList.add("deactive");
    document.querySelector(".playerTwo").classList.remove("active");
  }
}

function wrongOFF () {
  setTimeout(function(){
    document.querySelector(".rollDice").classList.remove("wrong");
  }, 1500)
}