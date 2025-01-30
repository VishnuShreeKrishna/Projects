const countriesContainer = document.querySelector('.countries-container');
fetch('https://restcountries.com/v3.1/all')
    .then((res)=>res.json())
    .then((data)=>{
        data.forEach((country) => {
            if(country.currencies){
                console.log(Object.keys(country.currencies));
            }
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
    });
//---------------------------------
// const countriesContainer = document.createElement(`div`);
// countriesContainer.classList.add(`countries-container`);
// const countryCard = document.createElement(`div`);
// countryCard.classList.add(`country-card`);
// const cardImage = document.createElement(`img`);
// anchor.append(countriesContainer);




    
