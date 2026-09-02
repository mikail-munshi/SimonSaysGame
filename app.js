let gameSeq = [];
let userSeq = [];
let btns = [ "red", "yellow","green", "purple" ];
let started = false;
let level = 0;

let h2 = document.querySelector("h2");
let start = document.querySelector(".start")
start.addEventListener("click", function () {
   
    if(started == false) {
    console.log("game started");
    started = true;

    levelUp();

    }
});

function gameFlash(btn) {
    btn.classList.add("flash");

    setTimeout(function (){
        btn.classList.remove("flash");
    }, 400);
}

function userFlash(btn) {
    btn.classList.add("userflash");

    setTimeout(function (){
        btn.classList.remove("userflash");
    }, 200);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;
    
    // random btn choose
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // . muloto class nirdesh korbe ${randColor} color ta indicate korbe

    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);


}

function checkAns(idx) {
    // console.log("curr level : ", level);
    // let idx = level-1;

    if(userSeq[idx] == gameSeq[idx]) {
        //console.log("same value");
        if(userSeq.length == gameSeq.length) {
            setTimeout(levelUp(), 500);
        }
    }
    else {

        h2.style.color = "white";
        h2.innerHTML = `GAME OVER! Your score was <b>${level}</b> <br>
        Press Start key to start again!`;
        document.querySelector("body").style.backgroundColor = "red";
        document.querySelector("h1").style.color = "white";
        document.querySelector("h1").style.backgroundColor = "red";
        document.querySelector(".start").style.color = "white";
        document.querySelector(".start").style.backgroundColor = "red";

        setTimeout( function() {
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("h1").style.color = "black";
        document.querySelector("h1").style.backgroundColor = "#f99b45";
        document.querySelector("h2").style.color = "black";
        document.querySelector(".start").style.color = "black";
        document.querySelector(".start").style.backgroundColor = "#f99b45";
        }, 500);

        // h1 customization aksathe kore flsi
       
        reset();
    }
}

function btnPress() {
    // console.log(this); // j button press hobe sheta

    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length-1);


}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
    // btn click holei btnPress function call hbe 


}

function reset(){
    started= false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
