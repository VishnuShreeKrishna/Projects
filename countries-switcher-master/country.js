const countryName = new URLSearchParams(location.search).get(`name`);
const flagImg = document.querySelector('.country-details img')
const countrynameh1 = document.querySelector('.country-details h1')

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
.then((res)=> res.json())
.then((data)=>{
    console.log(data[0])
    flagImg.src = data[0].flags.svg
    countrynameh1.innerText = data[0].name.common
})




