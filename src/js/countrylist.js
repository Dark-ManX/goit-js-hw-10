import { refs } from "../index";
import Notiflix from 'notiflix';

export const fetchResult = (name) => {
    if (name.length > 10) {
        refs.country.innerHTML = '';
        Notiflix.Notify.info("Too many matches found. Please enter a more specific name.");
            
    } else if (1 < name.length && name.length <= 10) {
        refs.country.innerHTML = '';
        createList(name);

    } else if (name.length = 1) { 
        createCard(name);
        
    }
}

const createList = (_name) => {
    return _name.map(({ flag, name }) => {
        refs.countryContainer.innerHTML = '';
        refs.country.insertAdjacentHTML('beforeend', `
    <li class="li-item">
        <img src="${flag}" width="30px" class="li-item__img"/>${name}
    </li>
        `);
    
    });
};

const createCard = (_name) => {
    return _name.map(({ flag, name, capital, population, languages }) => {
        refs.country.innerHTML = '';
        console.dir(_name)
        refs.countryContainer.innerHTML = (`
                        <img src="${flag}" width="100px"/>
                        <h1>${name}</h1>
                        <p>${capital}</p>
                        <p>${population}</p>
                        <p>${languages.map(lang => {
                            return lang.name })}</p>`);
    });
};

const errorResult = (error) => {
    refs.country.innerHTML = '';
    refs.countryContainer.innerHTML = '';
    Notiflix.Notify.failure('Oops, there is no country with that name');
}

export default {
    fetchResult,
    errorResult,
}
