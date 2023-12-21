import {scoreHTML,clearHTML} from "./stopwatch_renderHTML.js";
import {nonspaces} from "./utils/common-functions.js";
const elements = {};
['scoreboard','start','reset','score','clear']
.forEach(val => elements[val]=document.querySelector(`.js-${val}`));
let time = [0,0,0];
let score = getScore();
let timerID;
updScore();
elements.scoreboard.innerHTML = updTime(time);
elements.start.onclick = ()=>timer();
elements.reset.onclick = ()=>{
    clearInterval(timerID);
    time = [0,0,0];
    elements.scoreboard.innerHTML = updTime(time);
    elements.start.innerHTML = 'Start';
};
function getScore(){
    return JSON.parse(localStorage.getItem('savedScore')) || [];
}
function timer(){
    if (elements.start.innerHTML==='Start'){
        timerID = setInterval(()=>{
            time[0]++;
            elements.scoreboard.innerHTML = updTime(time);
        },10);
        elements.start.innerHTML = 'Stop';
    }
    else {
        clearInterval(timerID);
        elements.start.innerHTML = 'Start';
        score.push({result: time.slice(), comment: ''});
        localStorage.setItem('savedScore',JSON.stringify(score));
        updScore();
    }
}
export function updTime(t){
    if (t[0]===100){
        t[1]++;
        t[0]=0;
    }
    if (t[1]===60){
        t[2]++;
        t[1]=0;
    }
    return `${ord(t[2])}:${ord(t[1])}:${ord(t[0])}`;
}
function ord(n){
    return n < 10 ? `0${n}` : `${n}`;
}
function updScore(){
    score = getScore();
    elements.clear.innerHTML = '';
    elements.score.innerHTML = scoreHTML(score);
    score.length && (elements.clear.innerHTML = clearHTML);
    document.querySelectorAll('.js-delete')
    .forEach((button,ind) => {
        button.onclick = ()=>{
            score.splice(ind,1);
            localStorage.setItem('savedScore',JSON.stringify(score));
            updScore()
        }
    });
    document.querySelectorAll('.js-done')
    .forEach(button => {
        button.onclick = () => {
            document.querySelectorAll('input')
            .forEach(input => {
                (button.dataset.index===input.dataset.index && nonspaces(input.value)) &&
                ((score[input.dataset.index].comment = input.value) +
                localStorage.setItem('savedScore',JSON.stringify(score)) +
                updScore())
            })
        }
    });
    document.querySelector('.js-clear-button') &&
    (document.querySelector('.js-clear-button').onclick = ()=>{
        localStorage.removeItem('savedScore');
        updScore();
    }); 
}
