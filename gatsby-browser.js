import React from "react";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from 'styled-components';
import Main from "./src/app/components/shared/Main";
import ErrorBoundary from "./src/app/components/shared/ErrorBoundary";
import SiteHeader from "./src/app/components/shared/SiteHeader";
import { ModalContextProvider } from "./src/app/contexts/ModalContext";
import THEME from "./src/app/styles/theme";

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
