import React from 'react';
import About from "./About/About";
import Docs from "./Docs/Docs";
import Explore from "./Explore/Explore";
import Home from './Home/Home';

export const PAGE = {
	explore: {
		id: 'explore',
		name: 'Explore',
		component: <Explore />
	},
	chart: {
		id: 'chart',
		name: 'Chart',
		component: <Explore />
	},
	about: {
		id: 'about',
		name: 'About',
		component: <About />
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
