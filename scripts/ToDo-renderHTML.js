export function listHTML(list){
    let listHTML = '';
    list.forEach(todo => {
        listHTML += `<div class="name">${todo.name}</div>
        ${todo.date}
        <button class="js-remove button red">Remove</button>
        <div class="js-checkCell checkCell" data-status="${todo.status}"></div>`;
    });
    return listHTML
}
export function checkStatus(status){
    return status ? 
    '<button class="complete"><img src="/images/mark.png" class="icon"></button>' :
    '<button class="complete"></button>'
}
export function listsHTML(lists){
    let listsHTML = '<option>Choose your list</option>';
    lists.forEach(list => {
        listsHTML += `<option value="${list.name}">${list.name}</option>`
    });
    return !lists.length ? 
    `<div class="grid2"><div class="main-nolists">You have no lists yet</div>
    <button class="js-create button green">Create new</button></div>` :
    `<div class="grid2"><select class="main-select">${listsHTML}</select>
    <button class="js-create button green">Create new</button></div>`
}
export const createHTML =
`<div class="grid2"><input placeholder="Name your list" class="inp">
<button class="js-done  button blue">Done</button></div>`;