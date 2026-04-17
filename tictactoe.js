
let player="X";

let player2="O";

let currentPlayer="X";

let board=["","","","","","","","",""];

let gameRunning=false;


const winPatterns=[

[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]

];


function chooseSymbol(sym){

player=sym;

player2=(sym==="X")?"O":"X";

currentPlayer=player;


document.getElementById("xbtn").classList.remove("selected");

document.getElementById("obtn").classList.remove("selected");


if(sym==="X")

document.getElementById("xbtn").classList.add("selected");

else

document.getElementById("obtn").classList.add("selected");

}


function startGame(){

document.getElementById("start-screen").classList.remove("active");

document.getElementById("game-screen").classList.add("active");


gameRunning=true;

board=["","","","","","","","",""];

currentPlayer=player;


document.getElementById("status").innerText=

"Player "+currentPlayer+"'s turn";

}


function playMove(index){

if(!gameRunning||board[index]!="")

return;


board[index]=currentPlayer;


document.getElementsByClassName("cell")[index].innerText=currentPlayer;


if(checkWinner()){

document.getElementById("status").innerText=

"Player "+currentPlayer+" wins!";


celebrationBlast();

gameRunning=false;

return;

}


if(!board.includes("")){

document.getElementById("status").innerText="Game Draw";

gameRunning=false;

return;

}


currentPlayer=(currentPlayer===player)?player2:player;


document.getElementById("status").innerText=

"Player "+currentPlayer+"'s turn";

}


function checkWinner(){

for(let pattern of winPatterns){

let[a,b,c]=pattern;

if(board[a]&&board[a]==board[b]&&board[a]==board[c])

return true;

}

return false;

}


function restartGame(){

location.reload();

}


function celebrationBlast(){

for(let i=0;i<120;i++){

let confetti=document.createElement("div");

confetti.classList.add("confetti");

confetti.style.left=Math.random()*window.innerWidth+"px";

confetti.style.backgroundColor=

"hsl("+Math.random()*360+",100%,50%)";

document.body.appendChild(confetti);

setTimeout(()=>confetti.remove(),5000);

}

}