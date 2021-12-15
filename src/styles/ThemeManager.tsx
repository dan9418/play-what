import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { ThemeProvider } from 'styled-components';
import { themeState } from "../state/state";

export const useSetTheme = () => {
    const [theme, setTheme] = useRecoilState(themeState);
    return (value, attr, type) => {

        let newValue = {
            [attr]: value
        }
        if (type) {
            newValue = {
                [type]: {
                    ...theme[type],
                    [attr]: value
                }
            }
        }

        console.log('dpb', newValue);

        setTheme({
            ...theme,
            ...newValue
        });
    }
}

export const ThemeManager: React.FC = ({ children }) => {
    const theme = useRecoilValue(themeState);

    console.log('dpb', theme);

    useEffect(() => {
        document.documentElement.style.setProperty('--bg', theme.brand.light);
        document.documentElement.style.setProperty('--fg', theme.brand.dark);
        document.documentElement.style.setProperty('--link', theme.state.interactive);
    }, [theme.brand.light, theme.brand.dark, theme.state.interactive])

    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}
