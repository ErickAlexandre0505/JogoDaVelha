let currentPlayer = "X";

let gameBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

// Função para clicar nos quadrados (X,Y) colunas e linhas 
function handleClick(row,cell){
    if(gameBoard[row][cell] === ''){
        gameBoard[row][cell] = currentPlayer;
        render();
        if(checkWinner()){
            alert(`Jogador  ${currentPlayer}  VENCEU !`);
            resetGame();
        }else if(checkDraw()){
            alert("EMPATE !");
            resetGame();
        }else{
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
}

// Função para reconhecer o id(cell) 
function render(){
    const cells = document.querySelectorAll(".cell");
    gameBoard.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
            cells[rowIndex * 3 + colIndex].innerText = cell;
        });
    });
}

// Função para checar os vencedores com todas possibilidades
function checkWinner(){
    for (let i = 0; i < 3; i++) {
        if (gameBoard[i][0] !== '' && gameBoard[i][0] === gameBoard[i][1] && gameBoard[i][1] === gameBoard[i][2]) {
            return true;
        }
        if (gameBoard[0][i] !== '' && gameBoard[0][i] === gameBoard[1][i] && gameBoard[1][i] === gameBoard[2][i]) {
            return true;
        }
    }
    if (gameBoard[0][0] !== '' && gameBoard[0][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][2]) {
        return true;
    }
    if (gameBoard[0][2] !== '' && gameBoard[0][2] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][0]) {
        return true;
    }
    return false;

}

// Função para checar o empate 
function checkDraw(){
    for(let row of gameBoard){
        for(let cell of row){
            if(cell === ""){
                return false;
            }
        }
    }
    return true;
}

// Função para resetar game após mostrar o vencedor ou o empate
function resetGame(){
    currentPlayer = "X";
    gameBoard = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    render
}

