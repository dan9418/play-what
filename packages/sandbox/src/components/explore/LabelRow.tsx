import React from "react";
import styled from 'styled-components';

const StyledLabelRow = styled.div`
	margin: 8px 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const LabelRow: React.FC<any> = ({ label, children }) => {
    return (
        <StyledLabelRow>
            <b>{label}:</b>
            {children}
        </StyledLabelRow>
    );
};

export default LabelRow;
