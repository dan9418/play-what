import React from "react";


const EditDash = ({ isEditing, setIsEditing, name }) => {
	return (
		<div className='edit-dash'>
			<div className="subpanel-name">{name}</div>
			<div className='edit-button' onClick={() => setIsEditing(!isEditing)}>{isEditing ? 'done' : 'edit'} </div>
		</div>
	);
};

export default EditDash;
