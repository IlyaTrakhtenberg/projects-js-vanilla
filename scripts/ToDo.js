import {nonspaces} from "./utils/common-functions.js";
import {pickByName,deleteList,saveLists} from "./ToDo-storage.js";
import {listHTML,checkStatus} from "./ToDo-renderHTML.js";
const pickedList = pickByName(localStorage.getItem('pickedName'));
pickedList || (window.location.href = '/HTML/ToDoMain.html');
const elements = {};
const properties = ['title','delete','todo','date','add','error','grid'];
properties.forEach(val => elements[val]=document.querySelector(`.js-${val}`));
elements.title.innerHTML = pickedList.name;
elements.delete.onclick = () => deleteList(pickedList);
elements.add.onclick = () => add();
elements.todo.addEventListener('keydown', event => event.key === 'Enter' && add());
elements.date.addEventListener('keydown', event => event.key === 'Enter' && add());
updList();
function updList(){
    elements.grid.innerHTML = listHTML(pickedList.list);
    document.querySelectorAll('.js-remove').forEach((button,ind) => {
        button.onclick =() => remove(ind);
    });
    document.querySelectorAll('.js-checkCell').forEach((cell,ind) => {
        const status = JSON.parse(cell.dataset.status);
        cell.innerHTML = checkStatus(status);
        cell.querySelector('button').onclick = () => changeStatus(status,ind);
    });
}
function add(){
    if (elements.date.value && nonspaces(elements.todo.value)){
        elements.error.innerHTML = '<br>';
        const todo = {
            name: elements.todo.value,
            date: elements.date.value,
            status: false
        };
        pickedList.list.push(todo);
        elements.todo.value = '';
        updData()
    }
    else elements.error.innerHTML = 'Choose the activity and the date';
}
function remove(ind){
    pickedList.list.splice(ind,1);
    updData()
}
function changeStatus(status,ind){
    pickedList.list[ind].status = !status;
    updData()
}
function updData(){
    saveLists();
    updList()
}