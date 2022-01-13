import React from "react";
import styled from 'styled-components';

const StyledSearchBar = styled.form`
    width: 100%;
    .search-bar {
        width: 100%;
        max-width: 512px;
        display: grid;
        grid-template-columns: 1fr auto;
        margin: 32px auto;

        input, button {
            padding: 8px 8px;
            border-radius: 8px;
            border: 1px solid ${props => props.theme.utils.border};
        }

        input {
            border-radius: 8px 0 0 8px;
            border-right: none;
        }

        button {
            border-radius: 0 8px 8px 0;
            cursor: pointer;
            color: white;
            font-weight: bold;
            background-color: ${props => props.theme.action.interactive};
            border-left: none;
            padding: 8px 16px;

            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`;

const SearchBar: React.FC<any> = ({ searchRef, onSubmit, query, setQuery }) => {

    const onChange = e => {
        console.log('dpb', e.target.value);
        setQuery(e.target.value);
    }

    return (
        <StyledSearchBar role="search">
            <div className="search-bar">
                <input
                    type="search"
                    id="site-search"
                    name="query"
                    ref={searchRef}
                    onChange={onChange}
                    value={query as string}
                    placeholder="Search the site..."
                />
                <button type="submit" onSubmit={onSubmit}>Search</button>
            </div>
        </StyledSearchBar>
    );
};

export default SearchBar;
