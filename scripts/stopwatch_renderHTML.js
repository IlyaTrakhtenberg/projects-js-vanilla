import {updTime} from "./stopwatch.js";
export function scoreHTML(score){
    let HTML = '';
    score.forEach((val,ind) => {
        const line1 = 
        `<div class="col-6 p-0 no-b"><div class="elem">${updTime(val.result)}</div></div>
        <div class="col-6 p-0"><button class="js-delete elem">Delete</button></div>`;
        const line2 = val.comment ?
        `<div class="col-12 p-0 no-b"><div class="elem mb-1">${val.comment}</div></div>` : 
        `<div class="col-6 p-0"><input data-index="${ind}" class="elem px-3" placeholder="Add a comment"></div>
        <div class="col-6 p-0"><button data-index="${ind}" class="js-done elem">Done</button></div>`;
        HTML += line1 + line2
    });
    return HTML
}
export const clearHTML = '<div class="col-12 p-0"><button class="js-clear-button elem">Clear</button></div>';