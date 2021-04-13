
import AboutPage from '../components/pages/about/AboutPage';
import ExplorePage from '../components/pages/explorer/ExplorePage';
import React from "react";

type ParamType = { [x: string]: string | number };

interface IRoute {
	pageId: PageId;
	name: string;
	Component: any;
	params?: ParamType;
}

interface IRouteContext extends IRoute {
	setPage: (PageId, ParamType?) => void
}

const RouteContext = React.createContext(null);

export const useRouteContext = (): IRouteContext => React.useContext(RouteContext);

export enum PageId {
	About,
	Explore
}

const PAGE_MAP = new Map<PageId, IRoute>([
	[PageId.About, {
		pageId: PageId.About,
		name: 'About',
		Component: AboutPage
	}],
	[PageId.Explore, {
		pageId: PageId.Explore,
		name: 'Explore',
		Component: ExplorePage
	}]
]);

export const RouteContextProvider: React.FC = ({ children }) => {
	const [pageId, setPageId] = React.useState(PageId.About);
	const [pageParams, setPageParams] = React.useState(null);

	const setPage = (pageId: PageId, params: ParamType = {}) => {
		setPageId(pageId);
		setPageParams(params);
	}

	const routeContext: IRouteContext = {
		...PAGE_MAP.get(pageId),
		setPage
	};

	return (
		<RouteContext.Provider value={routeContext}>
			{children}
		</RouteContext.Provider>
	);
};

export const RouteContextConsumer = RouteContext.Consumer;
