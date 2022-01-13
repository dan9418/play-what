import { Link } from "gatsby";
import React, { useRef, useState } from "react";
import styled from 'styled-components';
import { ModelId } from "../../core/models/Model.constants";
import { ALL_PRESETS } from "../../core/models/Model.presets";
import { StyledPageBody } from "../_shared/layout/PageBody";
import Card, { StyledCard } from "../_shared/ui/Card";

interface IResult {
    text: string;
    to: string;
}

const getLink = (modelType: ModelId, id: string): string => {
    return `/browse/${modelType}/${id}`;
}

const ALL_RESULTS: IResult[] = ALL_PRESETS.map(p => ({
    text: p.name,
    to: getLink(p.modelId, p.id)
}));

const StyledSearchPage = styled(StyledPageBody)`
	display: flex;
	flex-direction: column;
	align-items: center;
	//justify-content: center;

    ${StyledCard} {
        max-width: 768px;
    }

    form {
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
    }

    ul {
        font-size: 140%;
        li a {
            padding: 8px 0;
            display: block;
        }
    }
`;

const SearchPage: React.FC<any> = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState(ALL_RESULTS);
    const searchRef = useRef();

    const onChange = e => {
        console.log('dpb', e.target.value);
        setQuery(e.target.value);
        setResults(ALL_RESULTS.filter(r => {
            return r.text.match(new RegExp(e.target.value, 'gi'));
        }));
    }

    return (
        <StyledSearchPage>
            <form role="search">
                <div className="search-bar">
                    <input type="search" id="site-search" name="query" ref={searchRef} onChange={onChange}
                        placeholder="Search the site..."
                    />
                    <button>Search</button>
                </div>
            </form>
            <Card title="Results">
                <ul>
                    {results.map(r => <li key={r.to}>
                        <Link to={r.to}>{r.text}</Link>
                    </li>)}
                </ul>
            </Card>
        </StyledSearchPage>
    );
};

export default SearchPage;
