import { useContext, useState } from 'react'
import { FaRegMoon } from 'react-icons/fa'
import { FiSun } from 'react-icons/fi'
import { ThemeContext } from '../../context/themeContext'
import './Navbar.scss'

const Navbar = () => {
    const [show, setShow] = useState(true)
    const [scrollPos, setScrollPos] = useState(0)
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode
    const { dispatch } = useContext(ThemeContext)

    const onToggleMode = () => {
        dispatch({ type: 'TOGGLE' })
    }

    const StyledLink = ({ link, children }) => {
        return (
            <a className={darkMode ? 'light' : 'dark'} href={link}>
                {children}
            </a>
        )
    }

    const showy = {
        backdropFilter: scrollPos < -80 && 'blur(8px) saturate(180%)',
        backgroundColor: darkMode
            ? 'rgba(29, 53, 87, 0.75)'
            : 'rgba(255, 245, 238, 0.75)',
    }

    window.onscroll = function (e) {
        handleScroll()
    }

    const handleScroll = () => {
        setScrollPos(document.body.getBoundingClientRect().top)

        setShow(document.body.getBoundingClientRect().top > scrollPos)
    }

    return (
        <div style={showy} className={show ? 'navbar active' : 'navbar hidden'}>
            <div className="navbar-container">
                <a href="/" className="navbar-container__logo">
                    fh
                </a>
                <nav className="navbar-container__list">
                    <StyledLink link={'#about'}>About</StyledLink>
                    <StyledLink link={'#skills'}>Skills</StyledLink>
                    <StyledLink link={'#projects'}>Projects</StyledLink>
                    <StyledLink link={'#contact'}>Contact</StyledLink>
                    <a
                        style={{
                            color: darkMode ? 'white' : '#A8DADC',
                            borderColor: darkMode ? 'white' : '#A8DADC',
                        }}
                        className="resume"
                        href="https://google.ru"
                    >
                        Resume
                    </a>
                </nav>

                <div
                    onClick={onToggleMode}
                    className={
                        darkMode
                            ? 'navbar-container__darkmode'
                            : 'navbar-container__lightmode'
                    }
                >
                    {darkMode ? <FiSun /> : <FaRegMoon />}
                </div>
            </div>
        </div>
    )
}

export default Navbar
