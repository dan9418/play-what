import React from "react";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from 'styled-components';
import Main from "./src/app/components/Main";
import ErrorBoundary from "./src/app/components/shared/ErrorBoundary";
import PageNav from "./src/app/components/shared/PageNav";
import SiteHeader from "./src/app/components/shared/SiteHeader";
import { ModalContextProvider } from "./src/app/contexts/ModalContext";
import { RouteContextProvider } from "./src/app/contexts/RouteContext";
import THEME from "./src/app/styles/theme";

export const wrapRootElement = ({ element }) => {
    return (
        <ErrorBoundary>
            <RecoilRoot>
                <ThemeProvider theme={THEME}>
                    <ModalContextProvider>
                        <RouteContextProvider>
                            {element}
                        </RouteContextProvider>
                    </ModalContextProvider>
                </ThemeProvider>
            </RecoilRoot>
        </ErrorBoundary>
    )
}


export const wrapPageElement = ({ element }) => {
    return (
        <>
            <SiteHeader />
            <PageNav />
            <Main>
                {element}
            </Main>
        </>
    )
}
