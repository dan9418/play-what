import pw_core from '@pw/core';
import pw_react from '@pw/react';

const DEFAULT_MODULES = [
	{
		handle: '@core',
		value: pw_core
	},
	{
		handle: '@react',
		value: pw_react
	}
];

const getApiNode = (path, root) => {
	const tree = path.split('/');
	let endpoint = root;
	let attr = null;
	while (tree.length > 0) {
		attr = tree.shift();
		if (!tree.length && attr === '') return [endpoint, true];
		if (!endpoint) debugger;
		endpoint = endpoint[attr];
	}
	return [endpoint, false];
};

const call = (path, args = {}, level = 0) => {
	console.log('\t'.repeat(level), `API - ${path}`, args);

	if(!path) throw Error('path required');

	if(path[0] !== '@') throw Error('path must begin with handle');

	const index = path.indexOf('/');

	if(index < 1)  throw Error('invalid handle');

	const handle = path.slice(0, index);
	const modulePath = path.slice(index + 1);
	const module = DEFAULT_MODULES.find(m => m.handle === handle);

	if(!module) throw Error('module not found');

	const [endpoint, isFn] = getApiNode(modulePath, module.value);
	const value = isFn ? endpoint(args) : endpoint;

	return value;
};

export default call;
