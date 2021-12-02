const React = require("react")
const { RecoilRoot } = require("recoil");

exports.wrapRootElement = ({ element }) => {
    return (
        //<ErrorBoundary>
        <RecoilRoot>
            {/* <ThemeProvider theme={THEME}>
                        <ModalContextProvider>
                            <SiteHeader />
                            <RouteContextProvider> */}
            {element}
            {/* </RouteContextProvider>
                        </ModalContextProvider>
                    </ThemeProvider> */}
        </RecoilRoot>
        //</ErrorBoundary>

    )
}
