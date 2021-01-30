import React, { createContext, useContext, useState } from 'react';
import { PAGE } from '../components/pages/pages';

const RouteContext = createContext(null);

const INIT = [
	{
		level: 'chart',
		name: 'Chart',
		index: null
	},
	{
		level: 'section',
		name: 'Section',
		index: 0
	},
	{
		level: 'block',
		name: 'Block',
		index: 0
	},
	{
		level: 'podList',
		name: 'Pod List',
		index: 0
	},
	{
		level: 'pod',
		name: 'Pod',
		index: 0
	},
	{
		level: 'podIndex',
		name: 'Pod Index',
		index: 0
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
