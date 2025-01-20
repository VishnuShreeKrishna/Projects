// fetch('https://restcountries.com/v3.1/all')
//     .then((res)=>res.json())
//     .then((data)=>{
//         data.foreach((country)=>{
//             console.log(country);
            
//         })
//     })
fetch(`https://restcountries.com/v3.1/all`)
    .then((res)=>res.json())
    .then(console.log);
    
