const countryName = new URLSearchParams(location.search).get(`name`);
const flagImg = document.querySelector('.country-details img')
const countrynameh1 = document.querySelector('.country-details h1')
const nativeName = document.querySelector('.native-name')
const population = document.querySelector('.population')
const region = document.querySelector('.region')
const subRegion = document.querySelector('.subRegion')
const capital = document.querySelector('.capital')
const topLevelDomain = document.querySelector('.topLevelDomain')
const currencies = document.querySelector('.currencies')
const languages = document.querySelector('.languages')

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
.then((res)=> res.json())
.then((data)=>{
    console.log(typeof data.map((country) => country))
    flagImg.src = data[0].flags.svg
    countrynameh1.innerText = data[0].name.common
        if(data[0].name.nativeName){
           nativeName.innerHTML = Object.values(data[0].name.nativeName)[0].common
        }else{
            nativeName.innerHTML = data[0].name.common
        }
        population.innerHTML = new Intl.NumberFormat('en-IN').format(data[0].population)
        region.innerHTML = data[0].region
        subRegion.innerHTML = data[0].subregion
        capital.innerHTML = data[0].capital?.[0]
        topLevelDomain.innerHTML = data[0].tld.join(', ')
        if(data[0].currencies){
            currencies.innerHTML = Object.values(data[0].currencies).map((currency)=>currency.name).join(', ')
        }
        if(data[0].languages){
            languages.innerHTML = Object.values(data[0].languages).join(', ')
        }
    }
)




