const url = 'https://api.currencybeacon.com/v1/latest?api_key=ELqhzKyNHRnKlhix52pAkcvcXKj55DFy&base=USD&ISO4217';
let responseData;
let list;
function fetchData(url){
    return new Promise((resolve,reject)=>{
        fetch(url)
            .then(response => response.json())
            .then(data => {
                responseData = data;
                resolve(data)
            })
            .catch(error => reject(error));
    })
    
}
function getData(data){
    return Object.entries(data.rates).map(([name,rate])=>({name,rate}))
}
fetchData(url)
 .then(data => console.log(getData(data)))
 .catch(error => console.error(error))
