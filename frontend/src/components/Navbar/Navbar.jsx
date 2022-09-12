import { useContext, useState } from 'react'
import { FaBars, FaRegMoon } from 'react-icons/fa'
import { GrClose } from 'react-icons/gr'
import { FiSun } from 'react-icons/fi'
import { ThemeContext } from '../../context/themeContext'
import './Navbar.scss'

const Navbar = () => {
    const [show, setShow] = useState(true)
    const [scrollPos, setScrollPos] = useState(0)
    const [mobileMenu, setMobileMenu] = useState(false)
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
    const onMobileMenuOpenClick = (opened) => {
        if (opened) {
            setMobileMenu(true)
            document.body.style.overflow = 'hidden'
        } else {
            setMobileMenu(false)
            document.body.style.overflow = 'auto'
        }
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
                        target="_blank"
                        rel="noreferrer"
                        // download
                        href={process.env.PUBLIC_URL + '/Resume.pdf'}
                    >
                        Resume
                    </a>
                </nav>
                <div className="toggle-icons">
                    <div
                        onClick={onToggleMode}
                        className={darkMode ? 'darkmode' : 'lightmode'}
                    >
                        {darkMode ? <FiSun /> : <FaRegMoon />}
                    </div>
                    {!mobileMenu && (
                        <div
                            onClick={() => onMobileMenuOpenClick(true)}
                            className="toggle-icons__openMobile"
                        >
                            <FaBars />
                        </div>
                    )}
                </div>
                {mobileMenu && (
                    <div className="mobile-menu">
                        <div
                            onClick={() => onMobileMenuOpenClick(false)}
                            className="mobile-menu__closeMobile"
                        >
                            <GrClose />
                        </div>
                        <ul className="mobile-menu__list">
                            <li
                                onClick={() => onMobileMenuOpenClick(false)}
                                className="mobile-menu__list_items"
                            >
                                <a href="#about">About</a>
                            </li>
                            <li
                                onClick={() => onMobileMenuOpenClick(false)}
                                className="mobile-menu__list_items"
                            >
                                <a href="#skills">Skills</a>
                            </li>
                            <li
                                onClick={() => onMobileMenuOpenClick(false)}
                                className="mobile-menu__list_items"
                            >
                                <a href="#projects">Projects</a>
                            </li>
                            <li
                                onClick={() => onMobileMenuOpenClick(false)}
                                className="mobile-menu__list_items"
                            >
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar
