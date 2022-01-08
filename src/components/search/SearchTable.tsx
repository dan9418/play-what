import React from "react";
import styled from 'styled-components';

const StyledSearchTable = styled.table`
    width: 100%;
    margin: auto;
    border-collapse: collapse;

    thead {
        tr th {
            text-align: left;
            background-color: ${props => props.theme.surface.nav};
            padding: 8px;
            color: ${({ theme }) => theme.text.inverted};
        }
    }

    tbody {
        tr {
            &:hover {
                background-color: ${({ theme }) => theme.utils.hoverDark};
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
}

const SearchTable: React.FC<ISearchTableProps> = ({ rows, headers, getCols }) => {
    return (
        <StyledSearchTable>
            <thead>
                <tr>
                    {headers.map((h, i) => <th key={i}>{h}</th>)}
                </tr>
            </thead>
            <tbody>
                {
                    rows.map(row => (
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
