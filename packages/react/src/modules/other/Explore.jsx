import pw_core from '@pw/core';
import React, { useState } from "react";
import DOCS_CONFIG from '../docs/Docs.config';
import DropdownInput from '../ui/DropdownInput/DropdownInput';
//import "./APIBrowser.css";

const MODULES = DOCS_CONFIG.modules;

const Explore = ({ set }) => {
	const [module, setModule] = useState(MODULES[0]);
	const [submodule, setSubmodule] = useState(module.submodules[0]);
	const [fn, setFn] = useState(submodule.functions[0]);
	const onSet = v => {
		set(v);
		setFn(v);
	}
	return (
		<div className='explore'>
			<DropdownInput options={MODULES} value={module} setValue={setModule} />
			<DropdownInput options={module.submodules} value={submodule} setValue={setSubmodule} />
			<DropdownInput options={submodule.functions} value={fn} setValue={onSet} />
		</div>
	);
}

export default Explore;
