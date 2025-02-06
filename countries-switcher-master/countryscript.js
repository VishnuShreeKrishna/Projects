const countriesContainer = document.querySelector('.countries-container');
const filterbyregion = document.querySelector('.filter-by-region')
const searchinput = document.querySelector(`.search-container input`)
let allcountriesdata;

fetch('https://restcountries.com/v3.1/all')
    .then((res)=>res.json())
    .then((data)=>{
        renderCountry(data)
        allcountriesdata = data
    })
//=========================================================================
filterbyregion.addEventListener('change',(event)=>{
    // console.log(event.target.value);
    console.log(filterbyregion.value);
    fetch(`https://restcountries.com/v3.1/region/${filterbyregion.value}`)
    .then((res)=>res.json())
    .then(renderCountry);
})
//==========================================================================
function renderCountry(data){
        countriesContainer.innerHTML = ''
        data.forEach((country) => {
            // console.log(`${country.name.common}, => ${country.capital} `);
            // console.log(country.borders);
            const Countrycardanchor = document.createElement(`a`);
            Countrycardanchor.href = `/countries-switcher-master/country.html?name=${country.name.common}`
            const population = new Intl.NumberFormat('en-IN').format(`${country.population}`);
            Countrycardanchor.innerHTML = `
                <div class="country-card">
                    <img src="${country.flags.svg}" alt="${country.name.common} flag">
                    <div class="card-text">
                        <h3 class="card-title">${country.name.common}</h3>
                        <p><b>Population: </b>${population}</p>
                        <p><b>Region: </b>${country.region}</p>
                        <p><b>Capital: </b>${country.capital?.[0]}</p>
                    </div>
                </div>
            `
            countriesContainer.append(Countrycardanchor);
        });
}
//==========================================================================

searchinput.addEventListener(`input`, (eve)=>{
    // console.log(eve.target.value);
    // console.log(allcountriesdata);
    allcountriesdata.filter((country)=>{
        const filter = country.name.common.toLowerCase().includes(eve.target.value.toLowerCase())
        
    })
    
})

















//---------------------------------
// const countriesContainer = document.createElement(`div`);
// countriesContainer.classList.add(`countries-container`);
// const countryCard = document.createElement(`div`);
// countryCard.classList.add(`country-card`);
// const cardImage = document.createElement(`img`);
// anchor.append(countriesContainer);




    
