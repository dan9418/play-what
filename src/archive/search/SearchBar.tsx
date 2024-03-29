import { navigate } from "gatsby";
import React, { useState } from "react";
import styled from "styled-components";

export const StyledSearchBar = styled.form`
  width: 100%;
  .search-bar {
    width: 100%;
    max-width: 512px;
    display: grid;
    grid-template-columns: 1fr auto;

    input,
    button {
      padding: 8px 8px;
      border-radius: 8px;
      border: 1px solid ${(props) => props.theme?.utils?.border};
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
      background-color: ${(props) => props.theme?.action?.interactive};
      &:hover {
        background-color: ${(props) => props.theme?.action?.active};
      }
      border-left: none;
      padding: 8px 16px;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

const SearchBar: React.FC<any> = ({
  searchRef,
  query: externalQuery,
  setQuery: externalSetQuery,
  placeholder,
}) => {
  const [_query, _setQuery] = useState("");
  const query = typeof externalQuery === "undefined" ? _query : externalQuery;
  const setQuery =
    typeof externalSetQuery === "undefined" ? _setQuery : externalSetQuery;

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const value = e.target.elements.query.value;
    const query = new URLSearchParams({ query: value });
    const qs = query ? `?${query.toString()}` : "";
    const path = `/search/${qs}`;
    navigate(path);
    return false;
  };

  return (
    <StyledSearchBar role="search" onSubmit={onSubmit}>
      <div className="search-bar">
        <input
          type="search"
          id="site-search"
          name="query"
          ref={searchRef}
          onChange={onChange}
          value={query as string}
          placeholder={placeholder || "Search the site..."}
        />
        <button type="submit">Search</button>
      </div>
    </StyledSearchBar>
  );
};

export default SearchBar;
