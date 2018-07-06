
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


function hasWon(whichPlayer, board)
{
    var win = false;

    if((board[0] == board[1] && board[0] == board[2] && board[0] == whichPlayer) || // First Row
        (board[3] == board[4] && board[3] == board[5] && board[3] == whichPlayer) || // Second Row
        (board[6] == board[7] && board[6] == board[8] && board[6] == whichPlayer) || // Third Row
        
        (board[0] == board[3] && board[0] == board[6] && board[0] == whichPlayer) || // First Col
        (board[1] == board[4] && board[1] == board[7]  && board[1] == whichPlayer) || // Second Col
        (board[2] == board[5] && board[2] == board[8] && board[2] == whichPlayer) || // Third Col

        (board[0] == board[4] && board[0] == board[8] && board[0] == whichPlayer) || // Diagonal TopLeft
        (board[2] == board[4] && board[2] == board[6] && board[2] == whichPlayer)    // Diagonal TopRight
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
    if(nFilledCells() == trackGrid.length)
    {
        gameFinished = true;
        return;
    }

}
