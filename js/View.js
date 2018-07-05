
function drawGrid()
{
    colorRect(199,0, 2,600, 'black'); // First Vertical Line
    colorRect(399,0, 2,600, 'black'); // Second Vertical Line

    colorRect(0,199, 600,2, 'black') // First Horizontal Line
    colorRect(0,399, 600,2, 'black') // Second Horizontal Line

}


function drawFilledCells()
{
    for(var row=0; row<TRACK_ROWS; row++)
    {
        for(var col=0; col<TRACK_COLS; col++)
        {
            var index = fromRowColToIndex(row, col)
            if(trackGrid[index] != -1)
            {
                if(trackGrid[index] == TRACK_X)
                    colorText("X", (col+1)*200-100,(row+1)*200-30, "black", "200px Arial");
                else
                    colorText("O", (col+1)*200-100,(row+1)*200-30, "black", "200px Arial");
            }

        }
    }

    
}


function drawAll()
{
    colorRect(0, 0, canvas.width, canvas.height, 'white'); // clear screen

    drawGrid();
    drawFilledCells();

}


function drawGameFinished()
{
    if(gameFinished)
    {
        if(winner == -1) colorText("Draw", 300,350, "yellow", "120px Arial");
        if(winner == AI) colorText("You Lose", 300,350, "red", "120px Arial");
        if(winner == Opponent) colorText("You Win", 300,350, "green", "120px Arial");
    }
}
