// конфиг с ссылками для запросов

const BASE_URL = 'https:/restcountries.com/v2/';

// все страны
export const ALL_COUNTRIES =
    BASE_URL + 'all?fields=name,capital,flags,population,region';

// сортировка по странам
export const searchByCountry = (name: string) => BASE_URL + 'name/' + name;

// филтрация для получения карточки
export const filterByCode = (codes: string[]) =>
    BASE_URL + 'alpha?codes=' + codes.join(',');
