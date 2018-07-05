
var AImoved = true;
var opponentMoved = false;

const TRACK_SIDE = 200;
const TRACK_COLS = 3;
const TRACK_ROWS = 3;

const TRACK_EMPTY = -1;

const TRACK_X = 0;
const Opponent = 0;

const AI = 1;
const TRACK_O = 1;

var winner = -1;

var trackGrid =
[
    -1, -1, -1,
    -1, -1, -1,
    -1, -1, -1
];


function fromRowColToIndex(row, col){
    var index = row*TRACK_COLS + col;
    return index;
}


function fromCoordToIndex(clickX, clickY)
{
    var col = Math.floor(clickX / 200);
    var row = Math.floor(clickY / 200);

    var index = fromRowColToIndex(row, col);
    return index;
}


function resetGame()
{
    startsFirts();

    // Reset the grid
    trackGrid =
    [
        -1, -1, -1,
        -1, -1, -1,
        -1, -1, -1
    ];
    
    winner = -1;
    gameFinished = false;
}


function hasWon(whichPlayer, trackGrid)
{
    var win = false;

    if((trackGrid[0] == trackGrid[1] && trackGrid[0] == trackGrid[2] && trackGrid[0] == whichPlayer) || // First Row
        (trackGrid[3] == trackGrid[4] && trackGrid[3] == trackGrid[5] && trackGrid[3] == whichPlayer) || // Second Row
        (trackGrid[6] == trackGrid[7] && trackGrid[6] == trackGrid[8] && trackGrid[6] == whichPlayer) || // Third Row
        
        (trackGrid[0] == trackGrid[3] && trackGrid[0] == trackGrid[6] && trackGrid[0] == whichPlayer) || // First Col
        (trackGrid[1] == trackGrid[4] && trackGrid[1] == trackGrid[7]  && trackGrid[1] == whichPlayer) || // Second Col
        (trackGrid[2] == trackGrid[5] && trackGrid[2] == trackGrid[8] && trackGrid[2] == whichPlayer) || // Third Col

        (trackGrid[0] == trackGrid[4] && trackGrid[0] == trackGrid[8] && trackGrid[0] == whichPlayer) || // Diagonal TopLeft
        (trackGrid[2] == trackGrid[4] && trackGrid[2] == trackGrid[6] && trackGrid[2] == whichPlayer)    // Diagonal TopRight
    )
    {
        win = true;
    }

    return win;

}


function nFilledCells(){
    var filledCells = 0;
    for(var i=0; i<trackGrid.length; i++)
    {
        if(trackGrid[i] != TRACK_EMPTY) filledCells++;
    }

    return filledCells;
}



function checkGameFinished()
{
    if(nFilledCells() == trackGrid.length)
    {
        gameFinished = true;
        return;
    }

    if(hasWon(AI, trackGrid))
    {
        gameFinished = true;
        winner = AI;
        return;
    }
    if(hasWon(Opponent, trackGrid))
    {
        gameFinished = true;
        winner = Opponent;
        return;
    }
}
