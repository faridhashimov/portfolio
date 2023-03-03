import { FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa'
import './Footer.scss'

const Footer = () => {
    const StyledLink = ({ link, children }) => {

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
                        <StyledLink link={'https://twitter.com/farid_codes?t=eTTwzxxjX0Vc1tdc-wczpg&s=09'}>
                            <FaTwitter color="#1DA1F2" />
                        </StyledLink>
                    </li>
                    <li>
                        <StyledLink link={'https://github.com/faridhashimov'}>
                            <FaGithub color="#171515" />
                        </StyledLink>
                    </li>
                    <li>
                        <StyledLink link={'https://youtube.com/@faridhashimov1'}>
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
