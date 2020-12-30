import React from 'react';
import Docs from "./Documentation/Documentation";
import Explore from "./Explore/Explore";
import Home from './Home/Home';

export const PAGE = {
	explore: {
		id: 'explore',
		name: 'App',
		component: <Explore />
	},
	docs: {
		id: 'docs',
		name: 'Docs',
		component: <Docs />
	},
	home: {
		id: 'home',
		name: 'Home',
		component: <Home />
	}
};

export const PAGE_VALUES = Object.values(PAGE);
