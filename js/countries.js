const loadCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadCountry();

const displayCountries = countries => {
    const countriesContainer = document.getElementById('countries-container');
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        // console.log(country);
        countryDiv.innerHTML = `
            <h3>Name: ${country.name.common}</h3>
            <p>Capital: ${country.capital ? country.capital[0] : 'No capital'}</p>
            <button onclick="loadCountryDetail('${country.cca2}')">Detail</button>
        `;
        countriesContainer.appendChild(countryDiv);
    })
}


const loadCountryDetail = (code) => {
    // console.log(`https://restcountries.com/v3.1/alpha/${code}`);
    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]))
}

const displayCountryDetail = country => {
    // console.log(country);
    const countryDetail = document.getElementById('country-detail');
    countryDetail.innerHTML = `
        <h3>Name: ${country.name.common}</h3>
        <img src="${country.flags.png}">
    `;
}