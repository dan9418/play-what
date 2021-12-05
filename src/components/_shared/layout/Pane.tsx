import styled from 'styled-components';

export const StyledDoublePane = styled.div`
	padding: 16px;

	display: grid;
	gap: 16px;
	grid-template-columns: 1fr;
	@media(min-width: 512px) {
		grid-template-columns: 2fr 3fr;
	}

	.card {
		background: white;
		height: 100%;
		width: 100%;
		border-radius: 16px;
		padding: 16px;

		label {
			font-weight: bold;
			margin-right: 4px;
		}
	}
`

export const StyledPane = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
`
