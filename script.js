let jogador1 = "X";
let jogador2 = "O";

let jogo = {
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
};

function handleClick(row,cell){
    if(jogo[row][cell] === ''){
        jogo[row][cell] = jogador1;
        render();
    }
}