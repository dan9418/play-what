import styled from 'styled-components';

export const StyledDoublePane = styled.div`
	display: grid;
	gap: 16px;
	grid-template-columns: 1fr;
	@media(min-width: 512px) {
		grid-template-columns: 3fr 2fr;
	}
`

export const StyledPane = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	margin: 16px 0;
`
