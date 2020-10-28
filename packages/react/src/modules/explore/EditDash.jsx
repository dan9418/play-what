import React from "react";


const EditDash = ({ isEditing, setIsEditing, actions }) => {
	return (
		<div className='submenu'>
			<div className="space" />
			<div className="action-row">
				{isEditing && actions && actions.length && actions.map(a => (
					<>
						<div className='edit' onClick={a.onClick}>{a.text}</div>
						{` | `}
					</>
				))}
				<div className='edit' onClick={() => setIsEditing(!isEditing)}>{isEditing ? 'done' : 'edit'} </div>
			</div>
		</div>
	);
};

export default EditDash;
