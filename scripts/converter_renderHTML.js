export function displayedHTML(list){
    let listHTML = '';
    list.forEach(currency => {
        listHTML += `
        <div class="name">${currency.name}</div>
        <div class="input-container"><input class="js-input input" data-rate="${currency.rate}"></div>
        `
        currency.name==='USD' ? (listHTML+='<div class="column3-container">Base</div>') :
        (listHTML+=`<div class="column3-container">
            <button class="js-remove remove" data-currency-name="${currency.name}">Remove</button>
        </div>`)
    })
    return listHTML;
}
export function toChooseHTML(list){
    let listHTML = '<option>Add more currencies</option>';
    list.forEach(currency => {
        listHTML += `
        <option value="${currency.name}" class="js-option">${currency.name}</option>
        `
    })
    return listHTML;
}