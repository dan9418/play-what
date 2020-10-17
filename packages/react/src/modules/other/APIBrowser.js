import pw_core from '@pw/core';
import React, { useState } from "react";
import DropdownInput from './DropdownInput/DropdownInput';
//import "./APIBrowser.css";

const getModules = m => Object.entries(m).map(([name, value], i) => ({ id: i, name, value }));

const ModuleDropdown = ({ mod, setData, level }) => {
	const type = typeof mod;
	const isInvalid = type !== 'object' || level > 10;

	if (isInvalid) {
		if (typeof mod === 'function')
			setData('function');
		else
			setData(mod);
		return null;
	}

	const [index, setIndex] = useState(0);
	const submodules = getModules(mod);

	return (
		<>
			<DropdownInput options={submodules} value={index} setValue={(v, i) => setIndex(i)} />
			<ModuleDropdown mod={submodules[index].value} setData={setData} level={level + 1} />
		</>
	);
}

const APIBrowser = () => {
	const [data, setData] = useState(null);
	return (
		<div className='api-browser'>
			<h2>API</h2>
			<div>
				<ModuleDropdown mod={pw_core} setData={setData} level={0} />
			</div>
			<pre>
				{JSON.stringify(data, null, 2)}
			</pre>
		</div>
	);
}

export default APIBrowser;
