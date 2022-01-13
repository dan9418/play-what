import { Link, navigate } from "gatsby";
import React, { useEffect, useRef, useState } from "react";
import styled from 'styled-components';
import { useQueryParam } from "use-query-params";
import { ModelId } from "../../core/models/Model.constants";
import { ALL_PRESETS, NOTE_PRESETS } from "../../core/models/Model.presets";
import { StyledPageBody } from "../_shared/layout/PageBody";
import Card, { StyledCard } from "../_shared/ui/Card";

interface IResult {
    text: string;
    to: string;
}

const getName = (modelType: ModelId, name: string, root?: string): string => {
    switch (modelType) {
        case ModelId.Chord:
            return `${root ? root : ''} ${name} Chord`
        case ModelId.Scale:
            return `${root ? root : ''} ${name} Scale`
        default:
            return `${root ? root : ''} ${name}`;
    }
}

const getLink = (modelType: ModelId, id: string, root?: string): string => {
    return `/browse/${modelType}/${id}${root ? `/root/${root}` : ''}`;
}

const ALL_RESULTS: IResult[] = [];
ALL_PRESETS.forEach(p => {
    ALL_RESULTS.push({
        text: getName(p.modelId, p.name),
        to: getLink(p.modelId, p.id)
    });
    NOTE_PRESETS.forEach(n => {
        ALL_RESULTS.push({
            text: getName(p.modelId, p.name, n.name),
            to: getLink(p.modelId, p.id, n.id)
        });
    })
});

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

            &:focus, &:hover {
                padding: 8px;
                background-color: ${props => props.theme.action.interactive};
                color: white;
                border-radius: 8px;
            }
        }
    }
`;

const SearchPage: React.FC<any> = () => {

    const [qp] = useQueryParam('query');

    const [query, setQuery] = useState(qp || '');
    const searchRef = useRef();
    const resultsRef = useRef();

    useEffect(() => {
        const ref = qp ? resultsRef : searchRef;
        ref.current && ref.current.focus();
    }, []);

    const onChange = e => {
        console.log('dpb', e.target.value);
        setQuery(e.target.value);
    }

    const onSubmit = e => {
        if (e.preventDefault) e.preventDefault();
        navigate(`/search?query=${e.target.value}`);
        return false;
    }

    const filteredResults = ALL_RESULTS.filter(r => {
        return r.text.match(new RegExp(query as string, 'gi'));
    });

    return (
        <StyledSearchPage>
            <form role="search">
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
            </form>
            <Card title="Results">
                <ul>
                    {filteredResults.map((r, i) => <li key={r.to}>
                        <Link to={r.to}
                            ref={i === 0 ? resultsRef : undefined}
                        >{r.text}</Link>
                    </li>)}
                </ul>
            </Card>
        </StyledSearchPage>
    );
};

export default SearchPage;
