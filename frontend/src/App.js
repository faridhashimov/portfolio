import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from './context/themeContext'
import { inject } from '@vercel/analytics'

import { ErrorPage, Home, SingleProject } from './pages'

import './scss/app.scss'

function App() {
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode
    inject()

    return (
        <div
            style={{
                backgroundColor: darkMode ? '#1d3557' : 'seashell',
                color: darkMode ? '#CCD6F6' : '#222',
                WebkitScrollbar: {
                    backgroundColor: darkMode && '#1d3557',
                },
            }}
        >
            <BrowserRouter basename="/">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="project/:id" element={<SingleProject />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
