import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import { MASTER_PRESETS } from "@pw-core/models/Model.presets";
import ModelUtils from "@pw-core/models/Model.utils";
import Card from "../../../_shared/ui/Card";

const StyledRelated = styled.div`
    h3 {
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

    const subsets = model.getSubsets();
    const supersets = model.getSupersets();

    return (
        <Card title="Related">
            <StyledRelated>
                <h3>Subsets</h3>
                <ul>
                    {subsets.map(s => (
                        <li key={s.id}><Link to={`/browse/${s.modelId}/${s.id}`}>{s.name}</Link></li>
                    ))}
                </ul>
                <h3>Supersets</h3>
                <ul>
                    {supersets.map(s => (
                        <li key={s.id}><Link to={`/browse/${s.modelId}/${s.id}`}>{s.name}</Link></li>
                    ))}
                </ul>
            </StyledRelated>
        </Card>
    );
};

export default RelatedCard;
