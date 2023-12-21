import {movesAreaHTML,updateScoreHTML,comment,resetConfirmHTML} from "./RPS-renderHTML.js";
const properties = ['moves','result','comment','score','reset','auto','confirm'];
const elements = {};
properties.forEach(val => elements[val]=document.querySelector(`.js-${val}`));
const moves = ['rock','paper','scissors'];
let score = getScore();
let id;
elements.moves.innerHTML = movesAreaHTML(moves);
elements.score.innerHTML = updateScoreHTML(score);
moves.forEach(val => {
    document.querySelector(`.js-${val}`).onclick =
    () => res(val, rps());
    document.body.addEventListener('keydown',event=>
        event.key===val[0] && res(val, rps()))
});
elements.reset.onclick = ()=>clear();
elements.auto.onclick = ()=>auto();
document.body.addEventListener('keydown',event=>event.key==='a' && auto());
document.body.addEventListener('keydown',event=>{
    if (event.key==='Backspace'){
        elements.confirm.innerHTML = resetConfirmHTML;
        document.querySelector('.js-yes').onclick = ()=>clear();
        document.querySelector('.js-no').onclick = 
        ()=>elements.confirm.innerHTML = '';
    }
});
function getScore(){
    return JSON.parse(localStorage.getItem('score')) || 
    {
        wins: 0,
        losses: 0,
        draws: 0
    }
}
function res(myMove, compMove) {
    let result;
    if(compMove === myMove) result = 'Draw'
    else if (compMove === 'paper' && myMove === 'rock' || 
    compMove === 'scissors' && myMove === 'paper' || 
    compMove === 'rock' && myMove === 'scissors') result = 'You lose'
    else result = 'You win';
    updateScore(result);
    localStorage.setItem('score', JSON.stringify(score));
    elements.result.innerHTML = result;
    elements.comment.innerHTML = comment(myMove, compMove);
    elements.score.innerHTML = updateScoreHTML(score);
}
function clear(){
    localStorage.removeItem('score');
    score = getScore();
    elements.score.innerHTML = updateScoreHTML(score);
    elements.comment.innerHTML = '';
    elements.result.innerHTML = '';
    elements.confirm.innerHTML = '';
}
function auto(){
    if(elements.auto.innerHTML==='Auto play'){
        id = setInterval(() => res(rps(),rps()),1000);
        elements.auto.innerHTML = 'Stop'
    }
    else{
        elements.auto.innerHTML = 'Auto play';
        clearInterval(id)
    }
}
function rps() {
    let move;
    const random = Math.random();
    if(random<1/3) move = 'rock'
    else if (random<2/3) move = 'paper' 
    else move = 'scissors';
    return move
}
function updateScore(result){
    result==='Draw' ? score.draws++ :
    (result==='You lose' ? score.losses++ : score.wins++)
}