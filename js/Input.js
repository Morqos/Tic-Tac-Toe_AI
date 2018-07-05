
var mouseX = 0;
var mouseY = 0;

var mouseMovedInputReady = false;


function setupInput()
{
    canvas.addEventListener('mousemove', updateMousePos);
    canvas.addEventListener('mousedown', clickHandle);
}



function updateMousePos(evt)
{
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;

    mouseX = evt.clientX - rect.left - root.scrollLeft;
    mouseY = evt.clientY - rect.top - root.scrollTop;

    mouseMovedInputReady = true;

}

function clickHandle(evt)
{
    if(mouseMovedInputReady && AImoved) cellIsEmptyOpponentMoves(mouseX, mouseY);
    if(gameFinished) resetGame();
}
