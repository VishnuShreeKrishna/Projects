const countryName = new URLSearchParams(location.search).get(`name`);
const flagImg = document.querySelector('.country-details img')
const countrynameh1 = document.querySelector('.country-details h1')
const nativeName = document.querySelector('.native-name')

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
.then((res)=> res.json())
.then((data)=>{
    console.log(data[0])
    flagImg.src = data[0].flags.svg
    countrynameh1.innerText = data[0].name.common
    if(data[0].name.nativeName){
        nativeName.innerHTML = Object.values(data[0].name.nativeName)[0].common
        // console.log();
        
    }
})




