import styled from 'styled-components';
import { IoSearch } from 'react-icons/io5';

const InputContainer = styled.label`
    background-color: var(--colors-ui-base);
    padding: 1rem 2rem;
    display: flex;
    align-items: center;

    boeder: var(--border-line);
    border-radius: var(--radii);
    box-shadow: var(--shadow);
    width: 100%;
    margin-bottom: 1rem;

    @media (min-width: 767px) {
        margin-bottom: 0;
        width: 280px;
    }
`;

const Input = styled.input.attrs({
    type: 'search',
    placeholder: 'Search for a country...',
    name: 'search_input',
})`
    margin-left: 2rem;
    border: none;
    outline: none;
    color: var(--color-text);
    background-color: var(--colors-ui-base);
`;

interface SearchProps {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}

type MyInputSearch = React.ChangeEventHandler<HTMLInputElement>;

const Search = ({ search, setSearch }: SearchProps) => {
    const handleInputSearch: MyInputSearch = (e) => setSearch(e.target.value);

    return (
        <InputContainer>
            <IoSearch />
            <Input
                onChange={handleInputSearch}
                value={search}
            />
        </InputContainer>
    );
};

export default Search;
