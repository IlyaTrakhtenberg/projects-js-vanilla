export function fieldRender(cells){
    let field = '';
    cells.forEach((val,ind)=>{
        val ? (field += `<div class="col-4 cell d-flex justify-content-center align-items-center">${val}</div>`) : 
        (field += `<div class="col-4 cell js-cell">
        <button class="js-but empty" data-number="${ind}"></button></div>`)
    });
    return field
}
export function winner(res){
    return res==='Draw' ? 'Draw' : `${res} wins`
}
export function drawLine(a,canv,p1,p2){
    canv.beginPath();
    canv.moveTo((a/3)*(p1%3)+a/6,(a/3)*Math.floor(p1/3)+a/6);
    canv.lineTo((a/3)*(p2%3)+a/6,(a/3)*Math.floor(p2/3)+a/6);
    canv.strokeStyle = 'red';
    canv.lineWidth = a/100;
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
export const buttonNew = '<button class="js-new new px-3">New game</button>';