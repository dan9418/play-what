import styled from 'styled-components';

const StyledCard = styled.section`
	padding: 16px;
	width: 100%;
	border: 1px solid ${({ theme }) => theme.border};
	border-radius: 8px;
	background-color: ${({ theme }) => theme.card};
	box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);
`;

export const StyledHelpCard = styled(StyledCard)`
	margin-top: 16px;
	
	p {
		margin-top: 16px;
		color: #555;
		font-style: italic;
	}

	h4 {
		color: ${({ theme }) => theme.accent};
		padding-bottom: 4px;
		border-bottom: 1px solid ${({ theme }) => theme.border};
	}
`

export default StyledCard;
