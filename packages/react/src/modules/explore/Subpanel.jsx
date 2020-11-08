import React from "react";
import SubpanelHeader from './SubpanelHeader';

const Subpanel = ({ name, isEditing, setIsEditing, children }) => {
	return (
		<div className='subpanel'>
			<SubpanelHeader name={name} isEditing={isEditing} setIsEditing={setIsEditing} />
			<div className='subpanel-body'>
				{children}
			</div>
		</div>
	);
};

export default Subpanel;
