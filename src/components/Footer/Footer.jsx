import './Footer.scss'
import { FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa'
import { useContext } from 'react'
import { ThemeContext } from '../../context/themeContext'

const Footer = () => {
    const StyledLink = ({ link, children }) => {
        const theme = useContext(ThemeContext)
        const darkMode = theme.state.darkMode

        return (
            <a href={link} target="_blank" rel="noreferrer">
                {children}
            </a>
        )
    }
    return (
        <div className="footer">
            <div className="footer-container">
                <ul className="footer-container__social">
                    <li>
                        <StyledLink link={'https://twitter.com'}>
                            <FaTwitter color="#1DA1F2" />
                        </StyledLink>
                    </li>
                    <li>
                        <StyledLink link={'https://github.com/faridhashimov'}>
                            <FaGithub color="#171515" />
                        </StyledLink>
                    </li>
                    <li>
                        <StyledLink link={'https://youtube.com'}>
                            <FaYoutube color="#FF0000" />
                        </StyledLink>
                    </li>
                </ul>
                <div className="footer-container__copyright">
                    Designed & Built by Farid Hashimov 2022
                </div>
            </div>
        </div>
    )
}

export default Footer
