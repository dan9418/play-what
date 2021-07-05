import React from "react";
import styled from 'styled-components';

const StyledLabelRow = styled.div`
	margin: 8px 0;
	display: grid;
	grid-template-columns: 1fr 1fr;
    grid-gap: 8px;
    padding-bottom: 16px;
    border-bottom: 1px solid ${({ theme }) => theme.border};

    label {
        font-size: 90%;
        display: block;
        font-weight: bold;
        margin-bottom: 2px;
        text-transform: uppercase;
    }

    select {
        width: 100%;
    }
`;

interface ILabelRowProps {
    labels: [any, any];
}

const LabelRow: React.FC<ILabelRowProps> = ({ labels }) => {
    return (
        <StyledLabelRow>
            <div>
                <label>Model</label>
                {labels[0]}
            </div>
            <div>
                <label>Preset</label>
                {labels[1]}
            </div>
        </StyledLabelRow>
    );
};

export default LabelRow;
