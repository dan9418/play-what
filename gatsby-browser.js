import React from "react";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from 'styled-components';
import { ModalContextProvider } from "./src/app/contexts/ModalContext";
import THEME from "./src/app/styles/theme";
import Main from "./src/components/_shared/layout/Main";
import SiteHeader from "./src/components/_shared/layout/SiteHeader";
import ErrorBoundary from "./src/components/_shared/utils/ErrorBoundary";

export const wrapRootElement = ({ element }) => {
    return (
        <ErrorBoundary>
            <RecoilRoot>
                <ThemeProvider theme={THEME}>
                    <ModalContextProvider>
                        {element}
                    </ModalContextProvider>
                </ThemeProvider>
            </RecoilRoot>
        </ErrorBoundary>
    )
}


export const wrapPageElement = ({ element, props }) => {
    console.log('ddddpb', props);
    return (
        <>
            <SiteHeader />
            <Main>
                {element}
            </Main>
        </>
    )
}
