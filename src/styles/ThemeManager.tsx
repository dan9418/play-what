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

        setTheme({
            ...theme,
            ...newValue
        });
    }
}

export const ThemeManager: React.FC = ({ children }) => {
    const theme = useRecoilValue(themeState);

    useEffect(() => {
        document.documentElement.style.setProperty('--bg', theme.surface.bg);
        document.documentElement.style.setProperty('--fg', theme.text.primary);
        document.documentElement.style.setProperty('--link', theme.action.interactive);
    }, [theme.surface.bg, theme.text.primary, theme.action.interactive])

    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}
