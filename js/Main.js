
var canvas, canvasContext;
var whoStarts = 0;
var gameFinished = false;

window.onload = function()
{
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    StartGame();
}

function StartGame()
{

    setupInput();

    startsFirts();

    var framesPerSecond = 30;
    setInterval(updateAll, 1000 / framesPerSecond);

}


function startsFirts()
{
    if(Math.random()>=0.5)
    {
        AImoved = false;
        opponentMoved = true;
    }
}


function updateAll()
{
    if(!gameFinished)
    {
        checkGameFinished();
        AImakesMove();
    }

    drawAll();
    if(gameFinished) drawGameFinished();
}


