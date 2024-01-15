import {fieldRender,winner,drawLine,canvColor,buttonNew} from "./TTT-renderHTML.js";
const result = document.querySelector('.js-result');
const newGame = document.querySelector('.js-new-game');
const canv =  document.querySelector('.js-canvas').getContext('2d');
const canvCSS = document.querySelector('.canvas');
const field = document.querySelector('.js-field');
let cells;
let turn;
canvCSS.height = canvCSS.parentElement.clientHeight;
canvCSS.width = canvCSS.height;
const a = canvCSS.height;
clearField();
function move(cell){
    if (turn === 0){
        cells[cell] = 'X';
        turn = 1;
    }
    else {
        cells[cell] = 'O';
        turn = 0;
    }
    updField();
}
function updField(){
    field.innerHTML = fieldRender(cells);
    document.querySelectorAll('.js-but')
    .forEach(button => {
        const numb = button.dataset.number;
        button.onclick = ()=>move(numb);
    })
    checkWin();
}
function checkWin(){
    let check = cells.map(val => val==='X' ? 1 : val==='O' ? -1 : 0);
    let n = 0;
    check.forEach(val => val && n++);
    n===9 && finish('Draw',0,0);
    for (let i=0;i<9;i++){
        if (!(i%3) && i<7 && Math.abs(check[i]+check[i+1]+check[i+2])===3){
            if (check[i]===1){
                finish('X',i,i+2)
            }
            else {
                finish('O',i,i+2)
            }
        }
        if (i<3 && Math.abs(check[i]+check[i+3]+check[i+6])===3){
            if (check[i]===1){
                finish('X',i,i+6)
            }
            else {
                finish('O',i,i+6)
            }
        }
        if (!(i%2) && i<3 && Math.abs(check[i]+check[8-i]+check[4])===3){
            if (check[i]===1){
                finish('X',i,8-i)
            }
            else {
                finish('O',i,8-i)
            }
        }
    }
}
function finish(res,p1,p2){
    document.querySelectorAll('.js-but')
    .forEach(button => button.remove());
    canvColor(canvCSS,res);
    res!=='Draw' && drawLine(a,canv,p1,p2);
    result.innerText = winner(res);
    newGame.innerHTML = buttonNew;
    document.querySelector('.js-new').onclick = ()=>clearField();
}
function clearField(){
    turn = 0;
    cells = [];
    for (let i=0;i<9;i++){
        cells.push('');
    }
    canvColor(canvCSS,'');
    canv.clearRect(0,0,a,a);
    result.innerText = '';
    newGame.innerHTML = '';
    updField();
}