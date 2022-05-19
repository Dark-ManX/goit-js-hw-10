import './css/styles.css';
import { fetchCountries } from './js/fetchcountries';
import obj from './js/countrylist';
import debounce from 'lodash.debounce';
// import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

export const refs = {
    input: document.querySelector('#search-box'),
    country: document.querySelector('.country-list'),
    countryContainer: document.querySelector('.country-info'),
};

refs.input.addEventListener('input', debounce(e => {
    const countryRef = e.target.value.trim();

    fetchCountries(countryRef).then(country => obj.fetchResult(country)).catch(error => obj.errorResult(error));
}, DEBOUNCE_DELAY)
);

