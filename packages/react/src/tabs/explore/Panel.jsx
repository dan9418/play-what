import PodUtils from "@pw/core/src/modules/PodUtils";
import React, { useState } from "react";
import usePodContext from "../../other/PodContext";
import ButtonInput from '../../ui/ButtonInput/ButtonInput';
import AnalysisSubpanel from "./subpanels/analysis/AnalysisSubpanel";
import ConfigSubpanel from "./subpanels/config/ConfigSubpanel";
import ValueSubpanel from "./subpanels/value/ValueSubpanel";

const PanelHeader = ({ isOpen, setIsOpen, name }) => {
	const podContext = usePodContext();
	const { value, podType, isList } = podContext;
	const previewOptions = { podType, isList, reduce: podType !== 'pod' };
	return (
		<div className='model-panel-header'>
			<div>
				<span className='model-name'>{name}</span>
				<span className='type'>{podType}{isList ? '[]' : ''}</span>
				<div className="preview pw-accent-fg">{PodUtils.getPreview(value, previewOptions)}</div>
			</div>
			<ButtonInput isActive={isOpen} onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'done' : 'edit'} </ButtonInput>
		</div>
	);
};

const GenericPanel = ({ name, children }) => {
	const [isOpen, setIsOpen] = useState(false);
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
	const { value, setValue, podType, setPodType, isList, setIsList } = podContext;
	const isEditable = /*setValue || */setPodType || setIsList;
	return (
		<GenericPanel name={name}>
			{isEditable && <ConfigSubpanel />}
			<ValueSubpanel />
			<AnalysisSubpanel />
		</GenericPanel>
	);
}

export default Panel;
