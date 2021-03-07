import React from 'react';
import ReactJson from 'react-json-view';

const JsonEditor = ({ src, ...rest }) => {
	return (
		<ReactJson
			src={src}
			enableClipboard={false}
			name={null}
			{...rest}
		/>
	);
};

export default JsonEditor;
