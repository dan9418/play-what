import React, { createContext, useContext, useState } from 'react';
import { PAGE } from '../components/pages/pages';

const RouteContext = createContext(null);

const INIT = [
	{
		level: 'chart',
		name: 'Out of Nowhere',
		pathId: null
	},
	{
		level: 'section',
		name: 'Section A',
		pathId: 'A'
	},
	{
		level: 'block',
		name: 'C Maj',
		pathId: 0
	},
	{
		level: 'podList',
		name: 'Major Chord',
		pathId: 'intervals'
	},
	{
		level: 'pod',
		name: 'P1',
		pathId: 0 // or keyCenter
	},
	{
		level: 'podIndex',
		name: 'Pitch Span',
		pathId: 0
	}
];

export const RouteContextProvider = ({ children }) => {
	const [breadcrumbs, setBreadcrumbs] = useState(INIT);

	const currentPage = breadcrumbs[breadcrumbs.length - 1];
	const popAt = n => setBreadcrumbs(breadcrumbs.slice(0, n + 1));
	const push = p => setBreadcrumbs([...breadcrumbs, p]);
	const replace = x => setBreadcrumbs([x]);
	const routeContext = { breadcrumbs, setBreadcrumbs, currentPage, popAt, push, replace };
	return (
		<RouteContext.Provider value={routeContext}>
			{children}
		</RouteContext.Provider>
	);
}

export const RouteContextConsumer = RouteContext.Consumer;

const useRouteContext = () => useContext(RouteContext);

export default useRouteContext;
