let list = JSON.parse(localStorage.getItem('list')) || [];
updList(list);
document.querySelector('.js-add')
.addEventListener('click', ()=>add());
document.querySelector('.js-todo')
.addEventListener('keydown', event => event.key === 'Enter' && add());
document.querySelector('.js-date')
.addEventListener('keydown', event => event.key === 'Enter' && add());
function add(){
    if (document.querySelector('.js-date').value && document.querySelector('.js-todo').value){
        document.querySelector('.js-error').innerHTML = '';
        const todo = {
            name: document.querySelector('.js-todo').value,
            date: document.querySelector('.js-date').value,
            status: 0
        };
        list.push(todo);
        updList(list);
        document.querySelector('.js-todo').value = '';}
    else{ 
        document.querySelector('.js-error').innerHTML = '';
        document.querySelector('.js-error').innerHTML += 'choose the activity and the date'};
};
function updList(array){
    document.querySelector('.js-list').innerHTML = '';
    array.forEach((val, ind) => {
        document.querySelector('.js-list').innerHTML += `<div class="name">${val.name}</div>
        ${val.date}
        <button class="js-remove${ind} remove">Remove</button>
        <div class="js-checkCell${ind} checkCell"></div>`;
    })
    array.forEach((val, ind) => {
        document.querySelector(`.js-remove${ind}`)
        .addEventListener('click',() => {
            list.splice(ind,1);
            updList(list)
        });
        if (val.status){
            document.querySelector(`.js-checkCell${ind}`)
            .innerHTML = '<img src="images/mark.png" class="icon">';
            document.querySelector(`.js-checkCell${ind}`)
        } 
        else {
            document.querySelector(`.js-checkCell${ind}`)
            .innerHTML = `<button class="js-done${ind} done"></button>`;
            document.querySelector(`.js-done${ind}`)
            .addEventListener('click',() => {
                val.status = 1;
                updList(list)
            })
        }
    });
    localStorage.setItem('list', JSON.stringify(list));
}