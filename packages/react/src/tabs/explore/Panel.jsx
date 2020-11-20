import PodUtils from "@pw/core/src/Pod.utils";
import PodListUtils from "@pw/core/src/PodList.utils";
import React, { useState } from "react";
import usePodContext from "../../other/PodContext";
import ButtonInput from '../../ui/ButtonInput/ButtonInput';
import AnalysisSubpanel from "./subpanels/analysis/AnalysisSubpanel";
import ConfigSubpanel from "./subpanels/config/ConfigSubpanel";
import ValueSubpanel from "./subpanels/value/ValueSubpanel";

const PanelHeader = ({ isOpen, setIsOpen, name }) => {
	const podContext = usePodContext();
	const { pods, podType } = podContext;
	const previewOptions = { podType };
	return (
		<div className='model-panel-header'>
			<div>
				<span className='model-name'>{name}</span>
				<span className='type'>{podType}</span>
				<div className="preview pw-accent-fg">{PodListUtils.getPreview(pods, previewOptions)}</div>
			</div>
			<ButtonInput isActive={isOpen} onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'done' : 'edit'} </ButtonInput>
		</div>
	);
};

const GenericPanel = ({ name, children }) => {
	const [isOpen, setIsOpen] = useState(true);
	return (
		<div className='model-panel'>
			<PanelHeader isOpen={isOpen} setIsOpen={setIsOpen} name={name} />
			{isOpen && (
				<div className='model-panel-body'>
					{children}
				</div>
			)}
		</div>
	);
}

const Panel = ({ name }) => {
	const podContext = usePodContext();
	const { podType, setPodType } = podContext;
	const isEditable = !!setPodType;
	return (
		<GenericPanel name={name}>
			{isEditable && <ConfigSubpanel />}
			<ValueSubpanel />
			<AnalysisSubpanel />
		</GenericPanel>
	);
}

export default Panel;
