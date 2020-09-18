import React from "react";
import "./Docs.css";

const InputRow = ({ label, children, x }) => {
	const classes = ['input-row'];
	if(x) {
		classes.push('x')
	}
	return (
		<div className={classes.join(' ')}>
			<label>{label}</label>
			<div className="content">
				{children}
			</div>
		</div>
	);
}

export default InputRow;
