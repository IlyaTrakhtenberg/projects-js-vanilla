export function movesAreaHTML(moves){
    let HTML = '';
    moves.forEach(val => {
        HTML += `
        <button class="js-${val} move">
            <img src="../images/${val}-emoji.png" class="emoji">
        </button>
        `
    });
    return HTML
}
export function updateScoreHTML(score){
     return `Wins: ${score.wins}, Losses: ${score.losses}, Draws: ${score.draws}`
}
export function comment(me, comp){
    return `You <img src="../images/${me}-emoji.png" class="emoji""> 
    <img src="../images/${comp}-emoji.png" class="emoji"> Computer`
}
export const resetConfirmHTML =
    `Are you sure you want to reset the score?
    <button class="js-yes resp">Yes</button>
    <button class="js-no resp">No</button>`;
