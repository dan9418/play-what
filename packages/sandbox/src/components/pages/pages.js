import React from 'react';
import ChartPage from './ChartPage';
import Home from './Home';
import InputPage from './InputPage';
import OutputPage from './OutputPage';

export const PAGE = {
	home: {
		id: 'home',
		name: 'Home',
		component: <Home />
	},
	input: {
		id: 'input',
		name: 'Input',
		component: <InputPage />
	},
	output: {
		id: 'output',
		name: 'Output',
		component: <OutputPage />
	},
	chart: {
		id: 'chart',
		name: 'Chart',
		component: <ChartPage />
	}
};

export const PAGE_VALUES = Object.values(PAGE);
