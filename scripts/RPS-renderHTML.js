export function movesAreaHTML(moves){
    let HTML = '';
    moves.forEach(val => {
        HTML += `
        <div class="col-4 p-3 move-cont"><button class="js-${val} move">
            <img src="../images/${val}-emoji.png" class="emoji">
        </button></div>
        `
    });
    return HTML
}
export function updateScoreHTML(score){
     return `Wins: ${score.wins}, Losses: ${score.losses}, Draws: ${score.draws}`
}
export function comment(me, comp){
    return `<div class="col-4 align-self-center text-end">You</div>
    <div class="col-2"><img src="../images/${me}-emoji.png" class="emoji""></div> 
    <div class="col-2"><img src="../images/${comp}-emoji.png" class="emoji"></div>
    <div class="col-4 align-self-center text-start">Computer</div>`
}
export const resetConfirmHTML =
    `<div class="col-sm-12 col-md-8 align-self-center">Are you sure you want to reset the score?</div>
    <div class="col align-self-center"><button class="js-yes resp">Yes</button></div>
    <div class="col align-self-center"><button class="js-no resp">No</button></div>`;
