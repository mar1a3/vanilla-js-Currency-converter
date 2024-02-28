

const select_from = document.getElementById('from')
const select_to = document.getElementById('to')
const input_amount = document.querySelector('.input-amount')

axios
    .get('https://v6.exchangerate-api.com/v6/a90f76dc5d731b90f79a09ed/latest/RUB')
    .then((response)=>{
const get_data = response.data.conversion_rates
console.log(get_data)
console.log(response.data.time_last_update_utc)

for(let rate in get_data){
    
const element = document.createElement('option');
element.value = rate;
element.innerText = rate;
select_from.insertAdjacentElement('beforeend', element);
}

for(let rate in get_data){
    const element_to = document.createElement('option');
    element_to.value = rate;
    element_to.innerText = rate;
    select_to.insertAdjacentElement('beforeend', element_to);
    }
    input_amount.oninput = () =>{
        console.log(input_amount.value)
    }
})







