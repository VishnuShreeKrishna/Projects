// fetch('https://restcountries.com/v3.1/all')
//     .then((res)=>res.json())
//     .then((data)=>{
//         data.forEach((country) => {
//             console.log(country);
            
//         });
//     });



const anchor = document.createElement(`a`);
// const countriesContainer = document.createElement(`div`);
// countriesContainer.classList.add(`countries-container`);
// const countryCard = document.createElement(`div`);
// countryCard.classList.add(`country-card`);
// const cardImage = document.createElement(`img`);
// anchor.append(countriesContainer);

const cardHTML = `
    <div class="countries-container">
        <div class="country-card">
            <img src="https://flagcdn.com/is.svg" alt="flag">
            <div class="card-text">
                <h3 class="card-title">Iceland</h3>
                <p><b>Population: </b>81,770,900</p>
                <p><b>Region: </b>Europe</p>
                <p><b>Capital: </b>Berlin</p>
            </div>
        </div>
    </div>
`
anchor.innerHTML = cardHTML;


    
