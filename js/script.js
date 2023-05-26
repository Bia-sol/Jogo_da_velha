// Variaveis
let btn1 = 0;
let btn2 = 0;
let btn3 = 0;
let btn4 = 0;
let btn5 = 0;
let btn6 = 0;
let btn7 = 0;
let btn8 = 0;
let btn9 = 0;
let controle = 0;
let jogadas = 0;
let finalJogo = false;

// CLIQUE
// DOS
// BOTÕES

// Clique botão 1
function clickBtn1(){
    jogadas++;
    let btn = document.getElementById('btn1');

    if (btn.value == ' ' && !finalJogo) {
        if (controle == 0) {
            controle = 1;
            btn.value = "X";
            btn1 = "X";
        }   else {
                controle = 0;
                btn.value = "O";
                btn1 = "O";
            }
        
    }
    verificaGanhador();
}

// Clique botão 2
function clickBtn2(){
    jogadas++;
    let btn = document.getElementById('btn2');

    if (btn.value == ' ' && !finalJogo) {
        if (controle == 0) {
            controle = 1;
            btn.value = "X";
            btn2 = "X";
        }   else {
                controle = 0;
                btn.value = "O";
                btn2 = "O";
            }
    }
    verificaGanhador();
}

// Clique botão 3
function clickBtn3(){
    jogadas++;
    let btn = document.getElementById('btn3');

    if (btn.value == ' ' && !finalJogo) {
        if (controle == 0) {
            controle = 1;
            btn.value = "X";
            btn3 = "X";
        }   else {
                controle = 0;
                btn.value = "O";
                btn3 = "O";
            }
    }
    verificaGanhador();
}

// Clique botão 4
function clickBtn4(){
    jogadas++;
    let btn = document.getElementById('btn4');

    if (btn.value == ' ' && !finalJogo) {
        if (controle == 0) {
            controle = 1;
            btn.value = "X";
            btn4 = "X";
        }   else {
                controle = 0;
                btn.value = "O";
                btn4 = "O";
            }
    }
    verificaGanhador();
}

// Clique botão 5
function clickBtn5(){
    jogadas++;
    let btn = document.getElementById('btn5');

    if (btn.value == ' ' && !finalJogo) {
        if (controle == 0) {
            controle = 1;
            btn.value = "X";
            btn5 = "X";
        }   else {
                controle = 0;
                btn.value = "O";
                btn5= "O";
            }
    }
    verificaGanhador();
}

// Clique botão 6
function clickBtn6(){
    jogadas++;
    let btn = document.getElementById('btn6');

    if (btn.value == ' ' && !finalJogo) {
        if (controle == 0) {
            controle = 1;
            btn.value = "X";
            btn6 = "X";
        }   else {
                controle = 0;
                btn.value = "O";
                btn6 = "O";
            }
    }
    verificaGanhador();
}

// Clique botão 7
function clickBtn7(){
    jogadas++;
    let btn = document.getElementById('btn7');

    if (btn.value == ' ' && !finalJogo) {
        if (controle == 0) {
            controle = 1;
            btn.value = "X";
            btn7 = "X";
        }   else {
                controle = 0;
                btn.value = "O";
                btn7 = "O";
            }
    }
    verificaGanhador();
}

// Cloque botão 8
function clickBtn8(){
    jogadas++;
    let btn = document.getElementById('btn8');

    if (btn.value == ' ' && !finalJogo) {
        if (controle == 0) {
            controle = 1;
            btn.value = "X";
            btn8 = "X";
        }   else {
                controle = 0;
                btn.value = "O";
                btn8 = "O";
            }
    }
    verificaGanhador();
}

// Clique botão 9
function clickBtn9(){
    jogadas++;
    let btn = document.getElementById('btn9');

    if (btn.value == ' ' && !finalJogo) {
        if (controle == 0) {
            controle = 1;
            btn.value = "X";
            btn9 = "X";
        }   else {
                controle = 0;
                btn.value = "O";
                btn9 = "O";
            }
    }
    verificaGanhador();
}

