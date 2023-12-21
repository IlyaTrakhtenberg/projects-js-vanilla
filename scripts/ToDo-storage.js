export let lists = JSON.parse(localStorage.getItem('lists')) || [];
export function saveLists(){
    localStorage.setItem('lists', JSON.stringify(lists));
}
export function pickByName(name){
    let pickedList;
    lists.forEach(list => {
        list.name===name && (pickedList = list)
    });
    return pickedList;
}
export function deleteList(pickedList){
    lists.forEach((list,ind) => {
        if (list.name===pickedList.name){
            lists.splice(ind,1);
            saveLists();
            window.location.href = '/HTML/ToDoMain.html'
        } 
    })
}