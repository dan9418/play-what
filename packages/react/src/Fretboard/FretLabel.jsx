import * as React from "react";

const FretLabel = ({ stringTuning, stringIndex, fretIndex }) => {
	const noteIndex = stringTuning + fretIndex;

	const style = {
		position: 'absolute',
		width: '90%',
		height: '90%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: '100%'
	};

	return (
		<div style={style}>
			{noteIndex}
		</div>
	);
};

export default FretLabel;
