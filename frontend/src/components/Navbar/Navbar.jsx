import { useContext, useState, useEffect, useRef } from 'react'
import { FaBars, FaRegMoon } from 'react-icons/fa'
import { GrClose } from 'react-icons/gr'
import { FiSun } from 'react-icons/fi'
import { ThemeContext } from '../../context/themeContext'
import './Navbar.scss'

const Navbar = () => {
    const [show, setShow] = useState(true)
    const [mobileMenu, setMobileMenu] = useState(false)
    const {
        state: { darkMode },
        dispatch,
    } = useContext(ThemeContext)
    const scrollPos = useRef(0)

    const onToggleMode = () => {
        dispatch({ type: 'TOGGLE' })
    }

    const StyledLink = ({ link, children }) => (
        <a className={darkMode ? 'light' : 'dark'} href={link}>
            {children}
        </a>
    )

    const onMobileMenuOpenClick = (opened) => {
        setMobileMenu(opened)
        document.body.style.overflow = opened ? 'hidden' : 'auto'
    }

    const handleScroll = () => {
        const currentScrollPos = document.body.getBoundingClientRect().top
        setShow(currentScrollPos > scrollPos.current)
        scrollPos.current = currentScrollPos
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const showy = {
        backdropFilter:
            scrollPos.current < -80 ? 'blur(8px) saturate(180%)' : undefined,
        backgroundColor: darkMode
            ? 'rgba(29, 53, 87, 0.75)'
            : 'rgba(255, 245, 238, 0.75)',
    }

    return (
        <div style={showy} className={show ? 'navbar active' : 'navbar hidden'}>
            <div className="navbar-container">
                <a href="/" className="navbar-container__logo">
                    fh
                </a>
                <nav className="navbar-container__list">
                    <StyledLink link="#about">About</StyledLink>
                    <StyledLink link="#skills">Skills</StyledLink>
                    <StyledLink link="#projects">Projects</StyledLink>
                    <StyledLink link="#contact">Contact</StyledLink>
                </nav>
                <div className="toggle-icons">
                    <div
                        onClick={onToggleMode}
                        className={
                            darkMode ? 'toggle-darkmode' : 'toggle-lightmode'
                        }
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
