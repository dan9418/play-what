
import React from "react";
import HomePage from '../components/home/HomePage';
import ExplorePage from '../components/explore/ExplorePage';

export type ParamType = { [x: string]: any/*string | number*/ };

export interface IPageProps {
    params: ParamType
}

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
	Home,
	Explore
}

const PAGE_MAP = new Map<PageId, IRoute>([
	[PageId.Home, {
		pageId: PageId.Home,
		name: 'Home',
		Component: HomePage
	}],
	[PageId.Explore, {
		pageId: PageId.Explore,
		name: 'Explore',
		Component: ExplorePage
	}]
]);

const DEFAULT_PAGE = PageId.Home;
const DEFAULT_PAGE_PARAMS: ParamType = {};

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
