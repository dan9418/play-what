import React from "react";
import { RecoilRoot } from "recoil";
import Main from "./src/components/_shared/layout/Main";
import SiteFooter from "./src/components/_shared/layout/SiteFooter";
import SiteHeader from "./src/components/_shared/layout/SiteHeader";
import ErrorBoundary from "./src/components/_shared/utils/ErrorBoundary";
import { PagePropsContextProvider } from "./src/contexts/PagePropsContext";
import './src/styles/global.css';
import { ThemeManager } from "./src/styles/ThemeManager";

export const wrapRootElement = ({ element, ...props }) => {
    return (
        <ErrorBoundary>
            <RecoilRoot>
                <ThemeManager>
                    {element}
                </ThemeManager>
            </RecoilRoot>
        </ErrorBoundary>
    )
}

export const wrapPageElement = ({ element, props }) => {
    return (
        <>
            <PagePropsContextProvider value={props}>
                <SiteHeader />
                <Main>
                    {element}
                    <SiteFooter />
                </Main>
            </PagePropsContextProvider>
        </>
    )
}
