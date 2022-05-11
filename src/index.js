import './css/styles.css';
import { fetchCountries } from './js/fetchcountries';

const DEBOUNCE_DELAY = 300;

export const refs = {
    input: document.querySelector('#search-box'),
    country: document.querySelector('.country-list'),
    countryContainer: document.querySelector('.country-info'),
};

refs.input.addEventListener('input', (e => {
    const countryRef = e.target.value;

    fetchCountries(countryRef);
}));

