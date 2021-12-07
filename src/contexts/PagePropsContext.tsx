
import { PageProps } from "gatsby";
import React from "react";

const PagePropsContext = React.createContext<PageProps>(null);

export const PagePropsContextProvider: React.FC<{ value: any }> = ({ children, value }) => {
    console.log('dpb page-props', value);
    return (
        <PagePropsContext.Provider value={value}>
            {children}
        </PagePropsContext.Provider>
    );
};

export const usePageProps = (): PageProps => React.useContext(PagePropsContext);
