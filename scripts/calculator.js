let calculation = localStorage.getItem('calculation') || '';
let pad = document.querySelector('.js-pad');
const set = 
['1','2','3','+','4','5','6','-','7','8','9','*','(','0',')','/','.','C','Clear','='];
set.forEach((val,ind) => {
    pad.innerHTML += `<button class="js-but${ind}">${val}</button>`;
});
set.forEach((val,ind)=>{
    (ind+1)%4 && document.querySelector(`.js-but${ind}`).classList.add('grey');
    !((ind+1)%4) && document.querySelector(`.js-but${ind}`).classList.add('yellow');
    if (ind>16) return;
    document.querySelector(`.js-but${ind}`).onclick = () => calc(val);
    document.body
    .addEventListener('keydown',event => event.key===val && calc(val));   
});
document.querySelector(`.js-but19`).onclick = () => eq();
document.body
.addEventListener('keydown',event => (event.key==='Enter' || event.key==='=') && eq());
document.querySelector(`.js-but18`)
.classList.add('clear');
document.querySelector(`.js-but18`).onclick = () => del();
document.body
.addEventListener('keydown',event => (event.key==='Delete') && del());
document.querySelector(`.js-but17`).onclick = () => bck();
document.body
.addEventListener('keydown',event => (event.key==='Backspace') && bck());
input();
function calc(number){
    calculation += number; 
    input();
    localStorage.setItem('calculation', calculation);
};
function eq(){
    if (calculation){
        calculation = `${eval(calculation)}`; 
        input(); 
        localStorage.setItem('calculation', calculation);}
};
function del(){
    calculation='';
    localStorage.removeItem('calculation');
    input();
};
function bck(){
    calculation = calculation.slice(0,-1);
    input();
    localStorage.setItem('calculation', calculation);
};
function input(){
    document.querySelector('.js-input').innerHTML = calculation;
};