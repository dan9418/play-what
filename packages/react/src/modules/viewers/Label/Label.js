import * as React from "react";
//import pw_color from '@pw/color';
//import "./Keyboard.css";

const Label = ({ color, text, userStyles }) => {

	const bg = color ? color : null;
	//const fg = color ? pw_color.getFgColor(bg) : null;

	const styles = {
		position: 'absolute',
		width: '90%',
		height: '90%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: '100%',
		...userStyles
	};

	return (
		<div className='label' style={styles}>
			{text}
		</div>
	);
}

export default Label;
