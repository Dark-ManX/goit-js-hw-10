import { refs } from "../index";
import Notiflix from 'notiflix';

const createList = (name) => {
    return name.map(country => {
        refs.countryContainer.innerHTML = '';
        refs.country.insertAdjacentHTML('beforeend', `
    <li class="li-item">
        <img src="${country.flag}" width="30px" class="li-item__img"/>${country.name}
    </li>
        `);
    
    });
};

const createCard = (name) => {
    return name.map(country => {
        refs.country.innerHTML = '';
        refs.countryContainer.innerHTML = (`
                        <img src="${country.flag}" width="100px"/>
                        <h1>${country.name}</h1>
                        <p>${country.capital}</p>
                        <p>${country.population}</p>
                        `);
    });
};


export default {
    createList,
    createCard,
}