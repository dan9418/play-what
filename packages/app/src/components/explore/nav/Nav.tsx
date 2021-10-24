import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
    height: 48px;
    position: fixed;
    top: 32px;
    left: 0;
    right: 0;
    z-index: 2001;

	> div {
		height: 100%;
		width: 100%;
		max-width: 1024px;
		margin: auto;

		display: flex;
		//justify-content: center;
		align-items: center;
	}

	.item {
		padding: 4px 8px
	}
	
	background: ${({ theme }) => theme.surface.gradient};
	border-bottom: 1px solid ${({ theme }) => theme.border};
`;

const Menu: React.FC<any> = () => {

	return (
		<StyledNav>
			<div>
				<div className="item">
					Home
				</div>
				<div className="item">
					<b>List</b>
				</div>
				<div className="item">
					Flash Cards
				</div>
				<div className="item">
					Charts
				</div>
				<div className="item">
					Cheat Sheets
				</div>
			</div>
		</StyledNav>
	);
};

export default Menu;
