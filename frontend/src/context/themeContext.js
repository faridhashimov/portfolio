import { createContext, useEffect, useReducer } from 'react'

export const ThemeContext = createContext()

const INITIAL_STATE = {
    darkMode: JSON.parse(localStorage.getItem('mode')) || false,
}

const ThemeReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE':
            return {
                darkMode: !state.darkMode,
            }
        default:
            return state
    }
}

export const ThemeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ThemeReducer, INITIAL_STATE)

    useEffect(() => {
        localStorage.setItem('mode', JSON.stringify(state.darkMode))
    }, [state.darkMode])

    return (
        <ThemeContext.Provider value={{ state, dispatch }}>
            {children}
        </ThemeContext.Provider>
    )
}
