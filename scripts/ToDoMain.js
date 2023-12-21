import {lists,pickByName,saveLists} from "./ToDo-storage.js";
import {listsHTML, createHTML} from "./ToDo-renderHTML.js";
import {nonspaces} from "./utils/common-functions.js";
const listsContainer = document.querySelector('.js-listsContainer');
updateSelector();
function updateSelector(){
    listsContainer.innerHTML = listsHTML(lists);
    const create = document.querySelector('.js-create');
    const select = document.querySelector('select');
    create.onclick = () => {
        listsContainer.innerHTML = createHTML;
        document.querySelector('.js-done').onclick = () => {
            const input = document.querySelector('input');
            nonspaces(input.value) && 
            (lists.push({name: unique(input.value), list: []}) + 
            saveLists() + openList(lists[lists.length-1].name))
        }
    };
    select && (select.onchange = ()=> openList(select.value));   
}
function openList(name){
    localStorage.setItem('pickedName',name);
    document.querySelector('select') &&
    (document.querySelector('select').options[0].selected = true);
    window.location.href = '/HTML/ToDo.html';
}
function unique(name){
    let uniqName = name;
    lists.forEach(list => {
        list.name===name && (uniqName=unique(name+'!'));
    })
    return uniqName
}
