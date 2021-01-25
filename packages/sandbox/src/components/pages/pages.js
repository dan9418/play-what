import React from 'react';
import Explore from "./Explore/Explore";
import Home from './Home/Home';

export const PAGE = {
	explore: {
		id: 'explore',
		name: 'App',
		component: <Explore />
	},
	home: {
		id: 'home',
		name: 'Home',
		component: <Home />
	}
};

export const PAGE_VALUES = Object.values(PAGE);
