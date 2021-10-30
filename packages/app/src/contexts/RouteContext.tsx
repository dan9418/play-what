
import React, { useEffect } from "react";
import ExplorePage from '../components/explore/ExplorePage';
import HomePage from '../components/home/HomePage';

export interface IPageProps {
    params: URLSearchParams
}

interface IPageConfig {
    pageId: PageId;
    name: string;
    component: any;
}

interface IRouteContext extends IPageConfig {
    params?: URLSearchParams;
    setPage: (PageId, URLSearchParams?) => void
}

const RouteContext = React.createContext<IRouteContext | undefined>(undefined);

export const useRouteContext = (): IRouteContext => React.useContext(RouteContext);

export enum PageId {
    Home = 'home',
    Browse = 'browse',
    Explore = 'explore',
    Docs = 'docs'
}

const PAGE_MAP = new Map<PageId, IPageConfig>([
    [PageId.Home, {
        pageId: PageId.Home,
        name: 'Home',
        component: HomePage
    }],
    [PageId.Explore, {
        pageId: PageId.Explore,
        name: 'Explore',
        component: ExplorePage
    }]
]);

export const PAGE_CONFIGS = Array.from(PAGE_MAP).map(([k, v]) => v)

export const DEFAULT_PAGE_ID = PageId.Home;

export const RouteContextProvider: React.FC = ({ children }) => {
    const [pageId, setPageId] = React.useState<PageId | undefined>();
    const [params, setParams] = React.useState<URLSearchParams | undefined>();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const paramPageId = urlParams.get('pageId') as PageId || DEFAULT_PAGE_ID;
        setParams(urlParams);
        setPageId(paramPageId);
    }, []);

    const setPage = (pageId: PageId, params: URLSearchParams) => {
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
