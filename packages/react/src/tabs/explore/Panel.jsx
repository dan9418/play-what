import React, { useState } from "react";
import pw_core from "@pw/core";
import useCellContext from "../../other/CellContext";
import ButtonInput from '../../ui/ButtonInput/ButtonInput';

const PanelHeader = ({ isOpen, setIsOpen, name, type }) => {
	const cellContext = useCellContext();
	return (
		<div className='model-panel-header'>
			<div>
				<span className='model-name'>{name}</span>
				<span className='type'>{type}</span>
				<div className="preview pw-accent-fg">{cellContext.cell.getPreview()}</div>
			</div>
			<ButtonInput isActive={isOpen} onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'done' : 'edit'} </ButtonInput>
		</div>
	);
};

const Panel = ({ name, type, children }) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className='model-panel'>
			<PanelHeader isOpen={isOpen} setIsOpen={setIsOpen} name={name} type={type} />
			{isOpen && (
				<div className='model-panel-body'>
					{children}
				</div>
			)}
		</div>
	);
}

export default Panel;
