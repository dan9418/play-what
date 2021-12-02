import React from "react";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from 'styled-components';
import { ModalContextProvider } from "./src/app/contexts/ModalContext";
import { RouteContextProvider } from "./src/app/contexts/RouteContext";
import THEME from "./src/app/styles/theme";
import ErrorBoundary from "./src/app/components/shared/ErrorBoundary";

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
