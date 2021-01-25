import ButtonInput from "@pw/react/src/ui/ButtonInput/ButtonInput";
import React, { useState } from "react";
import styled from 'styled-components';
import useEditContext from "../../../contexts/EditContext";
import Icon from "../../Icon";

const StyledPanelConfigRow = styled.div`
	display: flex;
    width: 100%;
    justify-content: space-between;
	align-items: center;
	padding: 16px 8px;

	& button {
		margin-left: 8px;
	}
`;

const StyledPanelConfigSubRow = styled.div`
	display: flex;
    padding: 8px;
    justify-content: center;
	align-items: center;
	margin: 0 0 16px 0;
	background-color: #ddd;
	border-radius: 8px;
`;

const PanelConfigRow = ({ name, value, setValue, EditComponent }) => {
	const [isOpen, setIsOpen] = useState(false);
	const { isEditing } = useEditContext();
	return (
		<>
			<StyledPanelConfigRow>
				<div>{name}</div>
				<div>
					<span>{value}</span>
					<ButtonInput onClick={() => setIsOpen(!isOpen)}>
						<Icon iconId={isOpen ? 'confirm' : 'edit'} />
					</ButtonInput>
				</div>
			</StyledPanelConfigRow>
			{isOpen &&
				<StyledPanelConfigSubRow>
					<EditComponent value={value} setValue={setValue} />
				</StyledPanelConfigSubRow>
			}
		</>
	);
}

export default PanelConfigRow;
