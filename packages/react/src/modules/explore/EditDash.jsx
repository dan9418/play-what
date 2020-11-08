import React from "react";
import ButtonInput from "../ui/ButtonInput/ButtonInput";


const EditDash = ({ isEditing, setIsEditing, name }) => {
	return (
		<div className='edit-dash'>
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

export default EditDash;
