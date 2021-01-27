import React, { createContext, useContext, useState } from 'react';
import { PAGE } from '../components/pages/pages';

const RouteContext = createContext(null);

export const RouteContextProvider = ({ children }) => {
	const [breadcrumbs, setBreadcrumbs] = useState([PAGE.home, PAGE.input]);
	const currentPage = breadcrumbs[breadcrumbs.length - 1];
	const popAt = n => setBreadcrumbs(breadcrumbs.slice(0, n + 1));
	const push = p => setBreadcrumbs([...breadcrumbs, p]);
	const routeContext = { breadcrumbs, setBreadcrumbs, currentPage, popAt, push };
	return (
		<RouteContext.Provider value={routeContext}>
			{children}
		</RouteContext.Provider>
	);
}

export const RouteContextConsumer = RouteContext.Consumer;

const useRouteContext = () => useContext(RouteContext);

export default useRouteContext;
