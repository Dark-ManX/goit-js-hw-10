import { refs } from "../index";
import Notiflix from 'notiflix';
import obj from "../js/countrylist";

export const fetchCountries = (name) => {
    return fetch(`https://restcountries.com/v2/name/${name}`)
        .then(response => response.json())
        .then(countries => {

            if (countries.length > 10) {
                return Notiflix.Notify.info("Too many matches found. Please enter a more specific name.");
            
            } else if (2 < countries.length && countries.length <= 10) {
                obj.createList(countries);

            } else if (countries.length = 1) {
                obj.createCard(countries);

            } 
        })
        .catch(error => {
            refs.country.innerHTML = '';
            refs.countryContainer.innerHTML = '';
            return Notiflix.Notify.failure('Oops, there is no country with that name');
        });
}
