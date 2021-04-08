import _ from 'lodash';
import React from "react";
import styled from 'styled-components';
import DropdownInput from '../../../../ui/inputs/DropdownInput';
import ActionForm from '../../shared/ActionForm';
import { VIEWER_OPTIONS } from './viewerActions';

const StyledLabel = styled.h4`
	margin: 8px 0 4px;
	color: #555;
	font-weight: bold;

	:first-child {
		margin-top: 0;
	}
`;

const ViewerTypeAction = ({ pathHead, setPathHeadConfig }) => {
	const [viewerIndex, setViewerIndex] = React.useState(0);

	const selectedViewerOption = VIEWER_OPTIONS[viewerIndex];

	const onSubmit = () => {
		const newData = _.cloneDeep(pathHead);
		_.set(newData, 'modelOptions.viewerId', selectedViewerOption.id);
		setPathHeadConfig(newData);
	};

	return (
		<ActionForm onSubmit={onSubmit}>
			<StyledLabel>Type: </StyledLabel>
			<DropdownInput options={VIEWER_OPTIONS} value={selectedViewerOption} setValue={(v, i) => setViewerIndex(i)} />
		</ActionForm>
	);
};

export default ViewerTypeAction;