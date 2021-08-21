import React from "react";
import { useRecoilState } from "recoil";
import styled from 'styled-components';
import { VIEWER_PRESET_MAP } from "../../../../viewers/src/viewer.constants";
import { modelIdState, notesState, viewerState } from "../../state/state";
import ExploreNav from './nav/ExploreNav';

const StyledExplorePage = styled.div`
	position: fixed;
	top: 96px;
	bottom: 0;
	width: 100%;
	padding: 0 16px;
	max-width: 1024px;
	margin: auto;
	display: flex;
	align-items: center;
	justify-content: center;

	.fretboard {
		box-shadow: 0px 0px 30px 30px rgba(0,0,0,0.08)
	}
`;


const ExplorePage: React.FC<any> = () => {

	// @ts-ignore
	const [modelId] = useRecoilState(modelIdState);
	// @ts-ignore
	const [modelValue] = useRecoilState(notesState);
	// @ts-ignore
	const [viewerId] = useRecoilState(viewerState);

	if (!modelValue.length) return <>No intervals set.</>;

	const labelProps = {
		modelId,
		modelValue
	};

	const viewerConfig = VIEWER_PRESET_MAP.get(viewerId).value;


	return (
		<>
			<ExploreNav />
			<StyledExplorePage>
				<viewerConfig.component {...viewerConfig.props} labelProps={labelProps} />
			</StyledExplorePage>
		</>
	);
};

export default ExplorePage;
