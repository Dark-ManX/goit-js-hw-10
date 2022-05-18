import './css/styles.css';
import { fetchCountries } from './js/fetchcountries';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

export const refs = {
    input: document.querySelector('#search-box'),
    country: document.querySelector('.country-list'),
    countryContainer: document.querySelector('.country-info'),
};

refs.input.addEventListener('input', debounce(e => {
    const countryRef = e.target.value.trim();
    
    fetchCountries(countryRef);
}, DEBOUNCE_DELAY)
);

