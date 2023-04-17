const playBoard = document.querySelector(".play-board");
const scoreElement = document.querySelector(".score");
const highScoreElemente = document.querySelector(".high-score");


let comidaX, comidaY;
let cobraX = 5, cobraY = 10;
let velocityX = 0, velocityY = 0;
let corpoCobra = [];
let gameOver = false;
let setIntervalId;
let score = 0;
let highScore = localStorage.getItem("high-score") || 0;

const comida_position = () => {
    comidaX = Math.floor(Math.random() * 30) + 1;
    comidaY = Math.floor(Math.random() * 30) + 1;
}

const handleGameOver = () => {
    clearInterval(setIntervalId);
    window.alert("Perdeu mané");
    location.reload();
}
const changeDirection = (e) => {
    if( e.key === "ArrowLeft"){
        velocityX = -1;
        velocityY = 0;
    } else if(e.key === "ArrowDown"){
        velocityX = 0;
        velocityY = 1;
    }else if(e.key === "ArrowUp"){
        velocityX = 0;
        velocityY = -1;
    }else if(e.key === "ArrowRight"){
        velocityX = 1;
        velocityY = 0;
    }
    
}

const startgame = () => {
    if(gameOver) return handleGameOver();
    let htmlMarkup = `<div class="comida" style="grid-area: ${comidaY} / ${comidaX}"></div>`;

    if(cobraX == comidaX && cobraY == comidaY){
        comida_position();
        corpoCobra.push([comidaX, comidaY]);
        score++;

        highScore = score >= highScore ? score: highScore;
        localStorage.setItem("high-score", highScore);
        scoreElement.innerText = `Score: ${score}`
        highScoreElemente.innerText = `High Score: ${highScore}`;
    }
    
    for (let index = corpoCobra.length - 1; index > 0; index--) {
        corpoCobra[index] = corpoCobra[index - 1];
    }

    corpoCobra[0] = [cobraX, cobraY];

    /* cobra andar */
    cobraX += velocityX;
    cobraY += velocityY;

    if(cobraX <= 0 || cobraX > 30 || cobraY <= 0 || cobraY > 30){
        gameOver = true;

    }
    for (let index = 0; index < corpoCobra.length; index++) {
        htmlMarkup += `<div class="cobra" style="grid-area: ${corpoCobra[index][1]} / ${corpoCobra[index][0]}"></div>`;
        if( index !== 0 && corpoCobra[0][1] === corpoCobra[index][1] && corpoCobra[0][0] === corpoCobra[index][0]){
            gameOver = true;
        }
    
    }
    playBoard.innerHTML = htmlMarkup;
}

comida_position();
startgame();
setIntervalId = setInterval(startgame, 125);
document.addEventListener("keydown", changeDirection);