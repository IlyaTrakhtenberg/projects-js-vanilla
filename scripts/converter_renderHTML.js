export function displayedHTML(list){
    let listHTML = '';
    list.forEach(currency => {
        listHTML += `
        <div class="col-2 text-center">${currency.name}</div>
        <div class="col-5 col-md-6 col-lg-8 p-0 border border-black">
        <input class="js-input input" data-rate="${currency.rate}"></div>
        `
        currency.name==='USD' ? (listHTML+='<div class="col-5 col-md-4 col-lg-2 p-0 text-center border border-black">Base</div>') :
        (listHTML+=`<div class="col-5 col-md-4 col-lg-2 p-0 border border-black">
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