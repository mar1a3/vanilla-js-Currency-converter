
let rates = {
}
let usd_value = document.getElementById('cur-rate-dollar')
let eur_value = document.getElementById('cur-rate-eur')
let input_Amount = document.querySelector('.input-amount')
// let from_select = document.getElementById('from')
let to_select = document.getElementById('to')



const pr = async()=>{
    const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js')
    const data = await response.json()
    rates.USD = data.Valute.USD;
    rates.EUR = data.Valute.EUR;

    usd_value.textContent = rates.USD.Value.toFixed(2)
    eur_value.textContent = rates.EUR.Value.toFixed(2)

    if(rates.USD.Value > rates.USD.Previous){
        usd_value.style.color = 'red'
    }else{
        usd_value.style.color = 'green'
    }

    if(rates.EUR.Value >rates.EUR.Previous){
        eur_value.style.color = 'red'
    }else{
        eur_value.style.color = 'green'
    }


}
pr()

input_Amount.oninput = () =>{
    console.log('!')
}





// fetch('https://v6.exchangerate-api.com/v6/a90f76dc5d731b90f79a09ed/codes').then(function(result){
//     return(result.json())
// }).then(function(data){
//     console.log(data)
// })










// import variables from "/js/variables.js";
// import state from "/js/state.js";

// const {success, selects} = variables;

// const renderCodelist = () =>{
//     selects.forEach((select)=>{
//         state.codes.forEach(([code])=>{
//             const element = document.createElement('option')
//             element.value =code;
//             element.innerText = code;
//             select.insertAdjacentElement('beforeend', element);
//         })
//     })

// }

// const fetchCodes = async ()  =>{
//     try{
//     const response = await fetch(`${state.url}/codes`)
//     const data = await response.json()
//     if(data.result == success){
//         state.codes = data.supported_codes
//         renderCodelist()
//     }
//     console.log(response)
//     }catch(err){
//         console.log(err)
//     }
// }
// fetchCodes();