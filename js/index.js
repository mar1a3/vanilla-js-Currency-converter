const mainF = async () =>{
const axios_response = await axios.get('https://v6.exchangerate-api.com/v6/a90f76dc5d731b90f79a09ed/latest/USD')

    console.log(axios_response)
}


// axios
//     .get('https://v6.exchangerate-api.com/v6/a90f76dc5d731b90f79a09ed/latest/USD')
//     .then((response)=>{
//         console.log(response)
//     })

import variables from "/js/variables.js";
import state from "/js/state.js";

const {selects, success} = variables;

// const renderCodelist = () =>{
//     selects.forEach((select)=>{
//         state.codes.forEach(([code])=>{
//             const element = document.createElement('option');
//             element.value = code;
//             element.innerText =code;
//             select.insertAdjacentElement('beforeend', element)
//         })
//     })
// }


const getData = async() =>{
    const request = await fetch(`${state.url}/codes`)
    const response = await request.json()
    console.log(response)
    if(response.result == success){
        // state.codes = response.supported_codes
        selects.forEach((select)=>{
            response.supported_codes.forEach(([code])=>{
            const element = document.createElement('option');
            element.value = code;
            element.innerText =code;
            select.insertAdjacentElement('beforeend', element)
            })
            select.onchange = ()=>{
                console.log(select.value)
            }
        })
    }
}
getData()













//камень ножницы
// const tools = ['rock','paper','scissors']
// // const userAnswer = prompt('Rock,paper, or scissors?')

// const getRandomNumber = (min,max) =>{
//     return Math.floor(Math.random()* (max-min +1) +min)
// }
// const computerAnswer = getRandomNumber(5,8)
// console.log(computerAnswer)

//камень ножницы


// const conv_btn = document.querySelector('.btn')
// const prob = async () =>{
//     let response1 = await fetch('https://api.openbrewerydb.org/breweries');
//     let result1 = await response1.json()
// }
// prob()


// let rates = {
// }
// let usd_value = document.getElementById('cur-rate-dollar')
// let eur_value = document.getElementById('cur-rate-eur')
// let input_Amount = document.querySelector('.input-amount')
// // let from_select = document.getElementById('from')
// let to_select = document.getElementById('to')
// let find_diff = document.querySelector('.find-dif')



// const pr = async()=>{
//     const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js')
//     const data = await response.json()
//     rates.USD = data.Valute.USD;
//     rates.EUR = data.Valute.EUR;

//     usd_value.textContent = rates.USD.Value.toFixed(2)
//     eur_value.textContent = rates.EUR.Value.toFixed(2)

//     if(rates.USD.Value > rates.USD.Previous){
//         usd_value.style.color = 'red'
//     }else{
//         usd_value.style.color = 'green'
//     }

//     if(rates.EUR.Value >rates.EUR.Previous){
//         eur_value.style.color = 'red'
//     }else{
//         eur_value.style.color = 'green'
//     }


// }
// pr()

// // попробовать через addEvenet 'keyup' написать функцию 
// input_Amount.oninput = () =>{
//     find_diff.textContent =  parseFloat((input_Amount.value)/rates[to_select.value].Value).toFixed(2)
// console.log(rates[to_select.value].Value)
// }


// fetch('https://v6.exchangerate-api.com/v6/a90f76dc5d731b90f79a09ed/codes').then(function(result){
//     return(result.json())
// }).then(function(data){
//     console.log(data)
// })





