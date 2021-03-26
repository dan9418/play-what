import React from "react";
import styled from 'styled-components';
import StyledCard from '../../../ui/layout/StyledCard'

const StyledPre = styled.pre`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const DataCard = ({ pathHead }) => {
	return (
		<StyledCard>
			<StyledPre>
				{JSON.stringify(pathHead, null, '  ')}
			</StyledPre>
		</StyledCard>
	);
};

export default DataCard;
