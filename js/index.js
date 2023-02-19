


// const pr = async()=>{
//     const response = await fetch('https://v6.exchangerate-api.com/v6/a90f76dc5d731b90f79a09ed/codes')
//     const data = await response.json()
//     console.log(data)
// }
// pr()

fetch('https://v6.exchangerate-api.com/v6/a90f76dc5d731b90f79a09ed/codes').then(function(result){
    return(result.json())
}).then(function(data){
    console.log(data)
})








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