// Verifica ganhador
function verificaGanhador() {
    let lblJogador = document.getElementById("lblJogador");
    let lblJogadas = document.getElementById("lblJogadas");

// Verifica se o Jogador X ganhou
    if (btn1== 'X' && btn2== 'X' && btn3== 'X') {
        finalJogo = true;
        lblJogador.innerText = 'O Jogador X ganhou';
        lblJogadas.innerText = '';
        return;
    }
    if (btn4== 'X' && btn5== 'X' && btn6== 'X') {
        finalJogo = true;
        lblJogador.innerText = 'O Jogador X ganhou';
        lblJogadas.innerText = '';
        return;
    }
    if (btn7== 'X' && btn8== 'X' && btn9== 'X') {
        finalJogo = true;
        lblJogador.innerText = 'O Jogador X ganhou';
        lblJogadas.innerText = '';
        return;
    }
    if (btn1== 'X' && btn4== 'X' && btn7== 'X') {
        finalJogo = true;
        lblJogador.innerText = 'O Jogador X ganhou';
        lblJogadas.innerText = '';
        return;
    }
    if (btn2== 'X' && btn5== 'X' && btn8== 'X') {
        finalJogo = true;
        lblJogador.innerText = 'O Jogador X ganhou';
        lblJogadas.innerText = '';
        return;
    }
    if (btn3== 'X' && btn6== 'X' && btn9== 'X') {
        finalJogo = true;
        lblJogador.innerText = 'O Jogador X ganhou';
        lblJogadas.innerText = '';
        return;
    }
    if (btn1== 'X' && btn5== 'X' && btn9== 'X') {
        finalJogo = true;
        lblJogador.innerText = 'O Jogador X ganhou';
        lblJogadas.innerText = '';
        return;
    }
    if (btn3== 'X' && btn5== 'X' && btn7== 'X') {
        finalJogo = true;
        lblJogador.innerText = 'O Jogador X ganhou';
        lblJogadas.innerText = '';
        return;
    }

// Verifica se o Jogador O ganhou
    if (btn1== 'O' && btn2== 'O' && btn3== 'O') {
        finalJogo = true;
        lblJogador.innerText = 'O Jogador O ganhou';
        lblJogadas.innerText = '';
        return;
    }
    if (btn4== 'O' && btn5== 'O' && btn6== 'O') {
        finalJogo = true;
        lblJogador.innerText = 'O Jogador O ganhou';
        lblJogadas.innerText = '';
        return;
    }
    if (btn7== 'O' && btn8== 'O' && btn9== 'O') {
        finalJogo = true;
        lblJogador.innerText = 'O Jogador O ganhou';
        lblJogadas.innerText = '';
        return;
    }
    if (btn1== 'O' && btn4== 'O' && btn7== 'O') {
        finalJogo = true;
        lblJogador.innerText = 'O Jogador O ganhou';
        lblJogadas.innerText = '';
        return;
    }
    if (btn2== 'O' && btn5== 'O' && btn8== 'O') {
        finalJogo = true;
        lblJogador.innerText = 'O Jogador O ganhou';
        lblJogadas.innerText = '';
        return;
    }
    if (btn3== 'O' && btn6== 'O' && btn9== 'O') {
        finalJogo = true;
        lblJogador.innerText = 'O Jogador O ganhou';
        lblJogadas.innerText = '';
        return;
    }
    if (btn1== 'O' && btn5== 'O' && btn9== 'O') {
        finalJogo = true;
        lblJogador.innerText = 'O Jogador O ganhou';
        lblJogadas.innerText = '';
        return;
    }
    if (btn3== 'O' && btn5== 'O' && btn7== 'O') {
        finalJogo = true;
        lblJogador.innerText = 'O Jogador O ganhou';
        lblJogadas.innerText = '';
        return;
    }
    if (jogadas== 9) {
        finalJogo = true;
        lblJogador.innerText = 'O jogo empatou :(';
        lblJogadas.innerText = '';
        return;
    }

    lblJogadas.innerText = '(' + (jogadas+1) + 'ª Jogada)';
}
