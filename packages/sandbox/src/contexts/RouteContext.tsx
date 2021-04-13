
import About from '../components/pages/about/About';
import Explorer from '../components/pages/explorer/Explorer';
import React from "react";

interface IRoute {
	pageId: PageId;
	name: string;
	Component: any;
}

interface IRouteContext extends IRoute {
	setPageId: (PageId) => void
}

const RouteContext = React.createContext(null);

export const useRouteContext = (): IRouteContext => React.useContext(RouteContext);

export enum PageId {
	About,
	Explorer
}

const PAGE_MAP = new Map<PageId, IRoute>([
	[PageId.About, {
		pageId: PageId.About,
		name: 'About',
		Component: About
	}],
	[PageId.Explorer, {
		pageId: PageId.Explorer,
		name: 'Explorer',
		Component: Explorer
	}]
]);

export const RouteContextProvider: React.FC = ({ children }) => {
	const [pageId, setPageId] = React.useState(PageId.Explorer);

	const routeContext: IRouteContext = {
		...PAGE_MAP.get(pageId),
		setPageId
	};

	return (
		<RouteContext.Provider value={routeContext}>
			{children}
		</RouteContext.Provider>
	);
};

export const RouteContextConsumer = RouteContext.Consumer;
