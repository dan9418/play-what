
import { PageProps } from "gatsby";
import React from "react";
import Note from "../core/models/Note";

const PagePropsContext = React.createContext<PageProps>(null);

export const PagePropsContextProvider: React.FC<{ value: any }> = ({ children, value }) => {
    //console.log('pw-page-props', value);
    return (
        <PagePropsContext.Provider value={value}>
            {children}
        </PagePropsContext.Provider>
    );
};

export const usePageProps = (): PageProps => React.useContext(PagePropsContext);

export const useRoot = () => {
    const props: any = usePageProps();
    return props.pageContext.rootId ? Note.fromId(props.pageContext.rootId) : undefined;
}

export const useRootSuffix = () => {
    const root = useRoot();
    return root ? `root/${root.id}` : '';
}
