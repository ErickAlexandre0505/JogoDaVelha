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

function render(){
    const cells = document.querySelectorAll(".cell");
    gameBoard.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
            cells[rowIndex * 3 + colIndex].innerText = cell;
        });
    });
}

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

function resetGame(){
    currentPlayer = "X";
    gameBoard = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    render
}

function salvaResultadoHistorico(conversao){
    // Adicionar resultado ao array de historico e salvar o array de historico
    let historico = recuperaHistoricoDeConversoes();

    historico.push(conversao);

    let conversaoEmJson = JSON.stringify(historico);
    localStorage.setItem("Historico", historico);

}

function recuperaHistoricoDeConversoes(){
    let historico = localStorage.getItem("historico");

    if(!historico){
        return [];
    }


    let historicoConvertido = JSON.parse(historico);
    return historicoConvertido;

    // Retornar o array com historico de conversões 

    historico.push(historicoConvertido);
    return historicoConvertido;

}