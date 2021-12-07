import React from "react";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from 'styled-components';
import Main from "./src/components/_shared/layout/Main";
import SiteHeader from "./src/components/_shared/layout/SiteHeader";
import ErrorBoundary from "./src/components/_shared/utils/ErrorBoundary";
import { PagePropsContextProvider } from "./src/contexts/PagePropsContext";
import THEME from "./src/styles/theme";

export const wrapRootElement = ({ element, ...props }) => {
    return (
        <ErrorBoundary>
            <RecoilRoot>
                <ThemeProvider theme={THEME}>
                    {element}
                </ThemeProvider>
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
                </Main>
            </PagePropsContextProvider>
        </>
    )
}
