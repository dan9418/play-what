
import React from "react";
import ExplorePage from '../components/explore/ExplorePage';
import HomePage from '../components/home/HomePage';

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

export const RouteContextProvider: React.FC = ({ children }) => {
	const [pageId, setPageId] = React.useState(DEFAULT_PAGE);
	const [params, setParams] = React.useState(null);

	const setPage = (pageId: PageId, params: ParamType) => {
		setPageId(pageId);
		setParams(params);
	}

	const routeContext: IRouteContext = {
		...PAGE_MAP.get(pageId),
		setPage,
		params
	};

	return (
		<RouteContext.Provider value={routeContext}>
			{children}
		</RouteContext.Provider>
	);
};

export const RouteContextConsumer = RouteContext.Consumer;
