const key = 'ELqhzKyNHRnKlhix52pAkcvcXKj55DFy';
const params = '&base=USD&ISO4217';
const url = 'https://api.currencybeacon.com/v1/latest?api_key=';
export function fetchData(){
    return new Promise((resolve,reject)=>{
        fetch(url+key+params)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error));
    })
    
}

