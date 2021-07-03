import { useIsMobile } from "@pw/sandbox/src/hooks/useWindowSize";
import React from "react";
import styled from 'styled-components';
import Toolbox from './Toolbox';

const StyledExploreHeader = styled.section`
	width: 100%;
	padding: 16px;

	background: #ECEFEF;
	border-bottom: 1px solid ${({ theme }) => theme.border};

	@media(min-width: ${1024 + 16}px) {
		padding: 16px 0;
	}

	& .button-container {
		margin: 8px 0 0;

		@media(min-width: 512px) {
			margin: 16px 0 0;
		}
	}
	
	& .top-container {
		display: flex;
		justify-content: space-between;
		//flex-direction: column;
		width: 100%;

		@media(min-width: 512px) {
			flex-direction: row;
		}

		& .name-caption--preview {
			display: flex;
			flex-direction: column;
			& > .name-caption {
				display: flex;
				align-items: baseline;
				white-space: nowrap;
				& > .name {
					font-size: 200%;
				}
				& > .caption {
					font-size: unset;
					color: #555;
					margin-top: 8px;
					margin-left: 8px;
					display: flex;
					align-items: center;
					justify-content: flex-start;
					@media(min-width: 512px) {
						margin-top: 0;
						justify-content: flex-end;
					}
				}
			}
			& .preview {
				padding-top: 4px;
				display: flex;
				align-items: center;
				font-size: 140%;
				color: ${({ theme }) => theme.accent}
			}
		}

		.switch-container {
			span {
				font-size: 80%;
				font-weight: 500;
				margin-right: 4px;
			}

			display: flex;
			align-items: center;
		}
	}
`;

const ExploreHeader: React.FC<any> = ({ name, caption, preview }) => {
	const isMobile = useIsMobile();

	return (
		<StyledExploreHeader>
			<div className='top-container'>
				<div className='name-caption--preview'>
					<div className='name-caption'>
						<h3 className='name'>{name}</h3>
						<div className='caption'>{caption}</div>
					</div>
					<div className='preview'>{preview}</div>
				</div>
				{!isMobile && <Toolbox />}
			</div>
			{isMobile && <Toolbox />}
		</StyledExploreHeader>
	);
};

export default ExploreHeader;
