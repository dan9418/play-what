
import React, { createContext, useContext, useState } from 'react';
import About from '../components/pages/About';
import Explorer from '../components/pages/Explorer';

const RouteContext = createContext(null);

export const useRouteContext = () => useContext(RouteContext);

export const PAGE_ID = {
	About: 0,
	Explorer: 1
};

const PAGE = {
	[PAGE_ID.About]: {
		pageId: PAGE_ID.About,
		name: 'About',
		Component: About
	},
	[PAGE_ID.Explorer]: {
		pageId: PAGE_ID.Explorer,
		name: 'Explorer',
		Component: Explorer
	}
}

export const RouteContextProvider = ({ children }) => {
	const [pageId, setPageId] = useState(PAGE_ID.Explorer);

	const goHome = () => setPageId(PAGE_ID.About);

	const routeContext = {
		...PAGE[pageId],
		setPageId,
		goHome
	};

	return (
		<RouteContext.Provider value={routeContext}>
			{children}
		</RouteContext.Provider>
	);
};

export const RouteContextConsumer = RouteContext.Consumer;
