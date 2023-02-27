import React from "react";
import { RecoilRoot } from "recoil";
import Main from "./src/app/components/shared/layout/Main";
import SiteFooter from "./src/app/components/shared/layout/SiteFooter";
import SiteHeader from "./src/app/components/shared/layout/SiteHeader";
import ErrorBoundary from "./src/app/components/shared/utils/ErrorBoundary";
import { PagePropsContextProvider } from "./src/app/components/shared/utils/PagePropsContext";
import "./src/app/styles/global.css";
import { ThemeManager } from "./src/app/styles/ThemeManager";

export const wrapRootElement = ({ element, ...props }) => {
  return (
    <ErrorBoundary>
      <RecoilRoot>
        <ThemeManager>{element}</ThemeManager>
      </RecoilRoot>
    </ErrorBoundary>
  );
};

export const wrapPageElement = ({ element, props }) => {
  return (
    <PagePropsContextProvider value={props}>
      <SiteHeader />
      <Main>
        {element}
        <SiteFooter />
      </Main>
    </PagePropsContextProvider>
  );
};
