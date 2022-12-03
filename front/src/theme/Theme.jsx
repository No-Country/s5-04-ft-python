import { createContext, useContext } from 'react'
import {
    ThemeProvider,
    StyledEngineProvider,
    CssBaseline,
    createTheme,
} from '@mui/material'

export const useThemeContext = () => useContext(ThemeContext)

const ThemeContext = createContext({})

const Theme = ({ children }) => {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#F51D38',
                dark: '#671919',
                light: '#bb5757',
            },
            secondary: {
                main: '#1554F6',
                dark: '#0288D1',
                light: '#29B6F6',
            },
            terciary: {
                main: '#000000',
                dark: '#000000',
                light: '#000000',
            },
        },
        typography: {
            htmlFontSize: 10,
            fontSize: 10,
            fontFamily: ['Inter', 'Sora'].join(','),
        },
    })

    return (
        <StyledEngineProvider injectFirst>
            <ThemeContext.Provider value={{ theme }}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    {children}
                </ThemeProvider>
            </ThemeContext.Provider>
        </StyledEngineProvider>
    )
}

export default Theme
