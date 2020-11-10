import React from "react";
import ButtonInput from "../../ui/ButtonInput/ButtonInput";

const SubpanelHeader = ({ isEditing, setIsEditing, name }) => {
	return (
		<div className='subpanel-header'>
			<div className="subpanel-name">{name}</div>
			<ButtonInput
				isActive={isEditing}
				onClick={() => setIsEditing(!isEditing)}
			>
				{isEditing ? 'done' : 'edit'}
			</ButtonInput>
		</div>
	);
};

export default SubpanelHeader;
