import { Region } from './regions';

type Currency = {
    code: string;
    name: string;
    symbol: string;
};

type Language = {
    is639_1: string;
    is639_2: string;
    name: string;
    nativeName: string;
};

export type Country = {
    name: string;
    nativeName: string;
    flag: string;
    flags: { png: string; svg: string };
    region: Region;
    subregion: string;
    capital: string;
    population: number;
    tld: string[];
    borders: string[];
    currencies: Currency[];
    languages: Language[];
};

type Info = {
    title: string;
    description: string;
};

export type CountryInfo = {
    img: string;
    name: string;
    info: Info[];
};

// export type Country = {
//     name: {
//       common: string;
//       official: string;
//     };
//     tld: string[];
//     cca2: string;
//     ccn3: string;
//     cca3: string;
//     cioc: string;
//     independent: boolean;
//     status: string;
//     unMember: boolean;
//     currencies: Record<
//       string,
//       {
//         name: string;
//         symbol: string;
//       }
//     > | null;
//     idd: {
//       root: string;
//       suffixes: string[];
//     };
//     capital: string[];
//     altSpellings: string[];
//     region: string;
//     subregion: string;
//     languages: Record<string, string> | null;
//     latlng: [number, number];
//     landlocked: boolean;
//     borders?: string[];
//     area: number;
//     flag: string;
//     maps: {
//       googleMaps: string;
//       openStreetMaps: string;
//     };
//     population: number;
//     timezones: string[];
//     continents: string[];
//     flags: {
//       png: string;
//       svg: string;
//       alt: string;
//     };
//     startOfWeek: string;
//     capitalInfo: {
//       latlng: [number, number];
//     } | null;
//     postalCode: {
//       format: string;
//       regex: string;
//     };
//   };
