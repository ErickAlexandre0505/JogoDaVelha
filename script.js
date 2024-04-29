let currentPlayer = "X";

let gameBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

function handleClick(row,cell){
    if(gameBoard[row][cell] === ''){
        gameBoard[row][cell] = currentPlayer;
        render();
        if(checkWinner()){
            alert("${currentPlayer} VENCEU ! ");
            resetGame();
        }else if(checkDraw()){
            alert("Empate!");
            resetGame();
        }else{
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
}

function render(){
    const cells = document.querySelectorAll(".cell");
    gameBoard.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
            cells[rowIndex * 3 + colIndex].innerText = cell;
        });
    });
}

