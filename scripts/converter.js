import {fetchData} from './currencies_data.js';
import {displayedHTML,toChooseHTML} from './converter_renderHTML.js';
const grid = document.querySelector('.js-grid');
const select = document.querySelector('.js-select');
let defaultCurrencies = ['USD','EUR','GBP','BYN','PLN','UAH'];
fetchData()
    .then(data => updHTML(data))
    .catch(error => console.log(error));
function updHTML(data){
    let [displayed,toChoose] = [[],[]];
    Object.keys(data.rates).sort().forEach(currency => {
        let n = 0;
        defaultCurrencies.forEach(currencyDef => {
            currency===currencyDef && n++
        })
        const unit = {name:currency, rate: data.rates[currency]};
        n ? displayed.push(unit) : toChoose.push(unit);
    });
    displayed.sort((a,b)=>{
        const indexA = defaultCurrencies.indexOf(a.name);
        const indexB = defaultCurrencies.indexOf(b.name);
        return indexA - indexB
    });
    grid.innerHTML = displayedHTML(displayed);
    updateFields(1);
    document.querySelectorAll('.js-input')
    .forEach(input => {
        const rate = input.dataset.rate;
        input.addEventListener('input',() => {
            const input = event.target.value;
            const inputFiltered = input.replace(/[^0-9.]/g, '');
            updateFields(Number(inputFiltered)/rate);
            event.target.value = inputFiltered;
        })
    });
    document.querySelectorAll('.js-remove')
    .forEach(button => {
        const currencyName = button.dataset.currencyName;
        button.onclick = () => {
            defaultCurrencies = defaultCurrencies.filter(name => name!==currencyName);
            updHTML(data)
        }
    });
    select.innerHTML = toChooseHTML(toChoose);
    select.onchange = ()=> {
        defaultCurrencies.push(select.value);
        updHTML(data)
    }
}
function updateFields(quantity){
    document.querySelectorAll('.js-input')
    .forEach(input => {
        const rate = input.dataset.rate;
        quantity ? (input.value = parseFloat((quantity*rate).toFixed(2))) : (input.value = '');
    })
}