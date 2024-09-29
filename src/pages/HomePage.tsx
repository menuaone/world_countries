import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import Controls from '../components/Controls';
import List from '../components/List';
import Card from '../components/Card';
import { ALL_COUNTRIES } from '../config';
import { Country, CountryInfo } from '../types';

interface HomePageProps {
    countries: Country[];
    setCountries: Dispatch<SetStateAction<Country[]>>;
}

export type MySearch = (search?: string, region?: string) => void;

export const HomePage = ({ countries, setCountries }: HomePageProps) => {
    const [filteredCountries, setFilteredCountries] = useState(countries);
    const navigate = useNavigate();

    const handleSearch: MySearch = (search, region) => {
        let data = [...countries];

        if (region) {
            data = data.filter((c) => c.region.includes(region));
        }

        if (search) {
            data = data.filter((c) =>
                c.name.toLowerCase().includes(search.toLowerCase())
            );
        }
        setFilteredCountries(data);
    };

    useEffect(() => {
        if (!countries?.length)
            axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        handleSearch();
        // eslint-disable-next-line
    }, [countries]);

    return (
        <>
            <Controls onSearch={handleSearch} />
            <List>
                {filteredCountries.map((c) => {
                    const countryInfo: CountryInfo = {
                        img: c.flags.png,
                        name: c.name,
                        info: [
                            {
                                title: 'Population',
                                description: c.population.toLocaleString(),
                            },
                            {
                                title: 'Region',
                                description: c.region,
                            },
                            {
                                title: 'Capital',
                                description: c.capital,
                            },
                        ],
                    };

                    return (
                        <Card
                            {...countryInfo}
                            onClick={() => {
                                void navigate(`/country/${c.name}`);
                            }}
                        />
                    );
                })}
            </List>
        </>
    );
};