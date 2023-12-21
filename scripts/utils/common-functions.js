export function nonspaces(str){
    let n = 0;
    for (let i=0;i<str.length;i++) str[i]!==' ' && n++;
    return n;
}