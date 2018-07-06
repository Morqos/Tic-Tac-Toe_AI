
function invertWhoHasMoved()
{
    opponentMoved = !opponentMoved;
    AImoved = !AImoved;
}


function cellIsEmptyOpponentMoves(clickX, clickY)
{
    if(!opponentMoved)
    {
        var index = fromCoordToIndex(clickX, clickY)
        if(trackGrid[index] == TRACK_EMPTY)
        {
            trackGrid[index] = TRACK_X;
            invertWhoHasMoved();
        }
    }

}



function findIndexesEmptyCells(board)
{
    var emptyCells = [];
    for(var i=0; i<9; i++)
    {
        if(board[i] == TRACK_EMPTY) emptyCells.push(i);
    }

    return emptyCells;

}



function minimax(whichPlayer, board)
{
    var indexesEmptyCells = findIndexesEmptyCells(board);

    if (indexesEmptyCells.length == 0) return {score: 0}; // draw
    if(hasWon(AI, board)) return {score: 10};
    if(hasWon(Opponent, board)) return  {score: -10};

    var moves = [];

    for (var i = 0; i < indexesEmptyCells.length; i++)
    {
        var move = {};
        move["index"] = indexesEmptyCells[i]; // save index of the move

        // make the move
        board[indexesEmptyCells[i]] = whichPlayer;

        var result;
        if (whichPlayer == AI)
            result = minimax(Opponent, board);
        else
            result = minimax(AI, board);
        move["score"] = result["score"];

        // reset the spot to empty to try all other moves
        board[indexesEmptyCells[i]] = TRACK_EMPTY;

        // save the move (index of the grid and score) to compare to other ones
        moves.push(move);
    }

    var bestMove;
    if(whichPlayer == AI)
    {
        // AI turn: max
        var bestScore = -10000;
        for(var i = 0; i < moves.length; i++)
        {
            if(moves[i]["score"] > bestScore)
            {
                bestScore = moves[i]["score"];
                bestMove = i;
            }
        }
    }
    else
    {
        // Opponent turn: min
        var bestScore = 10000;
        for(var i = 0; i < moves.length; i++)
        {
            if(moves[i]["score"]  < bestScore)
            {
                bestScore = moves[i]["score"];
                bestMove = i;
            }
        }
    }

    return moves[bestMove];  
}


// To don't stess the CPU with the computations of all the branches
function firstMoveAI(){
    var rand = Math.random();
    if(rand < 0.5) trackGrid[4] = AI;
    else
    {
        var rand2 = Math.random();
        if(rand2 < 0.25) trackGrid[0] = AI;
        if(rand2 >= 0.25 && rand2 < 0.50) trackGrid[2] = AI;
        if(rand2 >= 0.50 && rand2 < 0.75) trackGrid[6] = AI;
        if(rand2 >= 0.75) trackGrid[8] = AI;

    }
}


function AImakesMove(){
    if(opponentMoved)
    {
        if(nFilledCells() == 0) firstMoveAI();
        else
        {
            var newBoard = trackGrid.slice();
            var move = minimax(AI, newBoard);
            trackGrid[move["index"]] = AI;
        }
        invertWhoHasMoved();
    }
}