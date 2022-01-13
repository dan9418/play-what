import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import Chord from "../../core/models/Chord";
import { IModelConfig, ModelId } from "../../core/models/Model.constants";
import Scale from "../../core/models/Scale";

const StyledCollectionTable = styled.table`
    width: 100%;
    margin: auto;
    border-collapse: collapse;

    td, th {
        line-height: 32px;
        
        &:not(:first-child) {
            text-align: center;
            width: 32px;
            height: 32px;
        }

        &:first-child {
            text-align: left;
            padding: 0 8px;
        }
    }

    thead {
        tr th {
            
            background-color: ${props => props.theme.surface.nav};
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
    }
`;

export interface ICollectionTableProps {
    data: IModelConfig[];
}

const SEMITONES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const CollectionTable: React.FC<ICollectionTableProps> = ({ data }) => {
    return (
        <StyledCollectionTable>
            <thead>
                <tr>
                    <th>Name</th>
                    {SEMITONES.map((h, i) => <th key={i}>{h}</th>)}
                </tr>
            </thead>
            <tbody>
                {
                    data.map(d => {
                        const cl = d.modelId === ModelId.Chord ? Chord : Scale;
                        const model = new cl(d.id);
                        return (
                            <tr>
                                <td>
                                    <Link to={`/browse/${model.modelId}/${model.id}`}>
                                        {model.name}
                                    </Link>
                                </td>
                                {SEMITONES.map((h, i) => {
                                    const x = model.intervals.find(ivl => ivl.pod[0] + 1 === h);
                                    if (!x) return <td key={i} />;
                                    return <td key={i}>
                                        {x.getName()}
                                    </td>
                                })}
                            </tr>
                        );
                    })
                }
            </tbody>
        </StyledCollectionTable>
    );
};

export default CollectionTable;
