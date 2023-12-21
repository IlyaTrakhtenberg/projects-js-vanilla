import {updTime} from "./stopwatch.js";
export function scoreHTML(score){
    let HTML = '';
    score.forEach((val,ind) => {
        const line1 = 
        `<div class="result">${updTime(val.result)}</div>
        <button class="js-delete but">Delete</button>`;
        const line2 = val.comment ?
        `<div class="comment">${val.comment}</div>` : 
        `<input data-index="${ind}" class="input" placeholder="Add a comment">
        <button data-index="${ind}" class="js-done but">Done</button>`;
        HTML += line1 + line2
    });
    return HTML
}
export const clearHTML = '<button class="js-clear-button but clear">Clear</button>';