import React from "react";
import styled from 'styled-components';
import THEME from "../../../styles/theme";

const StyledSearchTable = styled.table`
    width: 100%;
    max-width: 1024px;
    margin: auto;
    border-collapse: collapse;

    thead {
        tr th {
            text-align: left;
            background-color: ${THEME.surface.nav};
            padding: 8px;
            color: white;
        }
    }

    tbody {
        tr {
            &:hover {
                background-color: rgba(0,0,0,0.1);
            }
        }
    }

    a {
        display: block;
        padding: 8px;
    }
`;

export interface ISearchTableProps {
    rows: any[];
    headers: string[];
    getCols: (row: any) => any[];
    selectedTags: string[];
}

const SearchTable: React.FC<ISearchTableProps> = ({ rows, headers, getCols, selectedTags }) => {
    return (
        <StyledSearchTable>
            <thead>
                <tr>
                    {headers.map((h, i) => <th key={i}>{h}</th>)}
                </tr>
            </thead>
            <tbody>
                {
                    rows.filter(r => {
                        if (!selectedTags.length) return true;
                        for (let i = 0; i < selectedTags.length; i++) {
                            if (!r.tags.includes(selectedTags[i])) {
                                return false;
                            }
                        }
                        return true;
                    }).map(row => (
                        <tr>
                            {getCols(row).map((c, i) => <td key={i}>{c}</td>)}
                        </tr>
                    ))
                }
            </tbody>
        </StyledSearchTable>
    );
};

export default SearchTable;
