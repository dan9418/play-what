import ZoomButton from '@pw/react/src/ui/ButtonInput/ZoomButton';
import React from 'react';
import styled from 'styled-components';
import { useLevelContext } from '../core/Level';
import BlockSubpanel from '../modules/Block/BlockSubpanel';
import Panel from '../ui/Panel';

const StyledSectionPage = styled.div`
	.panel-body {
		display: flex;
		align-items: center;
		flex-direction: column;
		margin: 32px 0 16px;

		> * {
			margin: 16px 0;
		}
	}

	.block-wrapper {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		max-width: 512px;
		>:first-child {
			width: 100%;
			margin-right: 8px;	
		}
	}
`;

const SectionPage = () => {
	const { data: section } = useLevelContext();
	return (
		<StyledSectionPage>
			<Panel name={section.name} caption="Section"  preview={`${section.blocks.length} Blocks`}>
				{
					section.blocks.map((block, i) => {
						return (
							<div key={i} className="block-wrapper">
								<BlockSubpanel block={block} />
								<ZoomButton name={`Block ${i}`} levelId="block" pathId={i} />
							</div>
						);
					})
				}
			</Panel>
		</StyledSectionPage>
	);
};

export default SectionPage;
