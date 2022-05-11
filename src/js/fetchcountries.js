import { refs } from "../index";
import Notiflix from 'notiflix';

export const fetchCountries = (name) => {
    return fetch(`https://restcountries.com/v2/name/${name}`)
        .then(response => response.json())
        .then(countries => {

            if (countries.length > 10) {
                return Notiflix.Notify.info("Too many matches found. Please enter a more specific name.");
            
            } else if (2 < countries.length && countries.length <= 10) {
                console.log(countries.map(country => {
                    return refs.country.insertAdjacentHTML('beforeend', `
                    <li class="li-item">
                        <img src="${country.flag}" width="30px" class="li-item__img"/>${country.name}
                    </li>
                     `);
                    
                }));

            } else {
                countries.map(country => {
                    return refs.countryContainer.innerHTML = (`
                        <img src="${country.flag}" width="100px"/>
                        <h1>${country.name}</h1>
                        <p>${country.capital}</p>
                        <p>${country.population}</p>
                        `);
                    
                });
            }
        })
        .catch(error => Notiflix.Notify.failure('Oops, there is no country with that name'));
}