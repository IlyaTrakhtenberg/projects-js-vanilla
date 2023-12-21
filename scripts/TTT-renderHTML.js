export function fieldRender(cells){
    let field = '';
    cells.forEach((val,ind)=>{
        val ? (field += `<div class="cell">${val}</div>`) : 
        (field += `<div class="js-cell cell">
        <button class="js-but empty" data-number="${ind}"></button></div>`)
    });
    return field
}
export function winner(res){
    return res==='Draw' ? 'Draw' : `${res} wins`
}
export function drawLine(canv,p1,p2){
    canv.beginPath();
    canv.moveTo((50*(p1%3)+25),(50*Math.floor(p1/3)+25));
    canv.lineTo((50*(p2%3)+25),(50*Math.floor(p2/3)+25));
    canv.strokeStyle = 'red';
    canv.lineWidth = 3;
    canv.stroke();
}
export function canvColor(canvCSS,res){
    switch(res){
        case 'Draw': canvCSS.style.backgroundColor = 'rgb(255, 255, 150)';
        break;
        case 'X': canvCSS.style.backgroundColor = 'rgb(255, 200, 160)';
        break;
        case 'O': canvCSS.style.backgroundColor = 'rgb(150, 200, 255)';
        break;
        default: canvCSS.style.backgroundColor = 'white';
    }
}
export const buttonNew = '<button class="js-new new">New game</button>';