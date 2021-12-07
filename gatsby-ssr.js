import React from "react";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from 'styled-components';
import Main from "./src/components/_shared/layout/Main";
import SiteHeader from "./src/components/_shared/layout/SiteHeader";
import ErrorBoundary from "./src/components/_shared/utils/ErrorBoundary";
import THEME from "./src/styles/theme";

export const wrapRootElement = ({ element }) => {
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
            <SiteHeader />
            <Main>
                {element}
            </Main>
        </>
    )
}
