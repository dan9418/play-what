import ButtonInput from "@pw/react/src/ui/ButtonInput/ButtonInput";
import React, { useState } from "react";
import styled from 'styled-components';
import useEditContext from "../../../contexts/EditContext";
import Icon from "../../Icon";

const StyledSubpanelConfigRow = styled.div`
	display: flex;
    width: 100%;
    justify-content: space-between;
	align-items: center;
	padding: 16px 8px;

	& button {
		margin-left: 8px;
	}
`;

const StyledSubpanelConfigSubRow = styled.div`
	display: flex;
    padding: 8px;
    justify-content: center;
	align-items: center;
	margin: 16px 0;
	background-color: #ddd;
	border-radius: 8px;
`;

const SubpanelConfigRow = ({ name, value, setValue, EditComponent }) => {
	const [isOpen, setIsOpen] = useState(false);
	const { isEditing } = useEditContext();
	return (
		<>
			<StyledSubpanelConfigRow>
				<div>{name}</div>
				<div>
					<span>{value}</span>
					{isEditing && (
						<ButtonInput onClick={() => setIsOpen(!isOpen)}>
							<Icon iconId="edit" />
						</ButtonInput>
					)}
				</div>
			</StyledSubpanelConfigRow>
			{isOpen &&
				<StyledSubpanelConfigSubRow>
					<EditComponent value={value} setValue={setValue} />
				</StyledSubpanelConfigSubRow>
			}
		</>
	);
}

export default SubpanelConfigRow;
