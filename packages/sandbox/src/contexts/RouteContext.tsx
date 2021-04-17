
import React from "react";
import AboutPage from '../components/pages/about/AboutPage';
import ExplorePage from '../components/pages/explorer/ExplorePage';
import LIBRARY_PATH_ROOT from "../data/library";

export type ParamType = { [x: string]: any/*string | number*/ };

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

const DEFAULT_PAGE = PageId.Explore;
const DEFAULT_PAGE_PARAMS: ParamType = {
	data: LIBRARY_PATH_ROOT
};

export const RouteContextProvider: React.FC = ({ children }) => {
	const [pageId, setPageId] = React.useState(DEFAULT_PAGE);
	const [pageParams, setPageParams] = React.useState(DEFAULT_PAGE_PARAMS);

	const setPage = (pageId: PageId, params: ParamType = {}) => {
		setPageId(pageId);
		setPageParams(params);
	}

	const routeContext: IRouteContext = {
		...PAGE_MAP.get(pageId),
		setPage,
		params: pageParams
	};

	return (
		<RouteContext.Provider value={routeContext}>
			{children}
		</RouteContext.Provider>
	);
};

export const RouteContextConsumer = RouteContext.Consumer;
