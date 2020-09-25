import React, { useState } from "react";
import "./Docs.css";

const Explorer = ({ label, level, children }) => {
	const [open, setOpen] = useState(level < 4);
	const Tag = `h${level || 1}`;
	const style = { marginLeft: `${4 * level}px` };
	return (
		<div className="explorer" style={style}>
			<Tag onClick={() => setOpen(!open)}>{label}</Tag>
			{open && children}
		</div>
	);s
};

export default Explorer;
