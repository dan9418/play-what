import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import Card from "../../../_shared/ui/Card";

const StyledRelated = styled.div`
    display: grid;
    gap: 16px;
    grid-template-columns: 1fr;
    @media(min-width: 512px) {
		grid-template-columns: auto auto;
        & > :first-child:not(:only-child) {
            padding-right: 16px;
            border-right: 1px solid #ccc;
        }
	}

    h2 {
        text-transform: uppercase;
        font-size: 90%;
        color: #${({ theme }) => theme.text.secondary};
    }

    h2, h3, h4 {
        margin-bottom: 8px;
    }

    ul {
        display: flex;
        gap: 4px;
        flex-wrap: wrap;
        a {
            padding: 4px;
        }
        margin-bottom: 16px;
    }
`;


const RelatedCard: React.FC<any> = ({ model }) => {

    const subsets = model.getSubsets && model.getSubsets();
    const supersets = model.getSupersets && model.getSupersets();

    return (
        <Card title="Related">
            <StyledRelated>
                {subsets && subsets.length > 0 &&
                    <div>
                        <h2>Subsets</h2>
                        {subsets.map(s => (
                            <>
                                <h3>{s.modelName}</h3>
                                <ul>
                                    {s.values.map(s => (
                                        <li key={s.id}><Link to={`/browse/${s.modelId}/${s.id}`}>{s.name}</Link></li>
                                    ))}
                                </ul>
                            </>
                        ))}
                    </div>
                }
                {supersets && supersets.length > 0 &&
                    <div>
                        <h2>Supersets</h2>
                        {supersets.map(s => (
                            <>
                                <h3>{s.modelName}</h3>
                                <ul>
                                    {s.values.map(s => (
                                        <li key={s.id}><Link to={`/browse/${s.modelId}/${s.id}`}>{s.name}</Link></li>
                                    ))}
                                </ul>
                            </>
                        ))}
                    </div>
                }
            </StyledRelated>
        </Card>
    );
};

export default RelatedCard;
